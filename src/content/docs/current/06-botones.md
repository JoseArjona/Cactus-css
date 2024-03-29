---
title: "Botones"
---

Estas clases proporcionan estilos y comportamientos básicos para crear botones y elementos interactivos similares en tu sitio web.

## Clase btn

Crea un botón con fondo, color de texto, borde, transición y efectos predefinidos.

```html
<button class="btn">Principal</button>
```

### Resultado

<button class="btn">Principal</button>

## Personalizar

Cactus CSS proporciona clases de utilidad para personalizar el color de fondo, el borde y el color de texto de los botones.

:::tip
Las clases de utilidad se pueden usar en conjunto con otras, para crear diferentes combinaciones
:::

### Color de Fondo

Para añadir colores solo tienes que agregar la clase refiriéndote al color ([conoce todas las clases de colores aquí](/current/12-utilidades/)). Ejemplo:

```html
<button class="btn blue">Azul</button>
<button class="btn red">Red</button>
<button class="btn secondary">Secondary</button>
```

#### Resultado:

<button class="btn blue">Azul</button>
<button class="btn red">Red</button>
<button class="btn secondary">Secondary</button>

### Color del Texto

Para cambiar el color de texto agrega la clase `txt-` y la clase de color ([conoce todas las clases de colores aquí](/current/12-utilidades/)). Ejemplo:

```html
<button class="btn blue txt-white">Azul</button>
<button class="btn primary txt-black">Primary</button>
<button class="btn accent txt-secondary">Accent</button>
```

#### Resultado:

<button class="btn blue txt-white">Azul</button>
<button class="btn primary txt-black">Primary</button>
<button class="btn accent txt-secondary">Accent</button>

### Borde de color

Para cambiar el color de borde agrega la clase `br-` y la clase de color ([conoce todas las clases de colores aquí](/current/12-utilidades/)). Ejemplo:

```html
<button class="btn blue br-white">Azul</button>
<button class="btn yellow txt-black br-black">Amarillo</button>
<button class="btn accent txt-secondary br-primary">Accent</button>
```

#### Resultado:

<button class="btn blue br-white">Azul</button>
<button class="btn yellow txt-black br-black">Amarillo</button>
<button class="btn accent txt-secondary br-primary">Accent</button>

## Chip

Crea un botón o elemento interactivo con estilo más ligero y redondeado, a menudo usado como etiqueta o filtro. (Hereda la mayoría de las propiedades de .btn)

```html
<button class="chip">Abrir</button>
```

#### Resultado:

 <footer>
  <button class="chip">Abrir</button>
</footer>

:::tip
Al igual que btn, chip se puede personalizar. La idea de chip es darle otra forma
:::
