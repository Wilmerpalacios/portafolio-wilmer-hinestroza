# 🚀 Portafolio Web Profesional — Wilmer Hinestroza Palacios

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)](https://numpy.org/)
[![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)](https://powerbi.microsoft.com/)
[![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white)](https://en.wikipedia.org/wiki/SQL)
[![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Status](https://img.shields.io/badge/Status-Activo%20%2F%20Producci%C3%B3n-00b894?style=for-the-badge)](#)

Sitio web de portafolio profesional y responsivo de **Wilmer Hinestroza Palacios**, estudiante de último semestre de Ingeniería de Software en la **Universidad Iberoamericana de Colombia** y egresado del **Diplomado en Análisis de Datos con Python**.

El portafolio refleja un perfil híbrido de alto valor tecnológico: **Ingeniería y Desarrollo de Software** combinado con **Análisis de Datos e Inteligencia de Negocios (BI)**. Cuenta con estética *Glassmorphism*, modo oscuro (*Cyber/Dark Theme*), fondo dinámico de partículas interactivas, animaciones vectoriales locales, arquitectura bilingüe completa (**Español / Inglés**) y formulario de contacto asíncrono con integración directa a correo electrónico y WhatsApp.

---

## 📑 Tabla de Contenidos

1. [Vista Previa y Enlaces](#-vista-previa-y-enlaces)
2. [Perfil Profesional Destacado](#-perfil-profesional-destacado)
3. [Características Principales](#-características-principales)
4. [Estructura del Proyecto](#-estructura-del-proyecto)
5. [Tecnologías y Librerías Utilizadas](#-tecnologías-y-librerías-utilizadas)
6. [Documentación Detallada de Componentes](#-documentación-detallada-de-componentes)
   - [6.1 Marcado Semántico (`index.html`)](#61-marcado-semántico-indexhtml)
   - [6.2 Sistema de Diseño y Estilos (`style.css`)](#62-sistema-de-diseño-y-estilos-stylecss)
   - [6.3 Lógica, i18n y Eventos (`script.js`)](#63-lógica-i18n-y-eventos-scriptjs)
7. [Matriz de Habilidades y Tecnologías](#-matriz-de-habilidades-y-tecnologías)
8. [Guía de Ejecución Local](#-guía-de-ejecución-local)
9. [Guía de Mantenimiento y Personalización](#-guía-de-mantenimiento-y-personalización)
10. [Guía de Despliegue en Producción (Gratuito)](#-guía-de-despliegue-en-producción-gratuito)
11. [Autor y Redes Profesionales](#-autor-y-redes-profesionales)

---

## 🌐 Vista Previa y Enlaces

* **Servidor Local Activo:** [http://localhost:8000](http://localhost:8000)
* **Perfil de LinkedIn:** [linkedin.com/in/wilmer-hinestroza-palacios-9b75962b0](https://www.linkedin.com/in/wilmer-hinestroza-palacios-9b75962b0/)
* **Perfil de GitHub:** [github.com/Wilmerpalacios](https://github.com/Wilmerpalacios)
* **Acceso Directo:** Archivo `index.html` compatible con cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, Brave).

---

## 👨‍💻 Perfil Profesional Destacado

* **Formación Académica:** 8vo y último semestre de Ingeniería de Software — Universidad Iberoamericana de Colombia.
* **Especialización Complementaria:** Diplomado en Análisis de Datos con Python (NumPy, Pandas, Power BI, Excel avanzado).
* **Propuesta de Valor:** Integración de desarrollo web moderno, arquitectura de sistemas y bases de datos relacionales con ciencia y análisis de datos para transformar información en herramientas estratégicas y toma de decisiones acertadas.

---

## ✨ Características Principales

* 🎨 **Diseño Moderno & Glassmorphism:** Paleta de contrastes oscuros profundos (`#0d0d2b`, `#131438`), acento verde esmeralda neón (`#00b894`), tarjetas traslúcidas con efecto de desenfoque (`backdrop-filter: blur()`).
* 🌌 **Fondo Interactivo con Partículas:** Red de nodos conectada mediante `particles.js`, con respuestas dinámicas al cursor del usuario en modo `grab` y `push`.
* 🎬 **Animación Vectorial Local Lottie:** Integración de reproductor Lottie con archivo JSON local (`img/developer.json`) para garantizar carga inmediata sin dependencias de red externas y con sistema de respaldo automático a prueba de fallos.
* 🌍 **Internacionalización (i18n) Bilingüe en Tiempo Real:**
  - Alternador instantáneo entre **Español (ES)** e **Inglés (EN)**.
  - Sin recargas de página.
  - Persistencia del idioma de preferencia en `localStorage` (`wilmer_portfolio_lang`).
* 📱 **Diseño 100% Responsivo:** Menú de navegación adaptable con apertura suave y control táctil para teléfonos, tablets y pantallas de escritorio.
* 📨 **Formulario de Contacto Funcional vía AJAX:**
  - Envío asíncrono con `fetch()` hacia el endpoint de Formspree.
  - Indicadores visuales en tiempo real (spinner de carga, mensajes de confirmación de éxito y captura de errores sin recargar la web).
* 💬 **Integración Directa con WhatsApp:** Botón con llamada a la acción hacia el API directa de WhatsApp (`+57 323 447 8529`).
* 🔍 **Optimización SEO y Semántica Web:** Encabezados jerárquicos (`h1`, `h2`, `h3`), metadatos de autoría y palabras clave actualizados, y atributos `aria-label` para accesibilidad.

---

## 📂 Estructura del Proyecto

```text
Portafoliowhp/
├── index.html                 # Estructura semántica principal y marcado DOM
├── style.css                  # Hoja de estilos: variables CSS, layouts Grid/Flexbox y animaciones
├── script.js                  # Lógica interactiva: traducciones (i18n), AJAX, menú móvil y partículas
├── img/                       # Recursos multimedia y gráficos del proyecto
│   ├── developer.json         # Animación vectorial Lottie local (desarrollador programando)
│   └── imagen-habilidades.png # Ilustración técnica de la sección de habilidades
└── README.md                  # Documentación técnica integral y profesional
```

---

## 🛠 Tecnologías y Librerías Utilizadas

| Categoría | Recurso / Herramienta | Aplicación en el Proyecto |
| :--- | :--- | :--- |
| **Lenguaje de Estructura** | HTML5 Semántico | Maquetación accesible, estructura lógica y SEO. |
| **Lenguaje de Diseño** | CSS3 Vanilla Moderno | Variables CSS (`:root`), Glassmorphism, CSS Grid, Flexbox y Media Queries. |
| **Lenguaje de Programación** | JavaScript (ES6+) | Lógica del cliente, asincronía (`Fetch API`, `async/await`), persistencia (`localStorage`). |
| **Tipografía** | [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins) | Pesos 300 a 700 para contraste jerárquico óptimo. |
| **Iconografía** | [Font Awesome 6.5.1](https://fontawesome.com/) | Iconos vectoriales de tecnologías, redes y acciones. |
| **Efectos Visuales** | [Particles.js 2.0.0](https://vincentgarreau.com/particles.js/) | Constelación interactiva en canvas de fondo. |
| **Animación Web** | [@lottiefiles/lottie-player](https://lottiefiles.com/) | Renderizador de animación vectorial en el Hero. |
| **Servicio de Correo** | [Formspree](https://formspree.io/) | Procesamiento de formularios de contacto sin backend propio. |

---

## 🔍 Documentación Detallada de Componentes

### 6.1 Marcado Semántico (`index.html`)

1. **Barra de Navegación (`<nav class="navbar">`)**:
   - Logotipo personal estilizado (`Wilmer.dev`).
   - Botón toggle hamburguesa (`#nav-toggle`) con animación de icono para dispositivos móviles.
   - Enlaces con desplazamiento suave a secciones (`#inicio`, `#sobre-mi`, `#habilidades`, `#proyectos`, `#contacto`).
   - Selector de idioma dinámico (`#btn-es`, `#btn-en`).

2. **Cabecera Principal (`<header id="inicio" class="hero">`)**:
   - Insignia de estado: *Disponible para nuevos proyectos*.
   - Nombre completo del autor en `<h1>`.
   - Subtítulo académico: `Estudiante de último semestre de Ingeniería de Software · Diplomado en Análisis de Datos con Python`.
   - Propuesta de valor orientada a soluciones tecnológicas y toma de decisiones basada en datos.
   - Botones de llamado a la acción (*Ver Proyectos* y *Contáctame*).
   - Enlaces directos a redes: LinkedIn oficial, GitHub, correo electrónico y WhatsApp.
   - Reproductor Lottie con el recurso local `img/developer.json`.

3. **Sobre Mí (`<section id="sobre-mi">`)**:
   - Biografía profesional organizada en 4 bloques de texto continuos:
     - **Párrafo 1 (`#sobre-mi-p1`)**: Trayectoria de 8vo semestre en la Universidad Iberoamericana y áreas dominadas.
     - **Párrafo 2 (`#sobre-mi-p2`)**: Diplomado en Análisis de Datos con Python (Python, NumPy, Pandas, Power BI, Excel).
     - **Párrafo 3 (`#sobre-mi-p3`)**: Fundamentos de ingeniería: POO, estructuras de datos, calidad, pruebas y mantenimiento.
     - **Párrafo 4 (`#sobre-mi-p4`)**: Interés por la analítica de datos, bases de datos y desarrollo continuo en proyectos de impacto.
   - Panel de 4 tarjetas estadísticas destacadas (`.stat-box`):
     - **8vo Semestre** *(Último Semestre)*
     - **Diplomado** *(Análisis de Datos Python)*
     - **Software & Datos** *(Desarrollo & Bases de Datos)*
     - **Ibero** *(Universidad Iberoamericana)*

4. **Habilidades & Tecnologías (`<section id="habilidades">`)**:
   - **Barra de Tecnologías Destacadas (`.tech-destacados`)**:
     Píldoras con acento neón de las tecnologías insignia: `Python · Pandas · NumPy · Power BI · Excel · SQL · JavaScript · HTML · CSS · Git · GitHub · Django`.
   - **Ilustración Lateral Fija (`.imagen-animada-lateral`)**:
     Imagen técnica con posicionamiento adhesivo (`position: sticky; top: 100px`) y animación suave de flotación.
   - **6 Categorías Profesionales Estructuradas** (ver sección 7 para la matriz completa).

5. **Proyectos Destacados (`<section id="proyectos">`)**:
   - **Sistema de Biblioteca**: Aplicación en Python con estructuras de árboles binarios de búsqueda (BST) y POO.
   - **Uniraff**: Plataforma web para rifas con pasarela de pagos integrada y panel de administración centralizado.
   - Botones funcionales para inspeccionar código en GitHub y contactar.

6. **Contacto (`<section id="contacto">`)**:
   - Columna informativa con accesos directos a Email, perfil de LinkedIn actualizado y caja destacada de WhatsApp.
   - Formulario validado con campos para Nombre, Correo y Mensaje, con botón de envío y contenedor de estado AJAX.

7. **Pie de Página (`<footer class="footer">`)**:
   - Créditos con rol: *Ingeniero de Software & Analista de Datos* y enlaces directos.

---

### 6.2 Sistema de Diseño y Estilos (`style.css`)

El diseño se gobierna a través de variables globales centralizadas en `:root`:

```css
:root {
  /* Paleta de Marca y Acento */
  --color-primary: #00b894;         /* Verde esmeralda neón */
  --color-primary-hover: #00997b;   /* Tono esmeralda profundo para estados hover */
  --color-primary-light: rgba(0, 184, 148, 0.15);
  --color-primary-glow: rgba(0, 184, 148, 0.35);

  /* Fondos y Superficies Glassmorphism */
  --color-bg: #0d0d2b;              /* Azul medianoche profundo */
  --color-bg-alt: #131438;          /* Superficie secundaria */
  --color-card-bg: rgba(30, 39, 46, 0.75); /* Fondo traslúcido para tarjetas */
  --color-glass: rgba(255, 255, 255, 0.05);
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-hover: rgba(0, 184, 148, 0.5);

  /* Tipografía */
  --color-text: #f5f6fa;
  --color-text-muted: #a4b0be;
  --color-heading: #ffffff;

  /* Sombras y Resplandores */
  --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.3);
  --shadow-glow: 0 0 20px rgba(0, 184, 148, 0.3);

  /* Radios de Borde y Transiciones */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --transition: all 0.3s ease;
}
```

#### Puntos Clave de Estilo:
* **Barra Destacada (`.tech-destacados`)**: Fondo de cristal con borde iluminado y píldoras interactivas con elevación al cursor (`translateY(-2px)`).
* **Ilustración Lateral Sticky**: En pantallas de escritorio, `.imagen-animada-lateral` acompaña visualmente el recorrido del usuario mientras revisa las 6 categorías de habilidades.
* **Sistema Responsivo**: Adaptación fluida para tablets (`max-width: 992px`) y teléfonos (`max-width: 768px`), colapsando cuadrículas de dos columnas en bloques verticales legibles.

---

### 6.3 Lógica, i18n y Eventos (`script.js`)

1. **Diccionario i18n Completo (`translations`)**:
   Mapea cada identificador de texto tanto en Español como en Inglés, asegurando que todos los párrafos de biografía, los títulos de las 6 categorías de habilidades y los estados del formulario se actualicen instantáneamente al pulsar los botones de idioma.
2. **Persistencia Local (`localStorage`)**:
   Almacena la elección del usuario bajo la clave `"wilmer_portfolio_lang"` para que al volver a visitar el sitio recuerde el idioma seleccionado.
3. **Control Asíncrono de Formularios (`Fetch API`)**:
   Intercepta el evento `submit`, bloquea el botón para prevenir envíos duplicados, muestra un icono giratorio (`fa-spinner fa-spin`), y gestiona las respuestas de éxito o error con alertas visuales dinámicas.
4. **Manejador a Prueba de Fallos para Lottie**:
   Monitorea el componente `<lottie-player>` y, ante cualquier eventualidad de carga, sustituye automáticamente el reproductor por un icono vectorial animado flotante, asegurando que jamás se muestren símbolos rotos o iconos de advertencia en pantalla.

---

## 📊 Matriz de Habilidades y Tecnologías

El portafolio expone las competencias técnicas organizadas en 6 áreas de especialidad:

```text
├── 1. Análisis de Datos & BI
│   ├── Python para análisis de datos
│   ├── NumPy & Pandas
│   ├── Microsoft Power BI & Excel Avanzado
│   ├── Limpieza y transformación de datos (ETL)
│   ├── Visualización de datos
│   └── Análisis exploratorio de datos (EDA)
│
├── 2. Bases de Datos & Gestión
│   ├── SQL (Consultas estructuradas y avanzadas)
│   ├── Modelado de bases de datos
│   ├── Diseño relacional
│   └── Fundamentos de gestión de datos
│
├── 3. Lenguajes de Programación & Frameworks
│   ├── Python
│   ├── JavaScript (ES6+)
│   ├── Django Framework
│   ├── HTML5 & CSS3
│   └── Desarrollo web responsivo
│
├── 4. Desarrollo de Software & Metodologías
│   ├── Programación Orientada a Objetos (POO)
│   ├── Estructuras de datos
│   ├── Análisis y diseño de sistemas
│   ├── Desarrollo de aplicaciones
│   ├── Calidad de software
│   ├── Pruebas de software
│   └── Mantenimiento de aplicaciones
│
├── 5. Herramientas & Entorno de Trabajo
│   ├── Git & GitHub
│   ├── Visual Studio Code
│   └── Terminal & PowerShell
│
└── 6. Habilidades Analíticas & Profesionales
    ├── Resolución de problemas complejos
    ├── Análisis lógico y trabajo con datos
    ├── Pensamiento analítico
    ├── Aprendizaje autónomo
    └── Trabajo en equipo colaborativo
```

---

## 💻 Guía de Ejecución Local

Para visualizar y trabajar en el proyecto en tu entorno local:

### Método 1: Servidor Local con Python (Recomendado)
Abre PowerShell o tu terminal en la carpeta del proyecto y ejecuta:
```bash
python -m http.server 8000
```
Luego visita: **`http://localhost:8000`**

### Método 2: Servidor con Node.js
```bash
npx -y serve .
```

### Método 3: Extensión Live Server de VS Code
1. Abre la carpeta del proyecto en **Visual Studio Code**.
2. Haz clic derecho en `index.html`.
3. Selecciona **"Open with Live Server"**.

### Método 4: Apertura Directa de Archivo
Haz doble clic sobre el archivo [index.html](file:///c:/Users/user/OneDrive/Desktop/Proyectos%20VS%202025/Portafoliowhp/index.html) para abrirlo en tu navegador.

---

## ⚙️ Guía de Mantenimiento y Personalización

### Cómo agregar un nuevo proyecto a la galería
1. Localiza `<section id="proyectos">` en `index.html` y añade un nuevo bloque `<article class="card">`:
```html
<article class="card">
  <div class="card-icon">
    <i class="fas fa-chart-bar"></i>
  </div>
  <div class="card-body">
    <div class="card-tags">
      <span class="badge">Python</span>
      <span class="badge">Power BI</span>
      <span class="badge">Pandas</span>
    </div>
    <h3><span id="titulo-proyecto-3">Dashboard de Ventas</span></h3>
    <p><span id="descripcion-proyecto-3">Análisis exploratorio de datos y visualización interactiva para optimización comercial.</span></p>
  </div>
  <div class="card-footer">
    <a href="https://github.com/Wilmerpalacios" target="_blank" class="btn-card">
      <i class="fab fa-github"></i> <span class="txt-ver-codigo">Ver Código</span>
    </a>
    <a href="#contacto" class="btn-card outline">
      <i class="fas fa-info-circle"></i> <span class="txt-detalles">Consultar</span>
    </a>
  </div>
</article>
```
2. Agrega las claves `"titulo-proyecto-3"` y `"descripcion-proyecto-3"` en `script.js` dentro de `translations.es` y `translations.en`.

### Cómo personalizar los textos y traducciones
Todas las cadenas de texto se encuentran centralizadas en `script.js` dentro del objeto `translations`. Basta con modificar los valores de cada clave para mantener la sincronización bilingüe.

---

## 🚀 Guía de Despliegue en Producción (Gratuito)

Al ser una aplicación web estática pura (HTML5, CSS3 y JS), puede publicarse con costo cero y conexión segura HTTPS:

### Opción A: GitHub Pages (Recomendada)
1. En la carpeta del proyecto, ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Despliegue inicial portafolio profesional"
   git branch -M main
   git remote add origin https://github.com/Wilmerpalacios/Portafoliowhp.git
   git push -u origin main
   ```
2. En tu repositorio de GitHub, ve a **Settings** > **Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios. En unos instantes tu portafolio estará publicado en:  
   `https://Wilmerpalacios.github.io/Portafoliowhp/`

### Opción B: Vercel o Netlify
1. Ingresa a [vercel.com](https://vercel.com) o [netlify.com](https://www.netlify.com).
2. Arrastra la carpeta `Portafoliowhp` directamente a su panel.
3. Obtendrás un dominio público inmediato con certificado SSL automático (ej. `wilmer-portafolio.vercel.app`).

---

## 👤 Autor y Redes Profesionales

**Wilmer Hinestroza Palacios**  
*Estudiante de último semestre de Ingeniería de Software — Universidad Iberoamericana de Colombia*  
*Diplomado en Análisis de Datos con Python · Desarrollador de Software*

* 📧 **Correo Electrónico:** [Wilmeee70@gmail.com](mailto:Wilmeee70@gmail.com)
* 💼 **LinkedIn:** [linkedin.com/in/wilmer-hinestroza-palacios-9b75962b0](https://www.linkedin.com/in/wilmer-hinestroza-palacios-9b75962b0/)
* 🐙 **GitHub:** [github.com/Wilmerpalacios](https://github.com/Wilmerpalacios)
* 📱 **WhatsApp:** [+57 323 447 8529](https://wa.me/573234478529)

---
*© 2025 Wilmer Hinestroza Palacios. Todos los derechos reservados.*
