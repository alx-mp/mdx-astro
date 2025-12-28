# Demo MDX + Astro - Página de Producto E-commerce

Este proyecto demuestra **el poder de MDX** combinando contenido Markdown con componentes interactivos para crear una página de producto estilo dropshipping profesional.

## 🚀 Características

- ✨ **Página de Producto Completa** - Header con precio, imágenes, botón de compra
- 📸 **Historias Interactivas** - Componente estilo Instagram Stories con modal
- 🎨 **Secciones Dinámicas** - Fondos abstractos animados (gradientes, puntos, ondas)
- 🎥 **Video Showcase** - Componente para mostrar videos de producto
- 📝 **Contenido MDX** - Markdown limpio mezclado con componentes React
- 🌈 **Diseño Moderno** - Gradientes, animaciones suaves, totalmente responsive

## 🎯 ¿Qué es MDX y por qué es Poderoso?

**MDX = Markdown + JSX**

Imagina que puedes escribir contenido como siempre (en Markdown), pero insertar componentes interactivos donde lo necesites:

```mdx
# Mi Producto Increíble

Este es texto normal. Puedo usar **negrita**, *cursiva*, listas...

<InstaStories
  historias={[
    { thumb: 'img1.jpg', video: 'video1.mp4', titulo: 'Demo' }
  ]}
/>

Y seguir escribiendo después del componente.
```

### Ventajas de MDX

1. **Contenido Limpio** - Los editores escriben en Markdown normal, fácil de leer
2. **Componentes Reutilizables** - Creas el componente una vez, lo usas en 100 productos
3. **Interactividad** - Modales, carruseles, videos - sin ensuciar el contenido
4. **Separación de Responsabilidades** - Editores gestionan contenido, devs la lógica
5. **Mantenibilidad** - Actualizar un componente actualiza todas las páginas que lo usan

## 📁 Estructura del Proyecto

```
producto-mdx/
├── public/
│   ├── images/          # Imágenes del producto (SVG placeholders)
│   └── videos/          # Videos demostrativos
├── src/
│   ├── components/
│   │   ├── InstaStories.jsx       # Historias estilo Instagram (Preact)
│   │   ├── ProductHeader.astro    # Header del producto con precio y CTA
│   │   ├── ProductSection.astro   # Sección con fondos abstractos
│   │   ├── VideoShowcase.astro    # Showcase de video
│   │   └── Counter.jsx            # Contador de ejemplo
│   ├── layouts/
│   │   └── ProductLayout.astro    # Layout para páginas de producto
│   └── pages/
│       ├── index.mdx              # Página de inicio
│       └── producto.mdx           # 🎯 PÁGINA DE PRODUCTO (aquí está la magia)
└── astro.config.mjs
```

## 🎨 Componentes Creados

### 1. ProductHeader
Header completo con:
- Imagen del producto con badge de descuento
- Título, rating con estrellas, precio
- Lista de características
- Botones de compra (Comprar Ahora / Agregar al Carrito)
- Trust badges (Envío gratis, Compra segura, etc.)

### 2. InstaStories (Interactivo)
Componente Preact con:
- Círculos con bordes gradiente estilo Instagram
- Modal fullscreen al hacer click
- Soporte para imágenes o videos
- Animaciones suaves

### 3. ProductSection
Sección reutilizable con:
- Fondos abstractos animados (gradientes, puntos, ondas)
- Layout de 2 columnas (imagen + contenido)
- Opción `reverse` para alternar disposición
- Animaciones de entrada

### 4. VideoShowcase
Showcase de video con:
- Reproductor de video con controles
- Título y descripción
- Diseño centrado con sombras elegantes

## 🚦 Cómo Ejecutar

1. **Instalar dependencias** (ya está hecho):
```bash
cd producto-mdx
npm install
```

2. **Iniciar servidor de desarrollo**:
```bash
npm run dev
```

3. **Abrir en el navegador**:
   - Página de inicio: http://localhost:4321/
   - Página de producto: http://localhost:4321/producto

