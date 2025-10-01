import RefeicaoIndividualEditar from "../components/RefeicaoIndividualEditar";
import SimpleButton from "../components/SimpleButton";

export default function EditarRefeicao() {
    return (
        <div className='flex flex-col gap-6'>
            <RefeicaoIndividualEditar text='Sanduíche de pão integral com atum e salada de alface e tomate' title='Sanduíche' data='12/08/2025' hora='16:00' inDiet={true} />

            <div className='flex gap-6 m-10'>
                <SimpleButton action={''} text='Salvar alteração' />
            </div>
        </div>
    )
}