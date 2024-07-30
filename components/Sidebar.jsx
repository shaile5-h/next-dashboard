// import React from 'react'
// import Link from 'next/link'
// // import Image from 'next/image'
// import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
// import {HiOutlineShoppingBag} from 'react-icons/hi'
// import {FiSettings} from 'react-icons/fi'
// // import { Dashboard } from '@mui/icons-material'

// const Sidebar = ({children}) => {
//   return (
//     <div className='flex pt-4'>
//         <div className='fixed w-20 h-screen p4 bg-white border-r-[1px] flex flex-col justify-between
//         '>
//             <div className='flex flex-col items-center'>
//                 <Link href='/'>
//                 <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
//                     <RxSketchLogo size={20}/>

//                 </div>
                
//                 </Link>
//                 <span className='border-b-{1px} border-grey-200 w-full p-2'>
                
//                 <Link href='/'>
//                 <div className='bg-grey-100 hover:bg-grey-200 curcer-pointer my-4 p-3 rounded-lg inline-block'>
//                     <RxDashboard size={20}/>

//                 </div>
//                 </Link>
//                 <Link href='/customers'>
//                 <div className='bg-grey-100 hover:bg-grey-200 curcer-pointer my-4 p-3 rounded-lg inline-block'>
//                     <RxPerson size={20}/>

//                 </div>
//                 </Link>
//                 <Link href='/orders'>
//                 <div className='bg-grey-100 hover:bg-grey-200 curcer-pointer my-4 p-3 rounded-lg inline-block'>
//                     <HiOutlineShoppingBag size={20}/>

//                 </div>
//                 </Link>
                
//                 <Link href='/'>
//                 <div className='bg-grey-100 hover:bg-grey-200 curcer-pointer my-4 p-3 rounded-lg inline-block'>
//                     <FiSettings size={20}/>

//                 </div>
//                 </Link>
                
//                 </span>
//             </div>
//         </div>
//         <main className='ml-20 w-full'>
//             {children}
//         </main>
      
//     </div>
//   )
// }

// export default Sidebar

import React from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  return (
    <div className='flex pt-4'>
      <div className='fixed w-20 h-screen p-4 bg-white dark:bg-gray-900 border-r-[1px] border-gray-200 dark:border-gray-700 flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <div className='border-b-[1px] border-gray-200 dark:border-gray-700 w-full p-2'>
            <Link href='/'>
              <div className='bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                <RxDashboard size={20} />
              </div>
            </Link>
            <Link href='/customers'>
              <div className='bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                <RxPerson size={20} />
              </div>
            </Link>
            <Link href='/orders'>
              <div className='bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                <HiOutlineShoppingBag size={20} />
              </div>
            </Link>
            <Link href='/'>
              <div className='bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                <FiSettings size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <main className='ml-20 w-full'>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
