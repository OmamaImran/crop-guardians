'use client'
import HistoricalAnalysisModal from "@/components/HistoricalAnalysisModal";
import LineChart from "@/components/LineChart";
import { HISTORICAL_GNDVI, HISTORICAL_MSAVI, HISTORICAL_NDRE, HISTORICAL_NDVI, monthLabels, PROJECTION_2023 } from "@/constants/common";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TbChartHistogram } from "react-icons/tb";

export default function projections() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModalOpen= ()=>{
    setIsModalOpen(!isModalOpen)
  }
    // const router = useRouter();
    // useEffect(() => {
    //     const authenticated = localStorage.getItem('authenticated');
    //     if (authenticated !== 'true') {
    //       router.push('/');
    //     }
    //   }, [router]);
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex flex-col p-4 max-w-6xl mx-auto gap-4">
        <div className="flex flex-col ">
          <div className="flex gap-6">
            <div className="flex items-center gap-3">
                <TbChartHistogram className="text-3xl text-green-600"/>
                <h1 className=" text-4xl">Historical Analysis</h1>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col w-full items-center  justify-center gap-3">
          <div className="flex justify-center">
            <button onClick={toggleModalOpen} className="rounded-l-full rounded-r-full px-4 py-2 text-white bg-green-600 hover:bg-green-700">View Detailed Analysis</button>
          </div>
        <div className="flex gap-5">
            <LineChart heading="NDVI" labels={monthLabels} datasets={HISTORICAL_NDVI}/>
            <LineChart heading="NDRE" labels={monthLabels} datasets={HISTORICAL_NDRE}/>
            
        </div>
        <div className="flex gap-5">
            <LineChart heading="GNDVI" labels={monthLabels} datasets={HISTORICAL_GNDVI}/>
            <LineChart  heading="MSAVI" labels={monthLabels} datasets={HISTORICAL_MSAVI}/>
        </div>
        </div>
      </div>
      {isModalOpen && <HistoricalAnalysisModal setModalOpen={setIsModalOpen}/>}
    </div>
  )
}
