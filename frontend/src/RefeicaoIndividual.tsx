import { Link } from 'react-router-dom'
import RefeicaoIndividualComponent from '../components/RefeicaoIndividualComponent'
import SimpleButton from '../components/SimpleButton'

export default function RefeicaoIndividual() {
    return (
        <div className='flex flex-col gap-6'>
            <RefeicaoIndividualComponent text='Sanduíche de pão integral com atum e salada de alface e tomate' title='Sanduíche' data='12/08/2025' hora='16:00' inDiet={true} />

            <div className='flex gap-6 m-10'>
                <Link to={'/editarRefeicao'}>
                    <SimpleButton action={'edit'} text='Editar refeição' />
                </Link>
                <SimpleButton action={'delete'} text='Excluir refeição' />
            </div>
        </div>
    )
}