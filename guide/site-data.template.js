/* ==========================================================================
   site-data.template.js  —  the chapter manifest (COPY, then fill in)
   --------------------------------------------------------------------------
   The one course-specific data file. Everything in assets/ is a reusable
   engine. Loaded via a normal <script> tag, so it works on file:// and http.

   To start a new course:
     1. Copy this file to  /site-data.js  (repo root) and fill it in.
     2. (Optional second language) copy to  /site-data-en.js  with translated
        title/summary — keep n / slug / file IDENTICAL across languages.
     3. Each page includes the matching file before the engine scripts:
          default language -> <script src="site-data.js"></script>
          english edition  -> <script src="../site-data-en.js"></script>

   SHAPE
     window.SITE.META     = { title, subtitle }
     window.SITE.CHAPTERS = [ { n, slug, file, title, summary, topics }, … ]
       n       chapter number; MUST equal data-chapter="N" in the chapter HTML
       slug    url-safe id (matches the filename)
       file    path from the language root, e.g. "chapters/01-<slug>.html"
       title   sidebar / landing-card title
       summary one line shown on the landing card
       topics  short chips shown on the landing card
   ========================================================================== */

window.SITE = window.SITE || {};

window.SITE.META = {
  title: "{{COURSE_TITLE}}",       // e.g. "My Course"
  subtitle: "{{COURSE_SUBTITLE}}", // e.g. "From zero to expert"
};

window.SITE.CHAPTERS = [
  {
    n: 1,
    slug: "getting-started",
    file: "chapters/01-getting-started.html",
    title: "Getting Started",
    summary: "One-line summary shown on the landing card.",
    topics: ["Intro", "Setup", "Basics"],
  },
  {
    n: 2,
    slug: "next-topic",
    file: "chapters/02-next-topic.html",
    title: "Next Topic",
    summary: "What this chapter covers, in one sentence.",
    topics: ["Key", "Ideas"],
  },
  // …one object per chapter…
];
