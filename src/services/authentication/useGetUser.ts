import { useQuery } from '@tanstack/react-query';
import client from '@utils/authApi';
import { CustomAxiosResponse, ErrorResponse, UserData } from '@/types/global';

const useGetUser = () => {
  const getUser = async (): Promise<CustomAxiosResponse<UserData>> => {
    return client.get(`/user/userinfo`);
  };

  const {
    data: userInfo,
    isInitialLoading: userDataIsLoading,
    refetch: getUserData,
  } = useQuery<CustomAxiosResponse<UserData>, ErrorResponse>({
    queryKey: ['user'],
    queryFn: getUser,
    enabled: false,
  });

  return { userInfo, userDataIsLoading, getUserData };
};

export default useGetUser;
