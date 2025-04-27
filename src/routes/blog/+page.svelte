<!-- src/routes/blog/+page.svelte -->
<script>
  const posts = [
    {
      title: 'El futuro de la IA en la toma de decisiones empresariales',
      excerpt: 'Descubre cómo la inteligencia artificial está transformando la manera en que las empresas toman decisiones estratégicas y operativas.',
      image: '/images/blog/ai-business.jpg',
      author: 'Ana Martínez',
      date: '2024-04-15',
      category: 'Inteligencia Artificial',
      readTime: '5 min'
    },
    {
      title: 'Mejores prácticas en la implementación de Data Lakes',
      excerpt: 'Una guía completa sobre cómo implementar y gestionar data lakes de manera efectiva en tu organización.',
      image: '/images/blog/data-lake.jpg',
      author: 'Carlos Rodríguez',
      date: '2024-04-10',
      category: 'Big Data',
      readTime: '8 min'
    },
    {
      title: 'Machine Learning en el sector financiero',
      excerpt: 'Casos de uso y aplicaciones prácticas de machine learning en la industria financiera.',
      image: '/images/blog/ml-finance.jpg',
      author: 'Laura Sánchez',
      date: '2024-04-05',
      category: 'Machine Learning',
      readTime: '6 min'
    },
    {
      title: 'Automatización de procesos con IA',
      excerpt: 'Cómo la automatización inteligente está revolucionando la eficiencia operativa en las empresas.',
      image: '/images/blog/automation.jpg',
      author: 'Miguel Torres',
      date: '2024-04-01',
      category: 'Automatización',
      readTime: '4 min'
    }
  ];

  const categories = [
    'Todos',
    'Inteligencia Artificial',
    'Machine Learning',
    'Big Data',
    'Automatización',
    'Análisis de Datos'
  ];

  let selectedCategory = 'Todos';

  $: filteredPosts = selectedCategory === 'Todos'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  }
</script>

<svelte:head>
  <title>Blog - VAX Solutions</title>
  <meta name="description" content="Artículos y novedades sobre ciencia de datos, inteligencia artificial y transformación digital." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Blog
      </h1>
      <p class="text-xl text-gray-100">
        Insights y novedades sobre ciencia de datos e inteligencia artificial
      </p>
    </div>
  </div>
</section>

<!-- Categories -->
<section class="py-8 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap gap-4 justify-center">
      {#each categories as category}
        <button
          class="px-4 py-2 rounded-full {selectedCategory === category ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}"
          on:click={() => selectedCategory = category}
        >
          {category}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Blog Posts Grid -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredPosts as post}
        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img
            src={post.image}
            alt={post.title}
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span class="bg-primary/10 text-primary px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span>{post.readTime} lectura</span>
            </div>
            <h2 class="text-xl font-bold mb-3 hover:text-primary">
              <a href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
                {post.title}
              </a>
            </h2>
            <p class="text-gray-600 mb-4">
              {post.excerpt}
            </p>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600">Por {post.author}</span>
              <span class="text-gray-500">{formatDate(post.date)}</span>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- Newsletter Section -->
<section class="bg-gray-50 py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">
        Suscríbete a nuestro newsletter
      </h2>
      <p class="text-gray-600 mb-8">
        Recibe las últimas novedades y artículos sobre ciencia de datos e IA 
        directamente en tu bandeja de entrada.
      </p>
      <form class="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Tu correo electrónico"
          class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button type="submit" class="btn btn-primary whitespace-nowrap">
          Suscribirse
        </button>
      </form>
    </div>
  </div>
</section> 