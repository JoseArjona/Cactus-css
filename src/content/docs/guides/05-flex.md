---
title: "Flex y Card"
---

Cactus CSS proporciona clases de utilidad para simplificar la implementación de Flexbox. La clase `.flex` establece la propiedad display: flex en el elemento, lo que lo convierte en un contenedor Flexbox.

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

La clase `.f-col `establece la propiedad `flex-direction: column` en el contenedor Flexbox, lo que indica que los hijos se distribuirán de forma vertical, uno debajo del otro.

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

La clase `.f-row`establece la propiedad `flex-direction: row` en el contenedor Flexbox, lo que indica que los hijos se distribuirán de forma horizontal, uno a lado del otro.

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

## Alineación

Cactus CSS proporciona clases de utilidad para alinear los hijos dentro del contenedor Flexbox:

- `.center:` Alinea los hijos horizontal y verticalmente en el centro del contenedor
- `.left:` Alinea los hijos horizontalmente a la izquierda del contenedor
- `.right:` Alinea los hijos horizontalmente a la derecha del contenedor

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
```

#### Resultado

---

<div class="flex left">
  <div>Izquierda</div>
</div>
<div class="flex center">
  <div>Centro</div>
</div>
<div class="flex right">
  <div>Derecha</div>
</div>

---

## Clase Card

Cactus CSS proporciona una clase de utilidad para crear cards con un estilo predeterminado. La clase .card establece el estilo predeterminado para las cards, incluyendo:

- `.display: flex`: Convierte el elemento en un contenedor Flexbox
- `.gap: 0:` Elimina el espacio entre los hijos del contenedor Flexbox
- `padding: 2rem:` Agrega un padding de 2rem al contenedor
- `border-radius`: <span class='txt-accent'> var(--radius) </span> Aplica el valor de la variable --radius para el borde redondeado ([Conoce como personalizarlo](/personalizar))

:::tip
A la clase card se le puede agregar las clases de colores `br-color`, `txt-color`, `color`. Para crear combinaciones. ([conoce todas las clases de colores aquí](/guides/09-utilidades/#colores)).
:::

```html
<article class="card br-primary black">
  <h2 class="txt-white">Título de la card</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper,
    ligula ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum
    in metus.
  </p>
  <button class="btn txt-black">click</button>
</article>
```

#### Resultado

---

<article class="card br-primary black">
  <h2 class='txt-white'>Título de la card</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, ligula ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum in metus.</p>
  <button class='btn txt-black'>click</button>
</article>

---

