<!-- src/routes/nosotros/+page.svelte -->
<script>
  const values = [
    {
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de resolver problemas complejos mediante tecnologías emergentes.',
      icon: '💡'
    },
    {
      title: 'Excelencia',
      description: 'Nos comprometemos a entregar soluciones de la más alta calidad que superen las expectativas.',
      icon: '⭐'
    },
    {
      title: 'Transparencia',
      description: 'Mantenemos una comunicación clara y honesta en todos nuestros procesos y relaciones.',
      icon: '🤝'
    },
    {
      title: 'Impacto',
      description: 'Nos enfocamos en generar resultados medibles que transformen positivamente los negocios.',
      icon: '🎯'
    }
  ];

  const team = [
    {
      name: 'Ana Martínez',
      role: 'CEO & Fundadora',
      bio: 'Experta en ciencia de datos con más de 15 años de experiencia en consultoría tecnológica.',
      image: '/images/team/ana.jpg'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director de Tecnología',
      bio: 'Especialista en arquitectura de datos y soluciones de IA con experiencia en empresas Fortune 500.',
      image: '/images/team/carlos.jpg'
    },
    {
      name: 'Laura Sánchez',
      role: 'Directora de Consultoría',
      bio: 'Líder en transformación digital con enfoque en estrategias basadas en datos.',
      image: '/images/team/laura.jpg'
    }
  ];
</script>

<svelte:head>
  <title>Nosotros - VAX Solutions</title>
  <meta name="description" content="Conoce más sobre VAX Solutions, nuestra misión, valores y equipo de expertos en ciencia de datos e IA." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Sobre Nosotros
      </h1>
      <p class="text-xl text-gray-100">
        Transformando empresas a través del poder de los datos y la inteligencia artificial
      </p>
    </div>
  </div>
</section>

<!-- Mission Section -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Nuestra Misión</h2>
      <p class="text-xl text-gray-600 leading-relaxed">
        En VAX Solutions, nos dedicamos a empoderar a las empresas mediante soluciones 
        innovadoras de datos e inteligencia artificial. Nuestra misión es transformar 
        datos complejos en insights accionables que impulsen el crecimiento y la 
        eficiencia operativa de nuestros clientes.
      </p>
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="bg-gray-50 py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each values as value}
        <div class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
          <div class="text-4xl mb-4">{value.icon}</div>
          <h3 class="text-xl font-semibold mb-3">{value.title}</h3>
          <p class="text-gray-600">{value.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Team Section -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each team as member}
        <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img src={member.image} alt={member.name} class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{member.name}</h3>
            <p class="text-primary font-medium mb-3">{member.role}</p>
            <p class="text-gray-600">{member.bio}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Join Us Section -->
<section class="bg-primary text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">
      ¿Listo para unirte a la revolución de los datos?
    </h2>
    <p class="text-xl mb-8 max-w-2xl mx-auto">
      Descubre cómo podemos ayudarte a transformar tu negocio mediante soluciones 
      innovadoras de datos e inteligencia artificial.
    </p>
    <a href="/contacto" class="btn bg-white text-primary hover:bg-gray-100">
      Contáctanos
    </a>
  </div>
</section> 