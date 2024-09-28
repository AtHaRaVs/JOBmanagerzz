import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Error</h1>
      <p>{error.error.message}</p>
      <Link to="/">Back to Home...</Link>
    </div>
  );
};
export default Error;
