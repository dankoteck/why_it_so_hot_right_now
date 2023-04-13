import { env } from "@/env.mjs";
import { getCurrentWeatherData } from "@/services/weather";
import { type CurrentWeatherParams } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import useLatLng from "./useLatLng";

export default function useCurrentWeather() {
  const [lat = "", lon = ""] = useLatLng();
  const params: CurrentWeatherParams = {
    appid: env.NEXT_PUBLIC_API_KEY,
    lang: "vi",
    units: "metric",
    lat,
    lon,
  };

  // `isFetching` maybe doing later 👌
  const { data, error, isFetching } = useQuery({
    queryKey: ["currentWeather", lat, lon],
    queryFn: () => getCurrentWeatherData(params),
    enabled: !!lat && !!lon,
  });

  const weatherData = useMemo(() => data?.data || {}, [data]);

  return [weatherData, error, isFetching];
}
