import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex gap-24 items-center">
      <div  className="flex-1 relative h-[500px]">
        <Image className="object-contain" src="/contact.png" alt="contact image" fill />
      </div>
      <div className="flex-1">
        <form action="#" className="flex flex-col gap-5 |">
          <input type="text" placeholder="Name and Surname" className="p-5 rounded-md bg-[#2d2b42]"/>
          <input type="text" placeholder="Email address" className="p-5 rounded-md bg-[#2d2b42]"/>
          <input type="text" placeholder="Phone Number (Optional)" className="p-5 rounded-md bg-[#2d2b42]"/>
          <textarea name="" id="" cols="30" rows="10" className="p-5 rounded-md bg-[#2d2b42] placeholder:Message"></textarea>
          <button className="p-5 w-full cursor-pointer rounded-md text-white bg-[#3673fd]">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage; 