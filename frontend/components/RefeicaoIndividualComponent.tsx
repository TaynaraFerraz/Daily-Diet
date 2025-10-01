import InOrOutDiet from './InOrOutDiet'

export default function RefeicaoIndividualComponent({ title, text, data, hora, inDiet }: { title: string, text: string, data: string, hora: string, inDiet: boolean }) {
    return (
        <div className="flex flex-col mx-10 gap-16">
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
                <p className=" text-md md:text-xl">{text}</p>
            </div>

            <div className="flex flex-col gap-3">
                <p className=" text-md md:text-xl">Data e hora:</p>
                <p className=" text-md md:text-xl">{data} às {hora}</p>
            </div>

            <InOrOutDiet inDiet={inDiet} />
        </div>
    )
}