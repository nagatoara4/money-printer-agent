require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');
const scanners = require('./scanners');
const store = require('./store');

const BOT_TOKEN = process.env.BOT_TOKEN;
const OWNER_ID = process.env.OWNER_ID;

if (!BOT_TOKEN || !OWNER_ID) {
  console.error('Missing BOT_TOKEN or OWNER_ID in .env');
  process.exit(1);
}

const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const ownerId = Number(OWNER_ID);

function isOwner(msg) {
  return msg.from && msg.from.id === ownerId;
}

function send(text, opts = {}) {
  return bot.sendMessage(ownerId, text, { parse_mode: 'HTML', disable_web_page_preview: false, ...opts });
}

// ---------- Commands ----------
bot.onText(/\/start/, (msg) => {
  if (!isOwner(msg)) return;
  send(
    `💰 <b>Money Printer Agent online</b>\n\n` +
    `I only talk to you.\n` +
    `I hunt free AI credits, trading bonuses, code marketplaces and other zero-effort money surfaces.\n\n` +
    `<b>Commands</b>\n` +
    `/now — scan everything right now\n` +
    `/ai — AI credits only\n` +
    `/trade — trading bonuses only\n` +
    `/code — places to sell code\n` +
    `/saved — your saved opportunities\n` +
    `/status — health check`
  );
});

bot.onText(/\/now/, async (msg) => {
  if (!isOwner(msg)) return;
  await send('🔍 Scanning all sources...');
  const results = await scanners.runAll();
  await deliver(results);
});

bot.onText(/\/ai/, async (msg) => {
  if (!isOwner(msg)) return;
  await send('🔍 Scanning AI credits...');
  const results = await scanners.runCategory('ai');
  await deliver(results);
});

bot.onText(/\/trade/, async (msg) => {
  if (!isOwner(msg)) return;
  await send('🔍 Scanning trading bonuses...');
  const results = await scanners.runCategory('trade');
  await deliver(results);
});

bot.onText(/\/code/, async (msg) => {
  if (!isOwner(msg)) return;
  await send('🔍 Scanning code marketplaces...');
  const results = await scanners.runCategory('code');
  await deliver(results);
});

bot.onText(/\/saved/, (msg) => {
  if (!isOwner(msg)) return;
  const saved = store.getSaved();
  if (saved.length === 0) return send('No saved opportunities yet.');
  const text = saved.map((s, i) => `${i + 1}. <b>${s.title}</b>\n${s.url}`).join('\n\n');
  send(`📌 <b>Saved</b>\n\n${text}`);
});

bot.onText(/\/status/, (msg) => {
  if (!isOwner(msg)) return;
  send(`✅ Agent alive\nUptime: ${Math.floor(process.uptime() / 60)} min\nLast scan: ${store.getLastScan() || 'never'}`);
});

// Save button callback
bot.on('callback_query', (query) => {
  if (query.from.id !== ownerId) return;
  const data = query.data;
  if (data.startsWith('save:')) {
    const id = data.replace('save:', '');
    const opp = store.getById(id);
    if (opp) {
      store.save(opp);
      bot.answerCallbackQuery(query.id, { text: 'Saved ✓' });
    }
  }
});

// ---------- Delivery ----------
async function deliver(results) {
  if (!results || results.length === 0) {
    return send('No fresh high-signal opportunities right now. I keep watching.');
  }

  store.setLastScan(new Date().toISOString());

  for (const r of results.slice(0, 12)) {
    const id = store.add(r);
    const text =
      `💸 <b>${r.title}</b>\n` +
      `Category: ${r.category}\n` +
      `${r.value ? `Value: ${r.value}\n` : ''}` +
      `${r.note ? `${r.note}\n` : ''}` +
      `\n🔗 ${r.url}`;

    await send(text, {
      reply_markup: {
        inline_keyboard: [[{ text: '📌 Save', callback_data: `save:${id}` }]]
      }
    });
    await sleep(400);
  }

  send(`✅ Delivered ${Math.min(results.length, 12)} opportunities.`);
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ---------- Scheduler ----------
const hours = process.env.SCAN_INTERVAL_HOURS || 6;
cron.schedule(`0 */${hours} * * *`, async () => {
  console.log('Scheduled scan running...');
  const results = await scanners.runAll();
  await deliver(results);
});

// Startup message
send('💰 Money Printer Agent is live. Only you can talk to me. Type /now to hunt.');
console.log('Money Printer Agent started. Owner:', ownerId);
