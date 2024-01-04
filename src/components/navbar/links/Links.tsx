'use client'
import { useState } from "react";
import NavLink from "./navLink/navLink";

const links = [
  {title:"Homepage",path:"/"},
  {title:"About",path:"/about"},
  {title:"Contact",path:"/contact"},
  {title:"Blog",path:"/blog"},
]

const Links = () => {
const [open,setOpen] = useState(false)
const session = true;
const isAdmin = true;

  return(
    <div>
      <div className="items-center gap-4 hidden lg:flex ">
        {links.map((link)=> (
          <NavLink item={link} key={link.path}/>
        ))}
        {
          session ? (
            <>
            {
              isAdmin && (
                <NavLink item={{title:"Admin",path:"/admin"}} />
              )
            }
            <button className=" cursor-pointer p-3 font-bold  ">Logout</button>          
            </>
          ) : (
            <NavLink item={{title:"Login",path:"/login"}} />
          )
  
        }
      </div>
      <button onClick={() => setOpen((prev) => !prev )} className="lg:hidden inline-block">Menu</button>
      {
        open && 
        <div className="absolute lg:hidden top-28 right-0 w-[32%] h-[calc(100vh-100px)] bg-[#0d0c22] flex flex-col items-center justify-center gap-3">
          {
            links.map((link) =>(
              <NavLink item={link} key={link.path}/>
            ))
          }

        </div>
      }

    </div>
    )
  }

export default Links;