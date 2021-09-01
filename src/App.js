import "./App.css";
import Map from "./components/map/Map";

function App() {
  return (
    <div className="app flex-center flex-col">
      <div className="mt">Depart from: Shanghai</div>
      <Map />
    </div>
  );
}

export default App;
