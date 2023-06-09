const UserForm = () => {
  return (
    <>
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="col-10 mx-auto">
          <div className="login-form p-0 row">
            <div className="mb-3 col-md-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Email "
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Role
              </label>
              <select name="country" id="region" className="form-control">
                <option value="Default region name:">Setect Role</option>
                <option value="India">Admin</option>
                <option value="U.S.">User</option>
              </select>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="City "
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="State "
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Zip Code
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Zip Code "
              />
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Address Line 1
              </label>
              <textarea
                className=" form-control"
                id="textarea"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Address Line 2
              </label>
              <textarea
                className=" form-control"
                id="textarea"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
