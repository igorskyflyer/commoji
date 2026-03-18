<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/commoji/main/assets/commoji.png" alt="Icon of Commoji, an expressive emoji commit tagging system" width="256" height="256">
<h1 align="center"><code>Commoji</code></h1>
</div>

<div align="center">
This file contains the
<br>
<strong><code>v3.0.0</code></strong> • <em><strong>18 Mar 2026</strong></em>
<br>
specification and documentation of <code>Commoji</code>.

<br>

<blockquote>
  🚀 Head to the <a href="https://github.com/igorskyflyer/commoji/tree/main/revisions">Revisions</a> or <a href="https://github.com/igorskyflyer/commoji/releases/">Releases</a> page to browse the other versions.
</blockquote>
</div>

<br>

<div align="center">
  🐉 <code>Commoji</code> is a psychology-based emoji commit convention that reduces cognitive load and turns Git history into a <strong>visually scannable</strong> and <strong>instantly queryable log</strong> with deterministic prefixes powering commands like <code>git bug</code>, <code>git breaking</code>, and <code>git ui</code>. 🏷️
  <br>
  <br>
  <strong>One glance reveals what changed. One alias queries the whole history.</strong>
</div>

<br>

## Table of Contents

- ✨ [**Features**](#features)
- 🧠 [**The Psychology**](#the-psychology)
- 🤹🏼 [**Usage**](#usage)
  - [**Format**](#format)
  - [**Breaking Changes**](#breaking-changes)
  - [**Prefixes**](#prefixes)
  - [**Scope**](#scope)
  - [**Verbs**](#verbs)
  - [**Object**](#object)
  - [**Commit Body**](#commit-body)
  - [**Querying**](#querying)
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
- 🔍 **Queryable History**: Deterministic prefixes enable instant queries like <code>git bug</code>, <code>git breaking</code>, and <code>git ui</code>.
- 🏷️ **Semantic Orthogonality**: Distinct domain prefixes and operational verbs ensure every message clearly conveys purpose without tautological ambiguity.
- 📊 **Reduced Cognitive Load**: Fixed format lowers mental effort, allowing quick understanding of changes in logs or diffs. Congruent emojis improve processing fluency and message understanding compared with plain text.
- 🧠 **Intuitive Design**: Draws on psychological principles like pop-out effect and chunking for a more natural reading experience.
- 🧩 **Structured Decision-Making**: Forces explicit choices along orthogonal axes (`domain` vs `operation`), turning subjective labeling into a low-friction process.
- 🚀 **Tooling Compatibility**: Designed to work with parsers, linters, and changelog generators; see the [**Tooling**](#tooling) section for ready-to-use examples.

---

## The Psychology

`Commoji` originated from real-world attempts to make dense commit logs easier to skim quickly. Its design choices (visual anchors, strict domain:operation separation, predictable structure) align closely with well-documented mechanisms of visual perception and cognitive load reduction. The thinking that originated from earlier patterns used in projects like [**AdVoid**](https://github.com/the-advoid/ad-void), where emoji prefixes proved highly effective for instantly identifying module-specific changes in dense histories, evolved to a science-based system that `Commoji` is today.

Here are the key psychological principles that power the system:

- **Visual Indexing & Attentional Capture** (Treisman & eye-tracking research)  
  Emojis act as high-contrast pre-attentive anchors. Their color and shape differences allow rapid detection during skimming – often via parafoveal preview – guiding attention to relevant commits before full text reading begins. Eye-tracking studies confirm congruent emojis are processed parafoveally (like words), are skipped more often than incongruent ones, and reduce total fixation time on the preceding target word (Barach et al., 2021).

- **Semantic Orthogonality** (Lexical Semantics & Cognitive Science)  
  Strict noun–verb separation eliminates redundancy. Non-overlapping semantic dimensions reduce classification effort and enable near-instant mental model construction - a principle from structural linguistics applied directly to commit grammar (Lyons, J., 1977).

- **Gestalt Grouping & Chunking**
  The emoji + tag creates immediate perceptual unity (proximity + similarity), turning each commit into a reliable, bite-sized chunk.

- **Cognitive Load Reduction & Processing Fluency**  
  Predictable prefix + concise object offloads parsing effort. Once learned, reading feels subjectively effortless and fast (familiarity heuristic). Messages with congruent emojis are rated as more understandable and require less cognitive effort than plain text (Daniel & Camp, 2020; Boutet et al., 2021).

- **Dual-layer Signaling**  
  Emoji and matching tag reinforce the same category without overload – increasing clarity in dense, fast-scrolling logs through multimodal (visual + verbal) encoding.

<br>

> [!NOTE]
> Emojis are powerful visual cues, but they may not render in every terminal
> or screen reader. Configure the terminal and Git client to support UTF-8
> emoji rendering - this is standard in all modern environments. The
> shortcodes in the Prefixes table serve as a human-readable reference for
> identifying emojis and must not be used in commit subjects.

This strict separation turns commit writing into a lightweight, repeatable decision framework rather than an ad-hoc prose exercise. In short, `Commoji` doesn't just look nicer, it works *with* the brain instead of against it.

---

## Usage

### Format

`Commoji` relies on a strict **Noun/Action Separation** to eliminate 
repetition and enforce semantic orthogonality.  
The **prefix** (emoji + tag) identifies the *domain* (what area of the codebase), the **verb** identifies the *operation* (what was done to it), and the **object** identifies *what specifically* was affected.

#### Core Format

- **No scope** (global change or scope unknown):  
  `<prefix>: <verb> <object>`

- **With scope** (specific module, component, or directory):  
  `<prefix>(<scope>): <verb> <object>`

#### Spacing & Casing Rules (mandatory)
- The entire `<prefix>` must be taken **exactly** from the [**Prefixes**](#prefixes) table (e.g. `✨ feature`, `🐛 bug`, `🔨 logic`, etc.)
- No space between the prefix (or the closing parenthesis of a scope) and the colon `:`
- Exactly **one space** after the colon `:`
- `scope` is always **lowercase** with hyphens (e.g. `user-profile`, `payment-gateway`)
- `verb` is always **lowercase** imperative present tense; selected from the [**Verbs**](#verbs) table
- `object` must be lowercase by default. Capitalization is reserved strictly for Proper Nouns, Brands, or Technical Identifiers to preserve semantic accuracy

**Optional**  
- Reference GitHub issues/PRs with `#123` in the object or body (e.g. `fix login crash (#234)` or in body: `Closes #234`). 

#### Prefix Rendering
Commit subjects **must** use the actual **UTF-8 emoji** as shown in the Prefixes table.  
Shortcodes (e.g. `:sparkles:`, `:bug:`, `:lipstick:`) are provided in the table as a human-readable reference only - for looking up or identifying emojis - and must **never** appear in commit subjects. Using shortcodes in commits silently breaks all git aliases.

The `<prefix>` **must** come from the official [**Prefixes**](#prefixes) table. The `verb` follows the rules defined in the [**Verbs**](#verbs) section.

> [!TIP]
> This rigid prefix structure is what enables fast visual scanning and future automated tooling.

<br>

### Breaking Changes

To indicate a breaking change (API removal, incompatible API change, removed feature, etc.), place an exclamation mark (`!`) immediately before the colon.  
For unscoped commits, the `!` attaches directly to the `prefix`.  
If a `scope` is provided, the `!` must immediately follow the closing parenthesis.

#### Syntax

- **No scope**  
  `<prefix>!: <verb> <object>`

- **With scope**  
  `<prefix>(<scope>)!: <verb> <object>`

#### Examples (fully compliant with Format rules)

- `🐛 bug!: update login response format`
- `💄 ui!: remove deprecated dark mode toggle`
- `🔨 logic(auth)!: rename internal token keys`
- `📦 deps(user-profile)!: remove lodash v4`

#### Why the `!` goes before the colon?
Placing the `!` immediately before the colon (after **prefix** and optional `scope`) follows established conventions while still keeping the breaking signal in the visual prefix. This ensures instant recognition during scanning and better compatibility with conventional commit parsers.

#### Recommended commit body
When a change is breaking, it is **strongly recommended** to explain the impact in the body using the conventional format:

```markdown
**BREAKING CHANGE**: legacy OAuth1 tokens are no longer supported.  
Migrate to OAuth2 before v2.0.0.
```

> [!NOTE]
> The ! is optional. Use it only when the change truly breaks existing consumers or contracts in that domain.

<br>

### Prefixes

`Commoji` defines a fixed set of **prefixes** (emoji + tag) that act as **Nouns** representing the domain or entity being modified.
These prefixes are **immutable**; always use the exact combination shown in the Prefix column of the table below.

<div align="center">

|**Prefix**             |**Category**       |**Domain / Purpose**                               |**Shortcode**                |
|:---------------------:|:-----------------:|:--------------------------------------------------|:----------------------------|
|✨ **feature**         |**Core**           |New capabilities or features                       |`:sparkles:`                 |
|🐛 **bug**             |**Core**           |Faults, defects, or issues                         |`:bug:`                      |
|🔨 **logic**           |**Core**           |Code architecture and internal structure           |`:hammer:`                   |
|🔥 **debt**            |**Core**           |Technical debt and dead code                       |`:fire:`                     |
|🐣 **repo**            |**Core**           |Initial setup or repository metadata               |`:hatching_chick:`           |
|💄 **ui**              |**UI & Experience**|Visual elements, styles, and interface polish      |`:lipstick:`                 |
|🧠 **ux**              |**UI & Experience**|User experience flows, interactions, and behavior  |`:brain:`                    |
|🌐 **i18n**            |**UI & Experience**|Locale resources and internationalization support  |`:globe_with_meridians:`     |
|♿ **accessibility**   |**UI & Experience**|Accessibility (a11y) requirements                  |`:wheelchair:`               |
|📚 **docs**            |**Docs & Quality** |Documentation and guides                           |`:books:`                    |
|✅ **spec**            |**Docs & Quality** |Test coverage, assertions, and validation rules    |`:white_check_mark:`         |
|📦 **deps**            |**Build & Ops**    |Dependencies and packages                          |`:package:`                  |
|🚀 **env**             |**Build & Ops**    |Deployment environments and pipeline infrastructure|`:rocket:`                   |
|👷 **ci**              |**Build & Ops**    |Continuous integration workflows                   |`:construction_worker:`      |
|🏭 **build**           |**Build & Ops**    |Build system or compiler instructions              |`:factory:`                  |
|⚙️ **config**          |**Build & Ops**    |System and environment settings                    |`:gear:`                     |
|⚡ **metrics**         |**Performance**    |Performance, efficiency, and metrics               |`:zap:`                      |
|🔐 **security**        |**Security**       |Security vulnerabilities and protective measures   |`:closed_lock_with_key:`     |
|🔧 **chore**           |**Maintenance**    |Miscellaneous maintenance and chores               |`:wrench:`                   |
|⏪ **history**         |**Maintenance**    |Git commit history and its state                   |`:rewind:`                   | 
|🔀 **branch**          |**Maintenance**    |Branch structure and merge points                  |`:twisted_rightwards_arrows:`|
|🔬 **experiment**      |**Maintenance**    |Experimental prototypes                            |`:microscope:`               |

</div>

<div align="center">
  <em>Table 1. <code>Commoji</code>'s prefix system (Domains)</em>
</div>

<br>

> [!IMPORTANT]
> Choose the prefix that matches **what changed**, not **why it was changed**.  
> A cache layer added for performance reasons is still `🔨 logic` - it changes architecture. Use `⚡ metrics` only when the commit touches measurement, profiling, benchmarking, or reporting infrastructure itself.

<br>

> [!NOTE]
> - The entire **prefix** must be written exactly as shown, using the UTF-8 emoji. Shortcodes are for reference only and must not be used in commit subjects.
> - Prefixes are immutable – never invent, swap, or separate the emoji from its tag.  
> - Note on `🔧 chore`: use this prefix only for changes that truly don't fit other domains. Frequent `🔧 chore` usage reduces semantic clarity – aim to keep it &lt;25–30% of commits by preferring more specific prefixes when possible.

**Examples**

- ✅ `🐛 bug: fix memory leak in caching layer`
- ✅ `🔥 debt: remove deprecated v1 API controllers`
- ❌ `🚨 fix: memory leak…` – `🚨 fix` is not a valid prefix from the table
- ❌ `✨ bug: fix memory leak` – wrong prefix (must use the exact combination shown in the Prefix column)

<br>

### Scope

The scope narrows the commit's focus to a specific module, component, feature, or directory. This lets readers instantly know *where* the change applies without opening the diff.

#### Rules (mandatory)

- Use the exact name of the relevant folder, module, or component (e.g. `auth`, `payment-gateway`, `user-profile`).
- Always **lowercase** with hyphens for multi-word scopes.
- Omit the scope entirely when:
  - the change affects the whole project, or
  - the scope would be identical or semantically duplicate the tag in the prefix (e.g. `⚡ metrics(performance)`, `💄 ui(styles)`).
- Avoid broad/generic scopes such as `core`, `misc`, `utils`, `main` – they defeat the purpose of scoping. If no specific scope applies, omit it entirely and keep the correct domain prefix.

#### Examples (fully compliant with Format & orthogonality)

- ✅ `✨ feature(payment-gateway): add Stripe webhook handler`
- ✅ `📚 docs(auth): add table of contents to README`
- ✅ `🔨 logic: refactor token validation`   <!-- global / no useful scope -->
- ❌ `💄 ui(ui): update button styles` – scope duplicates tag
- ❌ `⚡ metrics(performance): optimize startup time` – semantic duplication
- ✅ `🔨 logic: update utility parsers`  – correct domain, scope omitted when too broad
- ❌ `🔧 chore(utils): update utility parsers` – domain replaced by chore to avoid scoping decision

> [!NOTE]
> When in doubt, omit the scope. A clean `<prefix>: <verb> <object>` is always preferred over a vague or redundant `(<scope>)`.

<br>

### Verbs

Verbs represent the operation (the “how”) applied to the domain tag.  
**To ensure consistency and fast scanning, verbs must be selected from the official table below.** This enforces semantic orthogonality between domain (`tag`) and operation.  
If a change feels like it falls between two categories, select the verb representing the **primary intent** and utilize the commit body for technical nuances.

<div align="center">

|**Verb**     |**Action Purpose**                                   |
|:-----------:|:---------------------------------------------------:|
|**add**      |_Introduce a new element_                            |
|**update**   |_Modify an existing element_                         |
|**remove**   |_Eliminate something_                                |
|**rename**   |_Change a name or label_                             |
|**move**     |_Reposition without modifying content_               |
|**implement**|_Build out functionality_                            |
|**fix**      |_Correct something that is not working as expected_  |
|**refactor** |_Reorganize code without changing its output_        |
|**optimize** |_Improve throughput or reduce resource usage_        |
|**test**     |_Verify that code works as intended_                 |
|**prepare**  |_Set up or stage for an upcoming release_            |
|**release**  |_Publish or ship a version_                          |
|**revert**   |_Undo a previous change_                             |
|**integrate**|_Combine separate code streams or systems_           |
|**clean**    |_Purge unused or obsolete elements_                  |
|**translate**|_Convert or adapt content for a target language_     |
|**generate** |_Create generated / derived files or code_           |
|**bump**     |_Increment or set a specific version number_         |
|**upgrade**  |_Move to a newer major/minor version_                |
|**migrate**  |_Move or adapt code/data to a new format or platform_|
|**harden**   |_Strengthen code and systems against threats_        |

</div>

<div align="center">
  <em>Table 2. <code>Commoji</code>'s verbs (Operations)</em>
</div>

<br>

> [!IMPORTANT]
> Verbs must come from the table above.
> When no entry fits perfectly, select the semantically closest verb and clarify nuances in the commit body.

<br>

**Examples (fully compliant)**

- ✅ `👷 ci: add deployment smoke test`
- ✅ `📚 docs: add payment flow guide`
- ✅ `🔐 security: harden API endpoints against XSS`
- ❌ `🔬 experiment: experiment with caching` – `experiment` is not in the [**Verbs**](#verbs) table
- ❌ `🔀 branch: merge main` – `merge` is not in the [**Verbs**](#verbs) table
- ❌ `🔨 logic(auth): refactored token validation` – wrong tense

> [!TIP]
> When a change truly spans multiple concerns, choose the highest-level verb and explain details in the body.

<br>

> [!TIP]
> **Quick verb cheat-sheet**
>
> - New → `add` / `implement` / `generate` _(derived or output files only)_
> - Change → `update` / `refactor` / `fix` / `migrate` _(`migrate` only: move or adapt to a new format or platform)_
> - Delete → `remove` / `clean`

<br>

### Object

The object is a concise noun phrase that identifies **what specifically** was affected by the operation.  
It completes the sentence started by the prefix + verb while staying short and scannable.

#### Rules (mandatory for consistency)

- Use a **specific noun phrase** (never repeat the tag or verb semantically).
- Keep the entire summary line (**prefix** through object) under **72** characters whenever possible; aim for **≤ 65** characters for best readability in dense logs and small screens.
- The `object` must be lowercase by default to promote uniform, scannable logs. Capitalize only:
  - Proper nouns (names, brands: Stripe, React, Vite)
  - Acronyms and technical terms that are conventionally capitalized (API, XSS, OAuth2, URL, ToC, JSON, HTML)
  - Do not capitalize the first word of the object (avoid sentence-style capitalization) for consistency across the history.
- Never turn the `object` into a full sentence or list – use the commit body for details.
- Avoid words already encoded by the verb - `add new X` is redundant since `add` implies new; write `add X` instead.

#### Examples (fully compliant with all previous rules)

<div align="center">

|**Summary**                                |**Valid**|**Reason**                                      |
|:-----------------------------------------:|:-------:|:----------------------------------------------:|
|`📚 docs(api): add table of contents`      |✅       |_Specific noun phrase_                          |
|`🐛 bug: fix null pointer in login`        |✅       |_Identifies exact failure point_                |
|`⚡ metrics: add startup time benchmark`   |✅       |_Adds measurement, squarely in metrics domain_  |
|`📚 docs: update installation guide`       |✅       |_Clear subsection_                              |
|`📚 docs: update docs`                     |❌       |_Object too broad / repeats tag_                |
|`📦 deps: bump lodash to 4.17.21`          |✅       |_Version pinned, no overlap_                    |
|`📦 deps: upgrade zep from 6.1 to 6.3`     |✅       |_Specific version range, clean domain+operation_|
|`✨ feature: add mode`                     |❌       |_Ambiguous object_                              |
|`🐛 bug: fix bug`                          |❌       |_Repeats tag_                                   |
|`⚡ metrics: optimize performance`         |❌       |_Vague object_                                  |

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

<br>

### Commit Body

The commit body is optional but **strongly recommended** when the change needs more context, especially for breaking changes, complex refactors, or when referencing issues.

#### Guidelines
- Leave a blank line after the summary line
- Keep each line under **72 characters**
- Use bullet points (`- `) for multiple changes or explanations
- Common trailers (auto-linked by GitHub and many tools):
  - `Closes #123` / `Fixes #456`
  - `Co-authored-by: Name <email>`

#### Example
```markdown
💄 ui!: remove deprecated dark mode toggle

**BREAKING CHANGE**: the dark mode toggle has been removed due to accessibility issues.
Users should now rely on their system preference.

- removed legacy toggle component
- updated documentation and settings panel

Closes #234
```

---

### Querying

Because `Commoji` prefixes are **fixed, deterministic, and always at the start of the subject line**, history can be queried with high precision using simple `git log --grep` commands - essentially turning the log into a lightweight tagged database.

These queries are highly reliable for single-domain aliases: the emoji + tag combination is unique and non-overlapping, and the `^` anchor ensures subject-line matching for standard prefix queries. The `breaking` alias searches the full commit message and may produce rare false positives if body text incidentally matches the pattern.

#### Recommended Git Aliases

Add the following to the global `~/.gitconfig` (or project `.git/config`):

```bash
[alias]
    # Single-domain queries
    feat     = log --grep="^✨ feature"  --oneline --decorate --color --graph
    bug      = log --grep="^🐛 bug"      --oneline --decorate --color --graph
    ui       = log --grep="^💄 ui"       --oneline --decorate --color --graph
    docs     = log --grep="^📚 docs"     --oneline --decorate --color --graph
    deps     = log --grep="^📦 deps"     --oneline --decorate --color --graph
    security = log --grep="^🔐 security" --oneline --decorate --color --graph
    chore    = log --grep="^🔧 chore"    --oneline --decorate --color --graph

    # Breaking changes only (searches full message incl. body – rare false positives possible)
    breaking = log --grep="^[^:]+!:" --extended-regexp --oneline --decorate --color --graph

    # Scoped variants (more precise, ignores object/body matches)
    feat-scoped = log --grep="^✨ feature(" --oneline --decorate --color --graph
    bug-scoped  = log --grep="^🐛 bug("    --oneline --decorate --color --graph

    # Compound / recent / filtered examples
    recent-bugs = log --grep="^🐛 bug" -n 15 --oneline --decorate --color --graph
    # Same grep caveat as 'breaking' – searches full message, not subject only
    core-changes = log --grep="^(✨ feature|🐛 bug|🔨 logic|🔥 debt)" --extended-regexp --oneline --decorate --color --graph
    breaking-this-week = log --grep="^[^:]+!:" --since="1 week ago" --oneline --decorate --color --graph
```

**Why these work so well**

- `^` anchors to start of line → no false positives from `object` or `body` for single-domain aliases (the `breaking` alias searches the full message - see caveat above)
- Exact `emoji` + `tag` + `space` → no overlap with other `prefixes`
- `--extended-regexp` (-E) allows clean OR patterns when needed
- `--graph --color --decorate` makes output readable and beautiful

<br>

**Pro tip**
Combine with other flags for "SQL-like" power:

```bash
# Bugs by the current user this month
git bug --author="$(git config user.name)" --since="1 month ago"

# UI changes since last release
git log v1.2.0.. --grep="^💄 ui" --oneline --decorate --color --graph
```

These aliases are optional but highly recommended - they unlock the full scanning speed promise of `Commoji`.

---

### Tooling

`Commoji` is built first and foremost for **human readers**. Full 100% automated enforcement of every rule (especially semantic orthogonality, verb choice, and object quality) is inherently difficult with today's conventional linters.

#### Current possibilities
Standard tools like `commitlint` can reliably enforce the structural parts of the spec:
- Presence of valid prefix from the Prefixes table
- Lowercase scope
- Exactly one space after the colon
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
```

---

## Examples

The table below demonstrates real commit messages that fully comply – or deliberately violate – the complete set of locked `Commoji` rules (Format, Prefixes, Scope, Verbs, Object, Breaking Changes, and semantic orthogonality).

<div align="center">

|**Commit Message**                                       |**Valid**|**Why**                                           |
|:-------------------------------------------------------:|:-------:|:------------------------------------------------:|
|`🔨 logic(auth): refactor token validation`              |✅       |_Imperative verb, no repetition_                  |
|`⚙️ config: update Redis connection timeout`             |✅       |_Specific object, correct domain usage_           |
|`📚 docs: add payment flow guide`                        |✅       |_Concise object, unambiguous docs domain_         |
|`🔐 security: harden API endpoints against XSS`          |✅       |_Valid table verb, precise object_                |
|`✨ feature(payment-gateway): add Stripe webhook handler`|✅       |_Valid scope, specific object_                    |
|`⚡ metrics: optimize Redis cache eviction`              |✅       |_Specific object, clean domain+operation_         |
|`🔥 debt: remove deprecated v1 controllers`              |✅       |_Precise object, correct domain usage_            |
|`🐛 bug!: update login response format`                  |✅       |_Breaking change without scope_                   |
|`📦 deps(user-profile)!: remove lodash v4`               |✅       |_Breaking change + multi-word scope_              |
|`📚 docs: update docs`                                   |❌       |_Object repeats tag (violates orthogonality)_     |
|`✨ feature: new payment modal`                          |❌       |_Missing verb — object must be preceded by a verb_|
|`🐛 bug: Fix Login Bug`                                  |❌       |_Capitalized verb + object repeats domain_        |
|`🔨 logic(auth): refactored token validation`            |❌       |_Past tense (must be imperative present)_         |
|`💄 ui(ui): update button styles`                        |❌       |_Scope duplicates tag_                            |

</div>

<div align="center">
  <em>Table 4. <code>Commoji</code> commit message examples</em>
</div>

<br>

> [!TIP]
> Use these examples as quick reference when writing or reviewing. Every valid row above follows **all** locked sections without exception.

---

## References

The psychological foundation of `Commoji` draws from well-established research in visual perception, cognitive psychology, information theory, and multimedia learning.

### Classic Foundational Works
- **Lexical Semantics & Semantic Dimensions**  
  Lyons, J. (1977). *Semantics* (Vol. 1). Cambridge University Press. (Foundational treatment of semantic fields and the orthogonality of lexical dimensions - the basis for non-overlapping domain/operation separation in structured vocabularies.)

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
