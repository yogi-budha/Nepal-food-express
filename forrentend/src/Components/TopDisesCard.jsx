

function TopDisesCard({image,name,price,category,id}) {
  return (
    <>
    
    <div className='cursor-pointer transform transition duration-150 ease-in-out hover:scale-105 '>
        <div className='w-60 h-80 shadow-xl border rounded-md overflow-hidden flex flex-col justify-between  '>
            <img className='px-3 py-2 rounded-md' src={`http://localhost:3000/image/${image}`} alt="" />

            <div className='flex text-xl text-green-800 justify-between px-3 '>
                <p>{name}</p>

            </div>
            <div className='flex text-green-400 justify-between text-sm tracking-tighter px-3 mt-1 '>
                <p>Food provides essential nutrients for overall health and well-being</p>
            </div>

            <div className='mt-1 px-3 text-lg mb-1 text-green-500 flex justify-between'>
                <p className='text-sm text-green-600 flex items-center gap-1'><i className="text-green-600 text-xl  ri-star-s-line"></i>(4.5)</p>
                <p className='text-green-700'>RS.{price}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TopDisesCard