function AddCity() {
    return (
      <div className="container">
        <form>
          <div className="mb-3 row">
            <label htmlFor="inputName" className="col-4 col-form-label">
              City
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="inputName"
                id="inputName"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputName" className="col-4 col-form-label">
              Latitude
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="inputName"
                id="inputName"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputName" className="col-4 col-form-label">
              longitude
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="inputName"
                id="inputName"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputName" className="col-4 col-form-label">
              Desc
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="inputName"
                id="inputName"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputName" className="col-4 col-form-label">
              Images
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                name="inputName"
                id="inputName"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="offset-sm-4 col-sm-8">
              <button type="submit" className="btn btn-primary">
                Action
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  export default AddCity;
  