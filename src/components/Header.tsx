import { Container } from '@/ui/components/container/container';
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { ScrollTagArt } from '@/ui/modules/scrollTagArticle/scrollTagArticle';

const Header = () => {
  return (
    <Container className='flex flex-col overflow-hidden md:hidden'>
      <Container className='flex flex-row'>
        <Input type='search'  placeholder='search'/>
        <Button className='' size={"icon"}><Search/></Button>
      </Container>
        <Container className='overflow-scroll scrollbar-hidden'>
        <ScrollTagArt />
       </Container>
    </Container>

  );
};

export default Header;
