import React, { Suspense } from "react";
import Rout from "./Rout";
import "./i18n";
import { LoadingPage } from "./Pages/LoadingPage/LoadingPage";

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Rout />
    </Suspense>
  );
}

export default App;
