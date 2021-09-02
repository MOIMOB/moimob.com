import { Fragment } from "react";
import { useSelector } from "react-redux";
import { ga, skeleton } from "../helpers/utils";
import config from "../config";

const MobileApp = () => {
    const loading = useSelector(state => state.loading);

    const renderApps = () => {
        return config.apps.map((item, index) => (
            <div
                className="card shadow-lg compact bg-base-100 cursor-pointer"
                key={index}
                onClick={() => {
                    try {
                        if (config.googleAnalytics.id) {
                            ga.event({
                                action: "Click Mobile App",
                                params: {
                                    project: item.name
                                }
                            });
                        }
                    } catch (error) {
                        console.error(error);
                    }

                    window.open(item.html_url, '_blank')
                }}
            >
                <div className="flex justify-between flex-col p-8 h-full w-full">
                    <div>
                        <div className="flex items-center opacity-60">
                            <span>
                                <h5 className="card-title text-lg">
                                    {item.name}
                                </h5>
                            </span>
                        </div>
                        <div className="flex justify-center pt-4 pb-4">
                            <img className="rounded-md w-24 h-24" alt="icon" src={item.icon}></img>
                        </div>
                        <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <Fragment>
            <div className="col-span-1 lg:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <div className="card compact bg-base-100 shadow-sm">
                            <div className="card-body">
                                <ul className="menu row-span-3 bg-base-100 text-base-content">
                                    <li>
                                        <div className="pb-0-important mx-4 flex items-center justify-between">
                                            <h5 className="card-title">
                                                {
                                                    loading ? skeleton({ width: 'w-28', height: 'h-8' }) : (
                                                        <span className="opacity-70">Mobile Apps</span>
                                                    )
                                                }
                                            </h5>
                                            {
                                                loading ? skeleton({ width: 'w-10', height: 'h-5' }) : (
                                                    <a
                                                        href={`https://play.google.com/store/apps/developer?id=${config.github.username}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="opacity-50"
                                                    >
                                                        See All
                                                    </a>
                                                )
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {renderApps()}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MobileApp;