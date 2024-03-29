---
title: "Grid"
---

Cactus CSS incluye clases para crear layouts (diseños) basados en el sistema de Grid de CSS. Esto permite controlar la distribución de los elementos en filas y columnas de forma sencilla.

Clase principal:

- `.grid`: Habilita el uso de Grid en un contenedor (display: grid;).

:::caution
Dada las circunstancias de como se construyo esta documentación esta clase seguramente no se aprecie correctamente.
:::

```html
<div class="grid">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>
```

### Resultado

---

<div class="grid" >
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
</div>

---

## Numero de Columnas

`.col-1` a `.col-12`: Definen grillas de 1 a 12 columnas equitativas. Cada elemento hijo ocupará el ancho correspondiente al número de columnas.

```html
<div class="grid col-2">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
  <div>Elemento 4</div>
</div>
```

### Resultado

---

<div class="grid col-2" >
  <div>Elemento 1</div>
  <div>Elemento 2</div>
  <div>Elemento 3</div>
  <div>Elemento 4</div>
</div>

---

## Clase para abarcar columnas

`span-1` a `span-12`: Permite que un elemento ocupe un número específico de columnas dentro de un sistema Grid.

```html ins="span-2"
<div class="grid col-2">
  <div class="blue">Elemento 1</div>
  <div class="yellow">Elemento 2</div>
  <div class="span-2 accent">Elemento 3</div>
</div>
```

### Resultado

---

<div class="grid col-2">
  <div class='blue'>Elemento 1</div>
  <div class='yellow'>Elemento 2</div>
   <div class="span-2 accent txt-white">Elemento 3</div>
</div>

---

## Responsive

Cactus incluye clases para modificar el comportamiento del grid en diferentes tamaños de pantalla (breakpoints).

##### Media query para pantallas medianas (768px - 992px)

- `md-col-#`: Aplica el número de columnas especificado para pantallas medianas
- `md-span-#`: Aplica el número de columnas abarcadas para pantallas medianas

##### Media query para pantallas pequeñas (576px o más pequeño)

- `sm-none`: Oculta el elemento para pantallas pequeñas
- `sm-col-#`: Aplica el número de columnas especificado para pantallas pequeñas
- `sm-span-#`: Aplica el número de columnas abarcadas para pantallas pequeñas

```html
<section class="container">
  <div class="grid col-3 md-col-2 sm-col-1">
    <div class="card secondary">Card 1</div>
    <div class="card secondary">Card 2</div>
    <div class="card secondary">Card 3</div>
    <div class="card secondary">Card 4</div>
    <div class="card secondary span-2 md-span-2">Card 5 con span de 2</div>
  </div>
</section>
```

### Resultado

---

<section class="container">
  <div class="grid col-3 md-col-2 sm-col-1">
    <div class="card secondary">Card 1</div>
    <div class="card secondary">Card 2</div>
    <div class="card secondary">Card 3</div>
    <div class="card secondary">Card 4</div>
    <div class="card secondary span-2 md-span-2">
      Card 5 con span de 2
    </div>
  </div>
 </section>

---

## Alineación

Cactus CSS proporciona clases de utilidad para alinear los elementos dentro de la cuadrícula:

- `.center`: Alinea los elementos horizontal y verticalmente en el centro de la cuadrícula
- `.left`: Alinea los elementos horizontalmente a la izquierda de la cuadrícula
- `.right`: Alinea los elementos horizontalmente a la derecha de la cuadrícula

```html
<section class="container">
  <div class="grid center">
    <div class="card secondary ">Card 1</div>
  </div>
  <div class="grid right">
    <div class="card secondary  ">Card 1</div>
  </div>
  <div class="grid left">
    <div class="card secondary  ">Card 1</div>
  </div>
</section>
```

### Resultado

---

<section class="container">
  <div class="grid center">
    <div class="card secondary ">Card 1</div>
  </div>
   <div class="grid right">
    <div class="card secondary  ">Card 1</div>
  </div>
   <div class="grid left">
    <div class="card secondary  ">Card 1</div>
  </div>
 </section>

---

## Gap/ Espaciado

`.gap-sm`, `.gap-nm`, `.gap-bg`: Añaden separación entre los elementos de un sistema Grid.

```html
<section class="container">
  <div class="grid gap-sm col-2">
    <div class="card secondary ">Espaciado</div>
    <div class="card secondary ">Pequeño</div>
  </div>
  <div class="grid gap-nm col-2">
    <div class="card secondary  ">Espaciado</div>
    <div class="card secondary  ">Mediano</div>
  </div>
  <div class="grid gap-bg col-2">
    <div class="card secondary  ">Espaciado</div>
    <div class="card secondary  ">Grande</div>
  </div>
</section>
```

### Resultado

---

<section class="container">
  <div class="grid gap-sm col-2 ">
    <div class="card secondary ">Espaciado</div>
    <div class="card secondary ">Pequeño</div>
  </div>
  <div class="grid gap-nm col-2">
    <div class="card secondary  ">Espaciado</div>
    <div class="card secondary  ">Mediano</div>
  </div>
  <div class="grid gap-bg col-2">
    <div class="card secondary  ">Espaciado</div>
    <div class="card secondary  ">Grande</div>
  </div>
</section>

---
