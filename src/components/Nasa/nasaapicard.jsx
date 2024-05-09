import { useEffect, useState } from "react";

function Nasaapicard() {
  const [data, setData] = useState({ photos: [] });
  const url ="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((ex) => {
        alert("Error" + ex);
        console.log(ex);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-success">Nasa Api Mars Data</h2>
      {
      data.photos.map((item) => (
          <div className="card m-2 p-2" key={item.id}>
            <img
              src={item.img_src}
              className="card-img-top"
              height="300px"
              width="100px"
            />
            <div className="card-body">
              <div className="card-title">
                <h2>Mars Details</h2>
                <dl>
                  <dt>Camera</dt>
                  <dd>{item.camera.full_name}</dd>
                  <dt>Rover</dt>
                  <dd>{item.rover.name}</dd>
                  <dt>status</dt>
                  <dd>{item.rover.status}</dd>
                </dl>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Nasaapicard;
