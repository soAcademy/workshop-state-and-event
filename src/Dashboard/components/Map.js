import { longdo, map, LongdoMap } from "../longdo-map/LongdoMap";
import accident from "../assets/accident.json";
import { useEffect } from "react";

export const Map = ({ dataFilteredByYear }) => {
  useEffect(() => {
    map.Overlays.clear();
    dataFilteredByYear?.map((data, jdx) => {
      const popup = `<div style="background: #ffffff; 
  padding: 1rem;
  height: fit-content;
  width: 200px; 
  position:fixed; 
  bottom:5px; 
  left: 5px;
  border: 1px solid; 
  border-color: rgb(241 245 249);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  ">
    <p>id: ${data.id}</p>
    <p>วันที่เสียชีวิต: ${data.deadDate}</p>
    <p>เพศ: ${data.sex === 1 ? "ชาย" : "หญิง"}</p>
    <p>ยานพาหนะ: ${data.vehicle}</p>
    <p>ICD-10: ${data.icd10}</p>
    <p>สถานที่เกิดเหตุ: ${data.province}</p>
  </div>`;

      const marker1 = new longdo.Marker(
        { lon: data.longitude, lat: data.latitude },
        {
          title: String(data.id),
          icon: {
            url: "https://raw.githubusercontent.com/soAcademy/workshop-state-and-event/feature/202310/public/18-189422_red-dot-png-circle.png",
          },
          popup: {
            html: popup,
            closable: true,
          },
          clickable: true,
        }
      );
      map.Overlays.add(marker1);
    });
  }, [dataFilteredByYear]);
  const initMap = () => {
    map.Layers.setBase(longdo.Layers.NORMAL);
    map.zoomRange({ min: 6, max: 15 });
    map.bound({
      minLon: 100,
      minLat: 6,
      maxLon: 105,
      maxLat: 18,
    });
    map.Ui.DPad.visible(false);
    map.Ui.Zoombar.visible(false);
    map.Ui.Geolocation.visible(false);
    map.Ui.Toolbar.visible(false);
    map.Ui.LayerSelector.visible(false);
    map.Ui.Fullscreen.visible(false);
    map.Ui.Crosshair.visible(false);
    map.Ui.Scale.visible(false);

    accident.map((data, jdx) => {
      const popup = `<div style="background: #ffffff; 
  padding: 1rem;
  height: fit-content;
  width: 200px; 
  position:fixed; 
  bottom:5px; 
  left: 5px;
  border: 1px solid; 
  border-color: rgb(241 245 249);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  ">
    <p>id: ${data.id}</p>
    <p>วันที่เสียชีวิต: ${data.deadDate}</p>
    <p>เพศ: ${data.sex === 1 ? "ชาย" : "หญิง"}</p>
    <p>ยานพาหนะ: ${data.vehicle}</p>
    <p>ICD-10: ${data.icd10}</p>
    <p>สถานที่เกิดเหตุ: ${data.province}</p>
  </div>`;

      const marker1 = new longdo.Marker(
        { lon: data.longitude, lat: data.latitude },
        {
          title: String(data.id),
          icon: {
            url: "https://raw.githubusercontent.com/soAcademy/workshop-state-and-event/feature/202310/public/18-189422_red-dot-png-circle.png",
          },
          popup: {
            html: popup,
            closable: true,
          },
          clickable: true,
        }
      );
      map.Overlays.add(marker1);
    });
  };
  const mapKey = "246731d23dc4718bff4317880649e085";
  return (
    <div className="App h-screen">
      <LongdoMap id="longdo-map" mapKey={mapKey} callback={initMap} />
    </div>
  );
};

export default Map;
