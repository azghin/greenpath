import { Suspense, lazy,useEffect } from "react";
import { useLocation } from "react-router-dom";

const Advices = lazy(() => import("../../components/clients/Advices"));
const Hero = lazy(() => import("../../components/clients/Hero"));
const Info = lazy(() => import("../../components/clients/Info"));
const SliderImg = lazy(() => import("../../components/clients/SliderImg"));
const VisitedCities = lazy(() =>
  import("../../components/clients/VisitedCities")
);
const HStory = lazy(() => import("../../components/clients/HStory"));

function Home() {
    const location=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[location])

  return (
    <main>
      <Suspense fallback={<div>loading</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>loading</div>}>
        <Info />
      </Suspense>
      <Suspense fallback={<div>loading</div>}>
        <SliderImg />
      </Suspense>
      <Suspense fallback={<div>loading</div>}>
        <Advices />
      </Suspense>
      <Suspense fallback={<div>loading</div>}>
        <VisitedCities />
      </Suspense>
      <Suspense fallback={<div>loading</div>}>
        <HStory />
      </Suspense>

      <h1>advices</h1>
      <h1>most visited cities</h1>
      <h1>most fav cities in app</h1>
      <h1>some of the stories</h1>
    </main>
  );
}
export default Home;
