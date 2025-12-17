---
layout: default
title: "Operadores"
author: "Dr. Luis Morales Velazquez"
---

# Operadores

La mayoría de los operadores en Python son compatibles con los operadores en C, conservando su precedencia.

## Operadores aritméticos

Los operadores aritméticos '+', '-', '*' y '%' tienen la misma forma que en C.

El operador de división '/' siempre retorna un valor en punto flotante.

El operador de división entera es '//'.

Además, se añade el operador de exponenciación '**'.

```python
x = 12
y = 5
print(x / y) # División flotante
print(x // y) # División de enteros
```

## Opearadores bit-a-bit (*bitwise*)

Los operadores bit-a-bit en Python son idénticos a las versiones de C y siguen las mismas reglas excepto el corrimiento a la derecha (>>) que considera la extensión de signo.

| Operador |	Nombre |
|----------|---------|
| &  |	AND | 	 	
| \| |	OR 	|
| ^ |	XOR |	
| ~ |	NOT |
| << |	Corrimiento a la izquierda |
| >> |	Corrimiento a la derecha con signo |

## Operadores binarios

Se definen 3 operadores binarios: `and`, `or` y `not`.

En la evaluación cualquier valor 0 o cadena vacía ("") se interpreta como `false`, en caso contrario, se considera `true`.

```python
x = 5
print(not(x > 3 and x < 10))
```

