import { useNavigate } from "react-router-dom";


const ErrorPage = () => {

    const navigate = useNavigate();

    const handleErrorPageBtn = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>Oops! page not found</h2>
            <button onClick={handleErrorPageBtn}>Go Back</button>
        </div>
    );
};

export default ErrorPage;