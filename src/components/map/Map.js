import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";
import { getLocations } from "../../api/content";
import "./map.css";

const mapStyle = {
  width: "100%",
  height: "100%",
};

function Map() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getLocations();
        setLocations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => setLocations([]);
  }, []);
  return (
    <div className="map-container">
      <MapContainer
        center={[31.23, 121.47]}
        zoom={7}
        scrollWheelZoom={true}
        style={mapStyle}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Pin key={location._id} data={location} />
        ))}
      </MapContainer>
    </div>
  );
}
export default Map;
