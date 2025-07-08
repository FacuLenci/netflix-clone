"use client"
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { NavbarFilm } from "./components/NavbarFilm";
import { MovieVideo } from "./components/MovieVideo";

export default function MovieIdPage() {
  const pathname = usePathname();
  const router = useRouter();

  const [currentMovie, setCurrentMovie] = useState('');
  const [titleMovie, setTitleMovie] = useState('');

  // Extraer el ID desde la ruta /movie/[movieId]
  const movieId = pathname?.split('/').pop();

  useEffect(() => {
    async function fetchMovie() {
      if (!movieId) {
        router.push('/');
        return;
      }

      try {
        const res = await fetch(`/api/movie/${movieId}`);
        if (!res.ok) {
          router.push('/');
          return;
        }

        const data = await res.json();
        setCurrentMovie(data.movieVideo || '');
        setTitleMovie(data.title || '');
      } catch {
        router.push('/');
      }
    }

    fetchMovie();
  }, [movieId, router]);

  return (
    <div className="h-screen w-full bg-black">
      <NavbarFilm titleMovie={titleMovie} />
      <MovieVideo currentMovie={currentMovie} />
    </div>
  );
}
