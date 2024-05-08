import './netflix-register.css'
function NetflixRegister() {
  return (
    <div>
      <div className="text-center text-white">
        <h4>
          Ready to watch? Enter your email or mobile number to create or restart
          your membership.
        </h4>
      </div>

      <div className="netflix-register">
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="Email"
            placeholder="Enter Email or Mobile"
          />
          <button className="btn btn-danger">
            Get Register
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NetflixRegister;
