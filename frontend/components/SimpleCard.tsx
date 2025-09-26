import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SimpleCard({ info, description, redirect, healthy }: { info: string, description: string, redirect: boolean, healthy: boolean }) {

    return (
        <div className={`${healthy ? "bg-[#c4f8a1]" : "bg-[#f8aaaa]"} p-4 rounded shadow-md flex w-full`}>

            <div className="flex flex-col justify-center items-center w-full">
                <p>{info}</p>
                <p>{description}</p>
            </div>

            {
                redirect &&
                <div>
                    <Link to={'/estatisticas'}>
                        <ArrowUpRight color={healthy ? `#008000` : `#FF2C2C`} />
                    </Link>
                </div>
            }
        </div >
    )
}