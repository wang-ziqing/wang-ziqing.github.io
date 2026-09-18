---
layout: page
title: Projects
permalink: /projects/
description: A shared interfacial perspective across energy storage, conversion, and separations.
nav: true
nav_order: 2
---

{% include wang-assets.liquid %}

How do electrolyte structure, local reaction environments, and transport determine electrochemical performance? My research approaches this question through three connected directions.

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
  {% assign sorted_projects = site.projects | sort: 'importance' %}
  {% for project in sorted_projects %}
    {% include projects.liquid %}
  {% endfor %}
  </div>
</div>

The detail pages distinguish published work from ongoing research directions. Unpublished experimental specifics are intentionally omitted.
