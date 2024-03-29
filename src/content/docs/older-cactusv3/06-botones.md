---
title: "Botones"
---

Los botones son elementos esenciales en cualquier interfaz de usuario, ya que permiten a los usuarios interactuar con el contenido. Cactus CSS proporciona una clase principal `.btn` para definir el estilo de los botones, además de clases de utilidad para personalizar su apariencia.

## Clase btn

Para darle estilos a un botón basta con usar la clase `btn` a una etiqueta `<button></button>` o un `<a></a>`. Este tendrá una forma personalizada y el color primario

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

Para añadir colores solo tienes que agregar la clase refiriéndote al color ([conoce todas las clases de colores aquí](/guides/09-utilidades/#colores)). Ejemplo:

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

Para cambiar el color de texto agrega la clase `txt-` y la clase de color ([conoce todas las clases de colores aquí](/guides/09-utilidades/#colores)). Ejemplo:

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

Para cambiar el color de borde agrega la clase `br-` y la clase de color ([conoce todas las clases de colores aquí](/guides/09-utilidades/#colores)). Ejemplo:

```html
<button class="btn blue br-white">Azul</button>
<button class="btn yellow txt-black br-black">Amarillo</button>
<button class="btn accent txt-secondary br-primary">Accent</button>
```

#### Resultado:

<button class="btn blue br-white">Azul</button>
<button class="btn yellow txt-black br-black">Amarillo</button>
<button class="btn accent txt-secondary br-primary">Accent</button>
