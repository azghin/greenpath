import { useRecoilValue } from "recoil";
import { CitiesL } from "../../recoil_state";

function AllCities() {
  const getCities = useRecoilValue(CitiesL);
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-borderless table-primary align-middle">
          <thead className="table-light">
          <caption>All Cities</caption>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Lat</th>
              <th scope="col">Long</th>
              <th scope="col"> desc</th>
              <th scope="col"> action</th>
            </tr>
          </thead>
          <tbody>
            {getCities.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.name} </td> <td>{obj.lat}</td> <td>{obj.lng} </td>{" "}
                <td>{obj.desc}</td> <td>action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default AllCities;
