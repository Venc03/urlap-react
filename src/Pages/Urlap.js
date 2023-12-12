import Folap from "../component/Folap";

export default function Urlap() {
  function adatKap(obj) {
    console.log(obj);
  }

  return (
    <div className="App-container">
      <Folap adatKap={adatKap} />
    </div>
  );
}
