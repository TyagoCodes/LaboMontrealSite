import { useParams } from 'react-router-dom';
import {nouvelleList, Nouvelle} from "../data.ts";

export default function NouvellePage() {
    const { id } = useParams();
    const index = parseInt(id || '0');
    const article: Nouvelle | undefined = nouvelleList[index];

    if (!article) return <p className="text-white p-5">Article not found</p>;

    return (
        <div className="p-5 text-white max-w-screen-md mx-auto">
            <h1 className="text-2xl font-bold mb-2">{article.name}</h1>
            <p className="text-sm text-neutral-400">{article.date}</p>
            <ul>
                {
                    article.text.map((n,i) => (
                        <li key = {i}>
                            {n}
                        </li>
                    ))
                }
            </ul>
            <p className="mt-4 italic text-neutral-300">{article.location}</p>
            <a href="/" className="mt-6 inline-block text-blue-400 underline">←</a>
        </div>
    );
}
