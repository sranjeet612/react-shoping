import NetflixHeader from "./netflix-header";
import NetflixMain from "./netflix-main";
import "./netflix-index.css";
function NetflixIndex() {
  return (
    <div className="netflix-index">
      <div className="netflix-shadow">
        <header>
           <NetflixHeader />
        </header>
        <section>
           <NetflixMain />
        </section>
      </div>
    </div>
  );
}

export default NetflixIndex;
