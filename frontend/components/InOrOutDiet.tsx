
export default function InOrOutDiet({inDiet} : {inDiet : boolean}){
    return(
        <div className="bg-gray-200 flex gap-3 items-center px-6 py-2 rounded-2xl w-fit">
            <div className={`w-4 h-4 rounded-full ${inDiet ? 'bg-green-600' : 'bg-red-600'}`}></div>
            <p className="text-sm md:text-md">{inDiet ? 'dentro' : 'fora'} da dieta</p>
        </div>
    )
}