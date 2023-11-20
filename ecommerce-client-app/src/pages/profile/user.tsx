
import React, { useEffect, useState } from 'react';
import { getUser } from '@/components/utils/auth';


const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const userData = await getUser();
          setUser(userData);
        } catch (error) {
    
        }
      };
  
      fetchUser();
    }, []);


  return   <h1>Welcome, {user ? user.name : null}</h1>;
  
};

export default Profile;
