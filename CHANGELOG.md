# 📒 Changelog

## of [**Commoji**](https://github.com/igorskyflyer/commoji)

<br>

### v3.0.0 – *18 Mar 2026*

- 📚 **docs!**: release Commoji v3.0.0 spec

**BREAKING CHANGE**: spec rewritten for strict semantic orthogonality: verb and domain vocabulary no longer overlap; shortcodes prohibited in commit subjects; commitlint config now requires parserPreset.

*Renamed*:
- Tags section to Prefixes throughout

*Removed*:
- configure verb (absorbed by add / update)
- document verb (absorbed by add / update)
- verb-tag proximity block (no longer needed)
- shortcode fallback for commit subjects (breaks git aliases)

*Added*:
- Querying section with git aliases
- parserPreset + type-case: [0] to commitlint config
- headerPattern regex with tab-safe [ ] space matching
- Lyons (1977) reference for Semantic Orthogonality
- Prefix domain selection rule (what vs. why)

*Rewritten*:
- 14 verb definitions - eliminated all domain vocabulary echoes
- 7 domain descriptions - removed activity language
- Semantic Orthogonality attribution: Information Theory to Lexical Semantics

[**Compare v2.1.1...v3.0.0**](https://github.com/igorskyflyer/commoji/compare/v2.1.1...v3.0.0)

<br>

### v2.1.1 – *16 Mar 2026*

- 📚 **docs**: reframe format section to use "prefix"
- 📚 **docs**: update spacing & casing rules
- 📚 **docs**: fix scoped examples
- 📚 **docs**: clean up table Markdown

<br>

[**Compare v2.1.0...v2.1.1**](https://github.com/igorskyflyer/commoji/compare/v2.1.0...v2.1.1)

<br>

### v2.1.0 – *10 Mar 2026*

- 📚 **docs**: add Commit Body section with guidelines and example
- 📚 **docs**: update TOC and fixed minor inconsistencies
- 📚 **docs**: improve UX wording, i18n placement, and object examples
- 📚 **docs**: improve issue referencing and breaking change body

<br>

[**Compare v2.0.2...v2.1.0**](https://github.com/igorskyflyer/commoji/compare/v2.0.2...v2.1.0)

<br>

### v2.0.2 – *09 Mar 2026*

- 📚 **docs**: update examples for breaking changes

<br>

[**Compare v2.0.1...v2.0.2**](https://github.com/igorskyflyer/commoji/compare/v2.0.1...v2.0.2)

<br>

### v2.0.1 – *07 Mar 2026*

- ✅ **spec**: tags table now includes a **Category** column for better visual grouping  
- ✅ **spec**: tags inside each category sorted by estimated everyday usefulness (most common first)

<br>

[**Compare v2.0.0...v2.0.1**](https://github.com/igorskyflyer/commoji/compare/v2.0.0...v2.0.1)

<br>

### v2.0.0 - *06 Mar 2026*

- ✨ **feature**: introduce psychology section + full references (eye-tracking, fluency, GitHub studies)
- ✨ **feature**: add breaking changes syntax (`!` before colon)

<br>

- 🐛 **bug**: redesign tags as strict domains/nouns (feat → feature, fix → bug, style → ui, etc.)
- 🐛 **bug**: enforce verbs table more strongly + added new verbs (bump, upgrade, migrate, harden…)
- 🐛 **bug**: tighter object rules (casing, length ≤72, anti-repetition)
- 🐛 **bug**: neutral CI emoji + package namespace update

<br>

- 📚 **docs**: new RESEARCH.md link + refined scope/object/examples tables
- 📚 **docs**: add Tooling section with commitlint config & VS Code extension teaser

<br>

[**Compare v1.1.0...v2.0.0**](https://github.com/igorskyflyer/commoji/compare/v1.1.0...v2.0.0)

<br>

### v1.1.0 - *27 Jul 2025*

- ✨ **feature**: add `scope`
- ✨ **feature**: add scoped format
- ✨ **feature**: add ASCII fallbacks

<br>

- 🐛 **bug**: fix format
- 🐛 **bug**: fix typos

<br>

[**Compare v1.0.0...v1.1.0**](https://github.com/igorskyflyer/commoji/compare/v1.0.0...v1.1.0)

<br>

### v1.0.0 - *25 Jul 2025*

- 🚀 **launch**: initial release 🎉
