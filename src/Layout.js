import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1> Urlap hasznalata </h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link className="nav-link active" to="/">
              Kezdöoldal
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/urlap">
              Űrlap
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/adatok">
              Adatok
            </Link>
          </li>
        </ul>
      </nav>
      <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </article>
    </>
  );
};

export default Layout;
