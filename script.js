/**
 * PORTAFOLIO - WILMER HINESTROZA PALACIOS
 * script.js - Lógica interactiva, i18n bilingüe, navegación y envío AJAX
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portafolio de Wilmer cargado correctamente.");

  // ==========================================
  // 1. DICCIONARIO DE TRADUCCIÓN (i18n)
  // ==========================================
  const translations = {
    es: {
      // Navbar
      "nav-inicio": "Inicio",
      "nav-sobre-mi": "Sobre mí",
      "nav-habilidades": "Habilidades",
      "nav-proyectos": "Proyectos",
      "nav-contacto": "Contacto",

      // Hero
      "hero-badge": '<i class="fas fa-code"></i> Disponible para nuevos proyectos',
      "texto-uni": "Estudiante de último semestre de Ingeniería de Software · Diplomado en Análisis de Datos con Python",
      "hero-desc": "Enfocado en el desarrollo de software y el análisis de datos. Combino la ingeniería de software, bases de datos y Python para diseñar y construir soluciones tecnológicas modernas, sistemas inteligentes y análisis que potencian la toma de decisiones.",
      "btn-ver-proyectos": '<i class="fas fa-laptop-code"></i> <span>Ver Proyectos</span>',
      "btn-hero-contacto": '<i class="fas fa-envelope"></i> <span>Contáctame</span>',

      // Sobre Mí
      "titulo-sobre-mi": "Sobre mí",
      "sobre-mi-p1": "Soy estudiante de octavo y último semestre de Ingeniería de Software en la Universidad Iberoamericana de Colombia. Mi formación abarca programación, desarrollo de software, bases de datos, análisis y diseño de sistemas, desarrollo web, pruebas de software y mantenimiento de aplicaciones.",
      "sobre-mi-p2": "Complementé mi formación con un Diplomado en Análisis de Datos con Python, en el que trabajé con herramientas como Python, NumPy, Pandas, Power BI y Excel, desarrollando un proyecto de análisis de datos. Esta experiencia fortaleció mis habilidades para trabajar con información, analizar datos y generar resultados que pueden apoyar la toma de decisiones.",
      "sobre-mi-p3": "Durante mi carrera también he adquirido conocimientos en programación orientada a objetos, estructuras de datos, bases de datos, desarrollo de aplicaciones web y móviles, pruebas de software, calidad de software y mantenimiento de aplicaciones.",
      "sobre-mi-p4": "Me interesa especialmente el área de datos y bases de datos, sin dejar de lado el desarrollo de software y la creación de soluciones tecnológicas. Me motiva aprender constantemente, asumir nuevos retos y aplicar mis conocimientos en proyectos reales que aporten valor y permitan seguir creciendo profesionalmente.",
      "stat-semestre": "8vo Semestre",
      "stat-carrera": "Último Semestre",
      "stat-perfil": "Diplomado",
      "stat-enfoque": "Análisis de Datos Python",
      "stat-area": "Software & Datos",
      "stat-area-sub": "Desarrollo & Bases de Datos",
      "stat-uni": "Universidad Iberoamericana",

      // Habilidades
      "titulo-habilidades": "Habilidades & Tecnologías",
      "lbl-destacados": '<i class="fas fa-star"></i> Stack Principal Destacado:',
      "cat-analisis-title": "Análisis de Datos",
      "cat-bd-title": "Bases de Datos",
      "cat-lenguajes-title": "Lenguajes de Programación & Frameworks",
      "cat-ingenieria-title": "Desarrollo de Software",
      "cat-herramientas-title": "Herramientas",
      "cat-blandas-title": "Otras Habilidades",

      // Proyectos
      "titulo-proyectos": "Proyectos Destacados",
      "titulo-proyecto-1": "Sistema de Biblioteca",
      "descripcion-proyecto-1": "Un sistema completo en Python implementado con estructuras de árbol binario de búsqueda para la gestión eficiente de préstamos, devoluciones y catálogos de libros.",
      "titulo-proyecto-2": "Uniraff",
      "descripcion-proyecto-2": "Plataforma web para gestión y venta de rifas con pasarela de pagos integrada, verificación automática de números y control administrativo centralizado.",
      "txt-ver-codigo": "Ver Código",
      "txt-detalles": "Consultar",

      // Contacto
      "titulo-contacto": "Contáctame",
      "contacto-info-titulo": "¡Hablemos de tus proyectos!",
      "contacto-info-sub": "¿Tienes una propuesta, idea o vacante disponible? Estoy listo para aportar valor a tu equipo o proyecto.",
      "lbl-correo": "Correo electrónico",
      "texto-whatsapp": "¿Prefieres comunicación rápida por WhatsApp?",
      "btn-whatsapp-txt": "Enviar mensaje directo",
      "lbl-input-nombre": "Tu nombre completo",
      "lbl-input-correo": "Tu correo electrónico",
      "lbl-input-mensaje": "Tu mensaje",
      "input-nombre-placeholder": "Ej. Carlos Mendoza",
      "input-correo-placeholder": "Ej. carlos@empresa.com",
      "input-mensaje-placeholder": "Cuéntame sobre tu proyecto o consulta...",
      "btn-enviar-txt": "Enviar correo",
      "btn-enviando": "Enviando mensaje...",
      "msg-exito": "¡Gracias por contactarme! Tu mensaje ha sido enviado exitosamente. Te responderé a la brevedad.",
      "msg-error": "Hubo un problema al enviar el mensaje. Por favor intenta de nuevo o escríbeme directamente por WhatsApp.",

      // Footer
      "footer-role": "Ingeniero de Software & Analista de Datos"
    },

    en: {
      // Navbar
      "nav-inicio": "Home",
      "nav-sobre-mi": "About Me",
      "nav-habilidades": "Skills",
      "nav-proyectos": "Projects",
      "nav-contacto": "Contact",

      // Hero
      "hero-badge": '<i class="fas fa-code"></i> Available for new projects',
      "texto-uni": "Final-Semester Software Engineering Student · Python Data Analysis Certified",
      "hero-desc": "Focused on software engineering and data analytics. I combine software development, relational databases, and Python to design modern tech solutions, scalable web systems, and data-driven insights that empower strategic decision-making.",
      "btn-ver-proyectos": '<i class="fas fa-laptop-code"></i> <span>View Projects</span>',
      "btn-hero-contacto": '<i class="fas fa-envelope"></i> <span>Contact Me</span>',

      // Sobre Mí
      "titulo-sobre-mi": "About Me",
      "sobre-mi-p1": "I am an eighth and final-semester Software Engineering student at Universidad Iberoamericana (Colombia). My comprehensive background encompasses programming, software development, databases, systems analysis and design, web development, software testing, and application maintenance.",
      "sobre-mi-p2": "I complemented my academic education with a Diploma in Data Analysis with Python, where I mastered tools such as Python, NumPy, Pandas, Power BI, and Excel through real-world data analysis projects. This experience strengthened my capabilities in data cleaning, exploratory data analysis, and delivering actionable results for data-driven decision making.",
      "sobre-mi-p3": "Throughout my degree, I have also acquired deep competencies in object-oriented programming (OOP), data structures, advanced databases, web and mobile application development, software testing, software quality, and lifecycle maintenance.",
      "sobre-mi-p4": "I am particularly passionate about data analytics and databases, alongside software development and creating technological solutions. I am driven by continuous learning, embracing new challenges, and applying my knowledge to real-world projects that foster professional growth.",
      "stat-semestre": "8th Semester",
      "stat-carrera": "Final Semester",
      "stat-perfil": "Postgraduate Diploma",
      "stat-enfoque": "Python Data Analysis",
      "stat-area": "Software & Data",
      "stat-area-sub": "Development & Databases",
      "stat-uni": "Iberoamericana University",

      // Habilidades
      "titulo-habilidades": "Skills & Technologies",
      "lbl-destacados": '<i class="fas fa-star"></i> Featured Core Stack:',
      "cat-analisis-title": "Data Analysis",
      "cat-bd-title": "Databases",
      "cat-lenguajes-title": "Programming Languages & Frameworks",
      "cat-ingenieria-title": "Software Development",
      "cat-herramientas-title": "Tools",
      "cat-blandas-title": "Other Skills",

      // Proyectos
      "titulo-proyectos": "Featured Projects",
      "titulo-proyecto-1": "Library Management System",
      "descripcion-proyecto-1": "A complete Python management system built with binary search tree structures to optimize book loans, returns, and catalog queries.",
      "titulo-proyecto-2": "Uniraff - Raffle Platform",
      "descripcion-proyecto-2": "Comprehensive web platform for raffle management with integrated payment processing, automated ticket verification, and centralized admin panel.",
      "txt-ver-codigo": "View Code",
      "txt-detalles": "Inquire",

      // Contacto
      "titulo-contacto": "Contact Me",
      "contacto-info-titulo": "Let's discuss your project!",
      "contacto-info-sub": "Do you have a project proposal, idea, or job opportunity? I'm ready to bring value to your team.",
      "lbl-correo": "Email Address",
      "texto-whatsapp": "Prefer quick communication via WhatsApp?",
      "btn-whatsapp-txt": "Send direct WhatsApp message",
      "lbl-input-nombre": "Your Full Name",
      "lbl-input-correo": "Your Email Address",
      "lbl-input-mensaje": "Your Message",
      "input-nombre-placeholder": "e.g. John Doe",
      "input-correo-placeholder": "e.g. john@company.com",
      "input-mensaje-placeholder": "Tell me about your project or inquiry...",
      "btn-enviar-txt": "Send Email",
      "btn-enviando": "Sending message...",
      "msg-exito": "Thank you for reaching out! Your message was sent successfully. I will get back to you shortly.",
      "msg-error": "There was an issue sending your message. Please try again or reach out directly on WhatsApp.",

      // Footer
      "footer-role": "Software Engineer & Data Analyst"
    }
  };

  // Variable de idioma actual
  let currentLang = localStorage.getItem("wilmer_portfolio_lang") || "es";

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("wilmer_portfolio_lang", lang);
    document.documentElement.lang = lang;

    const data = translations[lang];

    // Actualizar elementos simples por ID
    for (const [id, value] of Object.entries(data)) {
      const el = document.getElementById(id);
      if (el) {
        if (value.includes("<") && value.includes(">")) {
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      }
    }

    // Actualizar placeholders de inputs
    const inputNombre = document.getElementById("input-nombre");
    if (inputNombre && data["input-nombre-placeholder"]) {
      inputNombre.placeholder = data["input-nombre-placeholder"];
    }

    const inputCorreo = document.getElementById("input-correo");
    if (inputCorreo && data["input-correo-placeholder"]) {
      inputCorreo.placeholder = data["input-correo-placeholder"];
    }

    const inputMensaje = document.getElementById("input-mensaje");
    if (inputMensaje && data["input-mensaje-placeholder"]) {
      inputMensaje.placeholder = data["input-mensaje-placeholder"];
    }

    // Actualizar textos en botones de tarjetas repetidos
    document.querySelectorAll(".txt-ver-codigo").forEach(span => {
      span.textContent = data["txt-ver-codigo"];
    });
    document.querySelectorAll(".txt-detalles").forEach(span => {
      span.textContent = data["txt-detalles"];
    });

    // Actualizar estado activo en botones de idioma
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");
    if (btnEs && btnEn) {
      if (lang === "es") {
        btnEs.classList.add("active");
        btnEn.classList.remove("active");
      } else {
        btnEn.classList.add("active");
        btnEs.classList.remove("active");
      }
    }
  }

  // Escuchadores de cambio de idioma
  const btnEs = document.getElementById("btn-es");
  const btnEn = document.getElementById("btn-en");

  if (btnEs) {
    btnEs.addEventListener("click", () => setLanguage("es"));
  }
  if (btnEn) {
    btnEn.addEventListener("click", () => setLanguage("en"));
  }

  // Inicializar idioma guardado
  setLanguage(currentLang);

  // ==========================================
  // 2. MENÚ MÓVIL RESPONSIVO
  // ==========================================
  const navToggle = document.getElementById("nav-toggle");
  const navWrapper = document.getElementById("nav-wrapper");

  if (navToggle && navWrapper) {
    navToggle.addEventListener("click", () => {
      navWrapper.classList.toggle("open");
      const icon = navToggle.querySelector("i");
      if (icon) {
        if (navWrapper.classList.contains("open")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Cerrar menú al hacer clic en cualquier enlace
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navWrapper.classList.remove("open");
        const icon = navToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  // ==========================================
  // 3. ENVÍO DE FORMULARIO CON FETCH (AJAX)
  // ==========================================
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const btnEnviarTxt = document.getElementById("btn-enviar-txt");
  const btnEnviar = document.getElementById("btn-enviar");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const langData = translations[currentLang];
      const originalBtnHtml = btnEnviar.innerHTML;

      // Estado de carga
      btnEnviar.disabled = true;
      btnEnviar.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>${langData["btn-enviando"]}</span>`;
      formStatus.style.display = "none";
      formStatus.className = "form-status";

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        });

        if (response.ok) {
          formStatus.className = "form-status success";
          formStatus.textContent = langData["msg-exito"];
          formStatus.style.display = "block";
          contactForm.reset();
        } else {
          const resData = await response.json();
          formStatus.className = "form-status error";
          formStatus.textContent = resData.errors
            ? resData.errors.map(err => err.message).join(", ")
            : langData["msg-error"];
          formStatus.style.display = "block";
        }
      } catch (err) {
        console.error("Error al enviar formulario:", err);
        formStatus.className = "form-status error";
        formStatus.textContent = langData["msg-error"];
        formStatus.style.display = "block";
      } finally {
        btnEnviar.disabled = false;
        btnEnviar.innerHTML = originalBtnHtml;
      }
    });
  }

  // ==========================================
  // 4. INICIALIZACIÓN DE PARTICLES.JS
  // ==========================================
  if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 75,
          density: { enable: true, value_area: 900 }
        },
        color: { value: "#00b894" },
        shape: { type: "circle" },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.15, sync: false }
        },
        size: {
          value: 2.5,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 140,
          color: "#00b894",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.9,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.6 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }

  // ==========================================
  // 5. CONTROL DE ERRORES DE ANIMACIÓN LOTTIE
  // ==========================================
  const heroLottie = document.getElementById("hero-lottie");
  if (heroLottie) {
    heroLottie.addEventListener("error", () => {
      const container = heroLottie.closest(".imagen-animada");
      if (container) {
        container.innerHTML = `
          <div style="font-size: 8rem; color: var(--color-primary); text-shadow: 0 0 30px var(--color-primary-glow); animation: float 3s ease-in-out infinite;">
            <i class="fas fa-laptop-code"></i>
          </div>
        `;
      }
    });
  }
});