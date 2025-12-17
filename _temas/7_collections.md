---
layout: default
title: "Colecciones"
author: "Dr. Luis Morales Velazquez"
---

# Listas

Las listas son objetos que almacenan valores en orden fijo, los nuevos elementos se añaden al final de la lista.

```python
lista = ["apple", "banana", "cherry"]
print(lista)
```

Las principales características de las listas son:
- Se definen usando los corchetes `[ ]`.
- El primer índice de una lista es el cero (`[0]`).
- Admiten valores duplicados.
- El tipo de dato de los valores en la lista puede ser diferente.
- La longitud de la lista se obtiene con la función `len()`.

Lista de diferentes tipos de datos.

```python
list1 = ["abc", 34, True, 40, "male"]
```

Uso del constructor `list()` para crear una lista.

```python
thislist = list(("apple", "banana", "cherry")) # Note los paréntesis dobles
print(thislist)
```

## Indexado de listas

El acceso a los elementos de la lista se hace mediante el operador de índice `[ ]`.

```python
thislist = ["apple", "banana", "cherry"]
print(thislist[1]) # Imprime el segundo elemento de la lista.
```

Cuando se usan índices negativos, la referencia se coloca al final de la lista, leyendo de derecha a izquierda.

```python
thislist = ["apple", "banana", "cherry"]
print(thislist[-1]) # Imprime el último elemento de la lista.
```

Para obtener un rango de elementos, se usa el operador `:`, donde el índice de la izquierda marca el inicio (inclusivo) y el de la derecha el final (no inclusivo).

```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5]) # Imprime los elementos del índice 2 al índice 4 (no incluye el índice 5).
```

Para considerar todos los elementos hasta antes de una posición se usa `[:5]` y para considear desde una posición hasta el final de la lista, se usa `[3:]`.


