<!-- src/routes/casos-exito/+page.svelte -->
<script>
  const testimonials = [
    {
      name: 'María González',
      role: 'CTO',
      company: 'FinTech Solutions',
      image: '/images/testimonials/maria.jpg',
      quote: 'VAX Solutions transformó nuestra manera de procesar datos financieros. Redujimos nuestro tiempo de análisis en un 70% y mejoramos la precisión de nuestras predicciones.',
      results: ['70% reducción en tiempo de análisis', '95% precisión en predicciones', '30% incremento en eficiencia operativa']
    },
    {
      name: 'Roberto Méndez',
      role: 'Director de Operaciones',
      company: 'E-Commerce Pro',
      image: '/images/testimonials/roberto.jpg',
      quote: 'La implementación de soluciones de IA nos permitió personalizar la experiencia de compra y aumentar nuestras ventas significativamente.',
      results: ['45% aumento en ventas', '60% mejora en retención de clientes', '80% automatización de procesos']
    },
    {
      name: 'Ana Torres',
      role: 'Gerente de Datos',
      company: 'Seguros Capital',
      image: '/images/testimonials/ana.jpg',
      quote: 'La estrategia de datos implementada por VAX Solutions nos ayudó a identificar patrones de riesgo y optimizar nuestros productos.',
      results: ['50% reducción en fraudes', '40% mejora en evaluación de riesgos', '25% reducción en costos operativos']
    }
  ];

  const caseStudies = [
    {
      title: 'Transformación Digital en Sector Financiero',
      client: 'Banco Nacional',
      challenge: 'Necesidad de modernizar el análisis de riesgo crediticio y automatizar procesos de aprobación.',
      solution: 'Implementación de modelo de ML para evaluación automática de créditos y sistema de scoring en tiempo real.',
      results: [
        'Reducción del 65% en tiempo de aprobación',
        'Mejora del 40% en precisión de evaluación',
        'Ahorro anual de $2M en costos operativos'
      ],
      image: '/images/cases/fintech.jpg'
    },
    {
      title: 'Optimización de Cadena de Suministro',
      client: 'LogisTech',
      challenge: 'Ineficiencias en la gestión de inventario y rutas de distribución.',
      solution: 'Sistema predictivo de demanda y optimización de rutas mediante algoritmos de IA.',
      results: [
        'Reducción del 30% en costos logísticos',
        'Mejora del 50% en precisión de predicción de demanda',
        'Reducción del 25% en tiempo de entrega'
      ],
      image: '/images/cases/logistics.jpg'
    }
  ];
</script>

<svelte:head>
  <title>Casos de Éxito - VAX Solutions</title>
  <meta name="description" content="Descubre cómo hemos ayudado a empresas a transformar sus operaciones mediante soluciones de datos e IA." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Casos de Éxito
      </h1>
      <p class="text-xl text-gray-100">
        Historias reales de transformación digital y resultados excepcionales
      </p>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">
      Lo que dicen nuestros clientes
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each testimonials as testimonial}
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <div class="flex items-center mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              class="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 class="font-bold">{testimonial.name}</h3>
              <p class="text-gray-600">{testimonial.role}</p>
              <p class="text-primary">{testimonial.company}</p>
            </div>
          </div>
          <blockquote class="text-gray-600 mb-6">
            "{testimonial.quote}"
          </blockquote>
          <div class="border-t pt-4">
            <h4 class="font-semibold mb-2">Resultados destacados:</h4>
            <ul class="space-y-2">
              {#each testimonial.results as result}
                <li class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {result}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Case Studies Section -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">
      Historias de Impacto
    </h2>
    <div class="space-y-16">
      {#each caseStudies as caseStudy, i}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center {i % 2 === 1 ? 'lg:flex-row-reverse' : ''}">
          <div class="relative h-64 lg:h-full min-h-[400px]">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              class="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-4">{caseStudy.title}</h3>
            <p class="text-primary font-medium mb-4">{caseStudy.client}</p>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold mb-2">El Desafío</h4>
                <p class="text-gray-600">{caseStudy.challenge}</p>
              </div>
              
              <div>
                <h4 class="font-semibold mb-2">Nuestra Solución</h4>
                <p class="text-gray-600">{caseStudy.solution}</p>
              </div>
              
              <div>
                <h4 class="font-semibold mb-2">Resultados</h4>
                <ul class="space-y-2">
                  {#each caseStudy.results as result}
                    <li class="flex items-center text-gray-600">
                      <svg class="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      {result}
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-primary text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">
      ¿Listo para ser nuestro próximo caso de éxito?
    </h2>
    <p class="text-xl mb-8 max-w-2xl mx-auto">
      Descubre cómo podemos ayudarte a alcanzar resultados excepcionales con nuestras soluciones de datos e IA.
    </p>
    <a href="/contacto" class="btn bg-white text-primary hover:bg-gray-100">
      Comienza tu transformación
    </a>
  </div>
</section> 