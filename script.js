// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceID: 'service_aoc0dbi',
  templateID: 'template_contact',
  publicKey: 'WJqk9J6QTN6xHLGFB' // Replace with your actual public key
};

// Translation dictionary
const translations = {
  fr: {
    // Navigation
    'portfolio': 'Portfolio',
    'nav-home': 'Accueil',
    'nav-about': 'À propos',
    'nav-skills': 'Compétences',
    'nav-experience': 'Expérience',
    'nav-education': 'Formation',
    'nav-services': 'Services',
    'nav-projects': 'Projets',
    'nav-contact': 'Contact',
    
    // Hero section
    'hero-greeting': 'Salut, je suis',
    'hero-description': 'Étudiante en ingénierie logicielle | Développeuse d\'applications web | Passionnée par l\'IA',
    'hero-btn-projects': 'Voir mes projets',
    'hero-btn-contact': 'Me contacter',
    'social-follow': 'Suivez-moi :',
    
    // About section
    'about-title': 'À propos de moi',
    'about-text-1': 'Étudiante en ingénierie logicielle, je mets en pratique ma solide formation technique à travers des projets concrets mêlant <strong>développement web</strong>, <strong>automatisation avec n8n</strong> et <strong>intégration d\'API</strong>. Je suis passionnée par l\'<strong>intelligence artificielle</strong> et son pouvoir de transformer des idées ambitieuses en solutions réelles, innovantes et utiles.',
    'about-text-2': 'J\'aime relever des défis complexes en les traduisant en solutions <strong>intelligentes, évolutives et centrées sur l\'utilisateur</strong>. Mes expériences académiques et personnelles me permettent d\'explorer aussi bien l\'IA que l\'architecture logicielle moderne et les environnements cloud, afin de concevoir des systèmes à la fois efficaces et impactants.',
    
    // Skills
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
    
    // Experience
    'experience-title': 'Mon Expérience',
    'exp1-date': 'Fév 2024 - Mai 2024',
    'exp1-role': 'Développeuse Full-Stack',
    'exp1-company': 'TEAMDEV, Sousse, Tunisie',
    'exp1-desc': 'Contribution au développement d\'une application web de gestion d\'équipements et de salles au sein d\'une institution.',
    'exp2-date': 'Juin 2023 - Juil 2023',
    'exp2-role': 'Stagiaire en Informatique',
    'exp2-company': 'ICeM.tn | Industrielle du Câblage et du Montage, Tunisie',
    'exp2-desc': 'Participation active au développement d\'une <strong>application web interne</strong> optimisant la gestion et le suivi des stocks de câbles. J\'ai contribué à transformer un processus manuel en une solution numérique plus <strong>rapide, fiable et collaborative</strong>, améliorant ainsi la productivité de l\'équipe.',
    'tag-web-dev': 'Développement Web',
    'tag-optimization': 'Optimisation de processus',
    'tag-collaboration': 'Collaboration',
    
    // Education
    'education-title': 'Formation',
    'edu1-date': '2024 - 2027 (Prévu)',
    'edu1-degree': 'Ingénierie en Développement Logiciel',
    'edu1-school': 'Higher Institute of Computer Science (ISI) - Tunisie',
    'edu1-desc': 'Formation d\'ingénieure orientée vers la <strong>conception d\'architectures logicielles modernes</strong>, le <strong>cloud computing</strong>, et l\'<strong>intelligence artificielle</strong>. Développement de projets collaboratifs intégrant innovation et résolution de problèmes concrets.',
    'edu2-date': '2021 - 2024',
    'edu2-degree': 'Licence en Génie Logiciel',
    'edu2-school': 'ESSTHS - École Supérieure des Sciences et de la Technologie de Hammam Sousse',
    'edu2-desc': 'Solide base en <strong>développement logiciel</strong>, <strong>bases de données</strong> et <strong>méthodes agiles</strong>. Réalisation de projets académiques et personnels, notamment en <strong>développement web</strong> et en <strong>automatisation de processus</strong>.',
    
    // Services
    'services-title': 'Mes Services',
    'services-subtitle': 'Je propose des solutions adaptées aux besoins des entreprises et particuliers, alliant expertise technique et créativité.',
    'service1-title': 'Développement Web',
    'service1-desc': 'Création d\'applications web modernes et performantes avec <strong>Spring Boot</strong>, <strong>Angular</strong> et <strong>PostgreSQL</strong>. Conception d\'interfaces intuitives et ergonomiques adaptées à vos besoins.',
    'service2-title': 'Automatisation & Workflows',
    'service2-desc': 'Optimisation de vos processus métiers avec <strong>n8n</strong> et intégration d\'API. Mise en place de workflows intelligents pour gagner en productivité et réduire les tâches manuelles.',
    'service3-title': 'Intelligence Artificielle',
    'service3-desc': 'Développement de solutions IA pour l\'<strong>analyse de données</strong>, la <strong>prédiction</strong> (machine learning) et l\'optimisation de la prise de décision.',
    'service4-title': 'Déploiement & Cloud',
    'service4-desc': 'Mise en ligne de vos applications avec <strong>Docker</strong> et hébergement sur des solutions cloud comme <strong>Render</strong>. Gestion d\'infrastructures évolutives et sécurisées.',
    
    // Projects
    'projects-title': 'Mes Projets',
    'project-github': 'Voir sur GitHub',
    'project-details': 'Détails',
    'project1-title': 'Application de Gestion de Formations',
    'project1-desc': 'Application web complète permettant de gérer des formations, avec une architecture robuste et une interface moderne.',
    'project2-title': 'Gestion des Réservations d\'Équipements et de Salles',
    'project2-desc': 'Système web intuitif permettant de réserver et suivre l\'utilisation des salles et équipements d\'une institution.',
    'project3-title': 'Crop Predictor – Prédiction de Cultures',
    'project3-desc': 'Projet d\'<strong>intelligence artificielle</strong> utilisant le machine learning pour recommander le meilleur type de culture en fonction de mesures du sol (N, P, K, pH). Objectif : aider les agriculteurs à <strong>maximiser leur rendement</strong> tout en réduisant les coûts.',
    'project4-title': '🤖 Robot Suiveur de Ligne avec Détection d\'Obstacles',
    'project4-desc': 'Conception d\'un <strong>robot mobile autonome</strong> capable de suivre une ligne noire au sol grâce à des capteurs infrarouges (TCRT5000) et d\'éviter les obstacles via un capteur ultrason (HC-SR04) monté sur un servo-moteur. Un projet combinant électronique et programmation embarquée.',
    'tech-sensors': 'Capteurs IR & Ultrason',
    'tech-servo': 'Servo-moteur',
    
    // Modal content
    'modal1-desc': 'Gestion complète des formations : inscriptions, suivi des sessions, gestion des formateurs et reporting.',
    'modal2-desc': 'Application web pour gérer réservations, suivi d\'utilisation et optimisation des équipements et salles.',
    'modal3-desc': 'Projet IA pour recommander le meilleur type de culture selon les mesures du sol et maximiser le rendement.',
    'modal4-desc': 'Robot mobile autonome combinant électronique et programmation embarquée, capable de suivre une ligne et d\'éviter les obstacles.',
    'modal-database': 'Base de données',
    'modal-language': 'Langage',
    'modal-libraries': 'Librairies',
    'modal-objective': 'Objectif',
    'modal3-objective': 'Optimisation du rendement agricole',
    'modal-microcontroller': 'Microcontrôleur',
    'modal-sensors': 'Capteurs',
    'modal4-servo': 'Servo-moteur pour ajustement direction',
    
    // Contact
    'contact-title': 'Me Contacter',
    'contact-work-together': 'Travaillons ensemble',
    'contact-interested': 'Je suis toujours intéressée par de nouveaux projets et opportunités. N\'hésitez pas à me contacter !',
    'contact-location': 'Localisation',
    'contact-location-value': 'Tunis, Tunisie',
    'form-name': 'Votre nom',
    'form-email': 'Votre email',
    'form-subject': 'Sujet',
    'form-message': 'Votre message',
    'form-submit': 'Envoyer le message',
    
    // Footer
    'footer-rights': '© 2024 Portfolio de Tasnime Khelil. Tous droits réservés.'
  },
  
  en: {
    // Navigation
    'portfolio': 'Portfolio',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-experience': 'Experience',
    'nav-education': 'Education',
    'nav-services': 'Services',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    
    // Hero section
    'hero-greeting': 'Hi, I\'m',
    'hero-description': 'Software Engineering Student | Web Application Developer | AI Enthusiast',
    'hero-btn-projects': 'View my projects',
    'hero-btn-contact': 'Contact me',
    'social-follow': 'Follow me:',
    
    // About section
    'about-title': 'About Me',
    'about-text-1': 'As a software engineering student, I put my solid technical training into practice through concrete projects combining <strong>web development</strong>, <strong>automation with n8n</strong>, and <strong>API integration</strong>. I\'m passionate about <strong>artificial intelligence</strong> and its power to transform ambitious ideas into real, innovative, and useful solutions.',
    'about-text-2': 'I love tackling complex challenges by translating them into <strong>intelligent, scalable, and user-centered solutions</strong>. My academic and personal experiences allow me to explore both AI and modern software architecture and cloud environments, in order to design systems that are both efficient and impactful.',
    
    // Skills
    'skill-web-title': 'Web Development',
    'skill-web-desc': 'Java, Spring Boot, Angular, JavaScript/TypeScript, interactive applications',
    'skill-automation-title': 'Automation & Integration',
    'skill-automation-desc': 'n8n, smart workflow creation, API integration and process optimization',
    'skill-ai-title': 'Artificial Intelligence & Data',
    'skill-ai-desc': 'Python, Pandas, NumPy, Scikit-learn, data analysis and exploitation',
    'skill-db-title': 'Databases',
    'skill-db-desc': 'PostgreSQL, SQL, relational modeling & NoSQL (MongoDB)',
    'skill-cloud-title': 'Cloud & DevOps',
    'skill-cloud-desc': 'Render, Docker, application deployment and infrastructure management',
    
    // Experience
    'experience-title': 'My Experience',
    'exp1-date': 'Feb 2024 - May 2024',
    'exp1-role': 'Full-Stack Developer',
    'exp1-company': 'TEAMDEV, Sousse, Tunisia',
    'exp1-desc': 'Contributed to the development of a web application for equipment and room management within an institution.',
    'exp2-date': 'June 2023 - July 2023',
    'exp2-role': 'IT Intern',
    'exp2-company': 'ICeM.tn | Industrial Cabling and Assembly, Tunisia',
    'exp2-desc': 'Active participation in the development of an <strong>internal web application</strong> optimizing cable stock management and tracking. I contributed to transforming a manual process into a more <strong>fast, reliable and collaborative</strong> digital solution, thus improving team productivity.',
    'tag-web-dev': 'Web Development',
    'tag-optimization': 'Process Optimization',
    'tag-collaboration': 'Collaboration',
    
    // Education
    'education-title': 'Education',
    'edu1-date': '2024 - 2027 (Expected)',
    'edu1-degree': 'Software Development Engineering',
    'edu1-school': 'Higher Institute of Computer Science (ISI) - Tunisia',
    'edu1-desc': 'Engineering training oriented towards <strong>modern software architecture design</strong>, <strong>cloud computing</strong>, and <strong>artificial intelligence</strong>. Development of collaborative projects integrating innovation and concrete problem solving.',
    'edu2-date': '2021 - 2024',
    'edu2-degree': 'Bachelor in Software Engineering',
    'edu2-school': 'ESSTHS - Higher School of Science and Technology of Hammam Sousse',
    'edu2-desc': 'Solid foundation in <strong>software development</strong>, <strong>databases</strong> and <strong>agile methods</strong>. Completion of academic and personal projects, particularly in <strong>web development</strong> and <strong>process automation</strong>.',
    
    // Services
    'services-title': 'My Services',
    'services-subtitle': 'I offer solutions adapted to the needs of businesses and individuals, combining technical expertise and creativity.',
    'service1-title': 'Web Development',
    'service1-desc': 'Creation of modern and efficient web applications with <strong>Spring Boot</strong>, <strong>Angular</strong> and <strong>PostgreSQL</strong>. Design of intuitive and ergonomic interfaces adapted to your needs.',
    'service2-title': 'Automation & Workflows',
    'service2-desc': 'Optimization of your business processes with <strong>n8n</strong> and API integration. Implementation of intelligent workflows to gain productivity and reduce manual tasks.',
    'service3-title': 'Artificial Intelligence',
    'service3-desc': 'Development of AI solutions for <strong>data analysis</strong>, <strong>prediction</strong> (machine learning) and decision-making optimization.',
    'service4-title': 'Deployment & Cloud',
    'service4-desc': 'Deployment of your applications with <strong>Docker</strong> and hosting on cloud solutions like <strong>Render</strong>. Management of scalable and secure infrastructures.',
    
    // Projects
    'projects-title': 'My Projects',
    'project-github': 'View on GitHub',
    'project-details': 'Details',
    'project1-title': 'Training Management Application',
    'project1-desc': 'Complete web application for managing training, with robust architecture and modern interface.',
    'project2-title': 'Equipment and Room Reservation Management',
    'project2-desc': 'Intuitive web system for booking and tracking the use of rooms and equipment in an institution.',
    'project3-title': 'Crop Predictor – Crop Prediction',
    'project3-desc': '<strong>Artificial intelligence</strong> project using machine learning to recommend the best type of crop based on soil measurements (N, P, K, pH). Goal: help farmers <strong>maximize their yield</strong> while reducing costs.',
    'project4-title': '🤖 Line Following Robot with Obstacle Detection',
    'project4-desc': 'Design of an <strong>autonomous mobile robot</strong> capable of following a black line on the ground using infrared sensors (TCRT5000) and avoiding obstacles via an ultrasonic sensor (HC-SR04) mounted on a servo motor. A project combining electronics and embedded programming.',
    'tech-sensors': 'IR & Ultrasonic Sensors',
    'tech-servo': 'Servo Motor',
    
    // Modal content
    'modal1-desc': 'Complete training management: registrations, session tracking, trainer management and reporting.',
    'modal2-desc': 'Web application to manage reservations, usage tracking and optimization of equipment and rooms.',
    'modal3-desc': 'AI project to recommend the best type of crop according to soil measurements and maximize agricultural yield.',
    'modal4-desc': 'Autonomous mobile robot combining electronics and embedded programming, capable of following a line and avoiding obstacles.',
    'modal-database': 'Database',
    'modal-language': 'Language',
    'modal-libraries': 'Libraries',
    'modal-objective': 'Objective',
    'modal3-objective': 'Agricultural yield optimization',
    'modal-microcontroller': 'Microcontroller',
    'modal-sensors': 'Sensors',
    'modal4-servo': 'Servo motor for direction adjustment',
    
    // Contact
    'contact-title': 'Contact Me',
    'contact-work-together': 'Let\'s Work Together',
    'contact-interested': 'I\'m always interested in new projects and opportunities. Feel free to contact me!',
    'contact-location': 'Location',
    'contact-location-value': 'Tunis, Tunisia',
    'form-name': 'Your name',
    'form-email': 'Your email',
    'form-subject': 'Subject',
    'form-message': 'Your message',
    'form-submit': 'Send message',
    
    // Footer
    'footer-rights': '© 2024 Tasnime Khelil Portfolio. All rights reserved.'
  }
};

