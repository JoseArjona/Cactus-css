---
title: "Tablas"
---

Cactus CSS proporciona tablas atractivas y funcionales. Estas tablas se basan en las mejores prácticas de diseño de tablas, lo que ayuda a garantizar una experiencia de usuario positiva.

- `<table></table>`: Establece el estilo predeterminado para las tablas, incluyendo:

  - `border-collapse: collapse`: Combina los bordes de las celdas adyacentes en una sola línea
  - `border-spacing: 0`: Elimina el espacio entre las celdas de la tabla

- `<tr></tr>`: Establece el estilo predeterminado para las filas de tabla, incluyendo:

  - `border-bottom: 1px solid`: Aplica un borde de 1px a la parte inferior de cada fila.

- `<td></td> y <th></th>`: Establece el estilo predeterminado para las celdas de tabla, incluyendo:
  - `text-align: left`: Alinea el texto de la celda a la izquierda
    `padding: 9px`: Ajusta el padding de la celda
  - `vertical-align: top`: Alinea el contenido de la celda en la parte superior de la celda

```html
<section class="flex center">
  <table>
    <thead class="accent txt-white br-black">
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
      </tr>
    </thead>
    <tbody class="br-black">
      <tr>
        <td>Carlos</td>
        <td>Alvarez</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>Alvarez</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>Alvarez</td>
        <td>25</td>
      </tr>
    </tbody>
  </table>
</section>
```

:::tip
Las etiquetas de table pueden tener las clases de colores ([conoce todas las clases de colores aquí](/guides/09-utilidades/#colores)).
:::

### Resultado:

---

<section class="flex center">
   <table>
     <thead class="accent txt-white br-black">
       <tr>
         <th>Nombre</th>
         <th>Apellido</th>
         <th>Edad</th>
       </tr>
     </thead>
     <tbody class="br-black">
       <tr>
         <td>Carlos</td>
         <td>Alvarez</td>
         <td>25</td>
       </tr>
       <tr>
         <td>Carlos</td>
         <td>Alvarez</td>
         <td>25</td>
       </tr>
       <tr>
         <td>Carlos</td>
         <td>Alvarez</td>
         <td>25</td>
       </tr>
     </tbody>
   </table>
</section>

---
