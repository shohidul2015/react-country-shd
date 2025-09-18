import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Oops! An error occurred.</h1>
      <p>
        {error?.data ||
         error?.statusText ||
         error?.message ||
         "Something went wrong."}
      </p>
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </div>
  );
};
