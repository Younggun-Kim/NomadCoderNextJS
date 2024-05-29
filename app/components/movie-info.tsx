import { API_URL } from "../(home)/page";

async function getMovie(id: string) {
  console.log("start fetching get movie");
  const repsonse = await fetch(`${API_URL}/${id}`);
  return repsonse.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h1>{movie.title}</h1>;
}
