'use client'
import React, { useEffect, useState } from 'react';
import { getAllUsers } from './api/UsersApi';

const ProductsPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  
  console.log({users});
  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllUsers();
      setUsers(response.data);
    };

    fetchProducts();
  }, []);

  if (!Array.isArray(users)) {
    return <div>{"Erreur: Il y'a aucun utilisateur"}</div>;
}
  return (
    <div>
      <h1>Utilisateur</h1>
        {users.map(user => (
            <div key={user.id}>
                    <p >{user.firstName}</p>
                    <span>{user.lastName}</span>
                    <span>{user.password}</span>
                    <span>{user.createdAt}</span>
            </div>
        ))}
    </div>
  );
};

export default ProductsPage;
