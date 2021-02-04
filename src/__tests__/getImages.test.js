import getImages from "../requests/getImages";
import * as nasaData from "./__test_resources__/data.json";
import axios from "axios";

jest.mock("axios");

describe("getImages", () => {
  it("fetches 1 image successfully from an API", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(nasaData));
    const expectedData = [
      `https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg`,
    ];
    await expect(getImages("moon")).resolves.toEqual(expectedData);
  });

  it("fetches erroneous data from the API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });
});
