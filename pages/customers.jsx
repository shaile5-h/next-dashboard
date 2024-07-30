// import React from 'react';
// import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
// import { data } from '../data/data.js';

// const customers = () => {
//   return (
//     <div className='bg-gray-100 min-h-screen'>
//       {/* <div className='flex justify-between p-4'>
//         <h2>Cases</h2>
//         <h2>Theme</h2>
//       </div> */}
//       <div className='p-4'>
//         <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
//           <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
//             <span>State</span>
//             <span className='sm:text-left text-right'>#Cases</span>
//             <span className='hidden md:grid'>Last Case</span>
//             <span className='hidden sm:grid'>Method</span>
//           </div>
//           <ul>
//             {data.map((order, id) => (
//                 <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
//                     <div className='flex items-center'>
//                         <div className='bg-purple-100 p-3 rounded-lg'>
//                             <BsPersonFill className='text-purple-800' />
//                         </div>
//                         <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
//                     </div>
//                     <p className='text-gray-600 sm:text-left text-right'>{order.total}</p>
//                     <p className='hidden md:flex'>{order.date}</p>
//                     <div className='sm:flex hidden justify-between items-center'>
//                         <p>{order.method}</p>
//                         <BsThreeDotsVertical />
//                     </div>
//                 </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default customers;

import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';

const Customers = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white dark:bg-gray-800 overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>State</span>
            <span className='sm:text-left text-right'>#Cases</span>
            <span className='hidden md:grid'>Recovered</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li key={id} className='bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 dark:bg-purple-700 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800 dark:text-purple-200' />
                  </div>
                  <p className='pl-4 text-gray-800 dark:text-gray-200'>{order.name.first + ' ' + order.name.last}</p>
                </div>
                <p className='text-gray-600 dark:text-gray-400 sm:text-left text-right'>{order.total}</p>
                <p className='hidden md:flex text-gray-600 dark:text-gray-400'>{order.recoveries}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p className='text-gray-600 dark:text-gray-400'>{order.method}</p>
                  <BsThreeDotsVertical className='text-gray-600 dark:text-gray-400' />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customers;
