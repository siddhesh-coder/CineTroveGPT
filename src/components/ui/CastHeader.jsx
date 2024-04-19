import React from 'react';
import { X } from "lucide-react";
import { CAST_HEADER } from '../../utils/constants';

const CastHeader = ({handleOpen}) => {
  return (
    <div className="flex items-center justify-between">
    <h1 className="text-lg font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
      {CAST_HEADER}
    </h1>
    <X className="text-white cursor-pointer" onClick={() => handleOpen(null)} />
  </div>
  )
}

export default CastHeader