import { CitiesL, Places } from "../../recoil_state";
import { useRecoilValue } from "recoil";
import Users from '../../Data/Users.json'
export default function Dashboard() {
  const allPlaces = useRecoilValue(Places);
  const allCities = useRecoilValue(CitiesL);
  return (
    <div className="container">
        <h1>Dashboard</h1>
      <div className="row">
        <div className="col-8">
          <div class="table-responsive">
            <table class="table table-striped table-hover table-borderless table-primary align-middle">
              <thead class="table-light">
                <tr>
                  <th>City</th>
                  <th>Number Places</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                {allCities.map((obj) => (
                  <tr>
                    <td>{obj.name}</td>
                    <td>

                      {
                        allPlaces.filter(
                          (plc) =>
                            plc.city.toLowerCase() === obj.name.toLowerCase()
                        ).length
                      }
                      places untill now
                    </td>
                    <td>Action</td>
                  </tr>
                ))}
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
        <div className="col-4">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Number of Users</h5>
                  <p class="card-text">
                    we currently have {Users.length} user
                  </p>
                  <hr />
                  <p className="card-text">
                    {Users.filter(obj=>obj.isAdmin===true).length} of them are admins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
