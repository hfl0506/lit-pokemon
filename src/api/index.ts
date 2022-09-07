export async function getData(path: string) {
  const data = await fetch(path);
  return await data.json();
}
