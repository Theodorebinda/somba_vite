'use client'
import React from 'react';
import ProductsPage from '../pages/productPage';
import { LoginForm } from '@/components/loginForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Management</h1>
      </header>
      <main>
        <ProductsPage />
        <LoginForm />
      </main>
    </div>
  );
};

export default App;
