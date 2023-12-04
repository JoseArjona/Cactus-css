---
title: "Formularios"
---

Cactus CSS proporciona clases de utilidad para crear formularios atractivos y funcionales. Estas clases se basan en las mejores prácticas de diseño de formularios, lo que ayuda a garantizar una experiencia de usuario positiva. Cactus CSS proporciona clases de utilidad para definir el estilo de los campos de entrada

- `.input`: Establece el estilo predeterminado para los campos de entrada, incluyendo:
  - `padding: 10px 15px`: Ajusta el padding del campo de entrada
  - `border-radius: 5px`: Establece el radio del borde del campo de entrada
  - `border: 1px solid var(--accent)`: Establece un borde de 1px de color de acento
  - `transition: .3s`: Aplica una transición de 0.3 segundos
  - `width: 100%:` Establece el ancho del campo de entrada al 100%
  - `` margin-bottom`: 20px ``: Aplica un margen inferior de 20px al campo de entrada
- `.input:focus`: Establece el estilo del campo de entrada cuando está enfocado, incluyendo:
  - `border`: 1px solid var(--primary): Establece un borde de 1px de color primario
  - `outline`: 0: Elimina el borde del navegador

```html
<section class="card br-none black span-1 md-span-2">
  <h2 class="center">Regístrate</h2>
  <form action="">
    <input
      class="input br-white black"
      type="text"
      placeholder="Correo Electrónico"
    />
    <input
      class="input br-white black txt-white"
      type="password"
      placeholder="Contraseña"
    />
    <button class="btn">Subscribe</button>
    <button class="btn green">Regístrate</button>
  </form>
</section>
```

:::tip
Los inputs pueden tener las clases de colores ([conoce todas las clases de colores aquí](/guides/09-utilidades/#colores)).
:::

#### Resultado:

---

<section class="card f-col br-black  span-1 md-span-2">
  <h2 class="center ">Regístrate</h2>
  <form action="">
    <input
      class="input "
      type="text"
      placeholder="Correo Electrónico"
    />
    <input
      class="input  outline"
      type="password"
      placeholder="Contraseña"
    />
    <button class="btn blue">Subscribe</button>
    <button class="btn green">Regístrate</button>
  </form>
</section>

---
