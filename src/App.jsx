import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, MapPin, GraduationCap, Code, ChevronDown, Globe, Briefcase } from 'lucide-react';
import Profile from "./assets/dhanush.png";

// ──────────────────────────────────────────────────────────────
// EDIT ME: personal details used across the whole site.
// Set `photo` to an imported image (e.g. import me from './assets/me.jpg')
// to replace the initials avatar.
// ──────────────────────────────────────────────────────────────
const PROFILE = {
  name: 'Dhanush',
  fullName: 'Dhanush Palani Vijay Kumari',
  initials: 'DPV',
  email: 'dhanush.palani.vijay.kumari.job@gmail.com',
  github: 'https://github.com/Dhanushpv29',
  resume: 'https://drive.google.com/file/d/12ISUao7bMQuCTlG0XsH8VauDkKDS5TBM/view?usp=sharing',
  photo: Profile,
};

function Avatar() {
  if (PROFILE.photo) {
    return <img src={PROFILE.photo} alt={PROFILE.name} className="w-full h-full object-cover" />;
  }
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-8xl font-bold tracking-wider">
      {PROFILE.initials}
    </div>
  );
}

const translations = {
  de: {
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      education: 'Bildung',
      projects: 'Projekte',
      contact: 'Kontakt'
    },

    hero: {
      greeting: 'Hallo, ich bin',
      title: PROFILE.name,
      subtitle: 'Python Backend Developer mit Schwerpunkt auf skalierbaren APIs, Microservices und zuverlässiger Datenverarbeitung. Erfahrung mit Python, FastAPI, Django, PostgreSQL, Redis, Celery, Docker und AWS.',
      cta: 'Kontaktieren Sie mich'
    },

    about: {
      title: 'Wer bin ich?',
      content: 'Hallo, ich bin ' + PROFILE.name + ', Python Backend Developer mit Erfahrung in der Entwicklung produktionsreifer APIs und skalierbarer Microservices.\n\nMein fachlicher Schwerpunkt liegt auf Python, FastAPI, Django, PostgreSQL, Redis, Celery und asynchroner Verarbeitung. Ich arbeite außerdem mit Docker, AWS und CI/CD.\n\nMich interessieren zuverlässige, gut getestete Backend-Services, saubere API-Architektur und Performance-Optimierung im Produktivbetrieb.',
      button: 'Mehr über mich'
    },

    experience: {
      title: 'Berufserfahrung',
      description: 'Mehr als 3 Jahre Erfahrung in der Python-Backend-Entwicklung mit Schwerpunkt auf REST-APIs, Microservices, Datenbankoptimierung und Cloud-Deployments.',
      download: 'Lebenslauf herunterladen',
      jobs: [
        {
          title: 'Software Engineer – Python Backend',
          company: 'Jeeves Information Systems (Forterro)',
          duration: '06/2023 - 01/2025',
          points: [
            'Verantwortung für die APIs zu Auftragsverwaltung, Lieferanten und Logistik innerhalb einer Microservices-Plattform, einschließlich Definition von Service-Grenzen, Datenmodellen und API-Verträgen vom Design bis in die Produktion.',
    'Leistungssteigerung stark genutzter Endpunkte durch Redis-Caching, PostgreSQL-Indexierung, asynchronen Datenbankzugriff und SQLAlchemy-Connection-Pooling.',
    'Aufbau von Celery- und Redis-Pipelines für ERP-Integrationen, geplante Jobs und Reporting, mit Exponential-Backoff-Retries und Circuit-Breaker-Mustern für zuverlässigere Anbindungen an Drittsysteme.',
    'Entwurf sicherer, versionierter APIs mit JWT-Authentifizierung, rollenbasierter Zugriffskontrolle und Rate Limiting.',
    'Refaktorierung und Neugestaltung zentraler Microservices in einer großen Datenpipeline (GCP, FastAPI, PostgreSQL, Docker, Redis, Event Sourcing, CircleCI, PyTest) durch Parallelisierung, was die Verarbeitung um das 100-Fache beschleunigte.',
    'Entwicklung eines Echtzeit-Analytics-Dashboards mit React.js, Python und Django, wodurch die Effizienz der Datenverarbeitung um 60 % stieg.',
    'Leitung von mehr als 6 Projekten in den Bereichen Cloud, DevOps und Backend-Entwicklung.'
          ]
        },
        {
          title: 'Associate Software Engineer – Python Backend',
          company: 'Jeeves Information Systems (Forterro)',
          duration: '05/2022 - 06/2023',
          points: [
            'Entwicklung und Wartung von REST-APIs mit JWT-Authentifizierung, rollenbasierter Zugriffskontrolle und Request-Validierung.',
    'Entwurf von PostgreSQL-Schemas und Optimierung von Abfragen.',
    'Implementierung von Redis-Caching und Celery-Hintergrundjobs für Benachrichtigungen, Rechnungserstellung und Berichtsgenerierung.',
    'Optimierung der MongoDB- und Redis-Nutzung, wodurch die Datenabrufgeschwindigkeit um 40 % stieg.',
    'Aufbau eines internen Task-Management-Systems, das vollständig über das Django-Admin-Panel verwaltet wird.',
    'Erstellung von pytest-Unit- und Integrationstests sowie Validierung der APIs mit Postman.'
          ]
        }
      ]
    },

    education: {
      title: 'Bildung',
      items: [
        {
          university: 'Hochschule Hof, University of Applied Sciences',
          year: '2026 - 2028',
          degree: 'Master in Artificial Intelligence und Robotik'
        },
        {
          university: 'Visvesvaraya Technological University',
          year: '2018 - 2022',
          degree: 'Bachelor of Engineering in Information Science'
        }
      ]
    },

    projects: {
      title: 'Ausgewählte Projekte',
      viewCode: 'Code auf GitHub ansehen',
      items: [
        {
          title: 'Ticketing- und Zahlungsplattform für hohe Last',
          url: 'https://github.com/Dhanushpv29/High-concurrency-booking-platform',
          description: 'Ein Ticketing-Backend, bei dem tausende Nutzer gleichzeitig um dieselben begrenzten Plätze konkurrieren. Atomare Platzreservierungen nutzen Row-Level-Locking und Datenbank-Constraints, sodass kein Platz doppelt verkauft wird; verwaiste Reservierungen laufen automatisch ab, und idempotente Zahlungs- und Webhook-Verarbeitung beherrscht Wiederholungen, doppelte Ereignisse und verspätete Zahlungen, bei Bedarf mit automatischer Rückerstattung. Tickets mit QR-Code und PDF werden asynchron erzeugt.',
          stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'pytest-django', 'Docker', 'Gunicorn', 'Nginx']
        },
        {
          title: 'Multi-Tenant-Logistik-SaaS',
          url: 'https://github.com/Dhanushpv29/Multi-tenant-Saas-with-billing-and-webhooks',
          description: 'Eine Multi-Tenant-SaaS-Plattform für Lieferunternehmen mit Flotten-, Fahrer-, Kunden- und Lieferverwaltung, rollenbasiertem Zugriff und Mandantentrennung auf ORM-, API- und PostgreSQL-Row-Level-Security-Ebene. Sie umfasst einen Abonnement-Lebenszyklus mit Testphase, Mahnwesen und Planlimits, mandantenbezogenes Rate Limiting sowie eine Engine für signierte ausgehende Webhooks mit Retries und Circuit Breaker.',
          stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'Django Admin', 'pytest-django', 'Docker', 'Nginx']
        },
        {
          title: 'LedgerX – Plattform für Finanztransaktionen und Zahlungen',
          url: 'https://github.com/Dhanushpv29/LedgerX',
          description: 'Ein Zahlungs-Backend, in dem Geld nie entsteht, verloren geht oder dupliziert wird. Jede Bewegung wird als unveränderliche Buchung der doppelten Buchführung gespeichert, Zahlungen folgen einem strikten Zustandsautomaten, und Transfer- und Zahlungs-APIs sind durch Idempotency-Keys geschützt. Hinzu kommen signierte Webhook-Zustellung mit Retries, Abgleich mit einem simulierten Zahlungsanbieter sowie Transaktionslimits und einfache Betrugsregeln.',
          stack: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'RabbitMQ', 'Celery', 'pytest', 'Docker', 'GitHub Actions']
        },
        {
          title: 'FlowForge – Verteilte Workflow-Engine',
          url: 'https://github.com/Dhanushpv29/FlowForge',
          description: 'Eine schlanke Workflow-Engine im Stil von Airflow oder Temporal, die abhängige Tasks auf verteilten Workern ausführt. Scheduler und Zustandsautomat liegen in PostgreSQL, Tasks werden per SKIP LOCKED übernommen. Dazu kommen DAG-Validierung, Retry-Richtlinien mit Backoff, Dead-Letter-Queues, Worker-Heartbeats mit Crash-Recovery, wiederkehrende Zeitpläne und eine vollständige Ausführungshistorie.',
          stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'RabbitMQ', 'Celery', 'pytest', 'Docker', 'GitHub Actions']
        },
        {
          title: 'TenantGate – Multi-Tenant-API-Plattform',
          url: 'https://github.com/Dhanushpv29/TenantGate',
          description: 'Ein SaaS-Backend mit strikter Mandantentrennung, Zugriffskontrolle und nutzungsbasierter Abrechnung. Es kombiniert PostgreSQL Row-Level Security, fein granulares RBAC, API-Keys und OAuth2 mit Nutzungsmessung, Quoten und Planlimits sowie Redis-Token-Bucket-Rate-Limiting in Lua, das über mehrere API-Instanzen hinweg korrekt bleibt.',
          stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'OAuth2', 'Celery', 'RabbitMQ', 'pytest', 'Docker']
        }
      ]
    },

    contact: {
      title: 'Kontakt',
      phone: 'Telefonnummer',
      email: 'E-Mail',
      location: 'Standort',
      locationValue: 'Deutschland',
      button: 'Nachricht senden'
    }
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact'
    },

    hero: {
      greeting: 'Hello, I am',
      title: PROFILE.name,
      subtitle: 'Python Backend Developer focused on scalable APIs, microservices and reliable data processing. Experienced with Python, FastAPI, Django, PostgreSQL, Redis, Celery, Docker and AWS.',
      cta: 'Contact Me'
    },

    about: {
      title: 'Who am I?',
      content: 'Hi, I’m ' + PROFILE.name + ', a Python Backend Developer with experience building production-ready APIs and scalable microservices.\n\nMy technical focus is Python, FastAPI, Django, PostgreSQL, Redis, Celery and asynchronous processing. I also work with Docker, AWS and CI/CD.\n\nI care about reliable, well-tested backend services, clean API architecture and performance tuning in production.',
      button: 'More About Me'
    },

    experience: {
      title: 'Professional Experience',
      description: '3+ years of experience in Python backend development, with a focus on REST APIs, microservices, database optimisation and cloud deployments.',
      download: 'Download Resume',
      jobs: [
        {
          title: 'Software Engineer – Python Backend',
          company: 'Jeeves Information Systems (Forterro)',
          duration: '06/2023 - 01/2025',
          points: [
            'Owned the order-management, supplier and logistics APIs within a microservices platform, defining service boundaries, data models and API contracts from design through production.',
    'Improved performance of high-volume endpoints through Redis caching, PostgreSQL indexing, asynchronous database access and SQLAlchemy connection pooling.',
    'Built Celery and Redis pipelines for ERP integrations, scheduled jobs and reporting, using exponential-backoff retries and circuit-breaker patterns to improve third-party integration reliability.',
    'Designed secure, versioned APIs with JWT authentication, role-based access control and rate limiting.',
    'Refactored and redesigned key microservices in a large-scale data pipeline (GCP, FastAPI, PostgreSQL, Docker, Redis, Event Sourcing, CircleCI, PyTest), parallelizing them for a 100x speed improvement.',
    'Created a real-time analytics dashboard with React.js, Python and Django, increasing data processing efficiency by 60%.',
    'Led 6+ projects across cloud, DevOps and backend development.'
          ]
        },
        {
          title: 'Associate Software Engineer – Python Backend',
          company: 'Jeeves Information Systems (Forterro)',
          duration: '06/2022 - 05/2023',
          points: [
            'Developed and maintained REST APIs, implementing JWT authentication, role-based access control and request validation.',
    'Designed PostgreSQL schemas and optimised queries.',
    'Implemented Redis caching and Celery background jobs for notifications, invoicing and report generation.',
    'Optimised MongoDB and Redis usage, improving data retrieval speed by 40%.',
    'Built an internal Task Management System, fully managed through the Django Admin panel.',
    'Wrote pytest unit and integration tests and validated APIs with Postman.'
          ]
        }
      ]
    },

    education: {
      title: 'Education',
      items: [
        {
          university: 'Hochschule Hof, University of Applied Sciences',
          year: '2026 - 2028',
          degree: 'Master’s in Artificial Intelligence and Robotics'
        },
        {
          university: 'Visvesvaraya Technological University',
          year: '2018 - 2022',
          degree: 'Bachelor of Engineering in Information Science'
        }
      ]
    },

    projects: {
      title: 'Selected Projects',
      viewCode: 'View on GitHub',
      items: [
        {
          title: 'High-Concurrency Ticket Booking & Payment Platform',
          url: 'https://github.com/Dhanushpv29/High-concurrency-booking-platform',
          description: 'A ticketing backend where thousands of users compete for the same limited seats at once. Atomic seat holds use row-level locking and database constraints so a seat is never sold twice, abandoned holds expire automatically, and idempotent payment and webhook handling copes with retries, duplicate events and late payments, with automatic refunds where needed. Tickets are issued asynchronously with QR codes and PDFs.',
          stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'pytest-django', 'Docker', 'Gunicorn', 'Nginx']
        },
        {
          title: 'Multi-Tenant Logistics SaaS',
          url: 'https://github.com/Dhanushpv29/Multi-tenant-Saas-with-billing-and-webhooks',
          description: 'A multi-tenant SaaS for delivery companies covering fleet, drivers, customers and deliveries, with role-based access and tenant isolation enforced at the ORM, API and PostgreSQL row-level-security layers. It includes a subscription lifecycle with trials, dunning and plan limits, per-tenant rate limiting, and a signed outbound webhook engine with retries and circuit breaking.',
          stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'Django Admin', 'pytest-django', 'Docker', 'Nginx']
        },
        {
          title: 'LedgerX – Financial Transaction & Payment Platform',
          url: 'https://github.com/Dhanushpv29/LedgerX',
          description: 'A payments backend in which money is never created, lost or duplicated. Every movement is stored as immutable double-entry ledger rows, payments follow a strict lifecycle state machine, and transfer and payment APIs are protected by idempotency keys. It also provides signed webhook delivery with retries, reconciliation against a simulated provider, and transaction limits with simple fraud rules.',
          stack: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'RabbitMQ', 'Celery', 'pytest', 'Docker', 'GitHub Actions']
        },
        {
          title: 'FlowForge – Distributed Workflow Engine',
          url: 'https://github.com/Dhanushpv29/FlowForge',
          description: 'A lightweight workflow engine, in the spirit of Airflow or Temporal, that runs dependent tasks across distributed workers. The scheduler and state machine live in PostgreSQL, with tasks claimed via SKIP LOCKED, plus DAG validation, retry policies with backoff, dead-letter queues, worker heartbeats with crash recovery, recurring schedules and a full execution history.',
          stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'RabbitMQ', 'Celery', 'pytest', 'Docker', 'GitHub Actions']
        },
        {
          title: 'TenantGate – Multi-Tenant API Platform',
          url: 'https://github.com/Dhanushpv29/TenantGate',
          description: 'A SaaS backend with strict tenant isolation, access control and usage-based billing. It combines PostgreSQL row-level security, fine-grained RBAC, API keys and OAuth2 with usage metering, quotas and plan limits, plus Redis token-bucket rate limiting implemented in Lua that stays correct across multiple API instances.',
          stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'OAuth2', 'Celery', 'RabbitMQ', 'pytest', 'Docker']
        }
      ]
    },

    contact: {
      title: 'Contact ' + PROFILE.name,
      phone: 'Phone Number',
      email: 'Email',
      location: 'Location',
      locationValue: 'Germany',
      button: 'Send Message'
    }
  }
};

