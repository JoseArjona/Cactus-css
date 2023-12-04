---
title: "Grid"
---

Cactus CSS proporciona un sistema de cuadrícula flexible que permite organizar elementos en columnas y filas. El sistema de cuadrícula se basa en la especificación CSS Grid Layout Module, lo que garantiza una amplia compatibilidad con los navegadores modernos.

La clase `.grid` establece el estilo predeterminado para los contenedores de cuadrícula, incluyendo:

- `display: grid`: Convierte el elemento en un contenedor de cuadrícula
- `gap: 20px`: Establece una separación de 20px entre los elementos de la cuadrícula
- `margin-bottom: 20px`: Aplica un margen inferior de 20px al contenedor de cuadrícula

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

Cactus CSS proporciona clases de utilidad para definir el número de columnas en la cuadrícula. Para ello usa la clase `col-#` seguido del numero de columna (máximo 12).

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

Cactus CSS proporciona clases de utilidad para especificar cuántas columnas abarca un elemento. Para ello usa la clase `span-#` seguido del numero de columna que deseas abarcar(máximo 12).

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

Cactus CSS proporciona clases de utilidad específicas para adaptar la cuadrícula a diferentes tamaños de pantalla.

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
  <div class="grid">
    <div class="card secondary left ">Card 1</div>
    <div class="card secondary right ">Card 2</div>
    <div class="card secondary center ">Card 3</div>
  </div>
</section>
```

### Resultado

---

<section class="container">
  <div class="grid">
    <div class="card secondary left ">Card 1</div>
    <div class="card secondary right ">Card 2</div>
    <div class="card secondary center ">Card 3</div>
  </div>
 </section>

---
