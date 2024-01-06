import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="relative w-full h-[500px] ">
        <Image src="/about.png" alt="about image" fill/>
      </div>
    </div>
  )
}

export default AboutPage;