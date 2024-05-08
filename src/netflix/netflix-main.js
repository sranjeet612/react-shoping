import NetflixRegister from "./netflix-register";
function NetflixMain() {
  return (
    <div>
      <div className="text-center text-white">
        <h1>Unlimited movies, TV shows and more</h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
      </div>

      <div className="p-4">
        <NetflixRegister />
      </div>
    </div>
  );
}

export default NetflixMain;
