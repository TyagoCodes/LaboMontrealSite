import React from "react";
import { Alert } from "../../types/Alert";
import { Link } from "react-router-dom";

interface Props {
    alerts: Alert[];
    dateError: string;
}

const NoticesList: React.FC<Props> = ({ alerts, dateError }) => (
    <div className="w-full md:w-3/4">
        <div>
            <h1 className="text-xl text-amber-50 font-extrabold">Notices</h1>
            {dateError && <div className="text-red-500 text-sm">{dateError}</div>}
        </div>
        <ul className="p-2">
            {alerts.map((n) => (
                <Link to={`/nouvelle/${n._id}`} key={n._id} className="block hover:bg-neutral-600 transition-colors p-4 max-w-full border-b border-neutral-700 rounded-md">
                    <div className="flex flex-col gap-y-2">
                        <h2 className="text-base font-semibold text-white leading-snug">
                            {n.name} <span className="ml-2 text-sm text-red-500">{n.borough}</span>
                        </h2>
                        <div className="flex flex-col gap-y-2 text-sm text-neutral-300">
                            <span className="self-start border border-red-400 text-red-400 rounded-full px-3 py-0.5 text-xs font-medium">{n.topic}</span>
                            <span>{n.date}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </ul>
    </div>
);

export default NoticesList;