---
layout: default
title: "Tipos de datos en Python"
author: "Dr. Luis Morales Velazquez"
---

# Tipos de datos en Python
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
El tipo de datos del valor asignado da forma al tipo de dato de la variable
```python
x = "Hello World" 	                          # str 	
x = 20 	                                      # int 	
x = 20.5 	                                    # float 	
x = 1j 	                                      # complex 	
x = ["apple", "banana", "cherry"] 	          # list 	
x = ("apple", "banana", "cherry") 	          # tuple 	
x = range(6) 	                                # range 	
x = {"name": "John", "age": 36} 	            # dict 	
x = {"apple", "banana", "cherry"} 	          # set 	
x = frozenset({"apple", "banana", "cherry"}) 	# frozenset 	
x = True 	                                    # bool 	
x = b"Hello" 	                                # bytes 	
x = bytearray(5) 	                            # bytearray 	
x = memoryview(bytes(5)) 	                    # memoryview 	
x = None 	                                    # NoneType
```

## Cambio de tipo de dato
```python
x = 5
print(type(x))
x = "Programación"
print(type(x))
```
## Asignación forzada de tipo de dato
```python
x = float(20.5)                         # a flotante
x = list(("apple", "banana", "cherry")) # a lista
```
