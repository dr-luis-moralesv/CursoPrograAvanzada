---
layout: default
title: "Variables y tipos de datos"
author: "Dr. Luis Morales Velazquez"
---

# Variables y tipos de datos en Python
Python usa un modelo de tipos dinámicos, donde las variables se ajustan de forma automática dependiendo del valor asignado. No es necesario declarar el tipo de dato explícitamente.

Se reconocen los siguientes tipos de datos:
- Texto: **str**
- Números: **int**, **float**, **complex**
- Secuencias: **list**, **tuple**, **range**
- Mapeo (diccionarios): **dict**
- Conjuntos: **set**, **frozenset**
- Boleano: **bool**
- Binario: **bytes**, **bytearray**, **memoryview**
- Ninguno: **NoneType**

## Ejemplo de declaración de variables
```python
x = 5
print(type(x))
```

## Asignación de valores

El tipo de datos del valor asignado da forma al tipo de dato de la variable.

```python
x = "Hello World" 	                      # str 	
x = 20 	                                      # int 	
x = 20.5 	                              # float 	
x = 1j 	                                      # complex 	
x = ["apple", "banana", "cherry"] 	      # list 	
x = ("apple", "banana", "cherry") 	      # tuple 	
x = range(6) 	                              # range 	
x = {"name": "John", "age": 36} 	      # dict 	
x = {"apple", "banana", "cherry"} 	      # set 	
x = frozenset({"apple", "banana", "cherry"})  # frozenset 	
x = True 	                              # bool 	
x = b"Hello" 	                              # bytes 	
x = bytearray(5) 	                      # bytearray 	
x = memoryview(bytes(5)) 	              # memoryview 	
x = None 	                              # NoneType
```

## Asignación múltiple

Asignación a variables individuales.
```python
x, y, z = "Orange", "Banana", "Cherry"
```

Asigna el mismo valor a varias variables en una sola línea.
```python
x = y = z = "Orange"
```

Desempacar colecciones tipo 'list' y 'tuple'.

```python
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)
```

## Cambio de tipo de dato

Para cambiar el tipo de dato de una variable en Python solo se requiere volver a asignar dicha variable.

```python
x = 5
print(type(x))
x = "Programación"
print(type(x))
```
## Asignación forzada de tipo de dato

Para establecer un tipo de dato por adelantado a una asignación, se hace mediante *casting* (amoldado).

```python
x = float(20.5)                         # a flotante
x = list(("apple", "banana", "cherry")) # a lista
```

# Videos recomendados

## Declaración de variables

[![Video: Declaracion de variables](https://img.youtube.com/vi/Gf9wLsCJDqc/0.jpg)](https://www.youtube.com/watch?v=Gf9wLsCJDqc&list=PLP9IO4UYNF0UgPfkTBECSKIJGdc_9FYZ9)

## Reglas de nomenclatura para variables

[![Video: Declaracion de variables](https://img.youtube.com/vi/Hsbo6V2BJ3U/0.jpg)](https://www.youtube.com/watch?v=Hsbo6V2BJ3U&list=PLP9IO4UYNF0UgPfkTBECSKIJGdc_9FYZ9)

