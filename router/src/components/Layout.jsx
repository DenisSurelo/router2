import { Suspense } from "react";
import { Outlet, NavLink } from "react-router";

function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
