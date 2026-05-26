const siteUrl = process.env.SITE_URL ?? "https://www.us1pools.com";
const indexNowKey = process.env.INDEXNOW_KEY ?? "a887cf456f9b40fa967b57da4ff7e71f";
const keyLocation = `${siteUrl}/${indexNowKey}.txt`;

const changedPaths = [
  "/",
  "/pools.html",
  "/above-ground.html",
  "/in-ground.html",
  "/hot-tubs.html",
  "/liners.html",
  "/services.html",
  "/videos.html",
  "/gallery.html",
  "/contact.html",
  "/about.html",
  "/faq.html",
  "/calculator.html",
  "/payment.html",
  "/privacy-policy.html",
  "/terms.html",
  "/areas/franklinton.html",
  "/areas/wake-forest.html",
  "/areas/youngsville.html",
  "/areas/louisburg.html",
  "/areas/raleigh.html",
  "/areas/durham.html",
  "/areas/henderson.html",
  "/guides/pool-care.html"
];

const urlList = changedPaths.map((path) => new URL(path, siteUrl).toString());
const host = new URL(siteUrl).host;

console.log(`Submitting ${urlList.length} URLs to IndexNow for host ${host}...`);

const response = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    host,
    key: indexNowKey,
    keyLocation,
    urlList,
  }),
});

const body = await response.text();

if (!response.ok) {
  console.error("IndexNow submission failed");
  console.error("Status:", response.status);
  console.error(body);
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      status: response.status,
      host,
      keyLocation,
      submitted: urlList.length,
      body: body || "OK",
    },
    null,
    2,
  ),
);
