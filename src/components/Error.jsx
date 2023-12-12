import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    const reem = () => {
        navigate("/");
        window.location.reload(false);
    };

    return (
        <>
            <div className="h-screen bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="text-white flex items-center justify-center min-h-screen pt-6">
                    <div className="flex flex-col justify-center font-dmsans font-bold">
                        <div className="text-center text-6xl mb-8 font-normal font-jost">
                            404
                        </div>

                        <div className=" text-xl">This page does not exist</div>
                        <button
                            onClick={reem}
                            className="flex mt-4 justify-center rounded-lg border border-current py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;
