import { useEffect, useState } from "react";

export default function useLatLng(): string[] {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      if (navigator.geolocation.getCurrentPosition) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;
          const { latitude, longitude } = coords;
          setLat(`${latitude}`);
          setLng(`${longitude}`);
        });
      } else {
        // You have blocked permission for getting location
      }
    } else {
      // Your current browser not supported this navigator API
    }
  }, []);

  return [lat, lng];
}
