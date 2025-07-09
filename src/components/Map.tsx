import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  useMap,
} from "react-leaflet";
import { Icon } from "leaflet";
import iconArrow from "../images/icon-location.svg";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { useEffect } from "react";

const ChangeMapView = ({
  lat,
  lon,
  latOffset,
}: {
  lat: number;
  lon: number;
  latOffset: number;
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat + latOffset, lon]);
  }, [lat, lon, latOffset, map]);

  return null;
};

const Map = () => {
  const data = useSelector((state: RootState) => state.data);
  const [lat, lon] = [data.lat, data.lon];
  const latOffset = 0.001;

  const customIcon = new Icon({
    iconUrl: iconArrow,
    iconSize: [46, 56],
    iconAnchor: [23, 56],
  });

  return (
    <div className="absolute bottom-0 h-[calc(100vh-260px)] xl:h-[calc(100vh-280px)] w-full z-0">
      <MapContainer
        center={[lat + latOffset, lon]}
        zoom={15.5}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
          url="http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
        <ChangeMapView lat={lat} lon={lon} latOffset={latOffset} />
        <Marker position={[lat, lon]} icon={customIcon}></Marker>
        <ZoomControl position="bottomleft" />
      </MapContainer>
    </div>
  );
};

export default Map;
