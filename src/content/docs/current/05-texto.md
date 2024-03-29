---
title: "Texto"
---

Esta sección incluye clases para modificar el tamaño, peso, alineación, color, y otros aspectos visuales del texto en tu sitio web.

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

## Tamaño de texto

Cactus CSS proporciona clases de utilidad para modificar el tamaño del texto:

- `txt-bg`: Aumenta el tamaño del texto a 1.25rem.
  `txt-sm`: Disminuye el tamaño del texto a 1rem.

```html
<p class="txt-bg">Texto con tamaño grande.</p>
<p class="txt-sm">Texto con tamaño pequeño.</p>
```

#### Resultado

---

<p class="txt-bg">Texto con tamaño grande.</p>
<p class="txt-sm">Texto con tamaño pequeño.</p>

---

## Peso de la fuente

- `txt-bold `: Hace el texto más grueso en negrita.
- `txt-light`: Hace el texto más delgado.

```html
<p class="txt-bold">Texto en negrita</p>
<p class="txt-light">Texto delgado</p>
```

#### Resultado

---

<p class="txt-bold">Texto en negrita</p>
<p class="txt-light">Texto delgado</p>

---

## Alineación de texto

- `txt-center`: Centra el texto horizontalmente.
- `txt-right`: Alinea el texto a la derecha.

```html
<p class="txt-center">Texto centrado</p>
<p class="txt-right">Texto alineado a la derecha</p>
```

#### Resultado

---

<p class="txt-center">Texto centrado</p>
<p class="txt-right">Texto alineado a la derecha</p>

---

### Colores y texto degradado

Cactus CSS ofrece una serie de clases para cambiar rápidamente el color del texto. Utiliza las siguientes clases junto a tus variables de colores (personalizables en cactus4.css):

- `txt-light`
- `txt-dark`
- `txt-primary`
- `txt-secondary`
- `txt-accent`
- `txt-contrast`
- `txt-yellow`
- `txt-green`
- `txt-red`
- `txt-blue`
- `txt-gradient`

```html
<p class="txt-gradient">Texto con degradado</p>
<p class="txt-accent">Texto usando el color de accent</p>
```

#### Resultado

---

<p class="txt-gradient">Texto con degradado</p>
<p class="txt-accent">Texto usando el color de accent</p>

---

## PRE Y CODE

Las etiquetas `<pre>`,`<code>`,` <kbd>`, `<pre>`, y `<samp>` se emplean para representar código en línea. Cactus CSS aplica una fuente monospace y un tamaño de fuente de 1em a estos elementos para garantizar una representación consistente del código.

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
