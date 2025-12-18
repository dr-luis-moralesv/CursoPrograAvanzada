---
layout: default
title: "Tuplas"
author: "Dr. Luis Morales Velazquez"
---

# Tuplas

Las tuplas son objetos que almacenan elementos de forma similar a las listas, pero una vez creadas no pueden cambiar.

Las tuplas se definen entre paréntesis.

```python
tupla = ("apple", "banana", "cherry")
print(tupla)
```

Las tuplas son grupos ordenados respecto a la estructura, no al contenido. Además, admiten agregar o eliminar elementos.

También pueden contener elementos de tipos de datos diferentes

```python
tupla = ("abc", 34, True, 40, "male")
```

## Acceso a elementos

Las tuplas se acceden de forma similar a las listas mediante el operador de índice `[ ]`. Los elementos se numeran iniciando en 0.

Siguen las mismas reglas de acceso que las listas.

```python
tupla = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(tupla[2:]) # Imprime los valores desde "cherry" hasta el final.
```
