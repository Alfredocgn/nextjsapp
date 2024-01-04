'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps{
    item:{
        title:string,
        path:string,
    }
}


const NavLink:React.FC<NavLinkProps> = ({item}) =>{

    const pathName = usePathname();
    const isActive = pathName === item.path;

    return (
        <Link href={item.path} className={` w-24 p-3 rounded-full font-medium items-center justify-center flex  ${isActive ? 'bg-white text-[#0d0c22]' : ''}`}>{item.title}</Link>
    )
}

export default NavLink;