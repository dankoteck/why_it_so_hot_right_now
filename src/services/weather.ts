import axios from "axios";
import { env } from "@/env.mjs";
import { CURRENT_API_VERSION } from "@/configs";
import { type CurrentWeatherParams } from "@/types";
import { buildQueryFromParams } from "@/utils";

export async function getCurrentWeatherData(params: CurrentWeatherParams) {
  try {
    const paramsString = buildQueryFromParams(params);
    const response = await axios.get(
      `${env.NEXT_PUBLIC_BASE_URL}/data/${CURRENT_API_VERSION}/weather${paramsString}`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
  return;
}

export async function getCurrentAirPollutan(params: CurrentWeatherParams) {
  try {
    const paramsString = buildQueryFromParams(params);
    const response = await axios.get(
      `${env.NEXT_PUBLIC_BASE_URL}/data/${CURRENT_API_VERSION}/air_pollution${paramsString}`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
  return;
}
