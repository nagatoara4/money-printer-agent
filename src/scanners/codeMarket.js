/**
 * Places to sell GitHub projects / code with low or zero marketing effort
 */
module.exports = {
  async scan() {
    return [
      {
        category: 'Code Marketplace',
        title: 'CodeCudos — sell code with discovery',
        value: '10% fee',
        url: 'https://codecudos.com/',
        note: 'Built for developers. Better discovery than Gumroad for pure code.',
        score: 85
      },
      {
        category: 'Code Marketplace',
        title: 'Zero to Hundred — sell source code / micro-SaaS',
        value: '25% marketplace / 8% direct',
        url: 'https://zerotohundred.ai/',
        note: 'Listing free. Non-exclusive. Good for complete projects.',
        score: 83
      },
      {
        category: 'Code Marketplace',
        title: 'HonorBox — sell via Stripe + private GitHub repo (0% platform fee)',
        value: '0% platform fee',
        url: 'https://github.com/Honorboxx/honorbox',
        note: 'Open source. You keep almost everything. Perfect for boilerplates.',
        score: 90
      },
      {
        category: 'Code Marketplace',
        title: 'unseal.link — sell GitHub boilerplates, keep 95.5%',
        value: '4.5% fee',
        url: 'https://unseal.link/github',
        note: 'No file upload. Works with GitHub releases / Drive / Dropbox.',
        score: 87
      },
      {
        category: 'Code Marketplace',
        title: 'SideProjectors — free listings for side projects',
        value: 'Free listing',
        url: 'https://www.sideprojectors.com/',
        note: 'Community marketplace. Good for complete side projects.',
        score: 72
      },
      {
        category: 'Code Marketplace',
        title: 'Acquire.com — sell bigger projects / micro-SaaS',
        value: 'Marketplace',
        url: 'https://acquire.com/',
        note: 'For projects with some traction or clean codebases.',
        score: 70
      }
    ];
  }
};
