import { FC } from "react";
import { Navigate } from "react-router-dom";
import useGetUser from '../main/hooks/useGetUser'
const PrivateRoute: FC<any> = (props: any) => {
  const { children, isPageLogin } = props;
  const userisAuthenticated = useGetUser();
  if(isPageLogin){
    return userisAuthenticated ?<Navigate to="/" /> : children
  }
  return userisAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
