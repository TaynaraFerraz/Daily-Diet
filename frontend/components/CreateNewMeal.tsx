import { Link } from "react-router-dom";
import SimpleButton from './SimpleButton'

export default function CreateNewMeal(){
    return(
        <Link to={'/boaRefeicao'}>
            <SimpleButton action={false} text="Cadastrar refeição"/>
        </Link>
    )
}