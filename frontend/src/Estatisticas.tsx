import SimpleCard from "../components/SimpleCard";

export default function Estatisticas() {
    return (
        <div className="w-full flex flex-col p-10">
            <SimpleCard description="das refeições dentro da dieta" healthy={true} info="90.86%" redirect={false} />

            <p className="text-2xl mt-10 mb-5">Estatísticas gerais</p>

            <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                    <SimpleCard description="melhor sequência de pratos dentro da dieta" healthy={true} info="22" redirect={false} />
                    <SimpleCard description="refeições registradas" healthy={true} info="109" redirect={false} />
                </div>

                <div className="flex gap-6">
                    <SimpleCard description="refeições dentro da dieta" healthy={true} info="99" redirect={false} />
                    <SimpleCard description="refeições fora da dieta" healthy={false} info="10" redirect={false} />
                </div>
            </div>
        </div>
    )
}