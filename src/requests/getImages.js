import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(
          (i) => i.data.filter((d) => d.media_type === "image").length > 0
        );
        const images = parsedImages.map((image) => image.links[0].href);
        console.log(images);
        return images;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
