---
layout: page
title: News
permalink: /news/
description: Awards, fellowships, and academic recognition.
nav: true
nav_order: 3
---

{% include wang-assets.liquid %}

<ul class="zw-awards">
{% for award in site.data.awards %}
  <li><span class="zw-year">{{ award.year }}</span><span><strong>{{ award.title }}</strong><br><span class="zw-note">{{ award.organization }}</span></span></li>
{% endfor %}
</ul>
