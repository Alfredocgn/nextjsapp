import Image from "next/image";


const Home = () => {
  return (
  <div className="flex gap-[100px] " >
    <div className=" flex-1 flex flex-col gap-12 ">
        <h1 className=" text-9xl ">Creative Thought Agency</h1>
        <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus saepe dolore enim laboriosam odio exercitationem </p>
        <div className="flex gap-5 ">
          <button className=" p-5 min-w-28 cursor-pointer rounded-md text-white bg-[#3673fd]">Learn More</button>
          <button className=" p-5 min-w-28 cursor-pointer rounded-md bg-white text-[#0d0c22] ">Contact</button>
        </div>
        <div className="relative w-[500px] h-[50px] grayscale ">
          <Image src="/brands.png" alt="brand" fill/>
        </div>
    </div>
    <div className=" flex-1  relative">
      <Image src="/hero.gif" alt="hero" fill/>
    </div>
  </div>
  )
}

export default Home;