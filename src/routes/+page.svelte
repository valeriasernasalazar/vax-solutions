<!-- src/routes/+page.svelte -->
<script>
  const benefits = [
    {
      title: 'Automatización',
      description: 'Optimiza tus procesos y reduce errores humanos con soluciones automatizadas.',
      icon: '⚡'
    },
    {
      title: 'Agilidad',
      description: 'Toma decisiones más rápidas basadas en datos en tiempo real.',
      icon: '🚀'
    },
    {
      title: 'Seguridad',
      description: 'Protege tus datos con las mejores prácticas de seguridad y cumplimiento.',
      icon: '🔒'
    }
  ];

  const technologies = [
    { name: 'Power BI', logo: '/images/powerbi.svg' },
    { name: 'dbt', logo: '/images/dbt.svg' },
    { name: 'Snowflake', logo: '/images/snowflake.svg' },
    { name: 'Google Cloud', logo: '/images/gcp.svg' },
    { name: 'AWS', logo: '/images/aws.svg' },
    { name: 'Hevo', logo: '/images/hevo.svg' }
  ];
</script>

<svelte:head>
  <title>VAX Solutions - Transforma tus datos en acciones</title>
  <meta name="description" content="Consultoría especializada en ciencia de datos e inteligencia artificial para empresas." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-dark text-white">
  <div class="container mx-auto px-4 py-20 md:py-32">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        Transforma tus datos en acciones
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-gray-100">
        Utiliza tus datos para obtener una perspectiva completa y detallada de tu negocio
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contacto" class="btn bg-white text-primary hover:bg-gray-100">
          Contáctanos
        </a>
        <a href="/contacto#agendar" class="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary">
          Agenda una cita
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Benefits Section -->
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
      Beneficios de trabajar con nosotros
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each benefits as benefit}
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="text-4xl mb-4">{benefit.icon}</div>
          <h3 class="text-xl font-semibold mb-3">{benefit.title}</h3>
          <p class="text-gray-600">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Technologies Section -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">
      Tecnologías que utilizamos
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
      {#each technologies as tech}
        <div class="flex items-center justify-center">
          <img src={tech.logo} alt={tech.name} class="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-primary text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">
      ¿Listo para transformar tu negocio?
    </h2>
    <p class="text-xl mb-8 max-w-2xl mx-auto">
      Descubre cómo nuestras soluciones de datos pueden impulsar tu empresa hacia el futuro.
    </p>
    <a href="/contacto" class="btn bg-white text-primary hover:bg-gray-100">
      Comienza ahora
    </a>
  </div>
</section> 