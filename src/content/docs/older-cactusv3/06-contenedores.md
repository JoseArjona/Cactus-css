---
title: "Contenedores"
---

Los contenedores son elementos esenciales en el diseño web, ya que permiten delimitar, organizar y estructurar el contenido de la página. Cactus CSS proporciona dos clases principales para contenedores: `.container` y `.container-lg`, además de una clase para secciones a pantalla completa.

:::caution
Dada las circunstancias de como se construyo esta documentación esta clase seguramente no se aprecie correctamente.
:::

## Container

☝️🤓 La clase `.container` establece un ancho máximo del 90%, un ancho mínimo de 1200px, márgenes automáticos superior e inferior de 20px, y desbordamiento oculto. Esto permite que el contenedor se adapte a diferentes tamaños de pantalla y mantenga su contenido dentro de un área delimitada.

```html
<section class="container">lorem</section>
```

#### Resultado:

---

<section class="container">
  lorem
 </section>

---

## Container-lg

☝️🤓 La clase `.container-lg` establece un ancho del 100%, padding horizontal de 0 a 40px, y márgenes automáticos superior e inferior de 20px. Esta clase es útil para crear contenedores que ocupan el ancho completo de la pantalla, pero conservan un margen interno para evitar que el contenido se extienda hasta los bordes del navegador.

```html
<section class="container-lg">lorem</section>
```

#### Resultado:

---

<section class="container-lg">
  lorem
 </section>

---

## Section

☝️🤓 La clase `.section` establece una altura y ancho del 100%, alinea el contenido vertical y horizontalmente en el centro de la pantalla, y oculta el desbordamiento horizontal. Esta clase es útil para crear secciones a pantalla completa con un enfoque en el contenido central.

:::tip
Es probable que quieras envolver esta clase en un elemento con el estilo `overflow-x:hidden` para evitar que se cree una barra de desplazamiento horizontal.
:::

```html
<main style="overflow-x:hidden">
  <section class="section">
    <h1>Título de la sección a pantalla completa</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper,
      ligula ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum
      in metus.
    </p>
  </section>
</main>
```

#### Resultado:

---

<main style="overflow-x:hidden">
<section class="section">
  <h1>Título de la sección a pantalla completa</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, ligula ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum in metus.</p>
</section>
</main>
---
