import { Link } from "react-router-dom";

export default function ListMeals({ hora, meal, healthy }: { hora: string, meal: string, healthy: boolean }) {
    return (
        <Link to={'/refeicaoIndividual'}>
            <div className="border-2 flex p-2 rounded-md border-gray-500 justify-between">
                <div className="flex gap-4 mx-2">
                    <p>{hora}</p>
                    <div className="w-px h-6 bg-gray-500 "></div>
                    <p>{meal}</p>
                </div>
                <div className="flex justify-center items-center mx-2">
                    <div className={`w-4 h-4 ${healthy ? "bg-[#c4f8a1]" : "bg-[#f8aaaa]"} rounded-full flex`}></div>
                </div>
            </div>
        </Link>
    )
}