import { NavLink, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const message =
    error instanceof Error
      ? error.message
      : error?.data || error?.statusText || "Something went wrong.";

  return (
    <div className="flex flex-col items-center mt-8 text-center">
      <h1 className="text-2xl font-bold">Oops! An error occurred.</h1>
      <p className="my-4">{message}</p>
      <NavLink to="/">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Go Home</button>
      </NavLink>
    </div>
  );
}
