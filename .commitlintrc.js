module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.+?\s[\w-]+)(?:\(([^)]+)\))?(!)?:[ ](.*)$/,
      headerCorrespondence: ['type', 'scope', 'breaking', 'subject']
    }
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        '✨ feature',
        '🐛 bug',
        '🔨 logic',
        '🔥 debt',
        '🐣 repo',
        '💄 ui',
        '🧠 ux',
        '🌐 i18n',
        '♿ accessibility',
        '📚 docs',
        '✅ spec',
        '📦 deps',
        '🚀 env',
        '👷 ci',
        '🏭 build',
        '⚙️ config',
        '⚡ metrics',
        '🔐 security',
        '🔧 chore',
        '⏪ history',
        '🔀 branch',
        '🔬 experiment'
      ]
    ],
    'type-case': [0],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never'],
    'header-max-length': [2, 'always', 72],
    'type-empty': [2, 'never']
  }
}
