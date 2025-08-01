import { FilmGenresProps } from "./FilmGenres.types";

export function FilmGenres(props: FilmGenresProps) {
    const {genres} = props;

    if(genres.length===0) return null;

  return (
    <div className="flex gap-4 text-[15px] text-white">
        {genres.map((genre)=>(
            <p key={genre}>{genre}</p>
        ))}
    </div>
  )
}
