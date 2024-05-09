import { useEffect, useState } from "react";

function Nasaapi() {
    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";
    const [data, setData] = useState({ photos: [] });

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(resData => {
            setData(resData);
        }).catch(ex => {
            alert('Error' + ex);
            console.log(ex);
        })
    }, []);


    return (
        <div className="container">
            <h2 className="text-success text-center">Nasa api data</h2>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Camera-Name</th>
                        <th>Images</th>
                        <th>Rover-Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.photos.map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.camera.full_name}</td>
                                <td>
                                    <a href={item.img_src} target="_blank">
                                        <img src={item.img_src} width="200px" height="200px" />
                                    </a>
                                </td>
                                <td>{item.rover.name}</td>
                                <td>{(item.rover.status)=="active"?"Working":"Not working"}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Nasaapi;