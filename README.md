<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/commoji/main/assets/commoji.png" alt="Icon of Commoji, an expressive emoji commit tagging system" width="256" height="256">
<h1 align="center"><code>Commoji</code></h1>
</div>

<div align="center">
This file contains the
<br>
<strong><code>v1.2.0</code></strong> • <em><strong>28 Feb 2026</strong></em>
<br>
specification and documentation of <code>Commoji</code>.

<br>

<blockquote>
  🚀 Head to the <a href="https://github.com/igorskyflyer/commoji/tree/main/revisions">Revisions</a> or <a href="https://github.com/igorskyflyer/commoji/releases/">Releases</a> page to browse the other versions.
</blockquote>
</div>

<br>

<div align="center">
  🐉 <code>Commoji</code> – Psychology-based emoji commit convention that makes your git history dramatically more readable, scannable and beautiful. 🏷️
</div>

<br>

## 📃 Table of Contents

- [**Features**](#features)
- [**The Psychology**](#the-psychology)
- [**Usage**](#usage)
  - [**Format**](#format)
  - [**Tags**](#tags)
  - [**Scope**](#scope)
  - [**Verbs**](#verbs)
  - [**Object**](#object)
  - [**Breaking Changes**](#breaking-changes)
- [**Examples**](#examples)
- [**References**](#references)
- [**Changelog**](#changelog)
- [**License**](#license)
- [**Support**](#support)
- [**Related**](#related)
- [**Author**](#author)

---

## Features

`Commoji` blends semantic clarity with visual expressiveness in commit messages to make intent easier to convey. It's not just a tagging system; it's a **psychology-based** visual grammar for storytelling in code.

- ✨ **Visual Expressiveness**: Emojis provide instant, colorful cues that make commit histories pop and easier to scan at a glance.
- 🏷️ **Semantic Clarity**: Structured tags, verbs, and objects ensure every message clearly conveys purpose without ambiguity.
- 📊 **Reduced Cognitive Load**: Fixed format lowers mental effort, allowing quick understanding of changes in logs or diffs.
- 🧠 **Intuitive Design**: Draws on psychological principles like pop-out effect and chunking for a more natural reading experience.
- 🚀 **Tooling Compatibility**: Works seamlessly with parsers, linters, and changelog generators for automated workflows.

---

## The Psychology

`Commoji` wasn't designed in a lab – it grew organically from real-world developer workflows because it simply *felt* better to read and write.  

Here are the key psychological principles that quietly power the system:

- **Visual Psychology (Pictorial Superiority Effect)** – Emojis are processed in as little as `~13 ms`, far quicker than text, creating instant visual anchors for category and intent.

- **Gestalt Principles (Proximity, Similarity, Figure-Ground)** – The `emoji` + `tag` prefix creates visual grouping and unity so the whole message is perceived as one meaningful unit.

- **Cognitive Load Reduction** – Structured `prefix` + concise `object` offloads mental effort – readers decode intent at a glance instead of parsing full sentences.

- **Dual-Coding Theory** – Verbal (`tag`/`verb`/`object`) + `visual` (emoji) channels create stronger, dual-encoded memory traces.

- **Parafoveal Processing & Pre-attentive Pop-out** – The colorful `emoji` at the start is detected in peripheral vision before conscious reading begins, guiding attention instantly.

- **Emotional / Affective Priming** – Emojis subtly set tone and emotional valence (🔥 feels energetic, ✨ feels exciting), making history more engaging.

- **Icon / Symbol Processing Efficiency** – Standardized emojis act like highly-learned symbols (traffic signs), enabling near-automatic recognition after minimal familiarity.

- **Reduced Ambiguity in Computer-Mediated Communication** – In lean git logs, emojis add paralinguistic cues that clarify intent and reduce misinterpretation.

- **Chunking** – Fixed prefix structure breaks messages into predictable, bite-sized perceptual chunks the brain can process efficiently.

- **Pop-out Effect (Treisman's Feature Integration Theory)** – Distinctive emojis pop out immediately among monochrome text, capturing attention in parallel before focused reading.

- **Signaling Principle (Multimedia Learning)** – The emoji explicitly signals the most relevant semantic category right at the start, helping selective attention.

- **Saliency Bias / Attentional Capture** – Bright, high-contrast emojis capture bottom-up attention far more strongly than plain text.

- **Familiarity Heuristic / Processing Fluency** – Once the small set of emojis/tags is learned, reading feels subjectively easier, smoother, and more pleasant.

- **Redundancy Principle (limited version)** – `Emoji` + matching `tag` provide reinforcing (not excessive) cues for the same meaning, strengthening understanding without overload.

In short, `Commoji` doesn't just look nicer. It works *with* your brain instead of against it.

---

## Usage

### Format

`Commoji` proposes the following formats when writing commit messages:

- when the scope is known and specific:
`<emoji> <tag>(<scope>): <verb> <object>`  

- when the scope is unknown or global:
`<emoji> <tag>: <verb> <object>`  

Use the **UTF-8** emoji glyph wherever possible.  
If your environment doesn't render emojis, fall back to the ASCII aliases below.  

All elements except `scope` and `object` must come from the tables below. While the `object` is free-form, it should ideally be a concise, semantically clear noun phrase. See additional recommendations for the [`object`](#object) below.

<br>

### Tags

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
|   🚀    |  **deploy**         | _Deployment to production/staging_                                   |`:rocket:`                   |
|   🔧    |  **chore**          | _Misc tasks and maintenance_                   |`:wrench:`                   |
|   🔬    |  **experiments**    | _Experimental features_                        |`:microscope:`               |
|   ⏪    |  **revert**         | _Reverting changes_                            |`:rewind:`                    |
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

### Scope

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

### Verbs

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

### Object

The object in the commit message should be specific enough to convey what changed. Aim for a concise noun phrase that captures intent; use the commit body for details.

<br>

> [!TIP]
> Keep your summary under ~50 characters. If it grows longer, split out details into the body.

<br>

**Guidelines**:
- use a precise noun phrase whenever applicable

> ✅ Good: 📚 docs: add ToC to README

> ❌ Bad: 📚 docs: update README (too generic)

- don't list every change in the summary
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

**Examples**

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

<br>

### Breaking Changes

To mark a breaking change (API removal, incompatible behavior change, etc.), place an exclamation mark (`!`) modifier **immediately after the tag**:

- Without scope: `<emoji> <tag>!: <verb> <object>`
- With scope: `<emoji> <tag>(<scope>)!: <verb> <object>`  

Examples:
- `✨ feat(ui)!: remove deprecated dark mode toggle`  
- `🐛 fix!: change login response format`  
- `🔨 refactor(auth)!: rename internal token keys`

<br>

**Why after the tag?**  
It keeps the visual prefix clean and consistent: `emoji` + `tag(+scope)` + `!` + `colon`. The `!` acts as a clear modifier on the type of change, making it easy to spot when scanning history.  

**Body recommendation**  
Explain the impact in the commit body:

```markdown
**BREAKING CHANGE**: Legacy OAuth1 tokens are no longer supported. Migrate to OAuth2 before v2.0.
```

---

## Examples

The following table shows some usage examples that are valid or invalid according to `Commoji`’s formatting guidelines.

<br>

<div align="center">

|               **Commit Message**         | Valid |                           **Why**                           |
|:----------------------------------------:|:-----:|:-----------------------------------------------------------:|
| `📚 docs: update README`                 |  ✅  | _All elements follow Commoji format_                         |
| `✨ feat(auth): implement login flow`    |  ✅  | _Emoji, tag, verb, scope and object aligned_                 |
| `🐛 fix: Fix Login Bug`                  |  ❌  | _Verb is capitalized – should be lowercase_                  |
| `📚 update ToC in README`                       |  ❌  | _Tag (`docs`) is missing_                                    |
| `🚀 deploy: deploy to prod`              |  ❌  | _Verb is not from verb list (`deploy` ≠ `release`)_          |
| `🔨 refactor(auth): refactored auth`     |  ❌  | _Verb refactored is not in imperative, present tense_        |
| `🐛 fix: remove typo`                    |  ✅  | _Uses tag `fix`, verb `remove`, valid object_                |
| `✨ feat(ui)!: remove legacy login flow` |  ✅  | _Breaking change marked with `!` after tag + scope_          |
| `🐛 fix!: change error response format`  |  ✅  | _Breaking fix without scope_                                 |
| `🔨 refactor(auth)!: rename config keys` |  ✅  | _Breaking refactor with scope_                               |
| `🔥 cleanup: remove unused imports`      |  ✅  | _Grammatically clear and semantically precise_               |
| `✨ feat(ui): implement dark mode`       |  ✅  | _Grammatically clear and semantically precise_               |

</div>

<div align="center">
  <em>Table 4. <code>Commoji</code>-formatted commit messages</em>
</div>

---

## References

The psychological principles in `Commoji` draw from established research in cognitive, visual, and multimedia psychology. Key sources include:

- **Pictorial Superiority Effect & Image Processing Speed**  
  Potter, M. C., et al. (2014). "Detecting meaning in RSVP at 13 ms per picture." *Attention, Perception, & Psychophysics*, 76(2), 270–279.  
  [https://doi.org/10.3758/s13414-013-0606-2](https://doi.org/10.3758/s13414-013-0606-2)

- **Dual-Coding Theory**  
  Paivio, A. (1971). *Imagery and Verbal Processes*. Holt, Rinehart and Winston.  
  Paivio, A. (1986). *Mental Representations: A Dual Coding Approach*. Oxford University Press.

- **Gestalt Principles**  
  Wertheimer, M. (1923). "Laws of Organization in Perceptual Forms." *Psychologische Forschung*, 4(1), 301–350.  
  Koffka, K. (1935). *Principles of Gestalt Psychology*. Harcourt, Brace.

- **Pop-out Effect & Feature Integration Theory**  
  Treisman, A. M., & Gelade, G. (1980). "A feature-integration theory of attention." *Cognitive Psychology*, 12(1), 97–136.  
  [https://doi.org/10.1016/0010-0285(80)90005-5](https://doi.org/10.1016/0010-0285(80)90005-5)

- **Signaling Principle & Multimedia Learning**  
  Mayer, R. E. (2009). *Multimedia Learning* (2nd ed.). Cambridge University Press.  
  Mayer, R. E. (2021). "Multimedia learning." In *The Cambridge Handbook of Multimedia Learning* (3rd ed.).

- **Emotional/Affective Priming with Emojis**  
  Danesi, M. (2017). *The Semiotics of Emoji: The Rise of Visual Language in the Age of the Internet*. Bloomsbury Academic.  
  Riordan, M. A. (2017). "Emojis as tools for emotion work." *Computers in Human Behavior*, 73, 152–159.

- **Cognitive Load Theory**  
  Sweller, J. (1988). "Cognitive load during problem solving." *Cognitive Science*, 12(2), 257–285.  
  Sweller, J., et al. (2011). "Cognitive architecture and instructional design." *Educational Psychology Review*, 23(3), 343–367.

- **Chunking**  
  Miller, G. A. (1956). "The magical number seven, plus or minus two." *Psychological Review*, 63(2), 81–97.

- **Processing Fluency & Familiarity Heuristic**  
  Schwarz, N. (2004). "Metacognitive experiences in judgment and decision making." *Journal of Consumer Psychology*, 14(4), 332–348.

- **Parafoveal Processing & Pre-attentive Vision**  
  Rayner, K. (1998). "Eye movements in reading and information processing." *Psychological Bulletin*, 124(3), 372–422.

These are the foundational works that most directly support the principles. For a deeper dive, search the authors' names + keywords like "emoji" or "visual attention" in Google Scholar.

---

## Changelog

📑 See the full changelog in: [CHANGELOG.md](https://github.com/igorskyflyer/commoji/blob/main/CHANGELOG.md).

---

## License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/commoji/blob/main/LICENSE).

---

## Support

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

## Related

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

## Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
