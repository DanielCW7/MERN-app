import { useEffect, useState } from 'react';
import Item from './item';
import Loading from './loading';

const Collection = () => {

  return (
    <div className="flex flex-col justify-center">

      <input className="border-2 border-black mx-2" type="text" id="title" />
      <input className="border-2 border-black mx-2" type="text" id="desc" />

      <button onClick={} className="border-2 m-2"> Add Todo </button>
    </div> 
  );
};

export default Collection;
