import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AirQualityBg } from "@/assets/images";
import { useAirPollutan, useCurrentWeather } from "@/hooks";

import Widget from "@/components/Widget";
import { ProgressBar } from "./components";
import { degToCompass } from "@/utils";

export default function AirQuality() {
  const [data] = useAirPollutan();
  const [weatherData] = useCurrentWeather();
  const { list = [{ main: { aqi: 1 }, components: {} }] } = data;
  const { main, components } = list[0];
  const listComponents = Object.values<number>(components as {});
  const totalAQI = listComponents.reduce((a, b) => a + b, 0);
  const { aqi: aqiLevel } = main;
  const averageAQI = Math.floor(totalAQI / (listComponents.length || 1));
  const { wind = { deg: 0 } } = weatherData;
  const { deg } = wind;
  const windDirection = degToCompass(deg as number);

  const Icon = (
    <div className="h-9 w-9 rounded-full bg-white p-2 text-orange-600">
      <FontAwesomeIcon fade icon={faWind as IconProp} />
    </div>
  );

  return (
    <Widget
      contrast
      icon={Icon}
      title={"Air Quality"}
      subtitle={"Main pollutan: PM2.5"}
      bgImageSrc={AirQualityBg.src}
      content={
        <div className="my-12 text-white">
          <div className="flex items-center">
            <span className="mr-4 text-4xl font-semibold">{averageAQI}</span>
            <span className="w-14 rounded-md bg-lime-400 py-1 text-center text-xs font-semibold text-black">
              AQI
            </span>
          </div>
          <p className="text-md mt-2 font-normal">{windDirection} Wind</p>
        </div>
      }
      extra={
        <div className="h-20 w-full rounded-3xl bg-white px-6 py-4">
          <div className="flex w-full justify-between text-sm">
            <span>Good</span>
            <span>Hazardous</span>
          </div>
          <ProgressBar
          // level={aqiLevel}
          />
        </div>
      }
    />
  );
}
