# Copia de difunto y ex twitter ahora X por un jr sin trabajo

## Descripción
Este es un proyecto de e-commerce desarrollado con React, TypeScript y Vite. La aplicación ofrece una experiencia de compra moderna y responsive, integrando diversas funcionalidades como autenticación, gestión de productos, carrito de compras y procesamiento de pagos.

## Tecnologías Principales
- React 18
- TypeScript
- Vite
- Material-UI (MUI)
- Zustand (Gestión de estado)
- React Router DOM
- MercadoPago SDK
- Framer Motion (Animaciones)
- Recharts (Gráficos)
- Sonner (Notificaciones)

## Requisitos Previos
- Node.js (versión recomendada: 18 o superior)
- pnpm (gestor de paquetes)

## Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd ecommerce
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```
VITE_API_URL=tu_url_api
VITE_MERCADOPAGO_PUBLIC_KEY=tu_public_key
```

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo
- `pnpm build`: Construye la aplicación para producción
- `pnpm preview`: Previsualiza la versión de producción
- `pnpm test`: Ejecuta las pruebas

## Estructura del Proyecto

```
src/
├── assets/         # Recursos estáticos (imágenes, fuentes, etc.)
├── components/     # Componentes reutilizables
├── hooks/         # Custom hooks
├── pages/         # Componentes de página
├── routes/        # Configuración de rutas
├── services/      # Servicios y llamadas a API
├── styles/        # Estilos globales y temas
├── types/         # Definiciones de tipos TypeScript
└── utils/         # Utilidades y funciones auxiliares
```

## Características Principales

- 🛍️ Catálogo de productos
- 🔍 Búsqueda y filtrado
- 🛒 Carrito de compras
- 👤 Autenticación de usuarios
- 💳 Integración con MercadoPago
- 📱 Diseño responsive
- 🌐 Internacionalización
- 📊 Panel de administración
- 📈 Estadísticas y reportes

## Despliegue

El proyecto está configurado para ser desplegado en Vercel. El archivo `vercel.json` contiene la configuración necesaria para el despliegue.

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.