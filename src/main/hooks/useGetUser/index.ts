import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux/rootState';
import PropertyManager from '../../utils/propertyManager';

const useGetUser = () => {
  const currentUser = useSelector((state: RootState) => state.user);
  if (currentUser && PropertyManager.isDefined(currentUser)) {
    return currentUser;
  }
  return null;
};

export default useGetUser;
