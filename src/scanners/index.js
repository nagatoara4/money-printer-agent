const ai = require('./aiCredits');
const trade = require('./trading');
const code = require('./codeMarket');

module.exports = {
  async runAll() {
    const [a, t, c] = await Promise.all([
      ai.scan().catch(() => []),
      trade.scan().catch(() => []),
      code.scan().catch(() => [])
    ]);
    return [...a, ...t, ...c].sort((x, y) => (y.score || 0) - (x.score || 0));
  },

  async runCategory(cat) {
    if (cat === 'ai') return ai.scan().catch(() => []);
    if (cat === 'trade') return trade.scan().catch(() => []);
    if (cat === 'code') return code.scan().catch(() => []);
    return this.runAll();
  }
};
