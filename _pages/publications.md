---
layout: page
title: Publications
permalink: /publications/
description: Electrolytes, interfacial kinetics, energy materials, and beyond.
nav: true
nav_order: 1
---

{% include wang-assets.liquid %}

[Google Scholar]({{ site.data.metrics.scholar_url }}) · [Download CV]({{ '/assets/pdf/Ziqing_Wang_CV.pdf' | relative_url }})

Search by title, author, journal, year, or research topic. Topic filters and search can be combined.

<div class="zw-controls" id="publication-controls" hidden>
  <label for="publication-search">Search publications</label>
  <input type="search" id="publication-search" placeholder="Try: high-entropy, kinetics, Mullins, 2024…" autocomplete="off">
  <div class="zw-filters" role="group" aria-label="Filter publications by topic">
    <button type="button" class="zw-tag" data-topic="all" aria-pressed="true">All</button>
    {% for topic in site.data.topics %}
      <button type="button" class="zw-tag zw-{{ topic.id }}" data-topic="{{ topic.id }}" aria-pressed="false">{{ topic.label }}</button>
    {% endfor %}
  </div>
  <p id="publication-count" class="zw-note" role="status" aria-live="polite"></p>
  <button type="button" id="publication-reset" class="zw-reset">Clear search & filters</button>
</div>

<p class="zw-note">† Equal contribution; * corresponding author. Bibliographic details follow the supplied CV; online-publication and issue years may differ.</p>

<div class="zw-publications" id="publication-list">
{% assign papers = site.data.publications | sort: 'year' | reverse %}
{% for paper in papers %}
  {% include wang-publication.liquid paper=paper %}
{% endfor %}
</div>
<p id="publication-empty" hidden>No publications match this combination. Try another keyword or clear the filters.</p>
<noscript>JavaScript is off. All publications are shown below; use your browser’s Find function to search.</noscript>
<script src="{{ '/assets/js/publications.js' | relative_url }}" defer></script>
