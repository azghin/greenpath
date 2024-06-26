import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Curency = lazy(() => import("../../components/clients/Curency"));
const Hero = lazy(() => import("../../components/clients/Hero"));
const Info = lazy(() => import("../../components/clients/Info"));
const SliderImg = lazy(() => import("../../components/clients/SliderImg"));
const VisitedCities = lazy(() => import("../../components/clients/VisitedCities"));
const HStory = lazy(() => import("../../components/clients/HStory"));

function Home() {

  
 
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
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
        <Curency />
      </Suspense>
      <Suspense fallback={<div>loading</div>}>
        <VisitedCities />
      </Suspense>
      <Suspense fallback={<div>loading</div>}>
        <HStory />
      </Suspense>

      <h1>advices</h1>
    </>
  );
}
export default Home;
