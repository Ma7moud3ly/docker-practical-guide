# Course Guide — build & write

Everything you need to build a course with this system, and to write/translate
its chapters. Topic-agnostic — reuse it for any subject.

Templates live in this folder: [`template.html`](template.html) (a chapter),
[`index.template.html`](index.template.html) (the home page),
[`site-data.template.js`](site-data.template.js) (the chapter manifest).

---

## Quick start

1. Copy `index.template.html` → `/index.html` and fill the placeholders.
2. Copy `template.html` → `/chapters/01-<slug>.html` (one per chapter) and write
   the content.
3. Copy `site-data.template.js` → `/site-data.js` and list your chapters.
4. Open `index.html` in a browser (or serve with `python -m http.server 8000`).
   No build step.

**Engine vs content.** Everything in `assets/` is a reusable engine you keep
as-is. The only files you write are `index.html`, `chapters/*.html`, and
`site-data.js`. The header, sidebar, footer, prev/next nav, table of contents,
reading time, theme, and copy buttons are all provided.

---

## Layout

```
index.html            # landing page
chapters/             # 01-*.html … (one per chapter)
site-data.js          # the manifest (chapter list + course title)
assets/               # engine — don't edit per course
guide/                # these templates + this file
```

---

## The manifest (`site-data.js`)

```js
window.SITE = window.SITE || {};
window.SITE.META = { title: "My Course", subtitle: "A short tagline" };
window.SITE.CHAPTERS = [
  { n: 1, slug: "getting-started",
    file: "chapters/01-getting-started.html",
    title: "Getting Started",
    summary: "One line shown on the landing card.",
    topics: ["Intro", "Setup"] },
];
```

- `n` must equal `data-chapter="N"` in the chapter HTML.
- `slug` / `file` must match the real filename.

---

## Chapter structure (same order every time)

1. Introduction · 2. Objectives · 3. Prerequisites · 4. Theory ·
5. Analogy · 6. Diagram(s) · 7. Example · 8. Hands-on · 9. Lab ·
10. Common mistakes · 11. Best practices · 12. Cheat sheet · 13. Summary
*(the "Next chapter" nav is auto-injected).*

Set `data-chapter="N"` on the `<article>`. Put Q&A, if any, in one final chapter.

---

## Writing rules

- **Short, plain sentences.** One idea per paragraph. Explain → show → practice.
- **Objectives** start with *"By the end of this chapter you'll know how to:"* and
  each bullet begins with a **verb** ("Explain…", "Build…", "Configure…").
- **Prefer** lists, tables, and diagrams over long prose.
- **End each lab** with an **Output** line — what the reader now has.
- **Respect progression** — don't use concepts you haven't introduced.

---

## Terminology & translation

- Keep **technical terms in their canonical form** (usually English). Don't
  translate a term when the literal result is misleading or reads as jargon —
  keep the term, gloss it once on first use if helpful.
- Keep a small **per-course glossary** of "keep as X / never translate as Y" so
  translators stay consistent, and **watch false matches** when find-replacing.
- Prose follows the language (`dir="rtl"` for Arabic/Hebrew), but **code,
  commands, paths, URLs, and inline `code` stay LTR** (handled by CSS).
- Use the target language's punctuation in prose (e.g. Arabic `،` `؟`), never in
  code.

---

## Code & commands

- **Comments in code are always English** (`#`, `//`, `/* */`).
- **One runnable command per line** — a trailing `\` (bash continuation) breaks
  Windows PowerShell. If multi-line is needed, note PowerShell uses backtick `` ` ``.
- Keep snippets short and **test them**.

```html
<figure class="code-block" data-lang="bash" data-title="Terminal">
  <pre><code class="language-bash">your command here</code></pre>
</figure>
```
(the copy button + language label are added automatically.)

---

## Components

| Component | Class |
|---|---|
| Note / Tip / Warning / Important / Exercise | `.callout .callout--note\|tip\|warning\|important\|exercise` |
| Diagram (Mermaid) | `figure.diagram > pre.mermaid` |
| Table | `div.table-wrap > table` |
| Cards | `div.card-grid > div.card` |
| Cheat sheet | `div.cheatsheet > div.table-wrap > table` |
| Summary | `div.summary-box` |
| Q&A | `div.interview` (header + `details`) |

Prefer **Mermaid** over screenshots; keep diagram labels short.

---

## Second language (optional)

- Mirror the edition under `<lang>/` with **identical filenames**
  (`<lang>/index.html`, `<lang>/chapters/NN-<slug>.html`) and add a matching
  `site-data-<lang>.js` at the root.
- Set each page's `<html lang="…" dir="…">`. The engine reads it and switches UI
  strings, reading-time units, and copy labels; the 🌐 toggle links each page to
  its counterpart.
- **A file must exist on both sides** or the toggle 404s — edit both together.

---

## Deploy

Push to GitHub → **Settings → Pages → Deploy from `main` / root**. All links are
relative, so any repo name works. Live at `https://<user>.github.io/<repo>/`.

---

## Checklist

- [ ] All sections present, in order; `data-chapter="N"` matches the manifest.
- [ ] Objectives use the verb-first lead-in.
- [ ] Terms kept canonical; no misleading literal translations.
- [ ] Code comments in English; each command on one line.
- [ ] 2–5 Mermaid diagrams, short labels.
- [ ] Registered in every language's `site-data*.js`; both editions exist.
- [ ] No console errors; dark/light and print look right.
