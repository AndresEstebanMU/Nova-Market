# 🛒 NovaMarket

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)

> **E-commerce full-stack moderno con panel para vendedores y gestión de usuarios.**

NovaMarket es una plataforma de comercio electrónico desarrollada como proyecto de portafolio. Simula un marketplace real donde los usuarios pueden registrarse, comprar productos y, además, acceder a un panel de vendedor para gestionar y publicar sus propios artículos.

El proyecto destaca por el uso de **Inngest** para el manejo de eventos en segundo plano y **Clerk** para una autenticación robusta y segura.

## 🚀 Demo

🔗 **[Ver Proyecto en Vivo](https://nova-market-rose.vercel.app/)**

[Captura de pantalla de la Home](./assets/home.png)


## ✨ Funcionalidades Clave

* **🛍️ Experiencia de Compra:** Catálogo de productos, carrito de compras funcional y checkout.
* **🔐 Autenticación Segura:** Gestión de usuarios completa (Login, Registro, Perfil) potenciada por **Clerk**.
* **📦 Panel de Vendedor:** Área dedicada donde los usuarios con rol de vendedor pueden crear, editar y eliminar sus productos.
* **⚡ Eventos Asíncronos:** Integración con **Inngest** para manejar procesos en background de forma eficiente.
* **🎨 Diseño Responsivo:** Interfaz moderna y adaptable a móviles construida con **Tailwind CSS**.

## 🛠️ Stack Tecnológico

* **Frontend & Backend:** [Next.js](https://nextjs.org/) (App Router)
* **Lenguaje:** JavaScript
* **Estilos:** Tailwind CSS
* **Base de Datos:** MongoDB (Mongoose)
* **Autenticación:** Clerk
* **Serverless Queues/Events:** Inngest

## 💻 Instalación y Configuración

Sigue estos pasos para correr el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/AndresEstebanMU/Nova-Market.git
cd Nova-Market
```

### 2. Instalar dependencias
```bash
npm install
# o si usas yarn/pnpm
yarn install
```

### 3. Configurar Variables de Entorno
crea un nuevo archivo .env y añade tus credenciales. Debería verse similar a esto:
```.env
# Public Environment Variables
NEXT_PUBLIC_CURRENCY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

# Private Environment Variables
CLERK_SECRET_KEY=
MONGODB_URI=
INNGEST_SIGNING_KEY=
INNGEST_EVENT_KEY=

# Cloudinary
CLOUDINARY_CLOUD_NAME =
CLOUDINARY_API_KEY =
CLOUDINARY_API_SECRET =
```

### 4. Ejecutar el servidor de desarrollo
```Bash
npm run dev
```
Abre http://localhost:3000 en tu navegador para ver la aplicación.

### 5. Inicia sesión

En la esquina superior derecha inicia sesión o crea una cuenta nueva para acceder al menú de usuario y poder hacer la compra ficticia de los productos de tu carrito.