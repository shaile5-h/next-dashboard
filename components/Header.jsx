import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const Header = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <div className='sticky top-0 z-50 flex justify-between px-4 pt-6 pb-4 bg-white dark:bg-gray-900'>
      <h1>COVID-19 Dashboard</h1>
      <div>
        <button
          onClick={() => {
            setTheme(resolvedTheme == 'light' ? 'dark' : 'light');
          }}
          type='button'
          className='rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700'
        >
          {theme == 'light' ? <BsMoon /> : <BsSun />}
        </button>
      </div>
    </div>
  );
};

export default Header;
