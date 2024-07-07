'use client'
import AppCard from "@/components/AppCard";
import LineChart from "@/components/LineChart";
import TextCard from "@/components/textCard";
import { forecast_indices, forecast_months, PROJECTION_2023 } from "@/constants/common";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdInsights } from "react-icons/md";


export default function projections() {
    // const router= useRouter();
    // useEffect(() => {
    //     const authenticated = localStorage.getItem('authenticated');
    //     if (authenticated !== 'true') {
    //       router.push('/');
    //     }
    //   }, [router]);
  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="flex flex-col max-w-6xl mx-auto p-4 gap-4">
        <div className="flex flex-col ">
          <div className="flex gap-6">
            <div className="flex items-center gap-3">
                <AiOutlineFundProjectionScreen className="text-3xl text-green-600"/>
                <h1 className="text-4xl">Forecast</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex w-full gap-8 h-full justify-center items-center">
                <div className="p-2 w-1/2 flex justify-center items-center gap-3">
                <LineChart heading="Future Projections" labels={forecast_months} datasets={forecast_indices}/>
                </div>
                <AppCard cardName="Forecasted Yeild for 2024" cardValue="720 tons"/>
            </div>
            <div className="flex flex-col items-center gap-5">
                <div className="flex items-center gap-2 py-2 border-b border-t border-gray-300">
                    <MdInsights className="text-3xl text-gray-900"/>
                    <h1 className="text-2xl text-gray-900 text-center ">INSIGHTS</h1>
                </div>
                <div className="flex gap-6">
                    <TextCard text='As of July 2024, the indices show a noticeable improvement compared to last year. The NDVI, NDRE, MSAVI, and GNDVI indices have all shown positive trends, indicating healthier crop conditions and better overall growth. '/>
                    <TextCard text='If a similar trajectory is followed, we predict the yield for 2024 to be approximately 720 tons per acre. This projection is based on the current trends observed in the key vegetation indices. '/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
