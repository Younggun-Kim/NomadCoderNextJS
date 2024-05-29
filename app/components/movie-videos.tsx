import { API_URL } from "../(home)/page";

async function getVideos(id: string) {
  console.log("start fetching get videos");
  await new Promise((r) => setTimeout(r, 3000));
  throw new Error('somehting broke...');
  const repsonse = await fetch(`${API_URL}/${id}/videos`);
  return repsonse.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
8