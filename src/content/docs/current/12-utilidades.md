---
title: "Utilidades"
---

Cactus CSS posee clases útiles, que son añadidos que pueden ir en conjunto con otras clases o que agregan una utilidad extra.

<h2 class="txt-gradient">Colores</h2>

La siguiente tabla de colores aplica de forma conjunta para las clases `br-color`,`txt-color` y `color`. ([Conoce como personalizarlos](/current/03-personalizar/)).

| Nombre      | Color en Modo Oscuro                                                                       | Color                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| primary     | <span style="color:#7be576">●</span> #7be576                                               | <span style="color:#46eb3d">●</span> #46eb3d                                                                                           |
| secondary   | <span style="color:#0a7392">●</span> #0a7392                                               | <span style="color:#6bd5f5">●</span> #6bd5f5                                                                                           |
| accent      | <span style="color:#D8FF3D">●</span> #D8FF3D                                               | <span style="color:#9bc200">●</span> #9bc200                                                                                           |
| yellow      | <span style="color:#f2c94c">●</span> #f2c94c                                               | <span style="color:#f2c94c">●</span> #f2c94c                                                                                           |
| blue        | <span style="color:#2495ca">●</span> #2495ca                                               | <span style="color:#2495ca">●</span> #2495ca                                                                                           |
| red         | <span style="color:#dc3243">●</span> #dc3243                                               | <span style="color:#dc3243">●</span> #dc3243                                                                                           |
| green       | <span style="color:#45d25a">●</span> #45d25a                                               | <span style="color:#45d25a">●</span> #45d25a                                                                                           |
| dark        | <span style="color:#2b2b2b">●</span> #2b2b2b                                               | <span style="color:#0e0e0e">●</span> #0e0e0e                                                                                           |
| light       | <span style="color:#f1f2e9">●</span> #f1f2e9                                               | <span style="color:#fefefe">●</span> #fefefe                                                                                           |
| contrast    | <span style="color:#2b2b2b">●</span> #2b2b2b                                               | <span style="color:#fefefe">●</span> #fefefe                                                                                           |
| background  | <span style="color:#212121">●</span> #212121                                               | <span style="radial-gradient(hsl(220, 40%, 94%), hsl(220, 14%, 94%))">●</span> radial-gradient(hsl(220, 40%, 94%), hsl(220, 14%, 94%)) |
| gradient    | <span class="txt-gradient">●</span> linear-gradient(120deg, var(--primary), var(--accent)) | <span class="txt-gradient">●</span> linear-gradient(120deg, var(--primary), var(--accent))                                             |
| transparent | transparent                                                                                | transparent                                                                                                                            |

:::note

Todas las clases de colores son compatibles con **_txt-`color`_**, **_br-`color`_** y **_`color`_** (para los backgrounds). Donde `color` es el nombre de los colores disponibles en la tabla superior.
Sin embargo, existen 3 colores especiales que no se pueden aplicar en todas las clases estos son:

- background : disponible unicamente en : `color`(`.background`).
- gradient: disponible unicamente en : `color`(`.gradient`) y `txt-color` (`.txt-gradient`).
- transparent : disponible unicamente en : `color`(`.transparent`)

:::

## Redondeo

Al usar la clase `.radius`. Aplica un borde redondeado usando la variable `--radius` :7rem .

```html
<img
  src="https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  class="radius"
/>
```

#### Resultado:

---

<img src="https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="radius"/>

---

## Clases de Visibilidad

:::caution
La clases tiene un especificidad de `!important`
:::

### Hidden

Al usar la clase `hidden`, desaparecerá el bloque. Util para agregarla desde JS

```html
<div class="hidden">Adios</div>
```

#### Resultado:

---

<div class="hidden"> Adios </div>

---

### br-none

Al usar la clase `br-none`, desaparecerá el borde. Ejemplo:

```html
<button class="chip br-none">Abrir</button>
```

#### Resultado:

---

<button class="chip br-none">Abrir</button>

---

### None en Móviles

Puedes usar la clase `sm-none` para ocultar cosas en dispositivos pequeños.

```html
<p class="sm-none">👻</p>
```

#### Resultado:

---

<p class="sm-none">👻</p>

---

### Transparent

Puedes usar la clase `transparent` para tener un background transparente.

```html
<button class="btn transparent br-blue txt-blue">Outline</button>
```

#### Resultado:

---

<button class="btn transparent br-blue txt-blue">Outline</button>

---

## Espaciados

- `.px`: Aplica padding en todas las direcciones usando la variable` --space`.

- `.pr`: padding-right.

- `.pl`: padding-left.

- `.pt`: padding-top.

- `.pb`: padding-bottom.

- `.mx`: Aplica margin en todas las direcciones.

- `.mr`: margin-right.

- `.ml`: margin-left.

- `.mt`: margin-top.

- `.mb`: margin-bottom.

`.gap-sm`, `.gap-nm`, `.gap-bg`: Usadas dentro de un contenedor Flexbox o Grid para crear espaciado consistente entre elementos (gap).

```html
<div class="container px pt">
  <p class="mb">Párrafo con espaciado interno y margen inferior</p>
</div>
```

#### Resultado:

---

<div class="container px pt">
  <p class="mb">Párrafo con espaciado interno y margen inferior</p>
</div>

---

## Alineaciones

- `.left`: Alinea elementos horizontalmente al inicio (justify-content: flex-start).

- `.right`: Alinea elementos horizontalmente al final (justify-content: flex-end).

- `.center`: Centra elementos horizontalmente (justify-content: center).

- `.between`: Distribuye elementos con espacio entre ellos (justify-content: space-between).

- `.up`: Alinea elementos verticalmente al inicio (align-items: flex-start).

- `.middle`: Centra elementos verticalmente (align-items: center).

- `.down`: Alinea elementos verticalmente al final (align-items: flex-end).

- `.stretch`: Estira los elementos verticalmente para que ocupen el alto del contenedor (align-items: stretch).

## Control de Overflow

- `.overflow-h`: Oculta el contenido que se desborda horizontalmente (overflow: hidden).
- `.overflow-h-x`: Oculta el contenido desbordado en el eje x (overflow-x: hidden)
- `.overflow-h-y`: Oculta el contenido desbordado en el eje y (overflow-y: hidden)

