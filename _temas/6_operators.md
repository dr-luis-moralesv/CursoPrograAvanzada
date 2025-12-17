---
layout: default
title: "Operadores"
author: "Dr. Luis Morales Velazquez"
---

# Operadores

La mayoría de los operadores en Python son compatibles con los operadores en C, conservando su precedencia.

## Operadores aritméticos

Los operadores aritméticos `+`, `-`, `*` y `%` tienen la misma forma que en C.

El operador de división `/` siempre retorna un valor de punto flotante.

El operador de división entera es `//`.

Además, se añade el operador de exponenciación `**`.

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

## Operadores de asignación

El operador de asignación básico es `=` y como en C se  puede combinar con otros operadores para compactar operaciones.

| Operador |	Ejemplo |	Lo mismo que |
|----------|----------|--------------|
| = |	x = 5 |	x = 5 |	
| += |	x += 3 |	x = x + 3 |	
| -= |	x -= 3 |	x = x - 3 |	
| *= |	x *= 3 |	x = x * 3 |	
| /= |	x /= 3 |	x = x / 3 |	
| %= |	x %= 3 |	x = x % 3 |	
| //= |	x //= 3 |	x = x // 3 |	
| **= |	x **= 3 |	x = x ** 3 |
| &= |	x &= 3 |	x = x & 3 |	
| \|= |	x \|= 3 |	x = x \| 3 |	
| ^= |	x ^= 3 |	x = x ^ 3 |	
| >>= |	x >>= 3 |	x = x >> 3 |	
| <<= |	x <<= 3 |	x = x << 3 |	
| := |	print(x := 3) |	x = 3; print(x) |

El operador `:=` sirve para hacer asignaciones dentro de expresiones más largas, se conoce como operador morsa (*walrus operator*).

## Operadores de comparación

Los operadores de comparación: `==`, `!=`, `>`, `<`, `>=` y `<=` siguen las mismas reglas que en C.

## Operadores de identidad

Son operadores para comparar objetos en la memoria; son `is` e `is not`.

El operador `is` comprueba si los dos valores apuntan al mismo objeto, mientras el operador `==` compara el contenido de los objetos.

```python
x = ["apple", "banana"]
y = ["apple", "banana"]
z = x

print(x is z) # True
print(x is y) # False
print(x == y) # True
```

## Operadores de membrecía

Son operadores que buscan objetos dentro de listas o colecciones; son `in` e `not in`.

```python
fruits = ["apple", "banana", "cherry"]

print("banana" in fruits)
```

## Precedencia de operadores

La precedencia indica la prioridad de evaluación del operador en una expresión, la tabla muestra la presedencia de todos los operadores desde la más alta a la más baja.

| Prioridad | Operador | 	Descripción |
|-----------|----------|--------------|
|1 | () |	Paréntesis	|
|2 | ** |	Exponenciación |	
|3 | +x  -x  ~x |	Más unario, menos unario y NOT bitwise 	|
|4 | *  /  //  % |	Multiplicación, división, división entera, and módulo 	|
|5 | +  - |	Suma y resta 	 |
|6 | <<  >> |	Corrimientos 	|
|7 | & |	Bitwise AND	|
|8 | ^ |	Bitwise XOR 	|
|9 | \| |	Bitwise OR 	|
|10 | ==  !=  >  >=  <  <=  is  is not  in  not in  |	Comparaciones, identidad, y membrecía 	|
|11 | not | NOT lógico |
|12 | and |	AND 	|
|13 | or 	| OR |

