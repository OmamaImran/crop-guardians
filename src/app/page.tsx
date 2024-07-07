'use client'
import LineChart from "@/components/LineChart";
import LocationCard from "@/components/LocationChart";
import { pages, PROJECTION_2023 } from "@/constants/common";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GiSugarCane } from "react-icons/gi";


export default function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('authenticated', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  const router = useRouter();
  return (
//     <div className="h-screen bg-[#1C1C1C] flex items-center justify-center">
//       <div className="max-w-5xl mx-auto flex items-center justify-center">
//         <div className="flex border border-slate-600 shadow-md shadow-green-600 rounded flex-col gap-9 p-12 items-center justify-center">
//           {/* <div className="flex items-center gap-3">
//           <GiSugarCane className="text-6xl text-white"/>
//             <h1 className="text-4xl text-white">CROPGUARDIANS</h1>
//           <GiSugarCane className="text-6xl text-white"/>

//           </div>
//           <div className="flex flex-col gap-3">
//             {pages.map((item,idx)=> (
//                <button onClick={()=> router.push(item.link)} key={idx} className="w-52 py-3 text-white rounded-lg bg-green-600 hover:bg-green-800 border-l-2 border-t-2 border-green-800 hover:border-l hover:border-t hover:border-white">
// {item.name}</button>
//             ))} */}
            
//           {/* </div> */}
//           <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//         </div>
//     </div>
//   </div>
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <div className="flex border border-slate-600 shadow-md shadow-green-600 rounded flex-col gap-9 p-12 items-center justify-center">
          <h1 className="text-3xl">SignIn</h1>
      <form className="flex flex-col justify-center items-center gap-10" onSubmit={handleSubmit}>
        <div>
          <label className="px-4">Username:</label>
          <input
          className="border-b p-2 border-slate-700"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="px-4">Password:</label>
          <input
           className="border-b p-2 border-slate-700"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="bg-green-600 rounded-l-full w-24 rounded-r-full p-2 text-white" type="submit">Login</button>
      </form>
        </div>
    </div>
  </div>
  )
}
