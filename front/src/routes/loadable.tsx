import { Suspense } from "react";
import LoadingScreen from "../components/LoadingScreeen/LoadingScreeen";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
