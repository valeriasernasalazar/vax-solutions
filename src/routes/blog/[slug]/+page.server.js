import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // Here you would typically fetch the post data from a database
  // For now, we'll let the client-side handle it
  // but this is where you'd add server-side validation
  
  if (!params.slug) {
    throw error(400, {
      message: 'Slug del artículo no proporcionado'
    });
  }

  return {
    slug: params.slug
  };
} 