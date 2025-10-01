import { useState } from "react";
import CreateNewMeal from "../components/CreateNewMeal";

export default function Refeicao() {
    const [selectDiet, setSelectDiet] = useState('');

    return (
        <div className="w-full flex flex-col justify-center items-center mt-4 mb-10">
            <p className="text-xl md:text-2xl mb-6 text-center p-2">Adicione as informações da sua nova refeição!</p>
            <form action="" className="border-2 border-gray-400 flex flex-col w-11/12 md:w-3/5 rounded-md p-10 gap-8">
                <div className="flex flex-col w-full gap-2">
                    <label>Nome</label>
                    <input type="text" className="border-2 border-gray-300 rounded-sm outline-none p-2"></input>
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label>Descrição</label>
                    <textarea className="border-2 border-gray-300 rounded-sm outline-none p-2"></textarea>
                </div>

                <div className="flex flex-col md:flex-row gap-18">
                    <div className="flex flex-col w-full gap-2">
                        <label>Data</label>
                        <input type="date" className="border-2 border-gray-300 rounded-sm outline-none p-2"></input>
                    </div>

                    <div className="flex flex-col w-full gap-2">
                        <label>Hora</label>
                        <input type="text" className="border-2 border-gray-300 rounded-sm outline-none p-2"></input>
                    </div>
                </div>

                <div className="flex gap-18">
                    <div className="flex flex-col w-full gap-2">
                        <label>Está dentro da dieta?</label>
                        <div className="flex justify-center items-center gap-8">
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

                <div className="flex justify-center items-center ">
                    <CreateNewMeal selectDiet={selectDiet}/>
                </div>
            </form>
        </div>
    )
}