---
layout: about
title: About
permalink: /
subtitle: Postdoctoral Researcher · Materials Science and Engineering · University of Pennsylvania
profile:
  align: right
  image: ziqing-wang.png
  image_circular: false
  more_info: >
    <p>Philadelphia, Pennsylvania</p>
selected_papers: false
social: true
announcements:
  enabled: false
latest_posts:
  enabled: false
---

{% include wang-assets.liquid %}

I study **electrochemical interfaces for energy storage, conversion, and separations**. My research connects electrolyte structure, charge-transfer kinetics, mass transport, and interfacial reactivity to understand—and control—how electrochemical systems work.

I am a postdoctoral researcher in the Department of Materials Science and Engineering at the **University of Pennsylvania**, working with **Prof. A. Shoji Hall**. I received my Ph.D. in Analytical Chemistry from **The University of Texas at Austin** in 2026, advised by **Prof. C. Buddie Mullins**, and my B.S. in Materials Science and Engineering from **Central South University** in 2020.

My doctoral work developed electrolyte-design strategies for aqueous zinc metal batteries and investigated the kinetics and transport processes governing metal deposition. At Penn, I am extending this interfacial perspective to **CO₂ and nitrate electroreduction** and **electrochemical rare-earth separation**.

<div class="zw-metrics" aria-label="Academic metrics">
  <div><strong>{{ site.data.publications | size }}</strong><span>Publications</span></div>
  <div><strong>{{ site.data.metrics.citations }}</strong><span>Citations</span></div>
  <div><strong>{{ site.data.metrics.h_index }}</strong><span>h-index</span></div>
</div>
<p class="zw-note">Google Scholar snapshot · {{ site.data.metrics.updated }} · <a href="{{ site.data.metrics.scholar_url }}">View current profile</a></p>

## Research at a glance

<div class="zw-research-grid">
  <a class="zw-research" href="{{ '/projects/batteries/' | relative_url }}"><span class="zw-kicker">01 · Energy storage</span><h3>Batteries</h3><p>Electrolyte design, metal deposition, and intrinsic reaction kinetics.</p><span>Explore research →</span></a>
  <a class="zw-research" href="{{ '/projects/electrocatalysis/' | relative_url }}"><span class="zw-kicker">02 · Energy conversion</span><h3>Electrocatalysis</h3><p>Interfacial chemistry and microenvironment control for CO₂ and nitrate reduction.</p><span>Explore research →</span></a>
  <a class="zw-research" href="{{ '/projects/electroseparation/' | relative_url }}"><span class="zw-kicker">03 · Resource recovery</span><h3>Electroseparation</h3><p>Electrochemical control of selective rare-earth separation. An emerging direction.</p><span>Explore research →</span></a>
</div>

## Selected awards

<ul class="zw-awards">
{% assign highlights = site.data.awards | where: 'selected', true %}
{% for award in highlights %}
  <li><span class="zw-year">{{ award.year }}</span><span><strong>{{ award.title }}</strong><br><span class="zw-note">{{ award.organization }}</span></span></li>
{% endfor %}
</ul>

[All awards and recognition →]({{ '/awards/' | relative_url }})

## Selected publications

<div class="zw-publications">
{% assign selected = site.data.publications | where: 'selected', true %}
{% for paper in selected %}
  {% include wang-publication.liquid paper=paper %}
{% endfor %}
</div>

[Search all publications →]({{ '/publications/' | relative_url }})

## Teaching & mentoring

I have taught transport phenomena and introductory chemistry as a teaching assistant, received the **2022 Faraday Teaching Award**, and mentored five graduate and three undergraduate researchers. [Teaching and mentoring →]({{ '/teaching/' | relative_url }})
