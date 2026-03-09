<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/commoji/main/assets/commoji.png" alt="Icon of Commoji, an expressive emoji commit tagging system" width="256" height="256">
<h1 align="center"><code>Commoji</code></h1>
</div>

<div align="center">
This file contains the
<br>
<strong><code>v2.0.2</code></strong> • <em><strong>09 Mar 2026</strong></em>
<br>
specification and documentation of <code>Commoji</code>.

<br>

<blockquote>
  🚀 Head to the <a href="https://github.com/igorskyflyer/commoji/tree/main/revisions">Revisions</a> or <a href="https://github.com/igorskyflyer/commoji/releases/">Releases</a> page to browse the other versions.
</blockquote>
</div>

<br>

<div align="center">
  🐉 <code>Commoji</code> is a psychology-based emoji commit convention that optimizes Git history for high-speed scanning and semantic clarity. 🏷️
  <br>
  <br>
  Need a shorter, shareable summary?
  <br>
  <a href="https://github.com/igorskyflyer/commoji/blob/main/RESEARCH.md"><strong>RESEARCH.md – The Science Behind Commoji</strong></a>
</div>

<br>

## Table of Contents

- ✨ [**Features**](#features)
- 🧠 [**The Psychology**](#the-psychology)
- 🤹🏼 [**Usage**](#usage)
  - [**Format**](#format)
  - [**Breaking Changes**](#breaking-changes)
  - [**Tags**](#tags)
  - [**Scope**](#scope)
  - [**Verbs**](#verbs)
  - [**Object**](#object)
  - [**Tooling**](#tooling)
- 🗒️ [**Examples**](#examples)
- 🌐 [**References**](#references)
- 📝 [**Changelog**](#changelog)
- 🪪 [**License**](#license)
- 💖 [**Support**](#support)
- 🧬 [**Related**](#related)
- 👨🏻‍💻 [**Author**](#author)

---

## Features

`Commoji` blends semantic clarity with visual expressiveness in commit messages to make intent easier to convey. It's not just a tagging system; it's a **psychology-based** visual grammar for storytelling in code.

- ✨ **Visual Expressiveness**: Emojis provide instant, colorful cues that make commit histories pop and easier to scan at a glance. Eye-tracking research confirms emojis are detected parafoveally (before direct fixation) and increase skipping rates of nearby text while reducing total reading time.
- 🏷️ **Semantic Orthogonality**: Distinct domain tags and operational verbs ensure every message clearly conveys purpose without tautological ambiguity.
- 📊 **Reduced Cognitive Load**: Fixed format lowers mental effort, allowing quick understanding of changes in logs or diffs. Congruent emojis improve processing fluency and message understanding compared with plain text.
- 🧠 **Intuitive Design**: Draws on psychological principles like pop-out effect and chunking for a more natural reading experience.
- 🚀 **Tooling Compatibility**: Designed to work with parsers, linters, and changelog generators; see the [**Tooling**](#tooling) section for ready-to-use examples.

---

## The Psychology

`Commoji` originated from real-world attempts to make dense commit logs easier to skim quickly. Its design choices – visual anchors, strict domain–operation separation, predictable structure – turned out to align closely with well-documented mechanisms of visual perception and cognitive load reduction. The thinking that originated from earlier patterns used in projects like [**AdVoid**](https://github.com/the-advoid/ad-void), where emoji prefixes proved highly effective for instantly identifying module-specific changes in dense histories, evolved to a scientific-based system that `Commoji` is today.  

Here are the key psychological principles that power the system:

- **Visual Indexing & Attentional Capture** (Treisman & eye-tracking research)  
  Emojis act as high-contrast pre-attentive anchors. Their color and shape differences allow rapid detection during skimming – often via parafoveal preview – guiding attention to relevant commits before full text reading begins. Eye-tracking studies confirm congruent emojis are processed parafoveally (like words), are skipped more often than incongruent ones, and reduce total fixation time on the preceding target word (Barach et al., 2021).

- **Semantic Orthogonality** (Information Theory)  
  Strict noun–verb separation eliminates redundancy. Independent axes maximize information per character and enable near-instant mental model construction. Large-scale analysis of GitHub commits and pull requests shows developers already use emoji prefixes for attention and content organization, leading to measurably faster team responses (Rong et al., 2022).

- **Gestalt Grouping & Chunking**  
  The emoji + tag prefix creates immediate perceptual unity (proximity + similarity), turning each commit into a reliable, bite-sized chunk.

- **Cognitive Load Reduction & Processing Fluency**  
  Predictable prefix + concise object offloads parsing effort. Once learned, reading feels subjectively effortless and fast (familiarity heuristic). Messages with congruent emojis are rated as more understandable and require less cognitive effort than plain text (Daniel & Camp, 2020; Boutet et al., 2021).

- **Dual-layer Signaling**  
  Emoji and matching tag reinforce the same category without overload – increasing clarity in dense, fast-scrolling logs through multimodal (visual + verbal) encoding.

<br>

> [!NOTE]
> Emojis are powerful visual cues, but they may not render for every user (colorblindness, certain terminals, screen readers). The standardized shortcodes (`:sparkles:`, etc.) ensure the spec remains accessible and machine-readable.

In short, `Commoji` doesn't just look nicer, it works *with* your brain instead of against it.

---

## Usage

### Format

`Commoji` relies on a strict **Noun/Action Separation** to eliminate repetition and enforce semantic orthogonality.  
The **tag** identifies the *domain* (the “what”), and the **verb** identifies the *operation* (the “how”).

#### Core Format

- **No scope** (global change or scope unknown):  
  `<emoji> <tag>: <verb> <object>`

- **With scope** (specific module, component, or directory):  
  `<emoji> <tag>(<scope>): <verb> <object>`

#### Spacing & Casing Rules (mandatory)
- Exactly **one space** after the emoji  
- **No space** between `<tag>` and `(` when a scope is present  
- Exactly **one space** after the colon `:`  
- `emoji` and `tag` are taken exactly from the official tables  
- `scope` is always **lowercase** with hyphens (`user-profile`)  
- `verb` is always **lowercase** imperative present tense; preferably chosen from the Verbs table, but other verbs are allowed when needed
- `object` must be lowercase by default. Capitalization is reserved strictly for Proper Nouns, Brands, or Technical Identifiers to preserve semantic accuracy.  

#### Emoji Rendering
Use the actual **UTF-8 emoji character** whenever possible.  
If your environment does not render emojis correctly, use the standardized **shortcodes** shown in the Tags table (e.g. `:sparkles:`, `:bug:`, `:lipstick:`).

The `emoji` and `tag` **must** come from the official tables. The `verb` follows the rules defined in the [**Verbs**](#verbs) section.

> [!TIP]
> This rigid prefix structure is what enables fast visual scanning and future automated tooling.

<br>

### Breaking Changes

To indicate a breaking change (API removal, incompatible API change, removed feature, etc.), place an exclamation mark (`!`) **immediately before the colon**.

#### Syntax

- **No scope**  
  `<emoji> <tag>!: <verb> <object>`

- **With scope**  
  `<emoji> <tag>(<scope>)!: <verb> <object>`

#### Examples (fully compliant with Format rules)

- `🐛 bug!: update login response format`
- `✨ feature(ui)!: remove deprecated dark mode toggle`
- `🔨 logic(auth)!: rename internal token keys`
- `📦 deps(user-profile)!: remove lodash v4`

#### Why the `!` goes before the colon?
Placing the `!` immediately before the colon (after `tag` and optional `scope`) follows established conventions while still keeping the breaking signal in the visual prefix. This ensures instant recognition during scanning and better compatibility with conventional commit parsers.

#### Recommended commit body
Always explain the impact in the body using the conventional uppercase marker:

```markdown
**BREAKING CHANGE**: Legacy OAuth1 tokens are no longer supported.  
Migrate to OAuth2 before v2.0.0.
```

> [!NOTE]
> The ! is optional. Use it only when the change truly breaks existing consumers or contracts in that domain.

<br>

### Tags

`Commoji` defines a fixed set of tags that act as **Nouns** representing the domain or entity being modified.  
Emoji/tag pairs are **immutable**; the tag must always be preceded by its exact corresponding emoji.

<div align="center">

|**Category**            | **Emoji** | **Tag**          | **Domain / Purpose**                                      | **Shortcode**                  |
|:----------------------:|:---------:|:----------------:|:----------------------------------------------------------|:-------------------------------|
| **Core**               |   ✨      | **feature**      | New capabilities or features                              | `:sparkles:`                   |
| **Core**               |   🐛      | **bug**          | Faults, defects, or issues                                | `:bug:`                        |
| **Core**               |   🔨      | **logic**        | Code architecture and internal structure                  | `:hammer:`                     |
| **Core**               |   🔥      | **debt**         | Technical debt and dead code                              | `:fire:`                       |
| **Core**               |   🐣      | **repo**         | Initial setup or repository metadata                      | `:hatching_chick:`             |
| **UI & Experience**    |   💄      | **ui**           | Visual elements, styles, and interface polish             | `:lipstick:`                   |
| **UI & Experience**    |   🧠      | **ux**           | User experience flows, interactions, and logic            | `:brain:`                      |
| **UI & Experience**    |   ♿      | **accessibility**| Accessibility (a11y) requirements                         | `:wheelchair:`                 |
| **Docs & Quality**     |   📚      | **docs**         | Documentation and guides                                  | `:books:`                      |
| **Docs & Quality**     |   ✅      | **spec**         | Tests, assertions, and validations                        | `:white_check_mark:`           |
| **Build & Ops**        |   📦      | **deps**         | Dependencies and packages                                 | `:package:`                    |
| **Build & Ops**        |   🚀      | **env**          | Environments, deployments, and releases                   | `:rocket:`                     |
| **Build & Ops**        |   👷      | **ci**           | Continuous integration workflows                          | `:construction_worker:`        |
| **Build & Ops**        |   🏭      | **build**        | Build system or compiler instructions                     | `:factory:`                    |
| **Build & Ops**        |   ⚙️      | **config**       | System and environment configuration                      | `:gear:`                       |
| **Performance**        |   ⚡      | **metrics**      | Performance, efficiency, and metrics                      | `:zap:`                        |
| **Security**           |   🔐      | **security**     | Vulnerabilities and security hardening                    | `:closed_lock_with_key:`       |
| **Maintenance**        |   🔧      | **chore**        | Miscellaneous maintenance and chores                      | `:wrench:`                     |
| **Maintenance**        |   ⏪      | **history**      | Git history state or reverts                              | `:rewind:`                     |
| **Maintenance**        |   🔀      | **branch**       | Merges and branch integration                             | `:twisted_rightwards_arrows:`  |
| **Maintenance**        |   🌐      | **i18n**         | Localization and internationalization                     | `:globe_with_meridians:`       |
| **Maintenance**        |   🔬      | **experiment**   | Experimental prototypes                                   | `:microscope:`                 |

</div>

<div align="center">
  <em>Table 1. <code>Commoji</code>'s tagging system (Domains)</em>
</div>

<br>

> [!NOTE]
> - Tags must **always** be written in lowercase.
> - Emoji/tag pairs are immutable – never invent or swap them.
> - Note on `chore`: use this tag only for changes that truly don't fit other domains. Frequent `chore` usage reduces semantic clarity – aim to keep it <25–30% of commits by preferring more specific tags when possible.

**Examples**

- ✅ `🐛 bug: fix memory leak in caching layer`
- ✅ `🔥 debt: remove deprecated v1 api controllers`
- ❌ `🚨 fix: memory leak…` – `fix` is not a valid tag
- ❌ `✨ bug: fix memory leak` – emoji/tag mismatch

<br>

### Scope

The scope narrows the commit's focus to a specific module, component, feature, or directory. This lets readers instantly know *where* the change applies without opening the diff.

#### Rules (mandatory)

- Use the exact name of the relevant folder, module, or component (e.g. `auth`, `payment-gateway`, `user-profile`).
- Always **lowercase** with hyphens for multi-word scopes.
- Omit the scope entirely when:
  - the change affects the whole project, or
  - the scope would be identical or semantically duplicate the tag (e.g. `metrics(performance)`, `ui(styles)`).
- Avoid broad/generic scopes such as `core`, `misc`, `utils`, `main` – they defeat the purpose of scoping. Use `chore` tag instead and put details in the object.

#### Examples (fully compliant with Format & orthogonality)

- ✅ `✨ feature(payment-gateway): add Stripe webhook handler`
- ✅ `📚 docs(auth): add table of contents to README`
- ✅ `🔨 logic: refactor token validation`   <!-- global / no useful scope -->
- ❌ `💄 ui(ui): update button styles` – scope duplicates tag
- ❌ `⚡ metrics(performance): optimize startup time` – semantic duplication
- ❌ `🔧 chore(Misc): update utilities` – capitalized + generic

> [!NOTE]
> When in doubt, omit the scope. A clean `tag: verb object` is always preferred over a vague or redundant `(scope)`.

<br>

### Verbs

Verbs represent the Operation (the “how”) applied to the domain tag.  
**To ensure consistency and fast scanning, verbs should be selected from the official table below.** This enforces semantic orthogonality between domain (`tag`) and operation. If absolutely no table verb fits naturally and accurately, select the semantically closest one and explain nuances in the commit body (not the summary line).

<div align="center">

|   **Verb**     |               **Action Purpose**                          |
|:--------------:|:---------------------------------------------------------:|
|**add**         |_Introduce a new element_                                  |
|**update**      |_Modify an existing element_                               |
|**remove**      |_Eliminate something_                                      |
|**rename**      |_Change a name or label_                                   |
|**move**        |_Reposition without modifying content_                     |
|**implement**   |_Build out functionality_                                  |
|**fix**         |_Resolve a fault or issue_                                 |
|**refactor**    |_Improve structure without changing behavior_              |
|**optimize**    |_Improve performance or efficiency_                        |
|**test**        |_Add or modify tests_                                      |
|**configure**   |_Adjust system or environment settings_                    |
|**prepare**     |_Set up for release or deployment_                         |
|**release**     |_Publish or ship a version_                                |
|**revert**      |_Undo a previous change_                                   |
|**integrate**   |_Combine branches or changes_                              |
|**clean**       |_Purge unused or obsolete elements_                        |
|**translate**   |_Add or revise localization_                               |
|**document**    |_Add or improve explanatory documentation_                 |
|**generate**    |_Create generated / derived files or code_                 |
|**bump**        |_Increment or set a specific version (esp. deps/packages)_ |
|**upgrade**     |_Move to a newer major/minor version_                      |
|**migrate**     |_Adapt code/data to new structure/format/system_           |
|**harden**      |_Apply security measures / strengthen against threats_     |

</div>

<div align="center">
  <em>Table 2. <code>Commoji</code>'s verbs (Operations)</em>
</div>

<br>

> [!IMPORTANT]
> Verbs must come from the table above.
>
> When no entry fits perfectly, select the semantically closest verb and clarify nuances in the commit body.

<br>

**Examples (fully compliant)**

- ✅ `🔨 logic(auth): refactor token validation`
- ✅ `📚 docs: document new payment flow`
- ✅ `🔐 security: harden API endpoints against XSS`
- ❌ `🔬 experiment: experiment with caching` – `verb` repeats `tag` (use clearer phrasing)
- ❌ `🔀 branch: merge main` – `verb` repeats `tag` (use clearer phrasing)
- ❌ `🔨 logic(auth): refactored token validation` – wrong tense

> [!TIP]
> When a change truly spans multiple concerns, choose the highest-level verb and explain details in the body.

<br>

> [!TIP]
> **Quick verb cheat-sheet**
>
> - New → `add` / `implement`
> - Change → `update` / `refactor` / `fix`
> - Delete → `remove` / `clean`

<br>

### Object

The object is a concise noun phrase that answers **“what exactly changed?”**.  
It completes the sentence started by the tag + verb while staying short and scannable.

#### Rules (mandatory for consistency)

- Use a **specific noun phrase** (never repeat the tag or verb semantically).
- Keep the entire summary line (emoji through object) under **72** whenever possible; aim for **≤ 65** for best readability in dense logs and small screens.
- The `object` should be lowercase by default to promote uniform, scannable logs. Capitalize only:
  - Proper nouns (names, brands: Stripe, React, Vite)
  - Acronyms and technical terms that are conventionally capitalized (API, XSS, OAuth2, URL, ToC, JSON, HTML)
  - Do not capitalize the first word of the object (avoid sentence-style capitalization) for consistency across the history.
- Never turn the `object` into a full sentence or list – use the commit body for details.

> [!IMPORTANT]
> Avoid semantic repetition of the tag or verb in the object where possible (e.g. avoid bug: fix bug).
>
> Exceptions are allowed for concise, idiomatic patterns – especially dependency updates, version bumps, or technical identifiers – where including the action or version adds clarity without vagueness.
>

**Examples of acceptable mild overlap:**
- 📦 `deps: bump lodash to 4.17.21`
- 📦 `deps: upgrade react-router from 6.4 to 6.26`
- 🏭 `build: pin vite@5.4.0`

#### Examples (fully compliant with all previous rules)

<div align="center">

|                **Summary**                          | **Valid** |                                         **Reason**                                      |
|:---------------------------------------------------:|:---------:|:---------------------------------------------------------------------------------------:|
|`📚 docs(api): add table of contents`                |    ✅    |_Specific noun phrase_                                                                   |
|`🔨 logic(auth): refactor token validation`          |    ✅    |_Precise internal change_                                                                |
|`🐛 bug: fix null pointer in login`                  |    ✅    |_Identifies exact failure point_                                                         |
|`⚡ metrics: add cache layer for startup`            |    ✅    |_Specific improvement, no verb echo_                                                     |
|`📚 docs: update installation guide`                 |    ✅    |_Clear subsection_                                                                       |
|`📚 docs: update docs`                               |    ❌    |_Object too broad / repeats tag_                                                         |
|`✨ feature: add mode`                               |    ❌    |_Ambiguous object_                                                                       |
|`🐛 bug: fix bug`                                    |    ❌    |_Repeats tag_                                                                            |
|`⚡ metrics: optimize performance`                   |    ❌    |_Vague object + minor verb-tag overlap (prefer specific noun; avoid echo where possible)_|

</div>

<div align="center">
  <em>Table 3. <code>Commoji</code>'s object examples</em>
</div>

<br>

> [!TIP]
> When a change has many small parts, pick the single most important noun phrase for the summary and list the rest in the body:

```markdown
📚 docs: add table of contents

- generated ToC for every heading
- updated all internal anchor links
- fixed minor typos in code blocks
```

---

### Tooling

`Commoji` is built first and foremost for **human readers**. Full 100% automated enforcement of every rule (especially semantic orthogonality, verb choice, and object quality) is inherently difficult with today's conventional linters.

#### Current possibilities
Standard tools like `commitlint` can reliably enforce the structural parts of the spec:
- Presence of emoji + valid tag
- Lowercase scope
- Header length
- Breaking-change `!` placement

Deeper rules (verb appropriateness, avoiding semantic repetition in the object, etc.) cannot be perfectly validated automatically.

#### Recommended approach
- Use the minimal `commitlint` config below for basic structural guardrails.
- Rely on the upcoming **official Commoji VS Code Extension** (currently in development) as the primary tool for full guidance, interactive commit creation, real-time validation, and best compliance.

#### Minimal commitlint config (`.commitlintrc.js`)

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'repo', 'feature', 'bug', 'docs', 'ui', 'logic', 'metrics', 'spec',
      'build', 'ci', 'env', 'chore', 'experiment', 'history', 'branch',
      'deps', 'config', 'debt', 'security', 'ux', 'accessibility', 'i18n'
    ]],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [0],                    // disabled – object allows brands, acronyms, proper nouns
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never'],
    'header-max-length': [2, 'always', 72],
    'type-empty': [2, 'never']
  }
};
```

---

## Examples

The table below demonstrates real commit messages that fully comply – or deliberately violate – the complete set of locked `Commoji` rules (Format, Tags, Scope, Verbs, Object, Breaking Changes, and semantic orthogonality).

<div align="center">

|             **Commit Message**                                      | **Valid** |                                       **Why**                             |
|:-------------------------------------------------------------------:|:---------:|:-------------------------------------------------------------------------:|
|`📚 docs(api): add table of contents`                               |    ✅    |_Specific object + valid scope_                                              |
|`🔨 logic(auth): refactor token validation`                         |    ✅    |_Imperative verb, no repetition_                                             |
|`🐛 bug: fix null pointer in login`                                 |    ✅    |_Precise object, no scope needed_                                            |
|`📚 docs: document new payment flow`                                |    ✅    |_Valid table verb + specific object_                                         |
|`🔐 security: harden API endpoints against XSS`                     |    ✅    |_Valid table verb + avoids tag repetition_                                       |
|`✨ feature(payment-gateway): add Stripe webhook handler`           |    ✅    |_Valid scope, specific object_                                               |
|`🔥 debt: remove deprecated v1 controllers`                         |    ✅    |_No verb echo, clean debt usage_                                             |
|`✨ feature(ui)!: remove deprecated dark mode toggle`               |    ✅    |_Breaking change with scope_                                                 |
|`🐛 bug!: update login response format`                             |    ✅    |_Breaking change without scope_                                              |
|`📦 deps(user-profile)!: remove lodash v4`                          |    ✅    |_Breaking change + multi-word scope_                                         |
|`📚 docs: update docs`                                              |    ❌    |_Object repeats tag (violates orthogonality)_                                |
|`⚡ metrics: optimize performance`                                  |    ❌    |_Verb echoes tag + vague object_                                             |
|`🐛 bug: Fix Login Bug`                                             |    ❌    |_Capitalized verb + object repeats domain_                                   |
|`🔨 logic(auth): refactored token validation`                       |    ❌    |_Past tense (must be imperative present)_                                    |
|`💄 ui(ui): update button styles`                                   |    ❌    |_Scope duplicates tag_                                                       |

</div>

<div align="center">
  <em>Table 4. <code>Commoji</code> commit message examples (v2.0.0)</em>
</div>

<br>

> [!TIP]
> Use these examples as quick reference when writing or reviewing. Every valid row above follows **all** locked sections without exception.

---

## References

The psychological foundation of `Commoji` draws from well-established research in visual perception, cognitive psychology, information theory, and multimedia learning.

### Classic Foundational Works
- **Feature Integration Theory & Pop-out Effect**  
  Treisman, A. M., & Gelade, G. (1980). A feature-integration theory of attention. *Cognitive Psychology*, 12(1), 97–136. https://doi.org/10.1016/0010-0285(80)90005-5

- **Gestalt Principles**  
  Wertheimer, M. (1923). Laws of Organization in Perceptual Forms. *Psychologische Forschung*, 4(1), 301–350.  
  Koffka, K. (1935). *Principles of Gestalt Psychology*. Harcourt, Brace.

- **Cognitive Load Theory**  
  Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257–285.  
  Sweller, J., Ayres, P., & Kalyuga, S. (2011). *Cognitive Load Theory*. Springer.

- **Multimedia Learning & Signaling Principle**  
  Mayer, R. E. (2021). *The Cambridge Handbook of Multimedia Learning* (3rd ed.). Cambridge University Press.  
  (See especially chapters on the Signaling Principle and Reducing Extraneous Processing.)

- **Processing Fluency & Familiarity Heuristic**  
  Schwarz, N. (2004). Metacognitive experiences in judgment and decision making. *Journal of Consumer Psychology*, 14(4), 332–348.

- **Chunking & Working Memory**  
  Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. *Psychological Review*, 63(2), 81–97.

> [!NOTE]
> These references informed the consolidation of principles in the Psychology section. For eye-movement and parafoveal preview benefits in reading (supporting fast scanning of emoji-prefixed commits), see Rayner, K. (1998). Eye movements in reading and information processing: 20 years of research. *Psychological Bulletin*, 124(3), 372–422.

### Empirical Studies on Emoji Processing & Software Communication
- **Barach, E., et al.** (2021). Are emojis processed like words?: Eye movements reveal the time course of semantic processing for emojified text. *Psychonomic Bulletin & Review*, 28(3), 983–997. https://doi.org/10.3758/s13423-020-01864-y  
  *(Core evidence for parafoveal preview, skipping rates, and reduced fixation times – directly supports high-speed Git log scanning.)*

- **Daniel, T. A., & Camp, A. L.** (2020). Emojis affect processing fluency on social media. *Psychology of Popular Media*, 9(2), 208–213. https://doi.org/10.1037/ppm0000219  
  *(Shows congruent emojis make messages subjectively easier and faster to understand.)*

- **Boutet, I., LeBlanc, M., et al.** (2021). Emojis influence emotional communication, social attributions, and information processing. *Computers in Human Behavior*, 119, 106722. https://doi.org/10.1016/j.chb.2021.106722  
  *(Faster processing speed and better comprehension with congruent emojis.)*

- **Rong, S., Wang, W., Mannan, U. A., et al.** (2022). An empirical study of emoji use in software development communication. *Information and Software Technology*, 148, 106912. https://doi.org/10.1016/j.infsof.2022.106912  
  *(Large-scale GitHub analysis: emoji prefixes speed up responses and improve organization in commits/PRs – perfect real-world validation for Commoji.)*

---

## Changelog

Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/commoji/blob/main/CHANGELOG.md).

---

## License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/commoji/blob/main/LICENSE).

---

## Support

<div align="center">
  Engineering and documenting open-source projects involves a significant investment of time.
  <br><br>
  If this project or its implementation has provided value, support is greatly appreciated.
  <br><br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br><br>
  <em>Thank you for supporting these efforts!</em> 🙏😊
</div>

---

## Related

[@igorskyflyer/scrollend-polyfill](https://www.npmjs.com/package/@igorskyflyer/scrollend-polyfill)

> _🛴 A performant and light (< 1.5KB) JavaScript polyfill for the scrollend Event. ⛸️_

<br>

[@igorskyflyer/zing](https://www.npmjs.com/package/@igorskyflyer/zing)

> _🐌 Zing is a C# style String formatter for JavaScript that empowers Strings with positional arguments - composite formatting. 🚀_

<br>

[@igorskyflyer/strip-yaml-front-matter](https://www.npmjs.com/package/@igorskyflyer/strip-yaml-front-matter)

> _🦓 Strips YAML front matter from a String or a file. 👾_

<br>

[@igorskyflyer/registry-apppaths](https://www.npmjs.com/package/@igorskyflyer/registry-apppaths)

> _🪀 A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt. 🗃_

<br>

[@igorskyflyer/emojilyzer](https://www.npmjs.com/package/@igorskyflyer/emojilyzer)

> _💬 Emojifies strings, converting textual representations of emojis to graphical ones. 🖌️_

---

## Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
