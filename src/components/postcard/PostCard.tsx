import Image from "next/image"
import Link from "next/link"


export const PostCard = () => {
    return (
        <div className="flex flex-col gap-5 mb-5 w-full ">
            <div className="flex">
                <div className="w-[90%] h-[400px] relative">
                    <Image className="object-cover " alt="post image" fill src="https://images.pexels.com/photos/19390846/pexels-photo-19390846/free-photo-of-arena-barcos-rio-barco-de-pesca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
                <span className="text-sm rotate-90 m-auto  ">01.01.2024</span>
            </div>
            <div>
                <h2 className="text-7 mb-5 w-[90%]">Title</h2>
                <p className="font-light text-gray-500 mb-5 w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iste distinctio mollitia inventore excepturi nisi, iusto quia aliquam ab sapiente ad</p>
                <Link href="/blog/post"  className="underline">READ MORE</Link>
            </div>
        </div>
    )
}
