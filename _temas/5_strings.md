---
layout: default
title: "Manejo de cadenas"
author: "Dr. Luis Morales Velazquez"
---

# Manejo de cadenas

En Python cualquier elemento de texto es una cadena, no existen caracteres individuales como en C.

Para definir una cadena se puede hacer entre comillas dobles (") o comillas sencillas ('). Por ejemplo, 'hola' es lo mismo que "hola".

## Comillas dentro de cadenas

En este caso se deben de usar alternadamente los dos tipos de comilla como sigue:

```python
print("It's alright")
print("He is called 'Johnny'")
print('He is called "Johnny"')
```

## Cadenas multi línea

Son bloques de múltiples líneas entre comillas triples.

```python
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a) 
```

# Cadenas y arreglos

Para leer un carácter dentro de una cadena se usa el operador de índice.

```python
a = "Hola Mundo!"
print(a[1])
```

La longitud de una cadena se obtiene con la función `len()`.

```python
a = "Hola Mundo!"
print(len(a))
```

Las subcadenas se obtienen a partir de los índices respectivos como:

```python
b = "Hola Mundo!"
print(b[2:5]) # Copia 'la '
print(b[:5]) # Copia 'Hola '
print(b[2:]) # Copia 'la Mundo!'
print(b[-5:-2]) # Copia desde el final 'und'
```

# Concatenar cadenas

Para unir dos o más cadenas se usa el operador '+'.

```python
a = "Hello"
b = "World"
c = a + b
print(c)
```

# Cadenas de formato

Las cadenas de formato ofrecen mayor control sobre la impresión de variables y formatos.

```python
price = 59
txt = f"The price is {price} dollars"
print(txt)
```

Agregando el operador dos puntos (:) se puede especificar el formato de impresión exacto.

```python
price = 59
txt = f"The price is {price:.2f} dollars"
print(txt)
```

Adicionalmente, es posible evaluar expresiones matemáticas dentro de marcador de posición como:

```python
txt = f"The price is {20 * 59} dollars"
print(txt)
```
