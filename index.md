---
layout: default
title: Curso de programación avanzada
---

# Programación Avanzada para Ingeniería

Este documento está escrito en **Markdown** y será renderizado como **HTML** usando GitHub Pages.

## Temario del curso

<ol>
{% for tema in site.temas %}
  <li>
    <a href="{{ tema.url | relative_url }}">
      {{ tema.title }}
    </a>
  </li>
{% endfor %}
</ol>

## Cosas
<ol>
{% assign temas = site.temas | where: "nivel", 1 %}
{% for t in temas %}
  <li>
    <a href="{{ t.url }}">{{ t.title }}</a>

    {% assign temas = site.temas | where: "parent", t.slug %}
    {% if temas.size > 0 %}
      <ul>
      {% for f in temas %}
        <li><a href="{{ f.url }}">{{ f.title }}</a></li>
      {% endfor %}
      </ul>
    {% endif %}

  </li>
{% endfor %}
</ol>

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
