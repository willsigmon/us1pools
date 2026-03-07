const GLOBAL_RATE_LIMITS = globalThis.__us1poolsRateLimits ??= new Map();

export function setApiHeaders(res) {
  if (typeof res?.setHeader !== "function") return;
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");
}

export function getHeader(req, name) {
  if (!req?.headers) return undefined;
  const headerName = name.toLowerCase();

  if (typeof req.headers.get === "function") {
    return req.headers.get(headerName) ?? undefined;
  }

  return req.headers[headerName] ?? req.headers[name] ?? undefined;
}

export function getClientIp(req) {
  const forwardedFor = getHeader(req, "x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return (
    getHeader(req, "x-real-ip") ||
    req?.socket?.remoteAddress ||
    req?.connection?.remoteAddress ||
    "unknown"
  );
}

export function isAllowedOrigin(req) {
  const origin = getHeader(req, "origin");
  if (!origin) return true;

  try {
    const originUrl = new URL(origin);
    const requestHost =
      getHeader(req, "x-forwarded-host") ||
      getHeader(req, "host");

    if (!requestHost) return true;

    return originUrl.host === requestHost;
  } catch {
    return false;
  }
}

export function normalizeText(value, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value
    .replace(/\0/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function normalizeMultilineText(value, maxLength = 3000) {
  if (typeof value !== "string") return "";
  return value
    .replace(/\0/g, "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, maxLength);
}

export function digitsOnly(value) {
  return String(value ?? "").replace(/\D/g, "");
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function enforceRateLimit(req, res, { namespace, windowMs, maxRequests }) {
  const now = Date.now();
  const key = `${namespace}:${getClientIp(req)}`;
  const existing = GLOBAL_RATE_LIMITS.get(key) ?? [];
  const recent = existing.filter((timestamp) => now - timestamp < windowMs);

  if (recent.length >= maxRequests) {
    const retryAfterSeconds = Math.max(1, Math.ceil((windowMs - (now - recent[0])) / 1000));
    if (typeof res?.setHeader === "function") {
      res.setHeader("Retry-After", String(retryAfterSeconds));
    }
    GLOBAL_RATE_LIMITS.set(key, recent);
    return {
      allowed: false,
      retryAfterSeconds,
    };
  }

  recent.push(now);
  GLOBAL_RATE_LIMITS.set(key, recent);
  return {
    allowed: true,
    remaining: maxRequests - recent.length,
  };
}

export function jsonError(res, status, error) {
  setApiHeaders(res);
  return res.status(status).json({ error });
}
