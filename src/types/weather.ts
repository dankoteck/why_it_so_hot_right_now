export type CurrentWeatherParams = {
  appid: string;
  lang: string;
  lat: string;
  lon: string;
  units?: "metric" | "imperal";
};
