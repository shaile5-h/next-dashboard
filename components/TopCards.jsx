// import React from 'react'

// const TopCards = () => {
//   return (
//     <div className='grid lg:grid-cols-5 gap-4 p-4'>
//       <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
//         <div className="flex flex-col w-full pb-4">
//             <p className='text-2xlfont-bold'>7,846</p>
//             <p className='text-green-600'>Daily New Cases</p>
//         </div>
//         <p className='bg-green-200 flex justify-center intems-center p-2 rounded-lg'>
//             <span className='text-green-700 text-lg'>+18%</span>
//         </p>
//       </div>
//       <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>

//       <div className="flex flex-col w-full pb-4">
//             <p className='text-2xlfont-bold'>737,846</p>
//             <p className='text-green-600'>Total Cases</p>
//         </div>
//         <p className='bg-green-200 flex justify-center intems-center p-2 rounded-lg'>
//             <span className='text-green-700 text-lg'>+1%</span>
//         </p>
//       </div>
//       <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
//         <div className="flex flex-col w-full pb-4">
//             <p className='text-2xlfont-bold'>1,437</p>
//             <p className='text-green-600'>Deaths</p>
//         </div>
//         <p className='bg-green-200 flex justify-center intems-center p-2 rounded-lg'>
//             <span className='text-green-700 text-lg'>+17%</span>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default TopCards

import React from 'react';

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white dark:bg-gray-800 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold text-gray-800 dark:text-gray-200'>7,846</p>
          <p className='text-green-600'>Daily New Cases</p>
        </div>
        <p className='bg-green-200 dark:bg-green-700 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 dark:text-green-200 text-lg'>+18%</span>
        </p>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white dark:bg-gray-800 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold text-gray-800 dark:text-gray-200'>737,846</p>
          <p className='text-green-600'>Total Cases</p>
        </div>
        <p className='bg-green-200 dark:bg-green-700 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 dark:text-green-200 text-lg'>+1%</span>
        </p>
      </div>
      <div className='bg-white dark:bg-gray-800 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold text-gray-800 dark:text-gray-200'>1,437</p>
          <p className='text-green-600'>Deaths</p>
        </div>
        <p className='bg-green-200 dark:bg-green-700 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 dark:text-green-200 text-lg'>+17%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
