/* Text and topic filters run locally. No network calls or visitor tracking. */
(() => {
  "use strict";
  const input = document.getElementById("publication-search");
  if (!input) return;
  const controls = document.getElementById("publication-controls");
  const buttons = [...document.querySelectorAll("[data-topic]")];
  const papers = [...document.querySelectorAll("#publication-list .zw-paper")];
  const yearSections = [...document.querySelectorAll("#publication-list .zw-publication-year")];
  const count = document.getElementById("publication-count");
  const empty = document.getElementById("publication-empty");
  const reset = document.getElementById("publication-reset");
  const normalize = (text) =>
    text
      .normalize("NFKD")
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "");
  const index = papers.map((paper) => ({ paper, text: normalize(paper.textContent), tags: paper.dataset.tags.split(" ") }));
  let topic = "all";

  function readLocation() {
    const params = new URLSearchParams(location.search);
    const candidate = params.get("topic");
    topic = buttons.some((button) => button.dataset.topic === candidate) ? candidate : "all";
    input.value = params.get("q") || "";
  }

  function update(writeUrl = true) {
    const terms = normalize(input.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const item of index) {
      const match = (topic === "all" || item.tags.includes(topic)) && terms.every((term) => item.text.includes(term));
      item.paper.hidden = !match;
      if (match) visible += 1;
    }
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.topic === topic)));
    yearSections.forEach((section) => {
      section.hidden = ![...section.querySelectorAll(".zw-paper")].some((paper) => !paper.hidden);
    });
    count.textContent = `${visible} of ${papers.length} publications`;
    empty.hidden = visible !== 0;
    if (writeUrl) {
      const url = new URL(location.href);
      if (topic === "all") url.searchParams.delete("topic");
      else url.searchParams.set("topic", topic);
      if (input.value.trim()) url.searchParams.set("q", input.value.trim());
      else url.searchParams.delete("q");
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  }

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      topic = button.dataset.topic;
      update();
    })
  );
  input.addEventListener("input", () => update());
  reset.addEventListener("click", () => {
    topic = "all";
    input.value = "";
    update();
    input.focus();
  });
  window.addEventListener("popstate", () => {
    readLocation();
    update(false);
  });
  readLocation();
  update(false);
  controls.hidden = false;
})();
