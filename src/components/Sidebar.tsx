'use client'
import { pages } from "@/constants/common";
import { useRouter } from "next/navigation";
import { GiSugarCane } from "react-icons/gi";



function Sidebar() {
  const handleLogOut= ()=> {
    localStorage.setItem('authenticated', 'false');
      router.push('/');
  }

  const router = useRouter();
    return (
      <div className="w-[250px] fixed py-6 px-5 h-screen bg-green-600 left-0">
        <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-20">
          <div className="flex items-center gap-3">
             <h1 className="text-2xl  text-white text-center">CROPGUARDIANS</h1>
            </div>
              <div className="flex   flex-col gap-3">
                  {pages.map((item,idx)=> (
                      <p key={idx} onClick={()=> router.push(item.link)} className="text-white px-3 py-2 border-b border-opacity-40 hover:border-b-4 hover:border-opacity-100 cursor-pointer flex gap-2 items-center border-white">{item.icon} {item.name}</p>
                  ))}
              </div>
        </div>
        <div className="flex flex-col items-center justify-center"><GiSugarCane className="text-[170px] text-white"/>
        <button onClick={handleLogOut} className="p-1 rounded-l-full rounded-r-full bg-white w-20 text-green-600 text-xs">Log Out</button>
        </div>
        </div>
      </div>
    )
  }
  export default Sidebar;