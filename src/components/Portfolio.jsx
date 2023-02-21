import React from "react";
import githubFinder from "../assets/portfolio/githubFinder.png";
import houseMarketplace from "../assets/portfolio/houseMarketplace.png";
import supportDesk from "../assets/portfolio/supportDesk.png";
import travelAdvisor from "../assets/portfolio/travelAdvisor.png";
import todo from "../assets/portfolio/todo.png";
import bankist from "../assets/portfolio/bankist.png";
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: supportDesk,
            demo: "https://support-desk-luibacli.herokuapp.com/",
            code: "https://github.com/luibacli/support-desk-MERN",
        },
        {
            id: 2,
            src: houseMarketplace,
            demo: "https://house-marketplace-reac-tw-firebase.vercel.app/",
            code: "https://github.com/luibacli/house-marketplace-REACTw-Firebase",
        },
        {
            id: 3,
            src: githubFinder,
            demo: "https://my-github-finder-react-js.vercel.app/",
            code: "https://github.com/luibacli/my-github-finder-React.js-",
        },
        {
            id: 4,
            src: todo,
            demo: "https://todolist-mern-luibacli.herokuapp.com/",
            code: "https://github.com/luibacli/MERN-TODOLIST-CRUD",
        },
        {
            id: 5,
            src: bankist,
            demo: "https://bankist-app-pink.vercel.app/",
            code: "https://github.com/luibacli/bankist-app",
        },
        {
            id: 6,
            src: travelAdvisor,
            demo: "https://travel-advisor-api-c2lb-6ktq7kjim-luibacli.vercel.app/",
            code: "https://github.com/luibacli/travel-advisor-API",
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">
                        Check out some of my works right here:
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, demo, code }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg"
                        >
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Demo
                                    </a>
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a
                                        href={code}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Code
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
