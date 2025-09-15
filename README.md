<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/commoji/main/assets/commoji.png" alt="Icon of Commoji, a Visual Studio Code extension" width="256" height="256">
<h1 align="center"><code>Commoji</code></h1>
</div>

<div align="center">
This file contains the
<br>
<strong><code>v1.1.0</code></strong> • <em><strong>27 Jul 2025</strong></em>
<br>
specification and documentation of <code>Commoji</code>.

<br>

<blockquote>
  🚀 Head to the <a href="https://github.com/igorskyflyer/commoji/tree/main/revisions">Revisions</a> or <a href="https://github.com/igorskyflyer/commoji/releases/">Releases</a> page to browse the other versions.
</blockquote>
</div>

<br>

<div align="center">
  🐉 <code>Commoji</code> is a compact, expressive tagging system that blends meaning and emoji to make your commit history more readable and beautiful. 🏷️
</div>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
  - [Format](#-format)
  - [Tags](#️-tags)
  - [Scope](#-scope)
  - [Verbs](#️-verbs)
  - [Object](#-object)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Support](#-support)
- [Related](#-related)
- [Author](#-author)

---

## 🤖 Features

`Commoji`’s purpose is to transform the way developers communicate intent through commit messages – by blending semantic clarity with visual expressiveness. It's not just a tagging system; it’s a visual grammar for storytelling in code.

---

## 🕵🏼 Usage

### 📝 Format

`Commoji` proposes the following formats when writing commit messages:

- when the scope is known or not global:
`<emoji> <tag>(<scope>): <verb> <object>`  

- when the scope is unknown or global:
`<emoji> <tag>: <verb> <object>`  

Use the **UTF-8** emoji glyph wherever possible.  
If your environment doesn’t render emojis, fall back to the ASCII aliases below.  

All the elements except the `scope` and the `object` should be taken from the tables below. While the `object` is free-form, it should ideally be a concise, semantically clear noun phrase. See additional recommendations for the [`object`](#-object) below.

<br>

### 🏷️ Tags

`Commoji` achieves its goal by defining the following tags, their purpose, emoji and the fallback/alias ASCII sequence:

<div align="center">

|**Emoji**|       **Tag**       |                  **Purpose**                   |       **ASCII Alias**       |
|:-------:|:-------------------:|:----------------------------------------------:|:---------------------------:|
|   🐣    |  **init**           | _Initial commit / setup_                       |`:hatching_chick:`           |
|   ✨    |  **feat**           | _New feature_                                  |`:sparkles:`                 |
|   🐛    |  **fix**            | _Bug fix_                                      |`:bug:`                      |
|   📚    |  **docs**           | _Documentation updates_                        |`:books:`                    |
|   💄    |  **style**          | _Code style or visual tweaks (no logic change)_|`:lipstick:`                 |
|   🔨    |  **refactor**       | _Code refactoring_                             |`:hammer:`                   |
|   ⚡    |  **perf**           | _Performance improvements_                     |`:zap:`                      |
|   ✅    |  **test**           | _Adding/modifying tests_                       |`:white_check_mark:`         |
|   🏭    |  **build**          | _Build system updates_                         |`:factory:`                  |
|   👷🏻    |  **ci**             | _CI configuration changes_                     |`:construction_worker:`      |
|   🚀    |  **deploy**         | _Deployment_                                   |`:rocket:`                   |
|   🔧    |  **chore**          | _Misc tasks and maintenance_                   |`:wrench:`                   |
|   🔬    |  **experiments**    | _Experimental features_                        |`:microscope:`               |
|   ⏪    |  **revert**         | _Reverting changes_                            |`rewind:`                    |
|   🔀    |  **merge**          | _Merge commits_                                |`:twisted_rightwards_arrows:`|
|   📦    |  **deps**           | _Dependency updates_                           |`:package:`                  |
|   ⚙️    |  **config**         | _Configuration changes_                        |`:gear:`                     |
|   🔥    |  **cleanup**        | _Remove dead code_                             |`:fire:`                     |
|   🔐    |  **security**       | _Security patches or enhancements_             |`:closed_lock_with_key:`     |
|   🧠    |  **ux**             | _UX improvements beyond styling_               |`:brain:`                    |
|   ♿    |  **accessibility**  | _Enhancing accessibility_                      |`:wheelchair:`               |
|   🌐    |  **i18n**           | _Internationalization / localization_          |`:globe_with_meridians:`     |

</div>

<div align="center">
  <em>Table 1. <code>Commoji</code>'s tagging system</em>
</div>

<br>
<br>

> [!NOTE]
> Tags should be written in lowercase.

<br>

### 👓 Scope

The scope of a commit narrows its focus to a specific section of your codebase, such as a module, feature, or directory. This enables readers to swiftly determine where the change is applicable without the necessity of reviewing the entire diff.  

When selecting a scope, please follow these guidelines:  
- choose the name of the pertinent module, component, or feature folder (for example, `auth`, `ui`, `api`, `database`),  
- write scopes in lowercase and use hyphens for names that consist of multiple words (for instance, `user-profile`, `error-handler`)  
- avoid using excessively broad or generic scopes (like `core`, `misc`), as they detract from the purpose of scoping.  
- if the change impacts the project as a whole or spans multiple areas, it is recommended to omit the scope altogether.  

<br>
<br>

> [!NOTE]
> Scopes should be written in lowercase.

<br>

### 🛠️ Verbs

`Commoji` also proposes the following imperative verbs to be used when writing commit messages:

<div align="center">

|    **Verb**    |               **Action Purpose**              |
|:--------------:|:---------------------------------------------:|
| **add**        | _Introduce a new element_                     |
| **update**     | _Modify an existing element_                  |
| **remove**     | _Eliminate something_                         |
| **rename**     | _Change a name or label_                      |
| **move**       | _Reposition without modifying content_        |
| **implement**  | _Build out functionality_                     |
| **fix**        | _Resolve a fault or issue_                    |
| **refactor**   | _Improve structure without changing behavior_ |
| **optimize**   | _Improve performance or efficiency_           |
| **test**       | _Add or modify tests_                         |
| **configure**  | _Adjust system or environment settings_       |
| **prepare**    | _Set up for release or deployment_            |
| **release**    | _Publish or ship a version_                   |
| **revert**     | _Undo a previous change_                      |
| **merge**      | _Combine branches or changes_                 |
| **experiment** | _Try out prototype ideas_                     |
| **clean**      | _Purge unused or obsolete elements_           |
| **translate**  | _Add or revise localization_                  |

</div>

<div align="center">
  <em>Table 2. <code>Commoji</code>'s verbs</em>
</div>

<br>
<br>

> [!NOTE]
> Verbs should be written in lowercase. Use the imperative, present tense.

<br>

### 📚 Object

The object in the commit message should be specific enough to convey what changed. Aim for a concise noun phrase that captures intent; use the commit body for details.

<br>

> [!TIP]
> Keep your summary under ~50 characters. If it grows longer, split out details into the body.

<br>

**Guidelines**:
- use a precise noun phrase whenever applicable

> ✅ Good: 📚 docs: add ToC to README

> ❌ Bad: 📚 docs: update README (too generic)

- don’t list every change in the summary
- summarize the primary intent, e.g., “add OAuth section,” not “add OAuth section, fix typo, update link.”
- leverage the commit body for elaboration:

```markdown
📚 docs: add ToC to README

- generated Table of Contents for each heading  
- updated README links to anchor tags  
- fixed minor typos in examples
```

When a change truly spans multiple concerns, choose a higher-level verb:

`📚 docs: overhaul README`, then explain sub-items in the body.

<br>

**🔬 Examples**

<br>

Here are some examples of `object`s when writing commit messages that adhere to `Commoji`'s conventions.

<div align="center">

|                **Summary**                | **Valid** |          **Reason**          |
|:-----------------------------------------:|:---------:|:----------------------------:|
|`📚 docs: add ToC in README`               |     ✅    |   _Specific feature added_   |
|`📚 docs: rename section headings`         |     ✅    |      _Clear noun phrase_     |
|`📚 docs: update installation guide`       |     ✅    |  _Specific docs subsection_  |
|`✨ feat(ui): add dark mode toggle`        |     ✅    |     _Pinpointed feature_     |
|`🐛 fix(auth): fix login null pointer`     |     ✅    |   _Precise bug identifier_   |
|`⚡ perf: optimize startup time`           |     ✅    | _Measurable metric improved_ |
|`📚 docs: update docs`                     |     ❌    |      _Object too broad_      |
|`✨ feat: add mode`                        |     ❌    |      _Ambiguous object_      |
|`🐛 fix: fix bug`                          |     ❌    |       _Generic object_       |
|`⚡ perf: improve performance`             |     ❌    |     _Unspecified metric_     |

</div>

<div align="center">
  <em>Table 3. <code>Commoji</code>'s object examples</em>
</div>

---

## 🗒️ Examples

The following table shows some usage examples that are valid or invalid according to `Commoji`’s formatting guidelines.

<br>

<div align="center">

|               **Commit Message**         | Valid |                           **Why**                           |
|:----------------------------------------:|:-----:|:-----------------------------------------------------------:|
| `📚 docs: update README`                 |  ✅  | _All elements follow Commoji format_                         |
| `✨ feat(auth): implement login flow`    |  ✅  | _Emoji, tag, verb, scope and object aligned_                       |
| `🐛 fix: Fix Login Bug`                  |  ❌  | _Verb is capitalized – should be lowercase_                  |
| `📚 update README`                       |  ❌  | _Tag (`docs`) is missing_                                    |
| `🚀 deploy: deploy to prod`              |  ❌  | _Verb is not from verb list (`deploy` ≠ `release`)_          |
| `🔨 refactor(auth): refactored auth`     |  ❌  | _Verb refactored is not in imperative, present tense_        |
| `🐛 fix: remove typo`                    |  ✅  | _Uses tag `fix`, verb `remove`, valid object_                |
| `🔥 cleanup: remove unused imports`      |  ✅  | _Grammatically clear and semantically precise_               |
| `✨ feat(ui): implement dark mode`       |  ✅  | _Grammatically clear and semantically precise_               |

</div>

<div align="center">
  <em>Table 4. <code>Commoji</code>-formatted commit messages</em>
</div>

---

## 📝 Changelog

📑 See the full changelog in: [CHANGELOG.md](https://github.com/igorskyflyer/commoji/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the [GPLv3 license](https://github.com/igorskyflyer/commoji/blob/main/LICENSE).

---

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

---

## 🧬 Related

[@igor.dvlpr/scrollend-polyfill](https://www.npmjs.com/package/@igor.dvlpr/scrollend-polyfill)

> _🛴 A performant and light (< 1.5KB) JavaScript polyfill for the scrollend Event. ⛸️_

<br>

[@igor.dvlpr/zing](https://www.npmjs.com/package/@igor.dvlpr/zing)

> _🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments - composite formatting. 🚀_

<br>

[@igor.dvlpr/strip-yaml-front-matter](https://www.npmjs.com/package/@igor.dvlpr/strip-yaml-front-matter)

> _🦓 Strips YAML front matter from a String or a file. 👾_

<br>

[@igor.dvlpr/registry-apppaths](https://www.npmjs.com/package/@igor.dvlpr/registry-apppaths)

> _🪀 A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt. 🗃_

<br>

[@igor.dvlpr/emojilyzer](https://www.npmjs.com/package/@igor.dvlpr/emojilyzer)

> _💬 Emojifies strings, converting textual representations of emojis to graphical ones. 🖌️_

---

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
