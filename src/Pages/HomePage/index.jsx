import React from 'react';
import IndexNavBar from '../../Components/IndexHeader/IndexNavBar';
import IndexFooter from '../../Components/IndexFooter/IndexFooter.js';

import styled from './index.module.css';



export default function HomePage() {
  return (
    <main className={styled['main']}>
      <IndexNavBar className={styled["header"]}/>
      <IndexFooter className={styled["footer"]}/>
    </main>
  );
}
