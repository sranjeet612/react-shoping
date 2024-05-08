import "./login.css";
export function Login() {
  return (
    <div className="container-fluid">
      <div>
          User-Name:
          <input type="text" className="form-control"></input>
          Password:
          <input type="password" className="form-control"></input>
          <button className="btn btn-success w-100 mt-2">Login</button>
      </div>
    </div>
  );
}
