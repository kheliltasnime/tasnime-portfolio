// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceID: 'service_aoc0dbi',
  templateID: 'template_mvjlscn',
  publicKey: 'G3HpHKXPQDvpbz-KQ' // ta vraie public key
};

// Initialize EmailJS
(function () {
  emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header background on scroll
// Header background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled'); // Ajoute une classe au lieu de modifier le style directement
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .project-card, .skill-item').forEach(el => {
  observer.observe(el);
});

// Form submission with EmailJS
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

if (contactForm && submitBtn) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('from_name');
    const email = formData.get('from_email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simple validation
    if (!name || !email || !message) {
      showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('Veuillez entrer une adresse email valide.', 'error');
      return;
    }

    // Update button state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject || 'Nouveau message depuis le portfolio',
        message: message,
        to_name: 'Tasnime Khelil',
        to_email: 'tasnime.khelil@etudiant-isi.utm.tn'
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams
      );

      if (response.status === 200) {
        showMessage('Merci pour votre message ! Je vous répondrai bientôt.', 'success');
        contactForm.reset();
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }

    } catch (error) {
      console.error('EmailJS Error:', error);
      showMessage('Erreur lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.', 'error');
    } finally {
      // Restore button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Function to show success/error messages
function showMessage(text, type) {
  // Remove existing message
  const existingMessage = document.querySelector('.message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create new message
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = text;

  // Insert message before the form
  contactForm.parentNode.insertBefore(messageDiv, contactForm);

  // Auto-remove message after 5 seconds
  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.remove();
    }
  }, 5000);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

const heroTitle = document.querySelector('.hero-title .highlight');
if (heroTitle) {
  const originalText = heroTitle.textContent;
  typeWriter(heroTitle, originalText);
}

// Parallax effect on hero section
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
  body {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  body.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(loadingStyle);

// Modal functions for project details
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Close modal with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.modal[style*="flex"]');
    if (openModal) {
      closeModal(openModal.id);
    }
  }
});

//
// LOGIC FOR THEME AND LANGUAGE TOGGLES
//

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  } else {
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  }
}

// Check for user's preferred theme on page load
const currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}


// Language Toggle
const langToggle = document.getElementById('langToggle');
const langText = document.querySelector('.lang-text');

