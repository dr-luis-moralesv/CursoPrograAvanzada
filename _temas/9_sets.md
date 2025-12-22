---
layout: default
title: "Conjuntos"
author: "Dr. Luis Morales Velazquez"
---

# Conjuntos (`set`)

Los conjuntos (`set`) en Python son colecciones que almacenan valores que no cambian de forma no ordenada.
Lo anterior implica que no pueden accederse por índice y no pueden cambiar una vez definidos. Los conjuntos no admiten valores duplicados.

Un `set` se define con los símbolos de llaves `{ }`.

```python
thisset = {"apple", "banana", "cherry"}
print(thisset)
```

Los valores duplicados en la definición de conjuntos se eliminan de forma silenciosa. Algunos valores tiene equivalencia directa, por ejemplo: `True` es equivalente a 1 y `False` a 0.

## El constructor

Para declarar un conjunto es posible usar el constructor `set()`.

```python
thisset = set(("apple", "banana", "cherry")) # Note el doble paréntesis
print(thisset) 
```

Una vez creado el *set* ya no es posible modificar los elementos contenidos.

## Agregar elementos al conjunto

Agregar elementos individuales al conjunto se hace mediante la función `add()`.

```python
thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
print(thisset) 
```

También se puede usar el método `update()` para funsionar dos conjuntos.

```python
thisset = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]
thisset.update(mylist)
print(thisset) 
```

## Eliminar elementos de un conjunto

Existen varios métodos para eliminar elementos dentro de los conjuntos con diferentes niveles de control.

El método `remove()` elimina el valor especificado, pero lanza un error si dicho valor no se encuentra. En cambio, el método `discard()` también eliminar el valor pero no lanza el error en caso de no encontrar el valor indicado.

```python
thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset) 
```

## Funciones útiles para trabajar con conjuntos

| Método | Versión corta | Descripción |
|--------|---------------|-------------|
| add() |	  |	Agrega un elemento al conjunto.
| clear() | |	 Elimina todos los elementos.
| copy() |	  |	Devuelve una copia del conjunto
| difference() | 	- |	Devuelve un conjunto que contiene los valores que difieren.
| difference_update() |	-= | Elimina los elementos en este conjunto que se incluyen en otro conjunto.
| discard() |	 | 	Elimina el elemento especificado.
| intersection() |	& |	Retorna un conjunto que es la intersección de los dos conjuntos.
| intersection_update() |	&= | Elimina los elementos en este conjunto que no están presentes en el otro conjunto especificado.
| isdisjoint() |	|  Devuelve si existe una intersección o no entre los conjuntos.
| issubset() |	<= | Devuelve `True` si todos los elementos están presentes en otro conjunto.
|   |	< |	Regresa `True` si todos los elementos del conjunto están dentro del otro conjunto más grande.
| issuperset() |	>= | Devuelve `True` si todos los elementos de otro conjunto están presentes en este conjunto.
|   |	> |	Retorna `True` si todos los elementos del otro conjunto están presentes en el conjunto menor que este.
| pop() |	|  Elimina un elemento del conjunto (no hay un orde específico).
| remove() 	| | Elimina el elemento especificado.
| symmetric_difference() |	^ |	Devuelve un conjunto con las diferencias simétricas de dos conjuntos.
| symmetric_difference_update() |	^= | Inserta las diferencias simétricas de este conjunto a otro.
| union() |	\| | Devuelve un conjunto que contiene la unión de los conjuntos.
| update() |	\|= | Actualiza el set con la unión de este conjunto y otros.

