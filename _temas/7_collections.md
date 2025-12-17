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

## Modificar una lista

Para modificar una lista se hace se puede modificar directamente asignando un nuevo valor a la posición o rango de posiciones deseadas como:

```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1] = "blackcurrant" # Reemplaza el segundo valor
thislist[1:3] = ["blackcurrant", "watermelon"] # Reemplaza el segundo y el tercer valor
thislist[1:2] = ["pineapple", "papaya"] # Reemplaza el segundo valor insertando dos valores
```
También se usan métodos de modifición explícitos como:

| Método | Acción | Ejemplo |
|--------|--------|---------|
| `append()` | Inserta un valor al final de la lista. | `lista.append("watermelon")` |
| `clear()` | Deja vacía toda la lista. | `lista.clear()` |
| `extend()` | Extiende la lista con otra colección. | `lista = ["apple", "banana", "cherry"]` <br> `tropical = ["mango", "pineapple", "papaya"]` <br> `lista.extend(tropical)` |
| `insert()` | Inserta un valor en la posición indicada. | `lista.insert(2, "watermelon")` |
| `pop()` | Elimina un elemento por índice. |  `lista.pop(1)` |
| `remove()` | Elimina el elemento indicado. | `lista.remove("banana")` |

Adicionalmente, el operador `del` sirve para eliminar toda la lista o elementos seleccionados.

```python
lista = ["apple", "banana", "cherry"]
del lista[0] # Elimina el primer elemento
del lista  # Elimina completamente el objeto
```

Para unir listas también se puede usar el operador `+`

```python
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list3 = list1 + list2
print(list3) 
```
### Otros métodos útiles par trabajar con listas

| Método | Acción |
|--------|--------|
| `copy()` |	Devuelve una copia de la lista. |
| `count()` |	Regresa el número de elementos con el valor especificado. |
| `index()`	| Devuelve el índice del primer elemento con el valor especificado. |
| `reverse()`	| Invierte el orden de la lista. |
| `sort()`	| Ordena la lista. |


