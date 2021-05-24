module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      staticDistDir: './out',
      url: ['/'],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'non-composited-animations': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
