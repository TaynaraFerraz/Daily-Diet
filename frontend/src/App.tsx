import SimpleCard from '../components/SimpleCard'
import AddMealButton from '../components/AddMealButton'
import ListMeals from '../components/ListMeals'
function App() {

  return (
    <div className='px-10 py-5 mb-10'>
      <SimpleCard info='90,86%' description='das refeições dentro da dieta' redirect={true} healthy={true} />

      <div className='mt-12 flex flex-col gap-3'>
        <p className='text-xl'>Refeições</p>
        <AddMealButton />
      </div>

      <div className='mt-12 flex flex-col gap-3'>
        <p className='text-xl font-semibold'>12.08.22</p>
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='PF' healthy={true} />
      </div>

      <div className='mt-12 flex flex-col gap-3'>
        <p className='text-xl font-semibold'>15.08.22</p>
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='X-tudo' healthy={false} />
        <ListMeals hora='20:00' meal='PF' healthy={true} />
      </div>
    </div>
  )
}

export default App
