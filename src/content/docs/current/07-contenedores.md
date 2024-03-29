---
title: "Contenedores"
---

Las siguientes clases te proporcionan herramientas básicas para organizar el contenido de tu sitio web

:::caution
Dada las circunstancias de como se construyo esta documentación esta clase seguramente no se aprecie correctamente.
:::

## Container

Crea un contenedor centrado con ancho máximo predefinido y espacio interno (padding).

- Propiedades:
  - position: relative; Permite posicionar elementos hijos de forma relativa al contenedor.
  - max-width: 960px; Define un ancho máximo para el contenedor.
  - margin: 0 auto; Centra el contenedor horizontalmente.
  - padding: 1.5rem; Agrega espacio interno.

```html
<section class="container">
  <h2>Bienvenido a mi sitio</h2>
  <p>Este contenido está centrado dentro de un contenedor.</p>
</section>
```

#### Resultado:

---

<section class="container">
  <h2>Bienvenido a mi sitio</h2>
  <p>Este contenido está centrado dentro de un contenedor.</p>
</section>

---

## Content

Agrega un espacio interno (padding) estándar al contenido de un contenedor.

- Propiedad:
  - padding: var(--space); Aplica un valor padding utilizando la variable --space que puedes definir en themes.css.

```html
<section class="container">
  <article class="content">
    <p>Este párrafo tiene espacio (padding) definido.</p>
  </article>
</section>
```

#### Resultado:

---

<section class="container">
  <article class="content">
    <p>Este párrafo tiene espacio (padding) definido.</p>
  </article>
</section>

---

## Full-screen

Crea un contenedor que ocupa toda la pantalla visible del navegador (viewport).

- Propiedades:
  - position: relative; Para posicionamiento de elementos internos.
  - width: 100vw; Ocupa el 100% del ancho del viewport.
  - height: 100vh; Ocupa el 100% de la altura del viewport.

```html
<div class="full-screen">
  <h3 class="txt-center">Sección a pantalla completa</h3>
</div>
```

#### Resultado:

---

<div class="full-screen">
  <h3 class="txt-center">Sección a pantalla completa</h3>
</div>

---
