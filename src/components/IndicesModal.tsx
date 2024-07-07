import { IoIosCloseCircle } from "react-icons/io";

import React, { Dispatch, SetStateAction } from 'react';
interface IndicesModalProps{
  indiceModalOpen: boolean,
  setIndicesModalOpen: Dispatch<SetStateAction<boolean>>
}


const IndicesModal = ({indiceModalOpen, setIndicesModalOpen}:IndicesModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full">
        <div className="flex flex-col overflow-y-scroll no-scrollbar h-[400px]">
          <h1 className="font-bold text-xl mt-6">NDVI (Normalized Difference Vegetation Index)</h1>
          <p className="text-gray-500"><span className="font-bold">Description:</span> NDVI is a widely used index for assessing vegetation health. It compares the difference between near-infrared (NIR) and red light reflectance to determine the density and health of plant life. <br/>
              <span className="font-bold">Formula:</span> (NIR - Red) / (NIR + Red) <br/>
              <span className="font-bold">Applications:</span> Monitoring plant growth, vegetation health, and crop yield prediction.
              </p>
          
          
          <h1 className="font-bold text-xl mt-6">GNDVI (Green Normalized Difference Vegetation Index)</h1>
          <p className="text-gray-500"><span className="font-bold">Description:</span> GNDVI is similar to NDVI but uses green light instead of red light in its calculation. It is particularly useful for assessing chlorophyll content in plants. <br/>
              <span className="font-bold">Formula:</span>  (NIR - Green) / (NIR + Green) <br/>
              <span className="font-bold">Applications:</span> Monitoring chlorophyll content, assessing plant nitrogen status, and evaluating crop conditions.
              </p>
          
          
          <h1 className="font-bold text-xl mt-6">NDRE (Normalized Difference Red Edge)</h1>
          <p className="text-gray-500"><span className="font-bold">Description:</span> NDRE focuses on the red edge band, which is sensitive to chlorophyll content and biomass in plants. It is more effective for monitoring vegetation in dense or mature stages of growth. <br/>
              <span className="font-bold">Formula:</span> (NIR - Red Edge) / (NIR + Red Edge) <br/>
              <span className="font-bold">Applications:</span>Assessing plant stress, chlorophyll content, and biomass in later growth stages.
              </p>
          
          
          <h1 className="font-bold text-xl mt-6">MSAVI (Modified Soil-Adjusted Vegetation Index)</h1>
          <p className="text-gray-500"><span className="font-bold">Description:</span> MSAVI improves upon NDVI by reducing soil background noise, making it more accurate in areas with sparse vegetation. It enhances the sensitivity to vegetation by adjusting for soil brightness. <br/>
              <span className="font-bold">Formula:</span>  (2 * NIR + 1 - sqrt((2 * NIR + 1)^2 - 8 * (NIR - Red))) / 2 <br/>
              <span className="font-bold">Applications:</span>Monitoring vegetation in areas with bare soil, assessing crop conditions, and improving vegetation detection accuracy.
              </p>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={()=> setIndicesModalOpen(false)}
        >
         <IoIosCloseCircle className="text-3xl text-green-600"/>
        </button>
      </div>
    </div>
  );
};

export default IndicesModal;
