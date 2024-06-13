import React from "react";

const UnderConstruction: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center'>
      <h1 className='text-5xl text-white font-bold mb-8 animate-pulse'>
        Çok Yakında...
      </h1>
      <p className='text-white text-lg mb-8'>
        Web sitemiz şu anda yapım aşamasında. Lütfen daha sonra tekrar kontrol
        edin.
      </p>
    </div>
  );
};

export default UnderConstruction;
