import Proptypes from 'prop-types'
import ProfileCard from '../components/profileCard/ProfileCard'

const ListaCards = ({users}) => {
    
    ListaCards.propTypes = {
        users: Proptypes.arrayOf(Object)
    }
  return (
    <div className='flex flex-col items-center justify-between w-full p-5 gap-10'>
        <h1 className="text-center text-4xl font-semibold row-start-1 row-end-1">Lista de cards</h1>
        <section className='flex justify-evenly items-center flex-wrap gap-5 row-span-1 w-full'>
            {
                users.map(user => (
                    <ProfileCard
                        user={user} 
                        key={user.login.uuid}/>
                ))
            }
        </section>
    </div>
  )
}

export default ListaCards