import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "fc8e0fc172msh17c2983d55e1210p1753d8jsn153d7915fa57",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/find",
      {
        params: { lat: lat, lon: lng },
        headers: {
          "x-rapidapi-key":
            "fc8e0fc172msh17c2983d55e1210p1753d8jsn153d7915fa57",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
