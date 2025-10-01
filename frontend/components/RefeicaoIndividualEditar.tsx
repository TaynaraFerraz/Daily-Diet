import { useState } from 'react'
import SelectDiet from './SelectDiet'

export default function RefeicaoIndividualEditar({ title, text, data, hora, inDiet }: { title: string, text: string, data: string, hora: string, inDiet: boolean }) {
    const [nome, setNome] = useState(title)
    const [descricao, setDescricao] = useState(text)
    const [dataInput, setDataInput] = useState(data)
    const [horaInput, setHoraInput] = useState(hora)
    const [selectDiet, setSelectDiet] = useState(inDiet ? 'good' : 'bad')

    return (
        <div className="flex flex-col mx-10 gap-16 w-11/12 md:w-3/4">
            <div className="flex flex-col gap-3">
                <label>Nome</label>
                <input type="text" value={nome} className='border-gray-300 border-2 px-3 py-2 rounded-md outline-none' onChange={(e) => setNome(e.target.value)}></input>

                <label>Descrição</label>
                <textarea value={descricao} className='border-gray-300 border-2 px-3 py-2 rounded-md outline-none' onChange={(e) => setDescricao(e.target.value)}></textarea>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
                <div className='flex flex-col w-full'>
                    <label>Data</label>
                    <input type="text" className='border-gray-300 border-2 px-3 py-2 rounded-md outline-none' value={dataInput} onChange={(e) => setDataInput(e.target.value)} />
                </div>

                <div className='flex flex-col w-full'>
                    <label>Hora</label>
                    <input type="text" className='border-gray-300 border-2 px-3 py-2 rounded-md outline-none' value={horaInput} onChange={(e) => setHoraInput(e.target.value)} />
                </div>
            </div>

            <div className='flex'>
                <SelectDiet selectDiet={selectDiet} setSelectDiet={setSelectDiet} />
            </div>
        </div>
    )
}