// Initialize EmailJS
(function() {
  emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// Theme Management
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.themeToggle = document.getElementById('themeToggle');
    this.sunIcon = document.querySelector('.sun-icon');
    this.moonIcon = document.querySelector('.moon-icon');
    
    this.init();
  }
  
  init() {
    this.applyTheme(this.currentTheme);
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }
  
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    if (theme === 'dark') {
      this.sunIcon.style.display = 'none';
      this.moonIcon.style.display = 'block';
    } else {
      this.sunIcon.style.display = 'block';
      this.moonIcon.style.display = 'none';
    }
    
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }
}

// Language Management
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'fr';
    this.langToggle = document.getElementById('langToggle');
    this.langText = document.querySelector('.lang-text');
    
    this.init();
  }
  
  init() {
    this.applyLanguage(this.currentLang);
    this.langToggle.addEventListener('click', () => this.toggleLanguage());
  }
  
  applyLanguage(lang) {
    // Update all elements with data-translate attributes
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (translations[lang] && translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });
    
    // Update button text
    this.langText.textContent = lang === 'fr' ? 'EN' : 'FR';
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update page title
    document.title = lang === 'fr' ? 'Portfolio de Tasnime Khelil' : 'Tasnime Khelil Portfolio';
    
    localStorage.setItem('language', lang);
    this.currentLang = lang;
  }
  
  toggleLanguage() {
    const newLang = this.currentLang === 'fr' ? 'en' : 'fr';
    this.applyLanguage(newLang);
  }
}

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
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
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
      const currentLang = localStorage.getItem('language') || 'fr';
      const errorMsg = currentLang === 'fr' 
        ? 'Veuillez remplir tous les champs obligatoires.' 
        : 'Please fill in all required fields.';
      showMessage(errorMsg, 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const currentLang = localStorage.getItem('language') || 'fr';
      const errorMsg = currentLang === 'fr' 
        ? 'Veuillez entrer une adresse email valide.' 
        : 'Please enter a valid email address.';
      showMessage(errorMsg, 'error');
      return;
    }
    
    // Update button state
    const originalText = submitBtn.textContent;
    const currentLang = localStorage.getItem('language') || 'fr';
    submitBtn.textContent = currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...';
    submitBtn.disabled = true;
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject || (currentLang === 'fr' ? 'Nouveau message depuis le portfolio' : 'New message from portfolio'),
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
        const successMsg = currentLang === 'fr' 
          ? 'Merci pour votre message ! Je vous répondrai bientôt.' 
          : 'Thank you for your message! I will reply soon.';
        showMessage(successMsg, 'success');
        contactForm.reset();
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      const errorMsg = currentLang === 'fr' 
        ? 'Erreur lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.' 
        : 'Error sending message. Please try again or contact me directly by email.';
      showMessage(errorMsg, 'error');
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

// Initialize typing animation when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    
    // Add a small delay before starting the animation
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 50);
    }, 500);
  }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Skills animation on scroll
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      }, index * 200);
    }
  });
}, { threshold: 0.5 });

skillItems.forEach(item => {
  item.style.transform = 'translateY(20px)';
  item.style.opacity = '0';
  item.style.transition = 'all 0.6s ease';
  skillObserver.observe(item);
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-timeline');
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});

// Add CSS for timeline animation
const style = document.createElement('style');
style.textContent = `
  .timeline-item {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.6s ease;
  }
  
  .timeline-item.animate-timeline {
    opacity: 1;
    transform: translateX(0);
  }
  
  .nav-link.active {
    color: var(--primary-color);
  }
  
  .nav-link.active::after {
    width: 100%;
  }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
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
      openModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
});

// Make modal functions globally available
window.openModal = openModal;
window.closeModal = closeModal;

// Initialize theme and language managers
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new LanguageManager();
});
