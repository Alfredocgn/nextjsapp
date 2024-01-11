import Image from "next/image";


const SinglePostPage = () =>{
  return(
    <div className="flex gap-[100px]">     
      <div className=" relative w-[75%] h-[600px] hidden sm:block">
        <Image src="https://images.pexels.com/photos/19390846/pexels-photo-19390846/free-photo-of-arena-barcos-rio-barco-de-pesca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post photo" fill  className=" object-cover"/>
      </div>
      <div className="flex flex-col items-start justify-center gap-20">
        <h1 className="text-7xl">Title</h1>
        <div className="flex gap-5  ">
          <div className="">
          <Image src="https://images.pexels.com/photos/19390846/pexels-photo-19390846/free-photo-of-arena-barcos-rio-barco-de-pesca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={50} height={60} className="object-cover rounded-[50%] "/>

          </div>
          <div className="flex flex-col ">
            <span className="text-gray-400 font-bold">Author</span>
            <span>John Doe</span>
          </div>
          <div className="flex flex-col ">
            <span className="text-gray-400 font-bold">Published</span>
            <span >01/01/24</span>
          </div>
        </div>
        <div className="text-xl mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, deleniti animi? Quibusdam amet necessitatibus repellat consectetur neque similique, deleniti eum.</div>  
      </div>
      </div>
  )
}

export default SinglePostPage;