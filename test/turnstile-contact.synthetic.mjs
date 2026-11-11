const { default: h } = await import('../api/contact.js');
const mk = (method, body) => ({ method, body, headers: { origin: 'https://www.us1pools.com', host: 'www.us1pools.com', 'x-forwarded-for': '203.0.113.' + Math.floor(Math.random()*200), 'content-type': 'application/json' }, socket: {} });
const res = () => { const r = { code: 0, headers: {}, setHeader(k, v) { this.headers[k] = v; }, status(c) { this.code = c; return this; }, json(j) { this.body = j; return this; }, end() { return this; } }; return r; };
delete process.env.RESEND_API_KEY;
let r = res(); await h(mk('GET'), r); console.log('GET', r.code, JSON.stringify(r.body));
process.env.TURNSTILE_SECRET_KEY = '2x0000000000000000000000000000000AA';
r = res(); await h(mk('POST', { name: 'Test Person', email: 't@example.com', phone: '9195550100', project: 'Hot tub / spa', details: 'synthetic', website: '' }), r); console.log('POST no token', r.code, JSON.stringify(r.body));
r = res(); await h(mk('POST', { name: 'T', email: 't@example.com', website: 'bot' }), r); console.log('honeypot', r.code);
