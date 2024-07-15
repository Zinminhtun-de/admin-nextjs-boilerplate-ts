import { useCallback, useEffect, useState } from 'react';

const useGetUserData = () => {
  const [userInfo, setUserInfo] = useState<any | null>(null);

  const fetchAgentCallBack = useCallback(async () => {
    setUserInfo(null);
  }, []);

  useEffect(() => {
    fetchAgentCallBack();
  }, [fetchAgentCallBack]);

  return { userInfo };
};

export default useGetUserData;
