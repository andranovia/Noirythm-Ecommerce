import React, { useEffect, useState } from 'react';
import { getUser } from '@/components/utils/auth';

interface User {
  name: string;
  // Add other user properties here
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        console.log(accessToken)
        if (accessToken) {
          const userData: User = await getUser(accessToken);
          setUser(userData);
        } else {
  
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Welcome, {user ? user.name : 'Loading...'}</h1>
      {/* Additional profile information or components can be added here */}
    </div>
  );
};

export default Profile;