export default function Portfolio() {
  const [language, setLanguage] = useState('de');
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();
  const t = translations[language];

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed Header */}
      <motion.header
        style={{ opacity: headerOpacity, backgroundColor: headerBackground }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900"
            >
              {PROFILE.initials}
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value], index) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => scrollToSection(key === 'about' ? 'about' : key)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === key ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {value}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-all duration-300"
            >
              <Globe size={16} />
              {language === 'de' ? 'EN' : 'DE'}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="text-blue-600 font-medium mb-4"
              >
                {t.hero.greeting}
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
              >
                {t.hero.title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex gap-4"
              >
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {t.hero.cta}
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  GitHub
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-8"
              >
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-gray-700" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="text-gray-700" />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <Avatar />
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={32} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">{t.about.title}</h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              {t.about.content}
            </motion.p>
            <motion.a
              variants={fadeInUpVariants}
              href="#experience"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              {t.about.button}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              {t.experience.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              {t.experience.description}
            </motion.p>

            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Briefcase size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.duration}</p>
                      {job.points && (
                        <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 leading-relaxed">
                          {job.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-4"
            >
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                {t.experience.download}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.education.title}
            </motion.h2>

            <div className="space-y-8">
              {t.education.items.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <GraduationCap size={24} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-purple-600 font-medium mb-2">{edu.university}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.projects.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {t.projects.items.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 md:last:odd:col-span-2"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Code size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github size={16} />
                      {t.projects.viewCode}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
              >
                {t.contact.title}
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.email}</p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <MapPin size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.location}</p>
                    <p className="text-lg font-medium text-gray-900">{t.contact.locationValue}</p>
                  </div>
                </div>
              </motion.div>

              <motion.a
                variants={itemVariants}
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                {t.contact.button}
              </motion.a>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <Avatar />
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gray-900 mb-2">{PROFILE.name}</p>
              <p className="text-gray-600">
                {language === 'de' 
                  ? 'Python Backend Engineer'
                  : 'Python Backend Engineer'}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Mail size={20} className="text-gray-700" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"
          >
            <p>© 2026 {PROFILE.fullName}. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}