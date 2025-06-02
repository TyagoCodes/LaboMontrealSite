import React from "react";
import { Alert } from "../types/Alert";

interface Props {
    alerts: Alert[];
}

const AlertList: React.FC<Props> = ({ alerts }) => {
    return (
        <div className="space-y-3">
            {alerts.map((alert) => (
                <div key={alert._id} className="p-3 border rounded shadow-sm bg-white">
                    <h3 className="text-lg font-semibold">{alert.name}</h3>
                    <p className="text-sm">{alert.topic} - {alert.borough}</p>
                    <p className="text-xs text-gray-600">{new Date(alert.date).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default AlertList;