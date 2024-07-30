import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';

const Orders = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white dark:bg-gray-800 overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Cases</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Deaths</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li key={id} className='bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex'>
                  <div className='bg-purple-100 dark:bg-purple-700 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800 dark:text-purple-200' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 dark:text-gray-200 font-bold'>{order.total.toLocaleString()}</p>
                    <p className='text-gray-800 dark:text-gray-200 text-sm'>{order.name.first}</p>
                  </div>
                </div>
                <p className='text-gray-600 dark:text-gray-400 sm:text-left text-right'>
                  <span
                    className={
                      order.status == 'Increasing'
                        ? 'bg-red-300 dark:bg-red-800 p-2 rounded-lg'
                        : order.status == 'Decreasing'
                        ? 'bg-green-200 dark:bg-green-800 p-2 rounded-lg'
                        : 'bg-yellow-200 dark:bg-yellow-800 p-2 rounded-lg'
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className='hidden md:flex text-gray-600 dark:text-gray-400'>{order.deaths}</p>
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

export default Orders;
