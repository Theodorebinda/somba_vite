'use client'
import Header from '@/components/Header';
import NewArrivages from '@/components/NewArrivage';
import { getAllProducts } from '@/pages/api/productApi';
import React from 'react';


const App: React.FC = () => {
  return (
    <div className='pt-20 '>
       <Header /> 
       {
       <NewArrivages />
       }
    </div>
  );
};

export default App;
