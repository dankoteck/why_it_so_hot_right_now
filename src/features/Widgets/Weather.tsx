import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { WeatherWidgetBg } from "@/assets/images";
import { useCurrentWeather } from "@/hooks";
import { capitalizeFirst } from "@/utils";
import Widget from "@/components/Widget";

export default function Weather() {
  const [data] = useCurrentWeather();
  const { main = {}, visibility: rawVisibility, weather = [] } = data;
  const { feels_like, temp: rawTemp, pressure, humidity } = main;

  const weatherDesc = capitalizeFirst(weather[0]?.description as string) ?? "";
  const visibility = (+rawVisibility / 1000).toFixed(); // parse into km unit
  const temp = Math.floor(+rawTemp) || 0;
  const realFeels = Math.floor(+feels_like) || 0;
  const extra = [
    {
      title: "Áp suất",
      value: (pressure as number) || 0,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      unit: "mb",
    },
    {
      title: "Tầm nhìn",
      value: visibility || 0,
      bgColor: "bg-lime-400",
      textColor: "text-black",
      unit: " km",
    },
    {
      title: "Độ ẩm",
      value: (humidity as number) || 0,
      bgColor: "bg-white",
      textColor: "text-black",
      unit: "%",
    },
  ];

  const Icon = (
    <div className="h-9 w-9 rounded-full bg-white p-2 text-orange-600">
      <FontAwesomeIcon fade icon={faSun as IconProp} size="2xl" />
    </div>
  );

  return (
    <Widget
      icon={Icon}
      title={"Thời tiết"}
      subtitle={"Thời tiết hiện tại."}
      bgImageSrc={WeatherWidgetBg.src}
      content={
        <div className="my-12">
          <div className="flex items-center">
            <span className="mr-4 text-4xl font-semibold">{temp}&#8451;</span>
            <span className="w-fit rounded-xl border bg-white px-3 py-1 text-xs font-semibold">
              {/* TODO: replace later */}
              {realFeels}&#8451;
            </span>
          </div>
          <p className="text-md mt-2 font-normal">{weatherDesc}</p>
        </div>
      }
      extra={
        <div className="flex w-full justify-between">
          {extra.map((item) => (
            <div
              key={item.title}
              className={`rounded-3xl ${item.bgColor} w-36 py-4 text-center`}
            >
              <p className={`text-sm font-light ${item.textColor}`}>
                {item.title}
              </p>
              <p className={`text-xl font-medium ${item.textColor}`}>
                {item.value}
                {item.unit}
              </p>
            </div>
          ))}
        </div>
      }
    />
  );
}
