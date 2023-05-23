import { useState, useEffect } from "react";
import Axios from "axios";

const CrudData = () => {
  const [api, setApi] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [flag, setFlag] = useState(false);
  const [add, setAdd] = useState(false);
  const [id, setId] = useState("");
  const [show,setShow]= useState(true);

  const handleSubmit = async () => {
    const res = await Axios.get("https://www.melivecode.com/api/users");
    setApi(res.data);
  };

  useEffect(() => {
    handleSubmit();
  }, [flag]);

  const hendalPost = async (e) => {
    e.preventDefault();
    const obj = {
      fname: fname,
      lname: lname,
      username: username,
      password: password,
      email: email,
      avatar: avatar,
    };
    await Axios.post("https://www.melivecode.com/api/users/create", obj);
    setFlag(!flag);
    setFname("");
    setLname("");
    setUsername("");
    setPassword("");
    setEmail("");
    setAvatar("");
  };

  const handleDelete = async (id) => {
    await Axios.delete(" https://www.melivecode.com/api/users/delete", {
      data: { id: id },
    });
    setFlag(!flag);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const obj = {
      fname: fname,
      lname: lname,
      username: username,
      password: password,
      email: email,
      avatar: avatar,
      id: id,
    };
    await Axios.put("https://www.melivecode.com/api/users/update", obj);
    setFname("");
    setLname("");
    setUsername("");
    setPassword("");
    setEmail("");
    setAvatar("");
    setFlag(!flag);
  };

  const handleEdit = async (i) => {
    setFname(i.fname);
    setLname(i.lname);
    setUsername(i.username);
    setPassword(i.password);
    setEmail(i.email);
    setAvatar(i.avatar);
    setAdd(true);
    setId(i.id);
  };
const ToggleClick=()=>{
    setShow(!show)
}

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={ToggleClick}
      >
        ADD USER
      </button>
      <div
        className={`${show ? "modal fade":"show"}`}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add User Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Fname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Lname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                    class </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Avatar
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={add ? handleUpdate : hendalPost}
              >
                {add ? "Update" : "Sumbit"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Username</th>
            <th>Avatar</th>
          </tr>
        </thead>

        {api.map((user,index) => {
          return (
            <>
              <tbody>
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.username}</td>
                  <td>{user.avatar}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};
export default CrudData;
