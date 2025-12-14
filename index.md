---
layout: default
title: Curso de programación avanzada
---

# Introducción

Este documento está escrito en **Markdown** y será renderizado como **HTML** usando GitHub Pages.

## Fichas técnicas

<ul>
{% for ficha in site.fichas %}
  <li>
    <a href="{{ ficha.url | relative_url }}">
      {{ ficha.title }}
    </a>
  </li>
{% endfor %}
</ul>
