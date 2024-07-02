import { Places } from "../../recoil_state";
import { useRecoilValue } from "recoil";
function AllPlaces() {
  const getPlaces = useRecoilValue(Places);
  return (
    
      <div className="table-responsive">
        <table className="table table-striped table-hover table-borderless table-primary align-middle">
          <thead className="table-light">
            <caption>All Places</caption>
            <tr>
              <th>Place Name</th>
              <th>City</th>
              <th>lat</th>
              <th>lng</th>
              <th>desc</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {getPlaces.map((obj) => (
              <tr className="table-group-devider">
                <td>{obj.place}</td>
                <td>{obj.city}</td>
                <td>{obj.lat}</td>
                <td>{obj.lng}</td>
                <td>{obj.desc}</td>
                <td>details</td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
  );
}
export default AllPlaces;
