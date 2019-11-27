const Markdown = require("markdown-it");
const md = new Markdown();

const html = String.raw;

exports.data = {
  permalink: "/tech-for-better/index.html",
  layout: "layouts/base",
};

exports.render = data => {
  const { title, intro, image, apply, faqSection, caseStudies, about } = data;
  return html`
    <h1>${title}</h1>
    <section class="stack4">
      <h2>${intro.title}</h2>
      ${md.render(intro.body)}
    </section>
    <img src="${image}" width="960" height="540" alt="" />

    <section class="stack4">
      <h2>${apply.title}</h2>
      <ol class="grid cycle-colors" style="--min-width: 20rem">
        ${apply.steps.map(Step).join("")}
      </ol>
    </section>

    <section class="stack4">
      <h2>${faqSection.title}</h2>
      <ul class="grid cycle-colors" style="--min-width: 20rem">
        ${faqSection.faqs.map(Step).join("")}
      </ul>
    </section>

    <section class="stack4">
      <h2>${caseStudies.title}</h2>
      <ul class="stack">
        ${caseStudies.apps.map(App).join("")}
      </ul>
    </section>

    <section class="stack4">
      <h2>${about.title}</h2>
      ${md.render(about.body)}
    </section>
  `;
};

function Step({ title, body }) {
  return html`
    <li class="stack">
      <h3>${title}</h3>
      ${md.render(body)}
    </li>
  `;
}

function App({ title, body, url }) {
  return html`
    <li class="stack">
      <h3>${title}</h3>
      ${md.render(body)}
      <a href="${url}">Check it out</a>
    </li>
  `;
}