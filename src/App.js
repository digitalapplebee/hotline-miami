import React, { Suspense, lazy } from "react";
import Preloader from "./Components/Preloader";

const Main = lazy(() => import('./Containers/Main'));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Main />
    </Suspense>
  );
}

export default App;
