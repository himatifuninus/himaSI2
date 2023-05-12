import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
const Router = lazy(() => import("./router/Router"));
const Loading = lazy(() => import("./components/Loading"));
const Error = lazy(() => import("./pages/Error"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <ErrorBoundary fallback={<Error />} />
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </div>
    </Suspense>
  );
};

export default App;
