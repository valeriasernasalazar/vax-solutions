<!-- src/routes/servicios/+page.svelte -->
<script>
  const services = [
    {
      title: 'Estrategia de Datos',
      description: 'Desarrollamos estrategias personalizadas para aprovechar al máximo tus datos empresariales.',
      features: [
        'Evaluación de madurez de datos',
        'Arquitectura de datos',
        'Gobierno de datos',
        'Roadmap de implementación'
      ],
      icon: '📊'
    },
    {
      title: 'Análisis Empresarial',
      description: 'Convertimos tus datos en insights accionables para la toma de decisiones.',
      features: [
        'Dashboards interactivos',
        'Reportes automatizados',
        'KPIs personalizados',
        'Análisis predictivo'
      ],
      icon: '📈'
    },
    {
      title: 'Machine Learning & AI',
      description: 'Implementamos soluciones avanzadas de ML y AI para optimizar tu negocio.',
      features: [
        'Modelos predictivos',
        'Segmentación de clientes',
        'Detección de anomalías',
        'Procesamiento de lenguaje natural'
      ],
      icon: '🤖'
    },
    {
      title: 'Reducción de Costos',
      description: 'Optimizamos tus procesos mediante automatización y eficiencia operativa.',
      features: [
        'Automatización de procesos',
        'Optimización de recursos',
        'Reducción de desperdicios',
        'Eficiencia operativa'
      ],
      icon: '💰'
    }
  ];
</script>

<svelte:head>
  <title>Servicios - VAX Solutions</title>
  <meta name="description" content="Servicios de consultoría en ciencia de datos, machine learning e inteligencia artificial para empresas." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Nuestros Servicios
      </h1>
      <p class="text-xl text-gray-100">
        Soluciones integrales de datos para impulsar tu negocio hacia el futuro
      </p>
    </div>
  </div>
</section>

<!-- Services Grid -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each services as service}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="p-8">
            <div class="text-4xl mb-4">{service.icon}</div>
            <h2 class="text-2xl font-bold mb-4">{service.title}</h2>
            <p class="text-gray-600 mb-6">{service.description}</p>
            <ul class="space-y-3">
              {#each service.features as feature}
                <li class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-gray-50 py-20">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-6">
      ¿Necesitas una solución personalizada?
    </h2>
    <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Contáctanos para discutir cómo podemos ayudarte a alcanzar tus objetivos empresariales.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contacto" class="btn btn-primary">
        Solicitar consulta
      </a>
      <a href="/casos-exito" class="btn btn-secondary">
        Ver casos de éxito
      </a>
    </div>
  </div>
</section> 