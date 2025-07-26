import { useNavigate } from "react-router-dom";


const ErrorPage = () => {

    const navigate = useNavigate();

    const handleErrorPageBtn = () => {
        navigate(-1)
    }

    return (
        <div className="w-1/2 mx-auto mt-40">
            <h2 className="text-2xl font-bold text-center">Oops! page not found</h2>
            <button className="bg-lime-500 px-8 py-2 border-2 border-black rounded-xl btn mx-auto block mt-4 font-bold"  onClick={handleErrorPageBtn}>Go Back</button>
        </div>
    );
};

export default ErrorPage;