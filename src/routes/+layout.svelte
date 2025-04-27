<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { onMount, afterUpdate } from 'svelte';

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/sectores', label: 'Sectores' },
    { href: '/casos-exito', label: 'Casos de Éxito' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/blog', label: 'Blog' }
  ];

  let isMenuOpen = false;
  let scrollY = 0;
  let headerHeight = 0;
  let headerRef;
  let mainRef;
  let isPageLoaded = false;

  // Detectar scroll para cambios de estilo en el header
  onMount(() => {
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
    });
    
    // Cerrar menú al cambiar de ruta
    const unsubscribe = page.subscribe(() => {
      isMenuOpen = false;
    });
    
    isPageLoaded = true;
    
    return () => {
      window.removeEventListener('scroll', () => {});
      unsubscribe();
    };
  });
  
  afterUpdate(() => {
    if (headerRef && mainRef) {
      headerHeight = headerRef.offsetHeight;
      mainRef.style.paddingTop = `${headerHeight}px`;
    }
  });
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  // Estado para animación del header
  $: isScrolled = scrollY > 30;
  
  // Determinar si estamos en la página de inicio
  $: isHomePage = $page.url.pathname === '/';
</script>

<header 
  bind:this={headerRef}
  class="fixed w-full z-50 transition-all duration-300"
  class:py-4={!isScrolled}
  class:py-2={isScrolled}
  class:bg-transparent={!isScrolled && isHomePage}
  class:{"bg-white/90"}={isScrolled || !isHomePage}
  class:backdrop-blur-lg={isScrolled || !isHomePage}
  class:shadow-lg={isScrolled || !isHomePage}
