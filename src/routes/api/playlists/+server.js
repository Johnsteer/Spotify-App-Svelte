import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import { DATABASE_URL } from '$env/static/private';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});

export async function GET() {
  try {
    const playlists = await prisma.playlists.findMany();
    return json(playlists);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return json({ error: 'Failed to fetch playlists' }, { status: 500 });
  }
}