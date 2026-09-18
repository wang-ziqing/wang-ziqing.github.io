---
layout: page
title: Awards and Recognition
permalink: /awards/
description: Awards, fellowships, scholarships, and academic recognition.
nav: false
---

{% include wang-assets.liquid %}

<ul class="zw-awards">
{% for award in site.data.awards %}
  <li><span class="zw-year">{{ award.year }}</span><span><strong>{{ award.title }}</strong><br><span class="zw-note">{{ award.organization }}</span></span></li>
{% endfor %}
</ul>
