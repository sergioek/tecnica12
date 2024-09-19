import React from 'react'

export const Copyright = () => {
  return (
    <div className="flex flex-col items-center text-white font-mono mt-3 bg-gray-600">
      <div>
        <strong className="text-sm">© Copyright Escuela Técnica Nº12</strong>
      </div>
      
      <div className="flex flex-row">
        <p className="text-violet-900 font-bold text-sm">Powered by</p>
        <p className="ml-1 text-sm">SkSoftware</p>
      </div>
    </div>
  );
}
