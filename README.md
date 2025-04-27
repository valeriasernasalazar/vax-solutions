# vax-solutions
# VAX Solutions - Sitio Web Corporativo

Este es el sitio web corporativo de VAX Solutions, una empresa de consultoría especializada en ciencia de datos e inteligencia artificial.

## Tecnologías utilizadas

- SvelteKit - Framework web
- TailwindCSS - Framework CSS
- Node.js y npm - Entorno de ejecución y gestor de paquetes

## Requisitos previos

- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/vax-solutions/website.git
cd website
```

2. Instalar dependencias:
```bash
npm install
```

## Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## Construcción para producción

Para construir la versión de producción:

```bash
npm run build
```

Para previsualizar la versión de producción:

```bash
npm run preview
```

## Estructura del proyecto

```
src/
├── routes/              # Páginas y rutas de la aplicación
│   ├── +page.svelte    # Página de inicio
│   ├── servicios/      # Sección de servicios
│   ├── nosotros/       # Sección sobre nosotros
│   ├── casos-exito/    # Casos de éxito
│   ├── sectores/       # Sectores industriales
│   ├── blog/           # Blog y artículos
│   └── contacto/       # Página de contacto
├── app.css             # Estilos globales
└── app.html           # Plantilla HTML principal
```

## Características principales

- Diseño responsive y moderno
- Optimizado para SEO
- Navegación fluida entre páginas
- Formulario de contacto
- Blog con filtrado por categorías
- Integración con redes sociales
- Newsletter
- Casos de éxito y testimonios
- Secciones específicas por industria

## Contribuir

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

VAX Solutions - info@vaxsolutions.com 
