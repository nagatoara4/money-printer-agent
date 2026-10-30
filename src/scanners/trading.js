/**
 * Trading / No-deposit bonus scanner
 */
module.exports = {
  async scan() {
    return [
      {
        category: 'Trading Bonus',
        title: 'XM — $30 No Deposit Bonus (eligible countries)',
        value: '$30 free credit',
        url: 'https://www.xm.com/',
        note: 'Verify phone. Profits usually withdrawable after volume.',
        score: 78
      },
      {
        category: 'Trading Bonus',
        title: 'Trading.com USA — $100 No Deposit Bonus',
        value: '$100',
        url: 'https://www.trading.com/',
        note: 'US-focused. Check eligibility.',
        score: 82
      },
      {
        category: 'Trading Bonus',
        title: 'YWO — $100 No Deposit Bonus',
        value: '$100',
        url: 'https://www.ywo.com/',
        note: 'Verify account. Read withdrawal conditions carefully.',
        score: 76
      },
      {
        category: 'Trading Bonus',
        title: 'Live list of current Forex no-deposit bonuses',
        value: 'Aggregator',
        url: 'https://forexdailyinfo.com/no-deposit-bonus/',
        note: 'Updated frequently. Always read the fine print.',
        score: 70
      },
      {
        category: 'Trading Bonus',
        title: 'DailyForexBonus comparison board',
        value: 'Aggregator',
        url: 'https://dailyforexbonus.com/',
        note: 'Side-by-side terms. Useful for filtering.',
        score: 65
      }
    ];
  }
};
