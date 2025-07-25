<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/commoji/main/assets/commoji.png" alt="Icon of Commoji, a Visual Studio Code extension" width="256" height="256">
<h1 align="center">Commoji</h1>
</div>

This file contains the latest (**`v1.0.0`**) specification and documentation of `Commoji`.

<br>

> 🚀 Head to the [Releases](https://github.com/igorskyflyer/commoji/releases/) page to read the specifications of all revisions.

<br>

<div align="center">
  🐉 Commoji is a compact, expressive tagging system that blends meaning and emoji to make your commit history more readable and beautiful. 🏷️
</div>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
  - [Format](#-format)
  - [Tags](#️-tags)
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

Commoji’s purpose is to transform the way developers communicate intent through commit messages – by blending semantic clarity with visual expressiveness. It's not just a tagging system; it’s a visual grammar for storytelling in code.

---

## 🕵🏼 Usage

### 📝 Format

Commoji proposes the following format when writing commit messages:

`:emoji: (tag): verb + object`  

All the elements except the `object` should be taken from the tables below. While the `object` is free-form, it should ideally be a concise, semantically clear noun phrase. See additional recommendations for the [`object`](#-object) below.

<br>

### 🏷️ Tags

Commoji achieves its goal by defining the following tags, their purpose and emoji:

<div align="center">

|     **Tag**         |                  **Purpose**                   |          **Emoji**           |
|:-------------------:|:----------------------------------------------:|:----------------------------:|
| 🐣 **init**         | _Initial commit / setup_                       | `:hatching_chick:`           |
| ✨ **feat**         | _New feature_                                  | `:sparkles:`                 |
| 🐛 **fix**          | _Bug fix_                                      | `:bug:`                      |
| 📚 **docs**         | _Documentation updates_                        | `:books:`                    |
| 💄 **style**        | _Code style or visual tweaks (no logic change)_| `:lipstick:`                 |
| 🔨 **refactor**     | _Code refactoring_                             | `:hammer:`                   |
| ⚡ **perf**         | _Performance improvements_                     | `:zap:`                      |
| ✅ **test**         | _Adding/modifying tests_                       | `:white_check_mark:`         |
| 🏭 **build**        | _Build system updates_                         | `:factory:`                  |
| 👷🏻 **ci**           | _CI configuration changes_                     | `:construction_worker:`      |
| 🚀 **deploy**       | _Deployment_                                   | `:rocket:`                   |
| 🔧 **chore**        | _Misc tasks and maintenance_                   | `:wrench:`                   |
| 🔬 **experiments**  | _Experimental features_                        | `:microscope:`               |
| ⏪ **revert**       | _Reverting changes_                            | `:rewind:`                   |
| 🔀 **merge**        | _Merge commits_                                | `:twisted_rightwards_arrows:`|
| 📦 **deps**         | _Dependency updates_                           | `:package:`                  |
| ⚙️ **config**       | _Configuration changes_                        | `:gear:`                     |
| 🔥 **cleanup**      | _Remove dead code_                             | `:fire:`                     |
| 🔐 **security**     | _Security patches or enhancements_             | `:closed_lock_with_key:`     |
| 🧠 **ux**           | _UX improvements beyond styling_               | `:brain:`                    |
| ♿ **accessibility**| _Enhancing accessibility_                      | `:wheelchair:`               |
| 🌐 **i18n**         | _Internationalization / localization_          | `:globe_with_meridians:`     |

</div>

<div align="center">
  <em>Table 1. <strong>Commoji</strong>'s tagging system</em>
</div>

<br>
<br>

> [!NOTE]
> Tags should be written in lowercase.

<br>

### 🛠️ Verbs

Commoji also proposes the following imperative verbs to be used when writing commit messages:

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
  <em>Table 2. <strong>Commoji</strong>'s verbs</em>
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

> ✅ Good: :books: (docs): add ToC to README

> ❌ Bad: :books: (docs): update README (too generic)

- don’t list every change in the summary
- summarize the primary intent, e.g., “add OAuth section,” not “add OAuth section, fix typo, update link.”
- leverage the commit body for elaboration:

```markdown
:books: (docs): add ToC to README

- generated Table of Contents for each heading  
- updated README links to anchor tags  
- fixed minor typos in examples
```

When a change truly spans multiple concerns, choose a higher-level verb:

`:books: (docs): overhaul README`, then explain sub-items in the body.

<br>

**🔬 Examples**

<br>

Here are some examples of `object`s when writing commit messages that adhere to Commoji's conventions.

<div align="center">

|                **Summary**                | **Valid** |          **Reason**          |
|:-----------------------------------------:|:---------:|:----------------------------:|
|    `:books: (docs)`: add ToC in README    |     ✅     |   _Specific feature added_   |
| `:books: (docs)`: rename section headings |     ✅     |      _Clear noun phrase_     |
|`:books: (docs)`: update installation guide|     ✅     |  _Specific docs subsection_  |
| `:sparkles: (feat)`: add dark mode toggle |     ✅     |     _Pinpointed feature_     |
|   `:bug: (fix)`: fix login null pointer   |     ✅     |   _Precise bug identifier_   |
|   `:zap: (perf)`: optimize startup time   |     ✅     | _Measurable metric improved_ |
|       `:books: (docs)`: update docs       |     ❌     |      _Object too broad_      |
|       `:sparkles: (feat)`: add mode       |     ❌     |      _Ambiguous object_      |
|           `:bug: (fix)`: fix bug          |     ❌     |       _Generic object_       |
|    `:zap: (perf)`: improve performance    |     ❌     |     _Unspecified metric_     |

</div>

<div align="center">
  <em>Table 3. <strong>Commoji</strong>'s object examples</em>
</div>

---

## 🗒️ Examples

The following table shows some usage examples that are valid or invalid according to Commoji’s formatting guidelines.

<br>

<div align="center">

|               **Commit Message**         | Valid |                           **Why**                           |
|:----------------------------------------:|:-----:|:-----------------------------------------------------------:|
| `:books: (docs)`: update README          |  ✅  | _All elements follow Commoji format_                         |
| `:sparkles: (feat)`: implement login flow|  ✅  | _Emoji, tag, verb, and object aligned_                       |
| `:bug: (fix)`: Fix Login Bug             |  ❌  | _Verb is capitalized – should be lowercase_                  |
| `:books:` update README                  |  ❌  | _Tag (`docs`) is missing_                                    |
| `:rocket: (deploy)`: deploy to prod      |  ❌  | _Verb is not from verb list (`deploy` ≠ `release`)_          |
| `:hammer: (refactor)`: refactored auth   |  ❌  | _Verb refactored is not in imperative, present tense_        |
| `:bug: (fix)`: remove typo               |  ✅  | _Uses tag `fix`, verb `remove`, valid object_                |
| `:fire: (cleanup)`: remove unused imports|  ✅  | _Grammatically clear and semantically precise_               |
| `:sparkles: (feat)`: implement dark mode |  ✅  | _Grammatically clear and semantically precise_               |

</div>

<div align="center">
  <em>Table 4. <strong>Commoji</strong>-formatted commit messages</em>
</div>

---

## 📝 Changelog

📑 See the full changelog in: [CHANGELOG.md](https://github.com/igorskyflyer/commoji/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/commoji/blob/main/LICENSE.txt).

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

[]()

> __

[]()

> __

[]()

> __

[]()

> __

[]()

> __

---

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
