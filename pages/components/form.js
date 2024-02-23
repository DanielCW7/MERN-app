import { useEffect, useState } from 'react';
import Item from './item';
import Loading from './loading';

const Form = () => {

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto py-12">

      <input className="rounded bg-gray-100 my-2 p-2" type="text" id="title" placeholder='Task'/>
      <input className="rounded bg-gray-100 my-2 p-2" type="text" id="desc" placeholder='Description'/>

      <button className="border-2 m-2 w-32 bg-gray-200 rounded p-2"> Add Todo </button>
    </div> 
  );
};

export default Form;
