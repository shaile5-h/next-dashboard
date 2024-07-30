// import React from 'react'
// import {data} from '../data/data.js'
// import {BsPersonFill} from 'react-icons/bs'


// const RecentOrders = () => {
//   return (
//     <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
//       <h1>Recent Cases</h1>
//       <ul>
//         {data.map((order,id)=>(
//             <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
//                 <div className='bg-purple-100 rounded-lg p-3'>
//                     <BsPersonFill className='text-puple-800'/>
//                 </div>
//                 <div className='pl-4'>
//                     <p className='text-gray-800 font-bold'>{order.total}</p>
//                     <p className='text-gray-400 text-sm'>{order.name.first}</p>
//                 </div>
//                 < p className='lg:flex md:hidden absolute right-6 text-sm'>
//                     {order.date}
//                 </p>
//             </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default RecentOrders

import React from 'react';
import { data } from '../data/data.js';
import { BsPersonFill } from 'react-icons/bs';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white dark:bg-gray-800 overflow-scroll'>
      <h1 className='text-gray-800 dark:text-gray-200'>Recent Cases</h1>
      <ul>
        {data.map((order, id) => (
          <li key={id} className='bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div className='bg-purple-100 dark:bg-purple-700 rounded-lg p-3'>
              <BsPersonFill className='text-purple-800 dark:text-purple-200' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 dark:text-gray-200 font-bold'>{order.total}</p>
              <p className='text-gray-400 dark:text-gray-400 text-sm'>{order.name.first}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm text-gray-800 dark:text-gray-200'>
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
