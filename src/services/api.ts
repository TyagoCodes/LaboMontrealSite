import { Alert } from "../types/Alert";

const API_URL = "https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=fc6e5f85-7eba-451c-8243-bdf35c2ab336";

export async function fetchAlerts(): Promise<Alert[]> {
    const res = await fetch(API_URL);
    const json = await res.json();

    return json.result.records.map((record: any) => ({
        _id: record._id,
        name: record.titre?.trim() || "Sans titre",
        topic: "",
        borough: "",
        date: record.date_debut || new Date().toISOString(),
    }));
}