import { Link } from 'react-router-dom'
import  SimpleButton  from './SimpleButton'

export default function Feedback({feedback, text, title} : {feedback : boolean, text : string, title: string}) {
    return (
        <div className="flex flex-col justify-center items-center gap-16 mb-20">
            <div className="flex flex-col text-center gap-4">
                <h1 className={`text-2xl md:text-3xl ${feedback ? 'text-green-700' : 'text-red-600'} font-semibold`}>{title}</h1>
                <p className="text-md md:text-xl">{text}</p>
            </div>
            <img src={feedback ? "/BoaRefeicao.png" : "/MaRefeicao.png"} alt="Íconde de boa refeição cadastrada" className="w-72 h-72 md:w-96 md:h-96" />
            <Link to={'/'}>
                <SimpleButton action={false} text="Ir para a página inicial" />
            </Link>
        </div>
    )
}