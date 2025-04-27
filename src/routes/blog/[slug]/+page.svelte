<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
  import { page } from '$app/stores';
  import { error } from '@sveltejs/kit';

  // Import the posts data
  const posts = [
    {
      title: 'El futuro de la IA en la toma de decisiones empresariales',
      excerpt: 'Descubre cómo la inteligencia artificial está transformando la manera en que las empresas toman decisiones estratégicas y operativas.',
      image: '/images/blog/ai-business.jpg',
      author: 'Ana Martínez',
      date: '2024-04-15',
      category: 'Inteligencia Artificial',
      readTime: '5 min',
      content: `
        La inteligencia artificial está revolucionando la forma en que las empresas toman decisiones. 
        Desde la automatización de procesos hasta el análisis predictivo, la IA se ha convertido en una 
        herramienta fundamental para la toma de decisiones empresariales.

        Las empresas que adoptan la IA en sus procesos de toma de decisiones experimentan:
        • Mayor precisión en las predicciones
        • Reducción de costos operativos
        • Mejora en la eficiencia de procesos
        • Ventaja competitiva en el mercado

        La implementación de la IA en la toma de decisiones requiere:
        1. Datos de calidad
        2. Infraestructura tecnológica adecuada
        3. Personal capacitado
        4. Estrategia clara de implementación
      `
    },
    {
      title: 'Mejores prácticas en la implementación de Data Lakes',
      excerpt: 'Una guía completa sobre cómo implementar y gestionar data lakes de manera efectiva en tu organización.',
      image: '/images/blog/data-lake.jpg',
      author: 'Carlos Rodríguez',
      date: '2024-04-10',
      category: 'Big Data',
      readTime: '8 min',
      content: `
        Los data lakes se han convertido en una pieza fundamental de la arquitectura de datos moderna.
        Esta guía te ayudará a implementar y gestionar data lakes de manera efectiva.

        Aspectos clave a considerar:
        • Arquitectura escalable
        • Gobierno de datos
        • Seguridad y cumplimiento
        • Calidad de datos
        • Metadata management

        Pasos para una implementación exitosa:
        1. Definición de objetivos claros
        2. Selección de tecnología adecuada
        3. Establecimiento de políticas de gobierno
        4. Implementación por fases
        5. Monitoreo y optimización continua
      `
    },
    {
      title: 'Machine Learning en el sector financiero',
      excerpt: 'Casos de uso y aplicaciones prácticas de machine learning en la industria financiera.',
      image: '/images/blog/ml-finance.jpg',
      author: 'Laura Sánchez',
      date: '2024-04-05',
      category: 'Machine Learning',
      readTime: '6 min',
      content: `
        El machine learning está transformando el sector financiero con aplicaciones innovadoras
        que mejoran la eficiencia y reducen riesgos.

        Principales aplicaciones:
        • Detección de fraude
        • Evaluación de riesgos crediticios
        • Trading algorítmico
        • Personalización de servicios
        • Atención al cliente automatizada

        Beneficios clave:
        1. Mayor precisión en análisis de riesgos
        2. Reducción de costos operativos
        3. Mejora en la experiencia del cliente
        4. Automatización de procesos
      `
    },
    {
      title: 'Automatización de procesos con IA',
      excerpt: 'Cómo la automatización inteligente está revolucionando la eficiencia operativa en las empresas.',
      image: '/images/blog/automation.jpg',
      author: 'Miguel Torres',
      date: '2024-04-01',
      category: 'Automatización',
      readTime: '4 min',
      content: `
        La automatización inteligente combina RPA (Robotic Process Automation) con IA
        para crear soluciones más sofisticadas y adaptativas.

        Ventajas de la automatización con IA:
        • Mayor eficiencia operativa
        • Reducción de errores humanos
        • Escalabilidad mejorada
        • Análisis en tiempo real

        Áreas de aplicación:
        1. Procesamiento de documentos
        2. Atención al cliente
        3. Gestión de inventario
        4. Mantenimiento predictivo
      `
    }
  ];

  function formatDate(dateString) {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Fecha no válida';
      }
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('es-ES', options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Fecha no válida';
    }
  }

  // Find the current post based on the slug
  const slug = $page.params.slug;
  const currentPost = posts.find(post => 
    post.title.toLowerCase().replace(/ /g, '-') === slug
  );

  if (!currentPost) {
    throw error(404, 'Post no encontrado');
  }
</script>

<svelte:head>
  <title>{currentPost.title} - VAX Solutions Blog</title>
  <meta name="description" content={currentPost.excerpt} />
</svelte:head>

<!-- Article Header -->
<section class="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto">
      <div class="mb-6">
        <span class="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
          {currentPost.category}
        </span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        {currentPost.title}
      </h1>
      <div class="flex items-center gap-6 text-white/90">
        <span>Por {currentPost.author}</span>
        <span>{formatDate(currentPost.date)}</span>
        <span>{currentPost.readTime} lectura</span>
      </div>
    </div>
  </div>
</section>

<!-- Article Content -->
<article class="py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto">
      <img
        src={currentPost.image}
        alt={currentPost.title}
        class="w-full h-[400px] object-cover rounded-xl mb-12"
      />
      
      <div class="prose prose-lg max-w-none">
        {#each currentPost.content.split('\n') as paragraph}
          {#if paragraph.trim()}
            <p class="mb-6">{paragraph.trim()}</p>
          {/if}
        {/each}
      </div>

      <!-- Share Buttons -->
      <div class="mt-12 pt-8 border-t">
        <h3 class="text-xl font-bold mb-4">Comparte este artículo</h3>
        <div class="flex gap-4">
          <button class="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
            Twitter
          </button>
          <button class="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  </div>
</article>

<!-- Related Posts -->
<section class="bg-gray-50 py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold mb-12">Artículos relacionados</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each posts.filter(post => post.category === currentPost.category && post !== currentPost).slice(0, 2) as post}
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3">
                <a 
                  href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                  class="hover:text-primary"
                >
                  {post.title}
                </a>
              </h3>
              <p class="text-gray-600 mb-4">{post.excerpt}</p>
              <div class="text-sm text-gray-500">
                {formatDate(post.date)} • {post.readTime} lectura
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section> 