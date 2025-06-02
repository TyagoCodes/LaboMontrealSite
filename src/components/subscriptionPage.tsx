import { useEffect } from "react";

const VAPID_PUBLIC_KEY = 'BBwCxGztsGFoFcAd-JP538w__1Znbuq6Kr5eVEX_vKkBMD66pp2H7UYcW-r81BG1LztD3Kal47YFYIVT_L5THiY';

function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}

const SubscriptionPage: React.FC = () => {
    useEffect(() => {
        const subscribeUser = async () => {
            if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;

            const registration = await navigator.serviceWorker.ready;

            const existingSub = await registration.pushManager.getSubscription();
            if (existingSub) {
                await existingSub.unsubscribe();
                console.log("Unsubscribed existing push subscription");
            }

            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
            });

            await fetch("http://localhost:3001/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(subscription),
            });

            console.log("User subscribed to push notifications");
        };

        subscribeUser();
    }, []);

    return (
        <div className="text-white p-4">
            <h1 className="text-2xl font-bold mb-4">You're subscribed!</h1>
            <p>Push notifications are now enabled.</p>
        </div>
    );
};

export default SubscriptionPage;