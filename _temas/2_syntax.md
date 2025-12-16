---
layout: default
title: "2.- Sintaxis de Python"
author: "Dr. Luis Morales Velazquez"
---

# Sintaxis de Python
Python es un lenguaje de programación pensado para ser compacto y ordenado.
Usa una sintáxis simple con pocos marcadores, cuyas principales reglas son:
- Los bloques de código se marcan por identación (espacios horizontales).
- Se coloca una sentencia por línea, no requiere punto y coma final (';').
- Los comentarios se anotan usando el símbolo '#'.
- Las expresiones siguen las reglas generales de C.

# Bloques de código marcados por espacios
Código correcto
```python
if 5 > 2:
  print("Cinco es mayor que dos!")
```
Código incorrecto
```python
if 5 > 2:
print("Cinco es mayor que dos!")
```
# Ejecución del código
El código se almacena en archivos con extensión '.py'. Requiere de un intérprete ya que el código no se compila, sino que se interpreta por una herramienta externa.
Para ejecutar código basta con escribir en la consola:
```bash
python ejemplo.py
```
También se puede ejecutar diréctamente en el intérprete en línea de comandos (CLI), como:
```bash
C:\> python
>>> print("Hello, World!")
Hello, World! 
```
Adicionalmente es posible usar intérpretes en línea como:
- https://www.online-python.com/
- https://www.programiz.com/python-programming/online-compiler/
- https://www.w3schools.com/python/trypython.asp?filename=demo_default