4. **Build para producción**:
```bash
npm run build
npm run preview
```

## 📄 Archivos Clave

### `src/pages/producto.mdx` - La Estrella del Show

Este archivo demuestra todo el poder de MDX. Observa cómo mezcla:

```mdx
---
layout: ../layouts/ProductLayout.astro
title: "Zapatillas Ultra Comfort Pro"
---

import ProductHeader from '../components/ProductHeader.astro';
import InstaStories from '../components/InstaStories.jsx';

<!-- Header con precio y botón de compra -->
<ProductHeader
  productName="Zapatillas Ultra Comfort Pro"
  price={89.99}
  oldPrice={149.99}
  mainImage="/images/producto-principal.svg"
/>

<!-- Contenido en Markdown normal -->
## El Poder de MDX

Aquí escribes contenido normal en **Markdown**. Es fácil de leer y editar.

<!-- Componente interactivo estilo Instagram -->
<InstaStories
  client:load
  historias={[
    { thumb: '/images/thumb1.svg', titulo: 'Calidad' },
    { thumb: '/images/thumb2.svg', titulo: 'Durabilidad' }
  ]}
/>

<!-- Sección con fondos animados -->
<ProductSection
  title="Tecnología Cloud"
  image="/images/feature.svg"
  background="gradient"
>

Contenido de la sección en **Markdown**...

### Beneficios
- Beneficio 1
- Beneficio 2

</ProductSection>

<!-- Y así sucesivamente... -->
```

## 🎯 Casos de Uso

Este proyecto es perfecto para:

- **E-commerce / Dropshipping** - Páginas de producto ricas y atractivas
- **Landing Pages** - Combinar contenido editorial con componentes de conversión
- **Documentación Interactiva** - Docs técnicas con demos embebidos
- **Blogs Avanzados** - Artículos con gráficos interactivos, calculadoras, etc.
- **Portfolios** - Mostrar proyectos con componentes dinámicos

## 🔧 Personalización

### Cambiar Colores
Los gradientes principales están en CSS custom properties. Busca:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Y reemplaza con tus colores.

### Agregar Más Productos
1. Duplica `src/pages/producto.mdx`
2. Renombra a `producto-2.mdx`
3. Cambia frontmatter, texto y props de componentes
4. ¡Listo! Los componentes se reutilizan automáticamente

### Crear Nuevos Componentes
1. Crea en `src/components/MiComponente.astro` (o `.jsx` para interactividad)
2. Impórtalo en tu página MDX: `import MiComponente from '../components/MiComponente.astro'`
3. Úsalo: `<MiComponente prop="valor" />`

## 📚 Aprende Más

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de MDX](https://mdxjs.com)
- [Guía de MDX en Astro](https://docs.astro.build/es/guides/integrations-guide/mdx/)

## 💡 Concepto Clave

**La Magia de MDX**:
- El **editor de contenido** solo ve Markdown limpio y etiquetas `<NombreComponente />`
- El **desarrollador** crea componentes complejos con toda la lógica, CSS y animaciones
- El **resultado** es contenido mantenible + experiencia visual de alta calidad

## 🌟 Ejemplo Real

Imagina una tienda con 500 productos. Sin MDX:
- Copias y pegas HTML/CSS/JS en cada página
- 500 archivos enormes y difíciles de mantener
- Un cambio de diseño = editar 500 archivos

Con MDX:
- Cada producto es un archivo MDX de ~100 líneas (solo contenido)
- Los componentes se reutilizan automáticamente
- Un cambio de diseño = editar 1 componente, afecta 500 productos

**Eso es escalabilidad.**

---

## 🎉 ¡Disfruta creando con MDX!

Este proyecto demuestra que puedes tener lo mejor de ambos mundos:
- **Simplicidad** de Markdown para contenido
- **Potencia** de React/Vue/Preact para interactividad

Perfecto para e-commerce, landing pages, documentación y más.
