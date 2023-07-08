import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaQuestion } from 'react-icons/fa';
import { SiGooglemessages } from 'react-icons/si';
import { IoMdNotifications } from 'react-icons/io';
import { IoDocumentText } from 'react-icons/io5';

import Button from './Button';
import { el } from '../lib/navElements';
let i = 0;

const Header = () => {
  const icons = Array(<AiFillHome />, <FaQuestion />, <SiGooglemessages />, <IoMdNotifications />, <IoDocumentText />);
  console.log(icons);

  return (
    <div className='flex w-screen h-20 justify-between bg-blue-800 text-white items-center'>
      <h1 className='px-6 text-xl font-bold'>
        SIGEUP <span className='text-xs'>V4.7</span>
      </h1>
      <nav className='flex-1 inline-flex pl-5'>
        <ul className=' flex-1 flex flex-row'>
          {el.map((elms) => {
            const { id, text, link } = elms;
            let actualIcon = i;
            i++;

            return (
              <li
                className=''
                key={id}>
                <Button
                  text={text}
                  icon={icons[actualIcon]}
                  link={link}
                  isReversed={true}
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='flex px-8 items-end'>
        <div className='mx-5'>
          <h4>Nome do Usuario:</h4>
          <h1 className='text-green-300 font-bold'>CELSO ISABEL SOARES</h1>
        </div>

        <Button
          text='Sair'
          icon=''
          link=''
          isReversed={false}
          isLogoutBtn={true}
        />
      </div>
    </div>
  );
};

export default Header;
