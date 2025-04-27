<!-- src/routes/sectores/+page.svelte -->
<script>
  const sectors = [
    {
      name: 'FINTECH',
      description: 'Soluciones de datos para instituciones financieras digitales, procesamiento de pagos y servicios financieros innovadores.',
      features: [
        'Análisis de riesgo crediticio',
        'Detección de fraude en tiempo real',
        'Personalización de servicios financieros',
        'Automatización de procesos bancarios'
      ],
      icon: '💳'
    },
    {
      name: 'E-commerce',
      description: 'Optimización de operaciones y experiencia del cliente para comercio electrónico.',
      features: [
        'Personalización de recomendaciones',
        'Análisis de comportamiento del cliente',
        'Optimización de inventario',
        'Predicción de demanda'
      ],
      icon: '🛒'
    },
    {
      name: 'Finanzas',
      description: 'Soluciones avanzadas para instituciones financieras tradicionales y servicios de inversión.',
      features: [
        'Análisis de mercados financieros',
        'Gestión de riesgos',
        'Automatización de reportes regulatorios',
        'Optimización de portafolios'
      ],
      icon: '📊'
    },
    {
      name: 'Inmobiliario',
      description: 'Análisis y predicción para el sector inmobiliario y construcción.',
      features: [
        'Valoración automática de propiedades',
        'Análisis de mercado inmobiliario',
        'Predicción de tendencias',
        'Optimización de precios'
      ],
      icon: '🏢'
    },
    {
      name: 'Comercial',
      description: 'Soluciones para retail y comercio tradicional en transformación digital.',
      features: [
        'Análisis de punto de venta',
        'Optimización de precios',
        'Gestión de inventario',
        'Análisis de comportamiento del consumidor'
      ],
      icon: '🏪'
    },
    {
      name: 'Seguros',
      description: 'Modernización de procesos y análisis de riesgos para el sector asegurador.',
      features: [
        'Evaluación automatizada de riesgos',
        'Detección de fraude',
        'Procesamiento de reclamos',
        'Personalización de pólizas'
      ],
      icon: '🛡️'
    }
  ];
</script>

<svelte:head>
  <title>Sectores - VAX Solutions</title>
  <meta name="description" content="Soluciones especializadas de datos e IA para diferentes sectores industriales." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Sectores
      </h1>
      <p class="text-xl text-gray-100">
        Soluciones especializadas para cada industria
      </p>
    </div>
  </div>
</section>

<!-- Sectors Grid -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each sectors as sector}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="p-8">
            <div class="text-4xl mb-4">{sector.icon}</div>
            <h2 class="text-2xl font-bold mb-4">{sector.name}</h2>
            <p class="text-gray-600 mb-6">{sector.description}</p>
            <ul class="space-y-3">
              {#each sector.features as feature}
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
      ¿No encuentras tu industria?
    </h2>
    <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Nuestras soluciones son adaptables a cualquier sector. Contáctanos para discutir 
      cómo podemos ayudarte con tus necesidades específicas.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contacto" class="btn btn-primary">
        Contactar ahora
      </a>
      <a href="/casos-exito" class="btn btn-secondary">
        Ver casos de éxito
      </a>
    </div>
  </div>
</section> 