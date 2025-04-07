import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="bg-neutral-800 text-white text-sm">
            <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-10">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-b border-neutral-600 pb-8">
                    <div className="flex flex-col gap-1 border-t border-neutral-600 pt-4">
                        <h1 className="font-bold mb-2">My account</h1>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">About my Account</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Create an Account</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Notices and Alerts</Link>
                    </div>

                    <div className="flex flex-col gap-1 border-t border-neutral-600 pt-4">
                        <h1 className="font-bold mb-2">Get in touch</h1>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Access to information request</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Contact us</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Report a Problem</Link>
                    </div>

                    <div className="flex flex-col gap-1 border-t border-neutral-600 pt-4">
                        <h1 className="font-bold mb-2">Work with us</h1>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Call for Bids</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">City Vendors (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">About my Account</Link>
                    </div>

                    <div className="flex flex-col gap-1 border-t border-neutral-600 pt-4">
                        <h1 className="font-bold mb-2">Visiting Montreal</h1>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">City Hall</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">MTLWiFi</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Tourisme Montreal</Link>
                    </div>

                    <div className="flex flex-col gap-1 border-t border-neutral-600 pt-4">
                        <h1 className="font-bold mb-2">About us</h1>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">By-laws</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Media centre</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Partnership Agreements</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Press Releases</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Public Notices</Link>
                    </div>

                    <div className="flex flex-col gap-1 border-t border-neutral-600 pt-4">
                        <h1 className="font-bold mb-2">Follow us</h1>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Facebook</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Instagram</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">LinkedIn</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">X (Twitter)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Youtube</Link>
                    </div>
                </div>


                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold border-neutral-600 pt-6">Boroughs</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-4">
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Ahuntsic-Cartierville (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Anjou (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Côte-des-Neiges–Notre-Dame-de-Grâce</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">L'Île-Bizard–Sainte-Geneviève</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Lachine</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">LaSalle</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Le Plateau-Mont-Royal (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Le Sud-Ouest (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Mercier–Hochelaga-Maisonneuve (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Montréal-Nord (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Outremont (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Pierrefonds-Roxboro</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Rivière-des-Prairies–Pointe-aux-Trembles (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Rosemont–La Petite-Patrie (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Saint-Laurent</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Saint-Léonard (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Verdun</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Ville-Marie (in French)</Link>
                        <Link className="hover:text-red-600 break-words" to="/AboutMyAccount">Villeray–Saint-Michel–Parc-Extension (in French)</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
