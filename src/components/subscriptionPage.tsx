import {Link} from "react-router-dom";

function subscriptionPage(){
    return(
    <>
    <div>
        <h1 className="text-[26px] font-bold text-center p-6 m-6">
            Feature not available for the moment :(
        </h1>
    </div>

    <div>
        <p className="mt-4 italic text-neutral-300"></p>
        <Link to="/" className="mt-6 inline-block text-neutral-300 text-3xl font-bold hover:text-red-600 transition">←</Link>
    </div>
    </>
    );
}

export default subscriptionPage;