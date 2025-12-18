---
layout: default
title: "Conjuntos"
author: "Dr. Luis Morales Velazquez"
---

# Conjuntos (set)

Los conjuntos (`set`) en Python son colecciones que almacenan valores que no cambian de forma no ordenada.
Lo anterior implica que no pueden accederse por índice y no pueden cambiar una vez definidos. Los conjuntos no admiten valores duplicados.

Un `set` se define con los símbolos de llaves `{ }`.

```python
thisset = {"apple", "banana", "cherry"}
print(thisset)
```

Los valores duplicados en la definición de conjuntos se eliminan de forma silenciosa. Algunos valores tiene equivalencia directa, por ejemplo: `True` es equivalente a 1 y `False` a 0.

## El constructor `set()`

Para declarar un conjunto es posible usar el constructor `set()`.

```python
thisset = set(("apple", "banana", "cherry")) # Note el doble paréntesis
print(thisset) 
```
