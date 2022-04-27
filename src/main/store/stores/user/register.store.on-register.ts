import AuthManager from '../../../utils/authManager';
import { AppThunk } from '../../redux/appThunk';
import { navigateTo } from '../navigation/navigation.store';
import { setUser } from './user.store';
import ILoginRequest from '../../../interfaces/ILoginRequest';
import IUser from '../../../interfaces/IUser';

const onRegister = (payload: IUser): AppThunk => async (dispatch) => {
    try {
        const response = await AuthManager.register({ ...payload });
        dispatch(navigateTo('/'));


    } catch (err: any) {
        Error(err.message);
    }
};

export default onRegister;
