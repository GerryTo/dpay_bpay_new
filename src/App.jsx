import { Route, Routes } from "react-router-dom";
import Home from "./layouts/home";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route element={<LoggedInRoutes />}> */}
        <Route path="/*" element={<Home />} />
        {/* <Route path="*" element={<NotFoundPageMain />} /> */}
        {/* </Route> */}
        {/* <Route element={<NotLoggedInRoutes />}> */}
        {/* <Route path="/auth/login" element={<LoginJeePG />} /> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
