---
layout: default
title: Curso de programación avanzada
subtitle: Facultad de Ingeniería - San Juan del Río, UAQ
---

# Programación Avanzada para Ingeniería

Este documento está escrito en **Markdown** y será renderizado como **HTML** usando GitHub Pages.

## Temario del curso

<ul>
{% for tema in site.temas %}
  <li>
    <a href="{{ tema.url | relative_url }}">
      {{ tema.title }}
    </a>
  </li>
{% endfor %}
</ul>

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
