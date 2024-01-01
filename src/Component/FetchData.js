import axios from "axios";

export default async function FetchData(selectedCountry) {
  let response = {};
  try {
    response = await axios.get(
      `https://restcountries.com/v3.1/name/${selectedCountry}?fullText=true`
    );
  } catch (error) {
    response = await axios.get(
      `https://restcountries.com/v3.1/name/${selectedCountry}`
    );

    console.error("the first catching method cant complete");
    console.error("Error fetching country data:", error);
  }
  return response.data[0];
}
