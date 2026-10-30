# Money Printer Agent 💸

**Your private Telegram agent that hunts free money opportunities every day.**

It scans for:
- Free AI credits & API bonuses
- No-deposit trading bonuses
- Places to sell GitHub projects / code with almost zero marketing
- Startup cloud credits
- Free tools that can be flipped or used to generate value
- Any other low-effort / zero-effort money surface

Then it DMs **only you** with clean, actionable opportunities.

## Why this is rare
Most “money bots” spam public channels or require you to do heavy work.  
This one is personal, quiet, and focused on high-signal free value that compounds.

## Features
- Runs 24/7 on a cheap VPS or Railway / Render
- Private Telegram bot (only you can talk to it)
- Daily / hourly opportunity digests
- Categories: AI Credits · Trading Bonuses · Code Marketplaces · Cloud Credits · Misc Free Value
- One-click “save” and “done” tracking
- Extensible scanners (add new sources in minutes)

## Quick Start

1. Create a bot with [@BotFather](https://t.me/BotFather) → get `BOT_TOKEN`
2. Get your Telegram user ID (talk to @userinfobot)
3. Copy `.env.example` → `.env` and fill the values
4. `npm install && npm start`

That’s it. The agent starts hunting and only messages you.

## Deploy (Railway / Render / VPS)

```bash
git clone https://github.com/nagatoara4/money-printer-agent.git
cd money-printer-agent
cp .env.example .env
# edit .env
npm install
npm start
```

Or connect the repo to Railway / Render and set the env vars in the dashboard.

## Commands (Telegram)

- `/start` — activate
- `/now` — force a fresh scan right now
- `/ai` — only AI credit opportunities
- `/trade` — only trading bonuses
- `/code` — places to sell code / projects
- `/saved` — list opportunities you marked
- `/status` — bot health

## License
MIT — free to use, modify, sell, teach.

Built by ylivo4real 👾
