---
title: "Utilidades"
---

Cactus CSS posee clases útiles, que son añadidos que pueden ir en conjunto con otras clases o que agregan una utilidad extra.

## Colores

La siguiente tabla de colores aplica de forma conjunta para las clases `br-color`,`txt-color` y `color`. ([Conoce como personalizarlos](/personalizar)).

| Nombre    | Color en Modo Oscuro                         | Color                                        |
| --------- | -------------------------------------------- | -------------------------------------------- |
| primary   | <span style="color:#98f098">●</span> #98f098 | <span style="color:#98f098">●</span> #98f098 |
| secondary | <span style="color:#232529">●</span> #232529 | <span style="color:#cce0cc">●</span> #cce0cc |
| accent    | <span style="color:#727fa1">●</span> #727fa1 | <span style="color:#313849">●</span> #313849 |
| yellow    | <span style="color:#f2c94c">●</span> #f2c94c | <span style="color:#f2c94c">●</span> #f2c94c |
| blue      | <span style="color:#2495ca">●</span> #2495ca | <span style="color:#2495ca">●</span> #2495ca |
| red       | <span style="color:#dc3243">●</span> #dc3243 | <span style="color:#dc3243">●</span> #dc3243 |
| green     | <span style="color:#45d25a">●</span> #45d25a | <span style="color:#45d25a">●</span> #45d25a |

### Colores Especiales

| Nombre  | Color                                                       | Nota                                                                                 |
| ------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| outline | <span style="color:#98f098">○</span> #98f098                | Agrega un borde y texto con el color primario y un background transparente           |
| white   | <span style="color:#000; background: #fff">W</span> #232529 | Si se usa la clase `white` por si sola agrega un `color:#000` y un `background:#fff` |
| black   | <span style="color:#fff; background: #000">B</span> #727fa1 | Si se usa la clase `black` por si sola agrega un `color:#fff` y un `background:#000` |

## Clase None

### None

Al usar la clase none, desaparecerá el bloque. Util para agregarla desde JS

```html
<div class="none">Adios</div>
```

#### Resultado:

---

<div class="none"> Adios </div>

---

### None en Móviles

Puedes usar la clase `sm-none` para ocultar cosas en dispositivos pequeños.

:::caution
La clase tiene un especificidad de `!important`
:::

```html
<p class="sm-none">👻</p>
```

#### Resultado:

---

<p class="sm-none">👻</p>

---

## Picture Image

Cactus CSS proporciona estilo básico para las imágenes.

Establece el estilo predeterminado para las imágenes, incluyendo:

- `max-width: 100%`: Asegura que la imagen no se estire más allá del ancho del contenedor
- `height: auto`: Permite que la altura de la imagen se ajuste automáticamente al ancho

```html
<img
  src="https://images.pexels.com/photos/1022921/pexels-photo-1022921.jpeg"
  alt="Imagen de un cactus"
/>
```

#### Resultado:

---

<img  src="https://images.pexels.com/photos/1022921/pexels-photo-1022921.jpeg" alt="Imagen de un cactus">

---
