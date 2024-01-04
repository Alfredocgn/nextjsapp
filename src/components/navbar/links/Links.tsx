import Link from "next/link";

const Links = () => {

  const links = [
    {title:"Homepage",path:"/"},
    {title:"About",path:"/about"},
    {title:"Contact",path:"/contact"},
    {title:"Blog",path:"/blog"},
  ]


  return(
    <div className="flex items-center gap-4">
      {links.map((link)=> (
        <Link href={link.path} key={link.path}>{link.title}</Link>
      ))}
    </div>
  )
}

export default Links;