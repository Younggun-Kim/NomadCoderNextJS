import Link from "next/link";

export const metadata = {
  title: "HOME",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

function delay(ms) {
  //정해진 ms가 지나야 resolve를 호출하는 프로미스를 리턴한다
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Page() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
