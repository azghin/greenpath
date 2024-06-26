import { useRecoilValue } from "recoil";
import { CitiesL } from "../../recoil_state";

function AllCities() {
  const getCities = useRecoilValue(CitiesL);
  return (
    <>
      <h1>all cities table with update click</h1>
      {getCities.map(obj=><h3 key={obj.id}>{obj.name}</h3>)}
    </>
  );
}
export default AllCities;
