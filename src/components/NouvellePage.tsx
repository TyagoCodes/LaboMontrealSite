import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "../types/Alert";
import { fetchAlerts } from "../services/api";
import { Link } from "react-router-dom";


const NouvellePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [alert, setAlert] = useState<Alert | null>(null);

    useEffect(() => {
        fetchAlerts().then(data => {
            const found = data.find((a) => a._id === id || a._id.toString() === id);
            setAlert(found ?? null);
        });
    }, [id]);

    if (!alert) return <p className="p-4">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-4">
            <Link to="/" className="inline-flex items-center text-blue-500 hover:underline mb-4">
                ← Retour à la page principale
            </Link>

            <h1 className="text-2xl font-bold">{alert.name}</h1>
            <p><strong>Topic:</strong> {alert.topic}</p>
            <p><strong>Borough:</strong> {alert.borough}</p>
            <p><strong>Date:</strong> {new Date(alert.date).toLocaleDateString()}</p>
        </div>
    );
};

export default NouvellePage;