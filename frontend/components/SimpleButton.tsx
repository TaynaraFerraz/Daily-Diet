import { Plus } from "lucide-react";

export default function SimpleButton({ text, action }: { text: string, action: boolean }) {
    return (
        <div className="bg-gray-700 p-4 w-48 md:w-72 flex justify-center items-center rounded-md gap-3">
            {
                action && <Plus color="white"/>
            }
            <p className="text-white text-sm md:text-lg">{text}</p>
        </div>
    )
}