// Translation content
const translations = {
  fr: {
    'portfolio': 'Portfolio',
    'nav-home': 'Accueil',
    'nav-about': 'À propos',
    'nav-skills': 'Compétences',
    'nav-experience': 'Expérience',
    'nav-education': 'Formation',
    'nav-services': 'Services',
    'nav-projects': 'Projets',
    'nav-contact': 'Contact',
    'hero-greeting': 'Salut, je suis',
    'hero-description': 'Étudiante en ingénierie logicielle | Développeuse d\'applications web | Passionnée par l\'IA',
    'hero-btn-projects': 'Voir mes projets',
    'hero-btn-contact': 'Me contacter',
    'social-follow': 'Suivez-moi :',
    'about-title': 'À propos de moi',
    'about-text-1': 'Étudiante en ingénierie logicielle, je mets en pratique ma solide formation technique à travers des projets concrets mêlant <strong>développement web</strong>, <strong>automatisation avec n8n</strong> et <strong>intégration d\'API</strong>. Je suis passionnée par l\'<strong>intelligence artificielle</strong> et son pouvoir de transformer des idées ambitieuses en solutions réelles, innovantes et utiles.',
    'about-text-2': 'J\'aime relever des défis complexes en les traduisant en solutions <strong>intelligentes, évolutives et centrées sur l\'utilisateur</strong>. Mes expériences académiques et personnelles me permettent d\'explorer aussi bien l\'IA que l\'architecture logicielle moderne et les environnements cloud, afin de concevoir des systèmes à la fois efficaces et impactants.',
    'skill-web-title': 'Développement Web',
    'skill-web-desc': 'Java, Spring Boot, Angular, JavaScript/TypeScript, applications interactives',
    'skill-automation-title': 'Automatisation & Intégration',
    'skill-automation-desc': 'n8n, création de workflows intelligents, intégration d\'API et optimisation de processus',
    'skill-ai-title': 'Intelligence Artificielle & Data',
    'skill-ai-desc': 'Python, Pandas, NumPy, Scikit-learn, analyse et exploitation de données',
    'skill-db-title': 'Bases de Données',
    'skill-db-desc': 'PostgreSQL, SQL, modélisation relationnelle & NoSQL (MongoDB)',
    'skill-cloud-title': 'Cloud & DevOps',
    'skill-cloud-desc': 'Render, Docker, déploiement d\'applications et gestion d\'infrastructures',
    'experience-title': 'Mon Expérience',
    'exp1-date': 'Fév 2024 - Mai 2024',
    'exp1-role': 'Développeuse Full-Stack',
    'exp1-company': 'TEAMDEV, Sousse, Tunisie',
    'exp1-desc': 'Contribution au développement d\'une application web de gestion d\'équipements et de salles au sein d\'une institution.',
    'tag-web-dev': 'Développement Web',
    'tag-optimization': 'Optimisation de processus',
    'tag-collaboration': 'Collaboration',
    'exp2-date': 'Juin 2023 - Juil 2023',
    'exp2-role': 'Stagiaire en Informatique',
    'exp2-company': 'ICeM.tn | Industrielle du Câblage et du Montage, Tunisie',
    'exp2-desc': 'Participation active au développement d\'une <strong>application web interne</strong> optimisant la gestion et le suivi des stocks de câbles. J\'ai contribué à transformer un processus manuel en une solution numérique plus <strong>rapide, fiable et collaborative</strong>, améliorant ainsi la productivité de l\'équipe.',
    'education-title': 'Ma Formation',
    'edu1-date': 'Sept 2024 - Présent',
    'edu1-degree': 'Cycle d\'Ingénieur en Génie Logiciel',
    'edu1-school': 'Institut Supérieur d\'Informatique (ISI) de l\'Université de La Manouba',
    'edu1-desc': 'Études approfondies en génie logiciel avec un accent sur le développement d\'applications intelligentes.',
    'edu2-date': '2021 - 2023',
    'edu2-degree': 'Licence en Sciences de l\'Informatique',
    'edu2-school': 'Institut Supérieur d\'Informatique (ISI) de l\'Université de La Manouba',
    'edu2-desc': 'Formation solide en programmation, algorithmes, structures de données et bases de données.',
    'services-title': 'Mes Services',
    'service1-title': 'Développement Web Front-end',
    'service1-desc': 'Création d\'interfaces utilisateur modernes et réactives en utilisant Angular et JavaScript.',
    'service2-title': 'Développement Back-end',
    'service2-desc': 'Conception et développement d\'applications robustes avec Java et Spring Boot.',
    'service3-title': 'Automatisation de Processus',
    'service3-desc': 'Utilisation de n8n pour créer des workflows automatisés et connecter diverses APIs.',
    'projects-title': 'Mes Projets',
     'proj4-title': 'Robot Suiveur de Ligne avec Détection d\'Obstacles',
    'proj4-desc': 'Conception d\'un **robot mobile autonome** capable de suivre une ligne noire au sol à l\'aide de capteurs infrarouges (TCRT5000) et d\'éviter les obstacles via un capteur à ultrasons (HC-SR04) monté sur un servomoteur. Un projet combinant électronique et programmation embarquée.',
    'proj1-title': 'Application de gestion de commandes',
    'proj1-desc': 'Développement d\'une application de gestion des commandes client pour une boulangerie, utilisant des technologies web modernes.',
    'proj2-title': 'Chatbot d\'IA pour l\'intégration de services bancaires',
    'proj2-desc': 'Conception et implémentation d\'un chatbot intelligent intégrant des services bancaires pour optimiser l\'expérience client.',
    'proj3-title': 'API de recherche de recettes',
    'proj3-desc': 'Construction d\'une API performante pour la recherche de recettes de cuisine, avec une architecture optimisée pour une grande réactivité.',
    'contact-title': 'Contactez-moi',
    'contact-desc': 'Si vous avez des questions, des propositions de collaboration, ou si vous voulez simplement dire bonjour, n\'hésitez pas à me contacter via le formulaire ci-dessous ou directement par email.',
    'form-name': 'Votre nom',
    'form-email': 'Votre email',
    'proj5-title': 'Crop Predictor – Prédiction de Cultures',
    'proj5-desc': 'Projet d\'intelligence artificielle utilisant le machine learning pour recommander le meilleur type de culture en fonction de mesures du sol (N, P, K, pH). Objectif : aider les agriculteurs à maximiser leur rendement tout en réduisant les coûts.',
    'form-subject': 'Sujet',
    'form-message': 'Votre message',
    'services-intro': 'Je propose des solutions adaptées aux besoins des entreprises et particuliers, alliant expertise technique et créativité.',
    'skill-cloud-title': 'Déploiement & Cloud',
    'skill-cloud-desc': 'Mise en ligne de vos applications avec Docker et hébergement sur des solutions cloud comme Render. Gestion d\'infrastructures évolutives et sécurisées.',
    'contact-work-together': 'Travaillons ensemble',
    'contact-work-together-desc': 'Je suis toujours intéressée par de nouveaux projets et opportunités. N\'hésitez pas à me contacter !',
    'form-submit': 'Envoyer le message',
    'proj7-title': 'Application de Gestion de Formations',
    'proj7-desc': 'Application web complète permettant de gérer des formations, avec une architecture robuste et une interface moderne.',
    'proj6-title': 'Gestion des Réservations d\'Équipements et de Salles',
    'modal1-desc': 'Gestion complète des formations : inscriptions, suivi des sessions, gestion des formateurs et reporting.',
    'modal2-desc': 'Application web pour gérer réservations, suivi d\'utilisation et optimisation des équipements et salles.',
    'modal3-desc': 'Projet IA pour recommander le meilleur type de culture selon les mesures du sol et maximiser le rendement.',
    'modal3-objective': 'Optimisation du rendement agricole',
    'modal4-desc': 'Robot mobile autonome combinant électronique et programmation embarquée, capable de suivre une ligne et d\'éviter les obstacles.',
    'modal4-servo': 'Servo-moteur pour ajustement direction',
    'modal-database': 'Base de données',
    'modal-language': 'Langage',
    'modal-libraries': 'Librairies',
    'modal-objective': 'Objectif',
    'modal-microcontroller': 'Microcontrôleur',
    'modal-sensors': 'Capteurs',
     'modal4-servo': 'Servo-moteur pour ajustement direction',
    'project-github': 'Voir sur GitHub',
    'contact-title': 'Me Contacter',
    'contact-work-together': 'Travaillons ensemble',
    'contact-work-together-desc': 'Je suis toujours intéressée par de nouveaux projets et opportunités. N\'hésitez pas à me contacter !',
    'contact-location': 'Localisation',
    'contact-location-value': 'Tunis, Tunisie',
    'form-name': 'Votre nom',
    'form-email': 'Votre email',
    'form-subject': 'Sujet',
    'form-message': 'Votre message',
    'form-submit': 'Envoyer le message',
    'proj6-desc': 'Système web intuitif permettant de réserver et suivre l\'utilisation des salles et équipements d\'une institution.',
    'footer-rights': '© 2024 Portfolio de Tasnime Khelil. Tous droits réservés.'
  },
  en: {
    'portfolio': 'Portfolio',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-experience': 'Experience',
    'nav-education': 'Education',
    'nav-services': 'Services',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    'hero-greeting': 'Hi, I am',
    'hero-description': 'Software Engineering Student | Web Application Developer | Passionate about AI',
    'hero-btn-projects': 'View my projects',
    'hero-btn-contact': 'Contact me',
    'social-follow': 'Follow me:',
    'about-title': 'About Me',
    'about-text-1': 'As a software engineering student, I apply my strong technical background to tangible projects that combine <strong>web development</strong>, <strong>automation with n8n</strong>, and <strong>API integration</strong>. I am passionate about <strong>artificial intelligence</strong> and its power to transform ambitious ideas into real, innovative, and useful solutions.',
    'about-text-2': 'I enjoy tackling complex challenges by turning them into <strong>intelligent, scalable, and user-centric</strong> solutions. My academic and personal experiences allow me to explore both AI and modern software architecture and cloud environments, to design systems that are both efficient and impactful.',
    'skill-web-title': 'Web Development',
    'skill-web-desc': 'Java, Spring Boot, Angular, JavaScript/TypeScript, interactive applications',
    'skill-automation-title': 'Automation & Integration',
    'skill-automation-desc': 'n8n, creating intelligent workflows, API integration and process optimization',
    'skill-ai-title': 'Artificial Intelligence & Data',
    'skill-ai-desc': 'Python, Pandas, NumPy, Scikit-learn, data analysis and processing',
    'skill-db-title': 'Databases',
    'skill-db-desc': 'PostgreSQL, SQL, relational & NoSQL modeling (MongoDB)',
    'skill-cloud-title': 'Cloud & DevOps',
    'skill-cloud-desc': 'Render, Docker, application deployment and infrastructure management',
    'experience-title': 'My Experience',
    'exp1-date': 'Feb 2024 - May 2024',
    'exp1-role': 'Full-Stack Developer',
    'proj6-title': 'Equipment and Room Booking Management',
    'proj6-desc': 'An intuitive web system for booking and tracking the use of an institution\'s rooms and equipment.',
     'proj5-title': 'Crop Predictor – Crop Prediction',
    'proj5-desc': 'An artificial intelligence project using machine learning to recommend the best crop type based on soil measurements (N, P, K, pH). Objective: to help farmers maximize their yield while reducing costs.',
    'exp1-company': 'TEAMDEV, Sousse, Tunisia',
    'exp1-desc': 'Contributed to the development of a web application for managing equipment and rooms within an institution.',
    'tag-web-dev': 'Web Development',
    'tag-optimization': 'Process Optimization',
    'proj4-title': 'Line Follower Robot with Obstacle Detection',
    'proj4-desc': 'Design of an **autonomous mobile robot** capable of following a black line on the ground using infrared sensors (TCRT5000) and avoiding obstacles via an ultrasonic sensor (HC-SR04) mounted on a servo motor. A project combining electronics and embedded programming.',
    'tag-collaboration': 'Collaboration',
    'exp2-date': 'Jun 2023 - Jul 2023',
    'exp2-role': 'IT Intern',
    'exp2-company': 'ICeM.tn | Industrielle du Câblage et du Montage, Tunisia',
    'exp2-desc': 'Actively participated in the development of an <strong>internal web application</strong> optimizing the management and tracking of cable stocks. I helped transform a manual process into a more <strong>rapid, reliable, and collaborative</strong> digital solution, thereby improving team productivity.',
    'education-title': 'My Education',
    'edu1-date': 'Sep 2024 - Present',
    'edu1-degree': 'Software Engineering Program',
    'edu1-school': 'Higher Institute of Computer Science (ISI) of the University of Manouba',
    'edu1-desc': 'Advanced studies in software engineering with a focus on intelligent application development.',
    'edu2-date': '2021 - 2024',
    'edu2-degree': 'Bachelor\'s in Computer Science',
    'edu2-school': 'Higher Institute of Computer Science (ISI) of the University of Manouba',
    'edu2-desc': 'Solid foundation in programming, algorithms, data structures, and databases.',
    'services-title': 'My Services',
    'service1-title': 'Front-end Web Development',
    'service1-desc': 'Creation of modern and responsive user interfaces using Angular and JavaScript.',
    'service2-title': 'Back-end Development',
    'service2-desc': 'Design and development of robust applications with Java and Spring Boot.',
    'service3-title': 'Process Automation',
    'service3-desc': 'Using n8n to create automated workflows and connect various APIs.',
    'projects-title': 'My Projects',
    'proj1-title': 'Order Management Application',
    'proj1-desc': 'Development of a client order management application for a bakery, using modern web technologies.',
    'proj2-title': 'AI Chatbot for Banking Service Integration',
    'proj2-desc': 'Design and implementation of an intelligent chatbot integrating banking services to optimize the customer experience.',
    'proj3-title': 'Recipe Search API',
    'proj3-desc': 'Construction of a high-performance API for searching cooking recipes, with an architecture optimized for high responsiveness.',
    'contact-title': 'Contact Me',
    'contact-desc': 'If you have any questions, collaboration proposals, or just want to say hello, feel free to contact me via the form below or directly by email.',
    'form-name': 'Your Name',
    'modal1-desc': 'Complete training management: registrations, session tracking, trainer management, and reporting.',
    'modal2-desc': 'Web application to manage bookings, track usage, and optimize equipment and rooms.',
    'modal3-desc': 'AI project to recommend the best crop type based on soil measurements and maximize yield.',
    'modal3-objective': 'Agricultural yield optimization',
    'modal4-desc': 'Autonomous mobile robot combining electronics and embedded programming, capable of following a line and avoiding obstacles.',
    'modal4-servo': 'Servo-motor for direction adjustment',
    'modal-database': 'Database',
    'modal-language': 'Language',
    'modal-libraries': 'Libraries',
    'modal-objective': 'Objective',
    'modal-microcontroller': 'Microcontroller',
    'modal-sensors': 'Sensors',
     'modal4-servo': 'Servo-motor for direction adjustment',
    'project-github': 'View on GitHub',
    'contact-title': 'Contact Me',
    'contact-work-together': 'Let\'s work together',
    'contact-work-together-desc': 'I am always interested in new projects and opportunities. Feel free to contact me!',
    'contact-location': 'Location',
    'contact-location-value': 'Tunis, Tunisia',
    'form-name': 'Your Name',
    'form-email': 'Your Email',
    'form-subject': 'Subject',
    'form-message': 'Your Message',
    'form-submit': 'Send Message',
     'services-intro': 'I offer solutions tailored to the needs of businesses and individuals, combining technical expertise with creativity.',
    'skill-cloud-title': 'Deployment & Cloud',
    'proj7-title': 'Training Management Application',
    'proj7-desc': 'A complete web application for managing training courses, featuring a robust architecture and a modern interface.',
    'skill-cloud-desc': 'Deploy your applications with Docker and host them on cloud solutions like Render. Manage scalable and secure infrastructures.',
    'contact-work-together': 'Let\'s work together',
    'contact-work-together-desc': 'I am always interested in new projects and opportunities. Feel free to contact me!',
    'form-email': 'Your Email',

    'form-subject': 'Subject',
    'form-message': 'Your Message',
    'form-submit': 'Send Message',
    'footer-rights': '© 2024 Tasnime Khelil\'s Portfolio. All rights reserved.'
  }
};
// ... (code existant)



// ... (reste du code)
function switchLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      // Check for placeholder attribute
      if (el.hasAttribute('data-translate-placeholder')) {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Update the text on the language button
  langText.textContent = lang.toUpperCase() === 'FR' ? 'EN' : 'FR';
  
  // Set the title attribute on the button
  langToggle.title = lang === 'fr' ? 'Change language' : 'Changer de langue';
}

// Check for user's preferred language on page load
const currentLang = localStorage.getItem('lang') || 'fr';
switchLanguage(currentLang);

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const newLang = document.documentElement.lang === 'fr' ? 'en' : 'fr';
    switchLanguage(newLang);
    localStorage.setItem('lang', newLang);
  });
}