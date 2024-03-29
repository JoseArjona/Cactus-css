---
title: "Imágenes"
---

Cactus CSS ofrece clases de utilidad para mejorar el manejo y presentación de imágenes en tus proyectos.

## IMG

`.img:` Esta clase proporciona reglas esenciales para un mejor manejo de imágenes responsivas. Se aplica directamente al elemento `<img>`.

- `max-width: 100%;`: Garantiza que las imágenes no excedan el ancho de su contenedor.
- `height: auto`: Mantiene la proporción de aspecto de la imagen al redimensionarse.
- `display: block;`: Convierte la imagen en un elemento de bloque para ocupar todo el ancho disponible.
- `object-fit`: contain;: Hace que la imagen se ajuste dentro de su contenedor sin perder la relación de aspecto (podría generar letterboxing).
- `aspect-ratio`: auto; Mantiene la correcta relación de la imagen
- `mask-image`: linear-gradient(black 80%, transparent); Se usa para crear un desvanecimiento gradual en la parte inferior de la imagen.

### Ejemplo

```html
<img src="cactus1.png" class="img" />
```

#### Resultado

<img src="https://images.pexels.com/photos/2231380/pexels-photo-2231380.jpeg?auto=compress&cs=tinysrgb&w=300" class="img">

## Relación de aspecto

### aspect-large

`.aspect-large`: Fuerza una relación de aspecto de 16:9, común en videos o imágenes de paisajes.

#### Ejemplo

```html
<img src="cactus2.png" class="img aspect-large" />
```

#### Resultado

<img src="https://images.pexels.com/photos/409813/pexels-photo-409813.jpeg?auto=compress&cs=tinysrgb&w=300" class="img aspect-large">

### aspect-box

`.aspect-box`: Fuerza una relación de aspecto de 1:1, creando una imagen cuadrada.

#### Ejemplo

```html
<img src="cactus3.png" class="img aspect-box" />
```

#### Resultado

<img src="https://images.pexels.com/photos/975018/pexels-photo-975018.jpeg?auto=compress&cs=tinysrgb&w=300" class="img aspect-box">
