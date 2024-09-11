import { useContext} from 'react'
import TopDisesCard from './TopDisesCard'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Contex/storeContex'



function TopDises() {

  const {foodList} = useContext(StoreContext)



  return (
   <>
   <hr />
   <div className='w-full ' id='TopDises'>
      <h1 className='px-72 my-5 text-2xl font-semibold text-green-600   '>
    Top dises near you..
   </h1>

  <div className=' grid grid-cols-5 gap-8  flex-wrap px-52'>
      {

    foodList.map(({image,name,price,description,category,_id})=>(

      <Link to={`detail/${_id}`}  key={_id} >
              <TopDisesCard image={image} name={name} price={price} description={description} category={category} id={_id}/>
      </Link>


    ))
    
   }
  </div>
 
   </div>
 
   </>
  )
}

export default TopDises