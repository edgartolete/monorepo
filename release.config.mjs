/**
 * @type {import('semantic-release').GlobalConfig}
 */

export default {
  branches: ['main'], // or your main branch name
  plugins: [
    '@semantic-release/commit-analyzer', // analyze commit messages for version bump
    '@semantic-release/release-notes-generator', // create release notes
    '@semantic-release/changelog', // update changelog file
    '@semantic-release/npm', // allow to update package.json
    [
      '@semantic-release/git', // allow to create git commit
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    '@semantic-release/github', // allow to push on github
  ],
};
