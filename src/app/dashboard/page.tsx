'use client'
import LineChart from "@/components/LineChart";
import LocationCard from "@/components/LocationChart";
import { NDVI_Text_Box, PROJECTION_2023 } from "@/constants/common";
import ProjectedYeildCard from "@/components/AppCard";
import { MdDashboard } from "react-icons/md";
import AppCard from "@/components/AppCard";
import Image from "next/image";
import TextCard from "@/components/textCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IndicesModal from "@/components/IndicesModal";

export default function Dashboard() {
  const [indiceModalOpen, setIndicesModalOpen]= useState(false)
  const toggleIndicesModal= ()=> {
    setIndicesModalOpen(!indiceModalOpen);
  }

  const router = useRouter();
  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated');
    if (authenticated !== 'true') {
      router.push('/');
    }
  }, [router]);
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-col max-w-6xl mx-auto p-4 gap-4">
        <div className="flex flex-col ">
          <div className="flex gap-6">
          <div className="flex items-center gap-3">
                <MdDashboard className="text-3xl text-green-600"/>
                <h1 className="text-gray-800 text-4xl">Dashboard</h1>
            </div>
            <LocationCard />
          </div>
        </div>
        <div className="p-2 flex flex-col gap-3">
          <div className="flex gap-4">
            <Image src={'/images/feild_image.jpg'} width={450} height={40} alt="feild-image"/>
            <div className="flex flex-col justify-between">
              <div className="w-fit flex flex-col gap-4 p-2 px-6 bg-white shadow-sm shadow-green-600 rounded-lg">
        <p className="text-green-700 text-sm">{NDVI_Text_Box}</p>
        <div className="flex justify-center">
            <button onClick={toggleIndicesModal} className="text-white rounded-l-full rounded-r-full p-1 px-3 text-xs bg-green-600">Learn more about indices</button></div>
      </div>
          </div>

          </div>
          <div className="flex justify-between">
            <AppCard cardName="Yield Prediction 2024"  cardValue="720tons"/>
            <AppCard cardName="Yield Prediction 2025"  cardValue="720tons"/>
            <AppCard cardName="Yield Prediction 2026"  cardValue="740tons"/>
            <AppCard cardName="Yield Prediction 2027"  cardValue="740tons"/>
          </div>
        </div>
      </div>
      {indiceModalOpen && <IndicesModal indiceModalOpen setIndicesModalOpen={setIndicesModalOpen}/>}
    </div>
  )
}
