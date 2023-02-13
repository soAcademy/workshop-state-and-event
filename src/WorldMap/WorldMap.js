import {
  TileLayer,
  Marker,
  Popup,
  MapContainer,
  // useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import { useState } from "react";
import flights from "./flights.json";
import "leaflet-rotatedmarker"; //here import the plugin
import { useEffect } from "react";

// config icon
const icon = L.icon({
  iconUrl: "airplane.png",
  iconAnchor: [12, 12],
});

const WorldMap = () => {
  useEffect(() => {
    Marker.setRotationAngle(90);
    Marker.setRotationOrigin("center");
  }, []);
  
  const thFlights = flights.response.filter((r) => r.dep_iata === "BKK");
  console.log(thFlights);
  // 13.753460262565815, 100.50130405082703
  //BKK
  return (
    <MapContainer
      center={[13.753460262565815, 100.50130405082703]}
      zoom={5}
      // scrollWheelZoom={false}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {thFlights.map((r) => {
        return (
          <Marker key={r.hex} position={[r.lat, r.lng]} icon={icon}>
            <Popup>
              <p>Departure: {r.dep_iata}</p>
              <p>Arrival: {r.arr_iata}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default WorldMap;
