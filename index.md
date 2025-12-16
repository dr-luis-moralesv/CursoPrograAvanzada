---
layout: default
title: Curso de programación avanzada
---

# Programación Avanzada para Ingeniería

<p style="text-align: justify;">
El curso de Programación Avanzada para Ingeniería Mecatrónica tiene como propósito desarrollar en el estudiante las competencias técnicas y cognitivas necesarias para diseñar, implementar e integrar soluciones de software aplicadas a sistemas mecatrónicos, considerando requerimientos de desempeño, interacción humano–máquina y comunicación con hardware especializado.
</p>
  
<p style="text-align: justify;">
Desde el enfoque de formación por competencias, el curso busca que el participante aplique conocimientos, habilidades y actitudes para resolver problemas propios del ámbito mecatrónico mediante el uso combinado de lenguajes de programación de alto y bajo nivel. En particular, se promueve el dominio de <b>Python</b> como herramienta para el desarrollo de aplicaciones técnicas, automatización y manejo estructurado de información, así como la creación de interfaces gráficas con <b>PyQt</b>  orientadas a la supervisión, control y visualización de procesos.
</p>

<p style="text-align: justify;">
Al término del curso, el estudiante será capaz de desarrollar soluciones de programación integrales, alineadas a requerimientos técnicos y funcionales, demostrando desempeño competente en el diseño de aplicaciones, la integración software–hardware y la resolución de problemas reales del entorno profesional de la Ingeniería Mecatrónica.
</p>

## Temario del curso

Los temas básicos del curso se encuentran en la siguiente lista.

<ol>
{% for tema in site.temas %}
  <li>
    <a href="{{ tema.url | relative_url }}">
      {{ tema.title }}
    </a>
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
