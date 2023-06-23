import React, { useState } from 'react';

const UserForm = ({addUser}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    roleId: '',
    city: '',
    state: '',
    zipcode: '',
    addressLine1: '',
    addressLine2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({
      name: '',
      email: '',
      roleId: '',
      city: '',
      state: '',
      zipcode: '',
      addressLine1: '',
      addressLine2: ''
    });
  };
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
                value={user.name}
                onChange={handleChange}
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
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
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
                placeholder="City"
                value={user.city}
                onChange={handleChange}
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
                placeholder="State"
                value={user.state}
                onChange={handleChange}
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
                placeholder="Zip Code"
                value={user.zipcode}
                onChange={handleChange}
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
                value={user.addressLine1}
                onChange={handleChange}
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
                value={user.addressLine2}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
