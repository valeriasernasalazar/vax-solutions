<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/casos-exito', label: 'Casos de Éxito' },
    { href: '/sectores', label: 'Sectores' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contáctanos' },
  ];

  let isMenuOpen = false;
  let scrollY = 0;

  onMount(() => {
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    });
  });
</script>

<header class="fixed w-full z-50 transition-all duration-300 {scrollY > 50 ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <a href="/" class="text-2xl font-bold gradient-text">VAX Solutions</a>
      
      <div class="hidden md:flex space-x-8">
        {#each navItems as item}
          <a
            href={item.href}
            class="nav-link {$page.url.pathname === item.href ? 'text-primary font-medium' : ''}"
          >
            {item.label}
          </a>
        {/each}
      </div>

      <button 
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
        aria-label="Toggle mobile menu"
        on:click={() => isMenuOpen = !isMenuOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden mt-4 py-4 space-y-4 bg-white rounded-lg shadow-xl">
        {#each navItems as item}
          <a
            href={item.href}
            class="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
          >
            {item.label}
          </a>
        {/each}
      </div>
    {/if}
  </nav>
</header>

<main class="pt-20">
  <slot />
</main>

<footer class="bg-gradient-to-b from-gray-900 to-gray-800 text-white mt-20">
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-4 gradient-text">VAX Solutions</h3>
        <p class="text-gray-400">Transformamos tus datos en acciones concretas para impulsar tu negocio.</p>
        <div class="mt-4 flex space-x-4">
          <span class="tech-badge">Data Science</span>
          <span class="tech-badge">AI/ML</span>
          <span class="tech-badge">Analytics</span>
        </div>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
        <ul class="space-y-2">
          {#each navItems as item}
            <li>
              <a href={item.href} class="text-gray-400 hover:text-white transition-colors">
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-4">Contacto</h4>
        <ul class="space-y-2 text-gray-400">
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>info@vaxsolutions.com</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Ciudad de México, México</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-4">Síguenos</h4>
        <div class="flex space-x-4">
          <a href="https://linkedin.com" class="text-gray-400 hover:text-white transition-colors">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          <a href="https://instagram.com" class="text-gray-400 hover:text-white transition-colors">
            <span class="sr-only">Instagram</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} VAX Solutions. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style> 