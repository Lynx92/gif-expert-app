export const getGifs = async (category) => {
  const apiKey = "&api_key=xQtHIPggAeAAkkkgyo0VBN7xr9dwycjR";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}`;
  const res = await fetch(url + apiKey);
  const { data } = await res.json();

  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    };
  });

  return gifs;
};
