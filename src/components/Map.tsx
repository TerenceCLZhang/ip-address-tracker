import { MapContainer, TileLayer, ZoomControl, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import iconArrow from "../images/icon-location.svg";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const latOffset = 0.001;

  const customIcon = new Icon({
    iconUrl: iconArrow,
    iconSize: [46, 56],
    iconAnchor: [23, 56],
  });

  return (
    <div className="absolute bottom-0 h-[65vh] w-full z-0">
      <MapContainer
        center={[34.0536 + latOffset, -118.084]}
        zoom={15.5}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[34.0536, -118.084]} icon={customIcon}></Marker>
        <ZoomControl position="bottomleft" />
      </MapContainer>
    </div>
  );
};

export default Map;
