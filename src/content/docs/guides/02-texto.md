---
title: "Texto"
---

## Párrafos

Los párrafos son elementos fundamentales para presentar contenido textual en una página web. Cactus CSS establece una altura de línea de 27px para los párrafos para garantizar una legibilidad y espaciado adecuados.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, ligula
  ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum in metus.
</p>
```

#### Resultado

---

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, ligula ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum in metus.</p>

---

### Alineación

Cactus CSS proporciona clases de utilidad para alinear el texto de manera horizontal:

- `txt-center`: Alinea el texto al centro
- `txt-left`: Alinea el texto a la izquierda
- `txt-right`: Alinea el texto a la derecha
- `txt-just`: Alinea el texto justificado

```html
<p class="txt-center">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, ligula
  ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum in metus.
</p>
```

#### Resultado

---

<p class='txt-center'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, ligula
  ac faucibus rutrum, quam nibh semper eros, vitae semper magna ipsum in metus.
</p>

---

### Colores

Cactus CSS proporciona clases de utilidad para personalizar el color del texto.Para cambiar el color agrega la clase `txt-` y la clase de color ([conoce todas las clases de colores aquí](/guides/09-utilidades/#colores)).

```html
<p class="txt-green">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span class="txt-blue"> Nullam </span> semper, ligula ac faucibus rutrum, quam
  nibh semper eros, vitae semper magna ipsum in metus.
</p>
```

#### Resultado

---

<p class="txt-blue">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <span class="txt-yellow"> Nullam </span> semper, ligula ac faucibus rutrum, quam
  nibh semper eros, vitae semper magna ipsum in metus.
</p>

---

## PRE Y CODE

La etiqueta `<pre>` se utiliza para mostrar código preformateado, conservando los espacios y saltos de línea originales. Cactus CSS aplica un padding de 20px, un borde redondeado de 3px y una altura de línea de 1.5 al elemento `<pre>`. Los elementos `<code>`,` <kbd>`, `<pre>`, y `<samp>` se emplean para representar código en línea. Cactus CSS aplica una fuente monospace y un tamaño de fuente de 1em a estos elementos para garantizar una representación consistente del código.

```html
<pre class="txt-green">
// Código preformateado
const saludo = "Hola, mundo";
console.log(saludo);
</pre>
```

### Resultado

---

<pre class="txt-green">
// Código preformateado
const saludo = "Hola, mundo";
console.log(saludo);
</pre>

---
