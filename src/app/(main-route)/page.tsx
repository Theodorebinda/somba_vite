'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Container } from '@/ui/components/container/container';
import { Icon, Search } from 'lucide-react';
import React from 'react';


const App: React.FC = () => {
  return (
    <Container className='text-center pt-16'>
      <Container className='flex'>
        <Input type='search'  placeholder='search'/>
        <Button className='-z-3' size={"icon"}><Search/></Button>
      </Container>

    </Container>
  );
};

export default App;
