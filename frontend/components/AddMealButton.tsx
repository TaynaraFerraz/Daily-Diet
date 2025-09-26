import SimpleButton from './SimpleButton'
import { Link } from "react-router-dom";

export default function AddMealButton() {
    return (
        <Link to={'/refeicao'}>
            <SimpleButton text='Nova refeição' action={true} />
        </Link>
    )
}