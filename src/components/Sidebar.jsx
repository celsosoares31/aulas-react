import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

import { itemsFirstMenu, itemsSecondMenu } from '../lib/menuItems';

const Sidebar = () => {
  const [isOpenFirstLink, setIsOpenFirstLink] = useState(true);
  const [isOpenSecondLink, setIsOpenSecondLink] = useState(false);

  const firstLinkClick = (e) => {
    e.preventDefault();
    console.log(isOpenFirstLink);
    setIsOpenFirstLink(!isOpenFirstLink);
  };

  const secondLinkClick = (e) => {
    e.preventDefault();
    console.log(isOpenSecondLink);
    setIsOpenSecondLink(!isOpenSecondLink);
  };

  return (
    <div className='w-96 flex justify-center mt-4'>
      <div className='border w-80 h-fit bg-white rounded-md shadow-md transform -rotate-3'>
        <div className='border w-80 bg-white rounded-md z-0 shadow-md transform rotate-6'>
          <div className='border w-80 bg-white rounded-md shadow-md z-40 p-6 transform -rotate-3'>
            <h1 className=''>MENU DO SISTEMA</h1>
            <nav className=''>
              <a
                href='/'
                onClick={firstLinkClick}
                className='flex items-center pt-2 hover:no-underline visited:bg-slate-300 hover:bg-slate-100'>
                <span className='mx-2 text-blue-700 text-xs '>{isOpenFirstLink ? <AiOutlineDown /> : <AiOutlineUp />} </span> Portal do estudante
              </a>
              <ul className={`${isOpenFirstLink || 'hidden'}`}>
                {itemsFirstMenu.map((item) => {
                  const { text, url } = item;

                  return (
                    <li
                      className=' my-2 ml-6'
                      key={text}>
                      <a
                        href={url}
                        className=''>
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <nav className=''>
              <a
                href='/'
                onClick={secondLinkClick}
                className='flex items-center pt-2 hover:no-underline  hover:bg-slate-100'>
                <span className='mx-2 text-blue-500 text-sm font-bold'>{isOpenSecondLink ? <AiOutlineDown /> : <AiOutlineUp />} </span>{' '}
                Personalizacoes
              </a>
              <ul className={`${isOpenSecondLink || 'hidden'}`}>
                {itemsSecondMenu.map((item) => {
                  const { text, url } = item;

                  return (
                    <li
                      className='my-1 ml-4'
                      key={text}>
                      <a
                        href={url}
                        className=''>
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
