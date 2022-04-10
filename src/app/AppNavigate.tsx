
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { invalidateNavigate } from '../main/store/stores/navigation/navigation.store';
import {RootState} from '../main/store/redux/rootState'
const AppNavigate = () => {
  const redirectPath = useSelector((state: RootState) => state.navigation);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (redirectPath !== null ) {
      dispatch(invalidateNavigate());
      navigate(redirectPath, {replace:true});
    }
  }, [navigate, redirectPath]);
  return <></>
};

export default AppNavigate;
