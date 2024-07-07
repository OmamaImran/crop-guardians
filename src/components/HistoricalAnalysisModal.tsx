import { IoIosCloseCircle } from "react-icons/io";

import React, { Dispatch, SetStateAction } from 'react';
interface IndicesModalProps{
  setModalOpen: Dispatch<SetStateAction<boolean>>
}


const HistoricalAnalysisModal = ({setModalOpen}:IndicesModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
        <div className="flex flex-col overflow-y-scroll no-scrollbar h-[400px]">
          <h1 className="font-bold text-xl mt-6">NDVI (Normalized Difference Vegetation Index)</h1>
          <p className="text-gray-500">
            <span className="font-bold">Trend:</span> NDVI values generally increase from February to peak around June to August, followed by a decline towards November. <br/>
              <span className="font-bold">Observation:</span> The NDVI values for different years follow a similar pattern, with slight variations. The year 2023 (blue line) shows relatively higher values during the peak months compared to previous years, indicating better vegetation health during that period. <br/>
              </p>
          
          
          <h1 className="font-bold text-xl mt-6">GNDVI (Green Normalized Difference Vegetation Index)</h1>
          <p className="text-gray-500">
            <span className="font-bold">Trend:</span>  GNDVI values show a gradual increase from February to June, remaining relatively stable until August, and then decreasing towards November. <br/>
              <span className="font-bold">Observation:</span> The year 2023 shows higher GNDVI values compared to other years, particularly from April to October, indicating a better overall chlorophyll content and plant health during these months.<br/>
              </p>
          
          
          <h1 className="font-bold text-xl mt-6">NDRE (Normalized Difference Red Edge)</h1>
          <p className="text-gray-500">
              <span className="font-bold">Trend:</span> NDRE values increase from February, peaking around July to September, and then decline towards November. <br/>
              <span className="font-bold">Observation:</span> The NDRE values for 2023 (blue line) are lower compared to previous years, especially during the peak months. This could suggest that the nitrogen content or biomass is slightly less in 2023 compared to previous years.
              </p>
          
          
          <h1 className="font-bold text-xl mt-6">MSAVI (Modified Soil-Adjusted Vegetation Index)</h1>
          <p className="text-gray-500">
              <span className="font-bold">Trend:</span>  MSAVI values increase from February, peaking around June to August, and then gradually decrease towards November. <br/>
              <span className="font-bold">Observation:</span> The 2023 values (blue line) are higher during the peak months, suggesting less soil influence and better crop health. There is a noticeable drop in MSAVI values after September, similar to other years.
              </p>
          
          
          <h1 className="font-bold text-xl mt-6">General Observations:</h1>
          <p className="text-gray-500">
              <span className="font-bold">Consistency:</span>  Each index demonstrates a cyclical pattern with similar trends across the years, reflecting the seasonal growth and health cycle of sugarcane. <br/>
              <span className="font-bold">2023 Trends:</span> The indices for 2023 often show higher values during the peak growth months compared to previous years, indicating a potentially healthier crop in 2023. <br/>
              <span className="font-bold">Variations: </span>  While the overall patterns are consistent, there are yearly variations that could be due to differences in weather conditions, agricultural practices, or other environmental factors. <br/>
              </p>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={()=> setModalOpen(false)}
        >
         <IoIosCloseCircle className="text-3xl text-green-600"/>
        </button>
      </div>
    </div>
  );
};

export default HistoricalAnalysisModal;
