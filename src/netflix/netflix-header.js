function NetflixHeader()
{
    return(
        <div className="d-flex justify-content-between p-4">
            <div className="text-danger">
                <h1>Netflix</h1>
            </div>
            <div>
                   <button className="btn btn-dark dropdown-toggle me-2">
                    <i className="bi bi-globe"></i>
                     Language
                    </button>
                   <button className="btn btn-danger">Sign In</button>
            </div>
        </div>
    );
}

export default NetflixHeader;