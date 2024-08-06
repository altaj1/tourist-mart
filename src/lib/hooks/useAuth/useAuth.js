
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAxiosCommon from '../apiHooks/useAxiosCommon';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const axiosCommon = useAxiosCommon()
    useEffect(() => {
        axiosCommon.get('/api/auth/me')
          .then(response => {
            setUser(response.data);
            setLoading(false);
          })
          .catch(() => {
            setUser(null);
            setLoading(false);
          });
      }, []);
    
      return { user, loading };
};

export default useAuth;