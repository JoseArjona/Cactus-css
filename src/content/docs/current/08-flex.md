---
title: "Flex y Card"
---

Cactus CSS incluye un conjunto de clases de utilidad basadas en Flexbox que te ayudan a organizar y distribuir elementos con gran facilidad.

:::caution
Dada las circunstancias de como se construyo esta documentación esta clase seguramente no se aprecie correctamente.
:::

```html
<div class="flex">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>
```

#### Resultado

---

<div class="flex" >
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>

---

## Dirección

Por defecto en css, la clase flex establece en row la dirección de flexbox. Sin embargo puedes cambiarlo usando las clases `.f-col` y `f-row`

### f-col

Organiza los elementos hijos en una fila horizontal (flex-direction: row;).

```html
<div class="flex f-col">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>
```

#### Resultado

---

<div class="flex f-col" >
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>

---

### f-row

Organiza los elementos hijos en una fila horizontal (flex-direction: row;).

```html
<div class="flex f-row">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>
```

#### Resultado

---

<div class="flex f-row"  >
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>

---

### Ajuste de contenido

`.f-wrap` Permite que los elementos hijos se acomoden en varias líneas si el espacio horizontal es insuficiente (flex-wrap: wrap;).

```html
<div class="flex f-wrap">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>
```

#### Resultado

---

<div class="flex f-wrap"  >
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>

---

## Alineación

Cactus CSS proporciona clases de utilidad para alinear los hijos dentro del contenedor Flexbox:

- `.left`: Alinea los elementos al inicio del contenedor (justify-content: flex-start;).
- `.right`: Alinea los elementos al final del contenedor (justify-content: flex-end;).
- `.center`: Alinea los elementos al centro del contenedor (justify-content: center;).
- `.between`: Distribuye los elementos uniformemente, dejando espacio entre ellos (justify-content: space-between;).

```html
<div class="flex center">
  <div>Centro</div>
</div>
<div class="flex left">
  <div>Izquierda</div>
</div>
<div class="flex right">
  <div>Derecha</div>
</div>
<div class="flex between">
  <div>A</div>
  <div>B</div>
</div>
```

#### Resultado

---

<div class="flex center">
  <div>Centro</div>
</div>
<div class="flex left">
  <div>Izquierda</div>
</div>
<div class="flex right">
  <div>Derecha</div>
</div>
<div class="flex between">
  <div>A</div>
  <div>B</div>
</div>

---

## Clase Card

Cactus CSS proporciona una clase de utilidad para crear cards con un estilo predeterminado. Aplica la propiedad display: flex; y provee estilos base (como una ligera separación entre elementos) que a menudo se usan al crear tarjetas (cards) u otros contenedores similares.

:::tip
A la clase card se le puede agregar las clases de colores `br-color`, `txt-color`, `color`, (incluso agregar `content` para una mejor separación ). Para crear combinaciones. ([conoce todas las clases de colores aquí](/guides/09-utilidades/#colores)).
:::

```html
<article class="card f-col br-primary content">
  <h2>Título de la card</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper,
    ligula ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum
    in metus.
  </p>
  <button class="btn txt-dark">click</button>
</article>
```

#### Resultado

---

<article class="card f-col br-primary content">
  <h2 >Título de la card</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, ligula ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum in metus.</p>
  <button class='btn txt-dark'>click</button>
</article>

---

## Cover

Permite cubrir el espacio necesario en el contenedor

- Propiedad:
  - object-fit: cover;
  - width: 100%;
    En `f-row`:
    - width: min-content;
    - height: 100%;

```html
<article class="card f-row content gap-sm">
  <header>
    <picture class="cover">
      <img
        class="radius"
        src="https://th.bing.com/th/id/OIP.My7lN7GOn16w60PnKEK1_wHaFU?rs=1&pid=ImgDetMain"
        alt="accusamus"
      />
    </picture>
  </header>
  <div class="pl">
    <h2 class="txt-center">Suiza</h2>
    <p>
      = Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste
      reprehenderit nesciunt a ipsa iure, recusandae atque excepturi quos, esse
      accusamus placeat hic! Illo sint repudiandae neque, eaque vero error?
    </p>
    <footer class="flex right">
      <button class="btn ">Abrir</button>
    </footer>
  </div>
</article>
```

:::caution
Debido a los estilos usados en la documentación la preview no es 100 fiel al resultado. Para mejores resultados obsérvalo en un entorno normal.
:::

---

 <article class="card f-row content gap-sm">
        <header >
          <picture class="cover">
            <img
              class="radius"
              src="https://th.bing.com/th/id/OIP.My7lN7GOn16w60PnKEK1_wHaFU?rs=1&pid=ImgDetMain"
              alt="accusamus"
            />
          </picture>
        </header>
        <div class="pl">
          <h2 class="txt-center">Suiza</h2>
          <p>
            = Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            iste reprehenderit nesciunt a ipsa iure, recusandae atque excepturi
            quos, esse accusamus placeat hic! Illo sint repudiandae neque, eaque
            vero error?
          </p>
          <footer class='flex right'>
            <button class="btn ">Abrir</button>
          </footer>
        </div>
      </article>

---
