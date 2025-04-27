<!-- src/routes/contacto/+page.svelte -->
<script>
  let formData = {
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: '',
    servicio: 'estrategia'
  };

  const servicios = [
    { value: 'estrategia', label: 'Estrategia de Datos' },
    { value: 'analisis', label: 'Análisis Empresarial' },
    { value: 'ml-ai', label: 'Machine Learning & AI' },
    { value: 'costos', label: 'Reducción de Costos' },
    { value: 'otro', label: 'Otro' }
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
  };
</script>

<svelte:head>
  <title>Contacto - VAX Solutions</title>
  <meta name="description" content="Contáctanos para discutir cómo podemos ayudarte con soluciones de datos e inteligencia artificial." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">
        Contáctanos
      </h1>
      <p class="text-xl text-gray-100">
        Estamos aquí para ayudarte a transformar tu negocio mediante el poder de los datos
      </p>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
        <form on:submit={handleSubmit} class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                bind:value={formData.nombre}
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="empresa" class="block text-sm font-medium text-gray-700 mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                bind:value={formData.empresa}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label for="telefono" class="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                bind:value={formData.telefono}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label for="servicio" class="block text-sm font-medium text-gray-700 mb-1">
              Servicio de interés *
            </label>
            <select
              id="servicio"
              bind:value={formData.servicio}
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {#each servicios as servicio}
                <option value={servicio.value}>{servicio.label}</option>
              {/each}
            </select>
          </div>

          <div>
            <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-1">
              Mensaje *
            </label>
            <textarea
              id="mensaje"
              bind:value={formData.mensaje}
              required
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full btn btn-primary py-3"
          >
            Enviar mensaje
          </button>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="lg:pl-12">
        <h2 class="text-2xl font-bold mb-6">Información de contacto</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-lg font-semibold mb-2">Correo electrónico</h3>
            <a href="mailto:info@vaxsolutions.com" class="text-primary hover:text-primary-dark">
              info@vaxsolutions.com
            </a>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Ubicación</h3>
            <p class="text-gray-600">
              Ciudad de México, México
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Síguenos en redes sociales</h3>
            <div class="flex space-x-4">
              <a href="https://linkedin.com" class="text-gray-600 hover:text-primary">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a href="https://instagram.com" class="text-gray-600 hover:text-primary">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 class="text-lg font-semibold mb-4">¿Prefieres agendar una llamada?</h3>
          <p class="text-gray-600 mb-4">
            Agenda una consulta gratuita de 30 minutos con uno de nuestros expertos.
          </p>
          <a
            href="#agendar"
            class="btn btn-secondary inline-block"
          >
            Agendar llamada
          </a>
        </div>
      </div>
    </div>
  </div>
</section> 