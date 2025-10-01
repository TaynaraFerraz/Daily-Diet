import { PenLine, Plus, Trash } from "lucide-react";

export default function SimpleButton({ text, action }: { text: string, action?: string }) {
    return (
        <div className="bg-gray-700 py-4 px-14 w-fit flex justify-center items-center rounded-md gap-3 cursor-pointer">
            {
                action == 'plus' && <Plus color="white"/> ||
                action == 'edit' && <PenLine color="white" /> ||
                action == 'delete' && <Trash color="white" />
            }
            <p className="text-white text-sm md:text-lg">{text}</p>
        </div>
    )
}