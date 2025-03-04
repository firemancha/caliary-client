import { Route, Routes } from "react-router";

import App from "../App";

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default RootRoute;
