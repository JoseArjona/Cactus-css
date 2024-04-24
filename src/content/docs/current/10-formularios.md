---
title: "Formularios"
---

Cactus CSS proporciona estilos básicos y efectos para dar un mejor aspecto visual a tus formularios.

`.input`: Contenedor principal de un campo de formulario (input o textarea). Se utiliza para agrupar la etiqueta (**label**) y el campo de entrada.

### Label

`.input `label: Aplica estilos a las etiquetas dentro del contenedor `.input`.

- display: block;: Hace que la etiqueta se muestre como bloque, ocupando su propio renglón.
- margin-bottom: .3rem;: Añade un poco de separación entre la etiqueta y el campo de entrada.
- font-size: .9rem;: Tamaño de letra ligeramente reducido.
- font-weight: bold;: Negrita para la etiqueta.
- opacity: .7;: Opacidad reducida para un efecto sutil.
- transition: Proporciona una transición suave a los cambios de opacidad.

### Textarea e Input

Estilos comunes para campos de entrada de texto (input) y áreas de texto (textarea) en formularios:

- field-sizing: content; Para un control de tamaño más preciso.
- max-width: 220px;: Límite de ancho para evitar que ocupen demasiado espacio.
- height: 44px;: Altura estándar.
- background-color: var(--contrast);
- color: var(--text);
- border-radius: var(--radius);: Bordes redondeados.
- border: 2px solid transparent;: Borde transparente.
- font-size: 1rem;: Tamaño de letra base.
- transition: Transiciones suaves para los cambios de color de borde y fondo.
- `.input` : Estilos adicionales para los campos `<input>`:
  - padding: 0 1rem;: Espacio interno.

### Ejemplo

```html
<div class="input">
  <label for="email">Correo Electrónico</label>
  <input type="email" id="email" placeholder="Correo@example.com" />
  <br />
  <label for="text">Personalizado con color clases</label>
  <input
    class="br-dark secondary txt-dark"
    type="text"
    id="text"
    placeholder="Ejemplo"
  />
  <br />
  <select name="select">
    <option value="value1">Value 1</option>
    <option value="value2" selected>Value 2</option>
    <option value="value3">Value 3</option>
  </select>
  <div class="pt">
    <label for="text">Dirección</label>
    <textarea
      name="text"
      id="text"
      placeholder="Escribe tu dirección"
    ></textarea>
  </div>
</div>
```

#### Resultado

<div class="input">
  <label for="email">Correo Electrónico</label>
  <input type="email" id="email" placeholder="Correo@example.com" />
  <br />
  <label for="text">Personalizado con color clases</label>
  <input class="br-dark secondary txt-dark" type="text" id="text" placeholder="Ejemplo" />
  <br />
  <select name="select">
    <option value="value1">Value 1</option>
    <option value="value2" selected>Value 2</option>
    <option value="value3">Value 3</option>
  </select>
  <div class="pt">
    <label for="text">Dirección</label>
    <textarea
      name="text"
      id="text"
      placeholder="Escribe tu dirección"
    ></textarea>
  </div>
</div>
