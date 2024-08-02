import { json } from '@sveltejs/kit';
import prisma from '$lib/prisma.js';

export async function GET() {
    try {
      const playlists = await prisma.playlists.findMany();
      console.log(playlists);
      return json(playlists);
    } catch (error) {
      return json({ error: error.message }, { status: 500 });
    }
  }