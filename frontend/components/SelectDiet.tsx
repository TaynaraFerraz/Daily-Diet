
export default function SelectDiet({selectDiet, setSelectDiet}:{selectDiet : string, setSelectDiet : (value: string) => void}) {

    return (
        <div className="flex gap-18">
            <div className="flex flex-col w-full gap-2">
                <label>Está dentro da dieta?</label>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <button className={`w-50 flex justify-center items-center gap-2 border-2 ${selectDiet === 'good' ? "border-green-600" : "border-none"} p-2 rounded-md bg-gray-200 cursor-pointer`} onClick={() => setSelectDiet('good')} type="button">
                        <div className="w-3 h-3 rounded-full bg-green-700"></div>
                        Sim
                    </button>

                    <button className={`w-50 flex justify-center items-center gap-2 border-2 ${selectDiet === 'bad' ? "border-red-600" : "border-none"} p-2 rounded-md bg-gray-200 cursor-pointer`} onClick={() => setSelectDiet('bad')} type="button">
                        <div className="w-3 h-3 rounded-full bg-red-600" ></div>
                        Não
                    </button>
                </div>
            </div>
        </div>
    )
}