<!-- src/routes/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  
  // Servicios principales
  const services = [
    {
      title: "Estrategia de Datos",
      description: "Desarrollamos estrategias personalizadas para aprovechar al máximo tus datos empresariales.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'
    },
    {
      title: "Análisis Empresarial",
      description: "Convertimos tus datos en insights accionables para la toma de decisiones estratégicas.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>'
    },
    {
      title: "Machine Learning & AI",
      description: "Implementamos soluciones avanzadas de ML y AI para optimizar y transformar tu negocio.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 1 8 8v12l-4-4-4 4-4-4-4 4V10a8 8 0 0 1 8-8z"></path></svg>'
    },
    {
      title: "Reducción de Costos",
      description: "Optimizamos tus procesos mediante automatización e inteligencia operativa basada en datos.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>'
    }
  ];
  
  // Casos de éxito
  const caseStudies = [
    {
      title: "Transformación Digital Bancaria",
      client: "Banco Nacional",
      description: "Redujimos el tiempo de aprobación de créditos en un 65% mediante modelos de IA, resultando en un ahorro anual de $2M en costos operativos.",
      image: "/images/cases/fintech.jpg",
      stats: [
        { value: "65%", label: "Reducción de tiempo" },
        { value: "$2M", label: "Ahorro anual" }
      ]
    },
    {
      title: "Optimización Logística",
      client: "LogisTech",
      description: "Implementamos un sistema predictivo de demanda y optimización de rutas que redujo los costos logísticos en un 30% y mejoró la precisión de predicciones.",
      image: "/images/cases/logistics.jpg",
      stats: [
        { value: "30%", label: "Reducción de costos" },
        { value: "50%", label: "Mejora en precisión" }
      ]
    },
    {
      title: "Personalización E-commerce",
      client: "E-Commerce Pro",
      description: "Desarrollamos algoritmos de recomendación personalizados que incrementaron las ventas en un 45% y mejoraron la retención de clientes.",
      image: "/images/cases/ecommerce.jpg",
      stats: [
        { value: "45%", label: "Aumento en ventas" },
        { value: "60%", label: "Mejora en retención" }
      ]
    }
  ];
  
  // Testimonios de clientes
  const testimonials = [
    {
      quote: "VAX Solutions transformó nuestra manera de procesar datos financieros. Su enfoque innovador nos permitió reducir nuestro tiempo de análisis en un 70% y tomar decisiones más informadas.",
      author: "María González",
      position: "CTO",
      company: "FinTech Solutions",
      image: "/images/testimonials/maria.jpg"
    },
    {
      quote: "La implementación de soluciones de IA nos permitió personalizar la experiencia de compra y aumentar nuestras ventas significativamente. El equipo de VAX entendió perfectamente nuestras necesidades.",
      author: "Roberto Méndez",
      position: "Director de Operaciones",
      company: "E-Commerce Pro",
      image: "/images/testimonials/roberto.jpg"
    }
  ];
  
  // Variables para animaciones
  let isIntersecting = {};
  let currentTestimonial = 0;
  
  // Tecnologías
  const technologies = [
    { name: 'Power BI', logo: '/images/powerbi.svg' },
    { name: 'dbt', logo: '/images/dbt.svg' },
    { name: 'Snowflake', logo: '/images/snowflake.svg' },
    { name: 'Google Cloud', logo: '/images/gcp.svg' },
    { name: 'AWS', logo: '/images/aws.svg' },
    { name: 'Hevo', logo: '/images/hevo.svg' }
  ];
  
  onMount(() => {
    // Configuración de Intersection Observer para animaciones al hacer scroll
    const observerOptions = {
      threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isIntersecting[entry.target.id] = true;
        }
      });
    }, observerOptions);
    
    // Observar elementos para animar
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
      isIntersecting[el.id] = false;
    });
    
    // Rotación automática de testimonios
    const testimonialInterval = setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }, 8000);
    
    return () => {
      observer.disconnect();
      clearInterval(testimonialInterval);
    };
  });
  
  // Generación de partículas para el fondo del hero
  const generateParticles = (count) => {
    let particles = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const speed = Math.random() * 10 + 5;
      particles.push({ x, y, size, speed });
    }
    return particles;
  };
  
  const particles = generateParticles(30);
