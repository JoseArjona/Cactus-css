---
title: Encabezados
---

## Títulos h#

Cactus css se basa principalmente en añadir clases a los elementos HTML que requieras. Sin embargo, existen etiquetas que cuentan con estilos predefinidos. Uno de ellos son las etiquetas `h1,h2,h3,h4,h5,h6`. El estilo que se aplica es la fuente usada en la variable de `font1` definida en `themes` ([Conoce como personalizarlo](/current/03-personalizar/)) y un tamaño.

```html
<h1>Encabezado H1</h1>
<h2>Encabezado H2</h2>
<h3>Encabezado H3</h3>
<h4>Encabezado H4</h4>
<h5>Encabezado H5</h5>
<h6>Encabezado H6</h6>
```

### Resultado:

---

<h1>Encabezado H1</h1>
<h2>Encabezado H2</h2>
<h3>Encabezado H3</h3>
<h4>Encabezado H4</h4>
<h5>Encabezado H5</h5>
<h6>Encabezado H6</h6>

---

Adicionalmente todo los encabezados cuentan con la propiedad `text-wrap: balance;`

## Display

La clase `display-#` permite generar estilos de títulos más grande y con un grosor `bold` independiente de la etiqueta usada.

```html
<h1 class="display-1">Display 1</h1>
<h2 class="display-2">Display 2</h2>
<h3 class="display-3">Display 3</h3>
```

### Resultado:

---

<h1 class="display-1">Display 1</h1>
<h2 class="display-2">Display 2</h2>
<h3 class="display-3">Display 3</h3>

---
