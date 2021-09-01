import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

function Pin({ data: { position, name, activity } }) {
  const iconUrl = require(`../../assets/icons/${activity.name}.svg`).default;
  return (
    <Marker
      position={position.split(";")}
      icon={
        new Icon({
          iconUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>{name}</Popup>
    </Marker>
  );
}

export default Pin;
