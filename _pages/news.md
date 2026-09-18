---
layout: page
title: News
permalink: /news/
description: Updates, papers, talks, awards, and milestones.
nav: true
nav_order: 3
---

{% include wang-assets.liquid %}

<ul class="zw-awards zw-news">
{% for item in site.data.news %}
  <li><span class="zw-year">{{ item.date }}</span><span>{{ item.text }}</span></li>
{% endfor %}
</ul>
