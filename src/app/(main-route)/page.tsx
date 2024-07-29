'use client'
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Container } from '@/ui/components/container/container';
import { Typography } from '@/ui/components/typography/typography';
import { ScrollTagArt } from '@/ui/modules/scrollTagArticle/scrollTagArticle';
import { Search } from 'lucide-react';
import React from 'react';


const App: React.FC = () => {
  return (
    <div className='pt-20 '>
       <Header /> 
    </div>
  );
};

export default App;
