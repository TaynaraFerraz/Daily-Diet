import { Link } from "react-router-dom";
import SimpleButton from './SimpleButton'

export default function CreateNewMeal({ selectDiet }: { selectDiet: string }) {
    return (
        <Link to={selectDiet == 'good' ? '/boaRefeicao' : '/maRefeicao'}>
            <SimpleButton action={false} text="Cadastrar refeição" />
        </Link>
    )
}