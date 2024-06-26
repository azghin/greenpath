function AddPlace(){
    return(
        <div className="container">
            <h1>add places</h1>
        <form>
          <div className="mb-3 row">
            <label for="inputName" className="col-4 col-form-label">
              Place name
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
          <div class="mb-3">
            <label for="" class="form-label">City</label>
            <select
                class="form-select form-select-lg"
                name=""
                id=""
            >
                <option selected>Select one</option>
                <option value="">New Delhi</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
            </select>
          </div>
          
          <div className="mb-3 row">
            <label for="inputName" className="col-4 col-form-label">
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
            <label for="inputName" className="col-4 col-form-label">
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
            <label for="inputName" className="col-4 col-form-label">
              Description
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
            <label for="inputName" className="col-4 col-form-label">
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
    )
}

export default AddPlace