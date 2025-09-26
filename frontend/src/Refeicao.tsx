import SimpleButton from "../components/SimpleButton";

export default function Refeicao() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-4 mb-10">
            <p className="text-2xl mb-6">Adicione as informações da sua nova refeição!</p>
            <form action="" className="border-2 border-gray-400 flex flex-col w-3/5 rounded-md p-10 gap-8">
                <div className="flex flex-col w-full gap-2">
                    <label>Nome</label>
                    <input type="text" className="border-2 border-gray-300 rounded-sm outline-none p-2"></input>
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label>Descrição</label>
                    <textarea className="border-2 border-gray-300 rounded-sm outline-none p-2"></textarea>
                </div>

                <div className="flex gap-18">
                    <div className="flex flex-col w-full gap-2">
                        <label>Data</label>
                        <input type="date" className="border-2 border-gray-300 rounded-sm outline-none p-2"></input>
                    </div>

                    <div className="flex flex-col w-full gap-2">
                        <label>Hora</label>
                        <input type="text" className="border-2 border-gray-300 rounded-sm outline-none p-2"></input>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-10">
                    <SimpleButton action={false} text="Cadastrar refeição" />
                </div>
            </form>
        </div>
    )
}