import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex  flex-col md:flex-row gap-24">
      <div className="flex-1 flex flex-col gap-12 ">
        <h2 className="text-[#3673fd]">About Agency</h2>
        <h1 className=" text-7xl ">We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className="text-lg font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum possimus aspernatur nisi totam earum aut nam voluptate dolor numquam modi, explicabo neque, animi iste aliquam officia accusantium? Sed, in temporibus.</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#3673fd] text-3xl">10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#3673fd] text-3xl">10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[#3673fd] text-3xl">10 K+</h3>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image className=" object-contain " src="/about.png" alt="about image" fill />
      </div>
    </div>
  )
}

export default AboutPage;