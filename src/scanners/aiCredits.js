/**
 * AI Credits scanner
 * Static high-signal list + optional live scrape hooks
 * Updated for late 2026 landscape
 */
module.exports = {
  async scan() {
    // Curated high-value free / low-effort AI credit opportunities
    // These are real surfaces that still exist or frequently reappear
    return [
      {
        category: 'AI Credits',
        title: 'Google for Startups Cloud — up to $350k AI credits',
        value: 'Up to $350,000',
        url: 'https://cloud.google.com/startup/ai',
        note: 'AI-first startups. Apply even if early stage.',
        score: 95
      },
      {
        category: 'AI Credits',
        title: 'AWS Activate — up to $200k credits',
        value: 'Up to $200,000',
        url: 'https://aws.amazon.com/activate/',
        note: 'Founders tier starts lower but easy to get.',
        score: 90
      },
      {
        category: 'AI Credits',
        title: 'Cloudflare for Startups — up to $350k',
        value: 'Up to $350,000',
        url: 'https://www.cloudflare.com/forstartups/',
        note: 'Entry tier ~$10k. Fast approval for many.',
        score: 88
      },
      {
        category: 'AI Credits',
        title: 'Exa.ai — $10 free credits + monthly reset',
        value: '$10 + monthly',
        url: 'https://exa.ai',
        note: 'No card required. Search API credits.',
        score: 75
      },
      {
        category: 'AI Credits',
        title: 'Groq free tier (rate-limited but usable)',
        value: 'Free',
        url: 'https://console.groq.com',
        note: 'Fast inference, no card.',
        score: 70
      },
      {
        category: 'AI Credits',
        title: 'Gemini API free tier',
        value: 'Free',
        url: 'https://ai.google.dev/',
        note: 'Still one of the most generous free API tiers.',
        score: 72
      },
      {
        category: 'AI Credits',
        title: 'CreditDrop — live board of 60+ free AI credits',
        value: 'Aggregator',
        url: 'https://creditdrop.cohencool.workers.dev/',
        note: 'Daily verified list. Bookmark and check often.',
        score: 80
      },
      {
        category: 'AI Credits',
        title: 'FreeTierFinder — free AI tools no card',
        value: 'Aggregator',
        url: 'https://freetierfinder.com/',
        note: 'Good for discovering new free tiers.',
        score: 68
      }
    ];
  }
};
