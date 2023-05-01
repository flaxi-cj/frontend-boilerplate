import { useNavigate } from "react-router-dom";

const NotFound = () => {

    let navigate = useNavigate();

    return (
        <div className="container d-flex flex-column min-vh-100 align-items-center justify-content-center text-white">
            <h2 style={{ fontSize: '10em' }}>404</h2>
            <p className="fs-5 py-3">Sorry, but we could not find the page you are looking for :( </p>
            <button className="btn btn-success" onClick={() => navigate("/")}>Go back home</button>
        </div>
    );
}

export default NotFound;