import { eventWrapper } from "@testing-library/user-event/dist/utils";

export default function Folap() {
  const adat = {};

  function adatKuld(event) {
    event.preventDefault();
  }

  function adatValt(event) {
    console.log(event.target);
    adat[event.target.id] = event.target.value;
  }

  return (
    <form onSubmit={adatKuld}>
      <label htmlFor="nev" className="form-label">
        Name:
      </label>

      <input
        type="text"
        className="form-control"
        id="nev"
        name="nev"
        placeholder="vezeteknev Keresztnev"
        onChange={adatValt}
      />

      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  );
}