>
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between">
      <!-- Logo SVG -->
      <a href="/" class="z-10 relative">
        <div class="flex items-center">
          <!-- Solo el símbolo VA -->
          <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.4545 33.6312L74.1177 12.2834C68.1819 20.2047 56.3389 33.4436 44.4725 39.3816L65.8093 60.7294C77.6757 54.7914 89.5187 41.5525 95.4545 33.6312Z" 
                  fill={isScrolled || !isHomePage ? "#192550" : "#FFFFFF"}/>
            <path d="M24.5455 86.3688L45.8823 107.717C51.8181 99.7952 63.6611 86.5564 75.5275 80.6184L54.1907 59.2706C42.3243 65.2086 30.4813 78.4475 24.5455 86.3688Z" 
                  fill={isScrolled || !isHomePage ? "#192550" : "#FFFFFF"}/>
          </svg>
          <!-- Texto separado como HTML -->
          <span class="text-2xl font-bold ml-2 transition-colors duration-300"
            class:text-white={!isScrolled && isHomePage}
            class:text-primary-700={isScrolled || !isHomePage}>
            VAX<span class="text-secondary">Solutions</span>
          </span>
        </div>
      </a>
      
      <!-- Navegación de escritorio -->
      <div class="hidden lg:flex items-center space-x-8">
        {#each navItems as item}
          <a
            href={item.href}
            class="relative py-2 text-lg font-medium transition-colors duration-300
              after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
              after:transition-all after:duration-300 hover:after:w-full"
            class:text-white={!isScrolled && isHomePage}
            class:text-gray-700={isScrolled || !isHomePage}
            class:hover:text-white={!isScrolled && isHomePage}
            class:hover:text-primary-600={isScrolled || !isHomePage}
            class:after:bg-white={!isScrolled && isHomePage}
            class:after:bg-primary-600={isScrolled || !isHomePage}
            class:text-secondary={$page.url.pathname === item.href}
            class:after:w-full={$page.url.pathname === item.href}
          >
            {item.label}
          </a>
        {/each}
      </div>

      <!-- Botón de contacto -->
      <div class="hidden lg:block">
        <a 
          href="/contacto" 
          class="btn transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          class:bg-white={!isScrolled && isHomePage}
          class:text-primary-700={!isScrolled && isHomePage}
          class:hover:bg-secondary={!isScrolled && isHomePage}
          class:hover:text-white={!isScrolled && isHomePage}
          class:bg-primary-700={isScrolled || !isHomePage}
          class:text-white={isScrolled || !isHomePage}
          class:hover:bg-secondary={isScrolled || !isHomePage}
        >
          Contáctanos
        </a>
      </div>

      <!-- Botón de menú móvil -->
      <button 
        class="lg:hidden relative z-10 p-2 rounded-lg transition-colors duration-300" 
        class:text-white={!isScrolled && isHomePage && !isMenuOpen}
        class:text-primary-700={isScrolled || !isHomePage || isMenuOpen}
        class:{"hover:bg-white/10"}={!isScrolled && isHomePage && !isMenuOpen}
        class:hover:bg-primary-50={isScrolled || !isHomePage || isMenuOpen}
        aria-label="Alternar menú móvil"
        on:click={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Menú móvil con efecto glassmorphism -->
  {#if isMenuOpen}
    <div 
      class="lg:hidden fixed inset-0 z-0 backdrop-blur-sm transition-opacity duration-300"
      class:{"bg-gray-900/50"}={true}
      class:opacity-100={isMenuOpen}
      class:opacity-0={!isMenuOpen}
      on:click={toggleMenu}
    ></div>
    <div 
      class="lg:hidden fixed top-0 right-0 bottom-0 z-0 w-4/5 max-w-sm backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out"
      class:{"bg-white/95"}={true}
      class:translate-x-0={isMenuOpen}
      class:translate-x-full={!isMenuOpen}
      style="margin-top: {headerHeight}px;"
    >
      <div class="py-6 px-6 overflow-y-auto h-full flex flex-col">
        <nav class="space-y-1 mb-8">
          {#each navItems as item}
            <a
              href={item.href}
              class="block py-3 px-4 text-lg font-medium rounded-lg transition-colors duration-200"
              class:text-gray-700={$page.url.pathname !== item.href}
              class:text-primary-700={$page.url.pathname === item.href}
              class:bg-primary-50={$page.url.pathname === item.href}
              class:hover:text-primary-600={$page.url.pathname !== item.href}
              class:hover:bg-gray-50={$page.url.pathname !== item.href}
            >
              {item.label}
            </a>
          {/each}
          <a
            href="/contacto"
            class="block py-3 px-4 text-lg font-medium rounded-lg transition-colors duration-200"
            class:text-gray-700={$page.url.pathname !== '/contacto'}
            class:text-primary-700={$page.url.pathname === '/contacto'}
            class:bg-primary-50={$page.url.pathname === '/contacto'}
            class:hover:text-primary-600={$page.url.pathname !== '/contacto'}
            class:hover:bg-gray-50={$page.url.pathname !== '/contacto'}
          >
            Contacto
          </a>
        </nav>
        
        <div class="mt-auto pt-6 border-t border-gray-100">
          <!-- Social media links -->
          <div class="flex justify-center space-x-5">
            <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-600 transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          
          <p class="mt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} VAX Solutions.<br/>Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  {/if}
</header>

<main bind:this={mainRef} class="min-h-screen">
  {#if isPageLoaded}
    <slot />
  {/if}
</main>

<footer class="bg-primary-900 text-white relative overflow-hidden">
  <!-- Patrones de fondo -->
  <div class="absolute inset-0 bg-mesh opacity-10"></div>
  
  <div class="container mx-auto px-4 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <!-- Columna 1: Información de la empresa -->
      <div>
        <div class="flex items-center mb-6">
          <!-- Logo simplificado para el footer -->
          <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
            <path d="M95.4545 33.6312L74.1177 12.2834C68.1819 20.2047 56.3389 33.4436 44.4725 39.3816L65.8093 60.7294C77.6757 54.7914 89.5187 41.5525 95.4545 33.6312Z" fill="white"/>
            <path d="M24.5455 86.3688L45.8823 107.717C51.8181 99.7952 63.6611 86.5564 75.5275 80.6184L54.1907 59.2706C42.3243 65.2086 30.4813 78.4475 24.5455 86.3688Z" fill="white"/>
          </svg>
          <span class="text-2xl font-bold text-white">
            VAX<span class="text-secondary">Solutions</span>
          </span>
        </div>
        
        <p class="text-gray-300 mb-6">
          Transformamos datos en valor para impulsar el crecimiento y la eficiencia 
          de tu empresa mediante soluciones avanzadas de Data Science e IA.
        </p>
        
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <span class="sr-only">Instagram</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Columna 2: Enlaces útiles -->
      <div>
        <h3 class="text-lg font-bold mb-6 text-white">Enlaces rápidos</h3>
        <ul class="space-y-3">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                class="text-gray-300 hover:text-secondary transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                {item.label}
              </a>
            </li>
          {/each}
          <li>
            <a
              href="/contacto"
              class="text-gray-300 hover:text-secondary transition-colors inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
              Contacto
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Columna 3: Servicios -->
      <div>
        <h3 class="text-lg font-bold mb-6 text-white">Nuestros servicios</h3>
        <ul class="space-y-3">
          <li>
            <a href="/servicios" class="text-gray-300 hover:text-secondary transition-colors">
              Estrategia de Datos
            </a>
          </li>
          <li>
            <a href="/servicios" class="text-gray-300 hover:text-secondary transition-colors">
              Análisis Empresarial
            </a>
          </li>
          <li>
            <a href="/servicios" class="text-gray-300 hover:text-secondary transition-colors">
              Machine Learning e IA
            </a>
          </li>
          <li>
            <a href="/servicios" class="text-gray-300 hover:text-secondary transition-colors">
              Automatización de Procesos
            </a>
          </li>
          <li>
            <a href="/servicios" class="text-gray-300 hover:text-secondary transition-colors">
              Big Data
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Columna 4: Contacto -->
      <div>
        <h3 class="text-lg font-bold mb-6 text-white">Contacto</h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="text-gray-300">info@vaxsolutions.com</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-gray-300">+52 55 1234 5678</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-gray-300">Ciudad de México,<br />México</span>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Separador -->
    <div class="border-t border-gray-800 mt-12 pt-8">
      <div class="flex flex-col md:flex-row md:justify-between items-center">
        <p class="text-gray-400 text-sm order-2 md:order-1 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} VAX Solutions. Todos los derechos reservados.
        </p>
        
        <!-- Newsletter suscription -->
        <div class="order-1 md:order-2 w-full md:w-auto">
          <div class="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              class="px-4 py-2 rounded-lg border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
              class:{"bg-primary-800"}={true}
              class:{"border-primary-700"}={true}
            />
            <button class="btn px-4 py-2 text-white hover:bg-secondary-400" class:{"bg-secondary"}={true}>
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  /* Estilos adicionales específicos */
  .bg-mesh {
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
</style>