</script>

<svelte:head>
  <title>VAX Solutions - Transformando Datos en Valor</title>
  <meta name="description" content="VAX Solutions: consultoría especializada en Data Science e IA. Transformamos tus datos en acciones concretas para impulsar la innovación y el crecimiento de tu negocio." />
  
  <!-- Añadir precarga para las fuentes -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</svelte:head>

<!-- Hero Section con Glassmorphism -->
<section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
  <!-- Partículas animadas de fondo -->
  <div class="absolute inset-0 overflow-hidden">
    {#each particles as particle, i}
      <div
        class="absolute rounded-full bg-white opacity-30"
        style="
          left: {particle.x}%;
          top: {particle.y}%;
          width: {particle.size}px;
          height: {particle.size}px;
          animation: float {particle.speed}s infinite ease-in-out {i * 0.2}s;
        "
      ></div>
    {/each}
  </div>
  
  <!-- Patrón de malla -->
  <div class="absolute inset-0 bg-mesh opacity-20"></div>
  
  <!-- Contenido del Hero -->
  <div class="container mx-auto px-4 py-20 lg:py-32 relative z-10">
    <div class="flex flex-col lg:flex-row items-center">
      <div class="lg:w-1/2 mb-12 lg:mb-0">
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
          Transforma tus <span class="text-secondary">datos</span> en 
          <span class="relative">
            <span class="relative z-10">valor</span>
            <span class="absolute bottom-2 left-0 w-full h-2 bg-secondary/30 -z-10"></span>
          </span>
        </h1>
        
        <p class="text-xl text-white/80 mb-8 max-w-xl">
          Soluciones avanzadas de Data Science e Inteligencia Artificial diseñadas 
          para impulsar la innovación y el crecimiento de tu empresa
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/contacto" class="btn bg-white text-primary-700 hover:bg-secondary hover:text-white transition-all duration-300 font-semibold">
            Consulta gratuita
          </a>
          <a href="/servicios" class="glass-button text-white hover:bg-white/20 font-semibold">
            Nuestros servicios
          </a>
        </div>
      </div>
      
      <!-- Elemento visual animado con glassmorphism -->
      <div class="lg:w-1/2 relative">
        <div class="relative h-64 sm:h-96 lg:h-auto">
          <!-- Efectos de glassmorphism con datos animados -->
          <div class="glass absolute top-0 right-0 rounded-2xl w-72 h-60 transform rotate-3 animate-float shadow-glass">
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="h-4 w-32 bg-white/20 rounded-full"></div>
                <div class="h-6 w-6 rounded-full bg-secondary/30"></div>
              </div>
              <!-- Gráfico simulado -->
              <div class="flex items-end h-32 space-x-3 pt-4">
                <div class="w-8 h-40% bg-white/20 rounded-t-lg animate-pulse-slow"></div>
                <div class="w-8 h-70% bg-white/20 rounded-t-lg animate-pulse-slow delay-100"></div>
                <div class="w-8 h-50% bg-white/20 rounded-t-lg animate-pulse-slow delay-200"></div>
                <div class="w-8 h-90% bg-white/30 rounded-t-lg animate-pulse-slow delay-300"></div>
                <div class="w-8 h-60% bg-white/20 rounded-t-lg animate-pulse-slow delay-400"></div>
                <div class="w-8 h-40% bg-white/20 rounded-t-lg animate-pulse-slow delay-500"></div>
              </div>
            </div>
          </div>
          
          <div class="glass absolute top-20 right-16 rounded-2xl w-80 h-64 transform -rotate-6 animate-float delay-200 shadow-glass">
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="h-4 w-24 bg-white/20 rounded-full"></div>
                <div class="flex space-x-2">
                  <div class="h-4 w-4 rounded-full bg-secondary/50"></div>
                  <div class="h-4 w-4 rounded-full bg-white/20"></div>
                </div>
              </div>
              <!-- Línea de datos simulada -->
              <div class="relative h-28 mb-4">
                <svg class="w-full h-full" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M0,80 C20,85 40,30 60,50 C80,70 100,20 120,40 C140,60 160,10 180,20 C200,30 220,50 240,40 C260,30 280,10 300,20" 
                    stroke="rgba(255,255,255,0.5)" 
                    stroke-width="3" 
                    fill="none"
                    stroke-dasharray="300"
                    stroke-dashoffset="300"
                    class="animate-draw"
                  />
                  <circle cx="60" cy="50" r="4" fill="#3dbae0" class="animate-pulse" />
                  <circle cx="180" cy="20" r="4" fill="#3dbae0" class="animate-pulse" />
                  <circle cx="300" cy="20" r="4" fill="#3dbae0" class="animate-pulse" />
                </svg>
              </div>
              <div class="flex justify-between">
                <div class="h-3 w-16 bg-white/20 rounded-full"></div>
                <div class="h-3 w-16 bg-white/20 rounded-full"></div>
                <div class="h-3 w-16 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div class="glass absolute top-40 right-40 rounded-2xl w-64 h-56 animate-float delay-500 shadow-glass">
            <div class="p-6">
              <div class="mb-4">
                <div class="h-4 w-32 bg-white/20 rounded-full"></div>
              </div>
              <!-- Círculo de datos -->
              <div class="flex justify-center my-2">
                <div class="relative w-32 h-32 rounded-full border-4 border-white/20 flex items-center justify-center">
                  <div class="absolute inset-0 rounded-full border-4 border-secondary/50 border-l-transparent animate-spin" style="animation-duration: 4s;"></div>
                  <div class="text-2xl font-bold text-white">75%</div>
                </div>
              </div>
              <div class="mt-4 h-3 w-24 mx-auto bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Estadísticas -->
    <div class="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
      <div class="glass-card text-center p-6">
        <div class="text-3xl lg:text-4xl font-bold text-white mb-2">+50</div>
        <div class="text-white/80">Proyectos exitosos</div>
      </div>
      <div class="glass-card text-center p-6">
        <div class="text-3xl lg:text-4xl font-bold text-white mb-2">95%</div>
        <div class="text-white/80">Satisfacción cliente</div>
      </div>
      <div class="glass-card text-center p-6">
        <div class="text-3xl lg:text-4xl font-bold text-white mb-2">+30</div>
        <div class="text-white/80">Expertos en datos</div>
      </div>
      <div class="glass-card text-center p-6">
        <div class="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
        <div class="text-white/80">Soporte técnico</div>
      </div>
    </div>
  </div>
  
  <!-- Divisor de onda SVG -->
  <div class="absolute bottom-0 left-0 right-0 text-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="currentColor">
      <path d="M0,96L80,101.3C160,107,320,117,480,112C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
    </svg>
  </div>
</section>

<!-- Sección de Servicios con glassmorphism -->
<section id="servicios" class="section bg-white relative">
  <div class="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white"></div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div id="servicios-heading" class="animate-on-scroll max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
      <div class="w-20 h-1 bg-secondary mx-auto mb-6"></div>
      <p class="text-lg text-gray-600">
        Soluciones integrales de datos diseñadas para resolver tus desafíos empresariales 
        y potenciar tu ventaja competitiva
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each services as service, i}
        <div 
          id="service-card-{i}" 
          class="animate-on-scroll bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-secondary/20 group"
          class:translate-y-0={isIntersecting[`service-card-${i}`]}
          class:translate-y-10={!isIntersecting[`service-card-${i}`]}
          class:opacity-100={isIntersecting[`service-card-${i}`]}
          class:opacity-0={!isIntersecting[`service-card-${i}`]}
          style="transition-delay: {i * 100}ms"
        >
          <div class="text-primary group-hover:text-secondary transition-colors mb-6">
            {@html service.icon}
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
          <p class="text-gray-600 mb-6">{service.description}</p>
          <a href="/servicios" class="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors">
            Saber más
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <a href="/servicios" class="btn btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
        Ver todos los servicios
      </a>
    </div>
  </div>
