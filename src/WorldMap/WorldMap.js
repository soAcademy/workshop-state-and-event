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

const WorldMap = () => {
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
          <Marker
            key={r.hex}
            position={[r.lat, r.lng]}
            icon={L.divIcon({
              iconSize: [0, 0],
              // iconUrl: "airplane.png",
              iconAnchor: [12, 12],
              html: `<img 
                style="transform: rotate(-45deg);"
                src='airplane.png'>`,
            })}
          >
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
