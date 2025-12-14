---
layout: default
title: Índice de fichas
---

# Fichas técnicas

<ul>
{% for ficha in site.fichas %}
  <li>
    <a href="{{ ficha.url | relative_url }}">
      {{ ficha.title }}
    </a>
  </li>
{% endfor %}
</ul>