</section>

<!-- Sección de Casos de Éxito con efectos modernos -->
<section id="casos-exito" class="section bg-gray-50 relative overflow-hidden">
  <!-- Patrón de fondo -->
  <div class="absolute inset-0 bg-mesh"></div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div id="casos-heading" class="animate-on-scroll max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Casos de Éxito</h2>
      <div class="w-20 h-1 bg-secondary mx-auto mb-6"></div>
      <p class="text-lg text-gray-600">
        Descubre cómo hemos ayudado a transformar empresas líderes mediante 
        soluciones avanzadas de datos e inteligencia artificial
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each caseStudies as study, i}
        <div 
          id="case-card-{i}" 
          class="animate-on-scroll bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
          class:translate-y-0={isIntersecting[`case-card-${i}`]}
          class:translate-y-10={!isIntersecting[`case-card-${i}`]}
          class:opacity-100={isIntersecting[`case-card-${i}`]}
          class:opacity-0={!isIntersecting[`case-card-${i}`]}
          style="transition-delay: {i * 200}ms"
        >
          <div class="h-48 overflow-hidden relative">
            <img src={study.image} alt={study.title} class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6">
              <span class="inline-block text-sm text-white/90 font-medium bg-secondary/90 py-1 px-3 rounded-full">
                {study.client}
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
            <p class="text-gray-600 mb-6">{study.description}</p>
            
            <!-- Estadísticas destacadas -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              {#each study.stats as stat}
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-xl font-bold text-primary mb-1">{stat.value}</div>
                  <div class="text-sm text-gray-500">{stat.label}</div>
                </div>
              {/each}
            </div>
            
            <a href="/casos-exito" class="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors">
              Ver caso completo
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <a href="/casos-exito" class="btn btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
        Ver todos los casos de éxito
      </a>
    </div>
  </div>
</section>

<!-- Sección de Testimonios con glassmorphism -->
<section id="testimonios" class="section bg-primary-700 relative overflow-hidden">
  <!-- Patrón de fondo -->
  <div class="absolute inset-0 bg-[url('/dots-pattern.svg')] opacity-10"></div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div id="testimonios-heading" class="animate-on-scroll max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
      <div class="w-20 h-1 bg-secondary mx-auto mb-6"></div>
      <p class="text-lg text-white/80">
        La excelencia es nuestro estándar, como lo confirman nuestros clientes
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto">
      <div class="relative h-auto min-h-[300px]">
        {#each testimonials as testimonial, i}
          <div 
            class="absolute inset-0 transition-opacity duration-1000 ease-in-out glass-card backdrop-blur-lg p-8 md:p-10 {currentTestimonial === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}"
          >
            <div class="flex flex-col md:flex-row gap-8 items-center h-full">
              <div class="md:w-1/3 flex justify-center flex-shrink-0">
                <div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20">
                  <img src={testimonial.image} alt={testimonial.author} class="w-full h-full object-cover" />
                </div>
              </div>
              <div class="md:w-2/3">
                <svg class="w-12 h-12 text-white/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-3.3 2.7-6 6-6V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-3.3 2.7-6 6-6V8z"></path>
                </svg>
                <p class="text-xl text-white mb-6">{testimonial.quote}</p>
                <div>
                  <div class="font-bold text-white">{testimonial.author}</div>
                  <div class="text-secondary">{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <!-- Navegación de puntos -->
      <div class="flex justify-center mt-8 space-x-2">
        {#each testimonials as _, i}
          <button 
            class="w-3 h-3 rounded-full transition-all {i === currentTestimonial ? 'bg-white' : 'bg-white/40 hover:bg-white/60'}"
            on:click={() => currentTestimonial = i}
            aria-label={`Ver testimonio ${i + 1}`}
          ></button>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Sección de Tecnologías -->
<section id="tecnologias" class="section bg-white">
  <div class="container mx-auto px-4">
    <div id="tecnologias-heading" class="animate-on-scroll max-w-3xl mx-auto text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Tecnologías que utilizamos</h2>
      <div class="w-20 h-1 bg-secondary mx-auto mb-6"></div>
      <p class="text-lg text-gray-600">
        Trabajamos con las herramientas más avanzadas para garantizar soluciones de calidad
      </p>
    </div>
    
    <div id="tecnologias-grid" class="animate-on-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
      {#each technologies as tech, i}
        <div 
          class="flex items-center justify-center p-4 transition-all duration-500"
          class:opacity-100={isIntersecting['tecnologias-grid']}
          class:opacity-0={!isIntersecting['tecnologias-grid']}
          style="transition-delay: {i * 100}ms"
        >
          <img 
            src={tech.logo} 
            alt={tech.name} 
            class="h-12 w-auto grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" 
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Sección CTA con glassmorphism -->
<section id="cta" class="relative py-24 overflow-hidden">
  <!-- Fondo con degradado -->
  <div class="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-secondary"></div>
  
  <!-- Patrón de malla -->
  <div class="absolute inset-0 bg-mesh opacity-20"></div>
  
  <!-- Figuras flotantes para efecto visual -->
  <div class="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/5"></div>
  <div class="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/5"></div>
  <div class="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white/5"></div>
  
  <div class="container mx-auto px-4 relative z-10">
    <div 
      id="cta-content" 
      class="animate-on-scroll max-w-4xl mx-auto text-center glass-card py-12 px-6 sm:px-10"
      class:translate-y-0={isIntersecting['cta-content']}
      class:translate-y-10={!isIntersecting['cta-content']}
      class:opacity-100={isIntersecting['cta-content']}
      class:opacity-0={!isIntersecting['cta-content']}
    >
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
        ¿Listo para transformar tu negocio?
      </h2>
      <p class="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
        Descubre cómo nuestras soluciones de datos pueden impulsar tu empresa hacia el futuro 
        con una consulta gratuita.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contacto" class="btn bg-white text-primary-700 hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Agendar ahora
        </a>
        <a href="/contacto" class="glass-button text-white hover:bg-white/20 hover:shadow-lg transform hover:scale-105">
          Contáctanos
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px 0 rgba(25, 37, 80, 0.3); }
    50% { box-shadow: 0 0 40px 10px rgba(25, 37, 80, 0.5); }
  }
  
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
  
  .animate-draw {
    animation: draw 3s forwards ease-in-out;
  }
  
  /* Transiciones para animaciones de scroll */
  .animate-on-scroll {
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
  }
  
  /* Glassmorphism */
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(25, 37, 80, 0.15);
  }
  
  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    box-shadow: 0 8px 32px 0 rgba(25, 37, 80, 0.15);
    transition: all 0.3s ease;
  }
  
  .glass-card:hover {
    box-shadow: 0 8px 32px 0 rgba(25, 37, 80, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .glass-button {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  
  .glass-button:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  
  /* Patrones de fondo */
  .bg-mesh {
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  /* Utilidades para animaciones */
  .animate-pulse-slow {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .delay-100 {
    animation-delay: 0.1s;
  }
  
  .delay-200 {
    animation-delay: 0.2s;
  }
  
  .delay-300 {
    animation-delay: 0.3s;
  }
  
  .delay-400 {
    animation-delay: 0.4s;
  }
  
  .delay-500 {
    animation-delay: 0.5s;
  }
  
  /* Altura porcentual para gráficos */
  .h-40\% {
    height: 40%;
  }
  
  .h-50\% {
    height: 50%;
  }
  
  .h-60\% {
    height: 60%;
  }
  
  .h-70\% {
    height: 70%;
  }
  
  .h-90\% {
    height: 90%;
  }
</style>