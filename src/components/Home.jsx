import picture from "../assets/picture.jpg";

const Home = () => {
    return (
        <>
            <div className="text-white flex items-center justify-center min-h-screen pt-6">
                <div className="max-w-xs">
                    <div className="bg-white pt-3 shadow-lg rounded-lg">
                        <div className="photo-wrapper p-2">
                            <img
                                className="w-32 h-32 rounded-full mx-auto"
                                src={picture}
                                alt="John Doe"
                            />
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-xl text-gray-900 font-semibold font-jost leading-8">
                                Yoosuf Yazak
                            </h3>
                            <div className="text-center text-gray-400 text-sm font-semibold font-dmsans">
                                <p>Software Engineer</p>
                            </div>
                            <div className="text-left text-xs my-3">
                                <div className="px-2 py-2 text-gray-700 font-bold font-dmsans">
                                    ABOUT
                                </div>
                                <div className="px-2 py-2 text-sm text-gray-500 font-semibold font-dmsans">
                                    I&rsquo;m a student at The Maldives National
                                    University, completing my Bachelor of
                                    Computer Science with Honors. I have a
                                    profound passion for Machine Learning and
                                    all things programming.
                                </div>
                            </div>
                            <div className="flex justify-between ml-6 mr-8 mt-6">
                                <a href="https://t.me/zuccccc">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 50 50"
                                    >
                                        <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
                                    </svg>
                                </a>

                                <a href="https://discord.gg/Zu4CmYm5Ba">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z"></path>
                                    </svg>
                                </a>

                                <a href="https://twitter.com/0reofreakshake">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 50 50"
                                    >
                                        <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                                    </svg>
                                </a>

                                <a href="https://www.instagram.com/_yazak_/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                    </svg>
                                </a>

                                <a href="https://github.com/oreofreakshake">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex mt-16 justify-evenly md:cursor-pointer cursor-auto">
                            <div
                                className="group relative inline-block overflow-hidden px-5 py-3 focus:outline-none focus:ring"
                                href="/download"
                            >
                                <div className="absolute inset-x-0 bottom-0 h-[2px] rounded-t-lg bg-gray-600 transition-all group-hover:h-full group-active:bg-gray-500"></div>

                                <div className="relative text-xs font-semibold font-dmsans text-gray-600 transition-colors group-hover:text-white">
                                    ABOUT
                                </div>
                            </div>
                            <div
                                className="group relative inline-block overflow-hidden px-5 py-3 focus:outline-none focus:ring"
                                href="/download"
                            >
                                <div className="absolute inset-x-0 bottom-0 h-[2px] rounded-t-lg bg-gray-600 transition-all group-hover:h-full group-active:bg-gray-500"></div>

                                <div className="relative text-xs font-semibold font-dmsans text-gray-600 transition-colors group-hover:text-white">
                                    EXPERIENCE
                                </div>
                            </div>
                            <div
                                className="group relative inline-block overflow-hidden px-5 py-3 focus:outline-none focus:ring"
                                href="/download"
                            >
                                <div className="absolute inset-x-0 bottom-0 h-[2px] rounded-t-lg bg-gray-600 transition-all group-hover:h-full group-active:bg-gray-500"></div>

                                <div className="relative text-xs font-semibold font-dmsans text-gray-600 transition-colors group-hover:text-white">
                                    CONTACT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
