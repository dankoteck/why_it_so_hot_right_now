import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { env } from "@/env.mjs";
import { type CurrentWeatherParams } from "@/types";
import { getCurrentAirPollutan } from "@/services/weather";

import useLatLng from "./useLatLng";

export default function useAirPollutan() {
  const [lat = "", lon = ""] = useLatLng();
  const params: CurrentWeatherParams = {
    appid: env.NEXT_PUBLIC_API_KEY,
    lang: "vi",
    lat,
    lon,
  };

  // `isFetching` maybe doing later 👌
  const { data, error, isFetching } = useQuery({
    queryKey: ["airPollutan", lat, lon],
    queryFn: () => getCurrentAirPollutan(params),
    enabled: !!lat && !!lon,
  });

  const airData = useMemo(() => data?.data || {}, [data]);

  return [airData, error, isFetching];
}
