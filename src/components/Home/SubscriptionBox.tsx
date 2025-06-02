import React from "react";
import { Link } from "react-router-dom";

const SubscriptionBox: React.FC = () => (
    <div className="w-full md:w-1/4 max-h-60 rounded-lg shadow-sm bg-gray-800 p-6">
        <div className="flex flex-col max-w-screen-xl mx-auto px-4 gap-y-5">
            <h1 className="text-xl text-amber-50 font-extrabold">Subscribe to alerts</h1>
            <p className="text-s">To receive notices and alerts by e-mail or text message, you must create an account.</p>
            <Link to="/subscriptionPage/" className="inline-flex items-center px-3 py-2 text-sm font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                Subscribe
                <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
);

export default SubscriptionBox;