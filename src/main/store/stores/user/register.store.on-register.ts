import AuthManager from '../../../utils/authManager';
import { AppThunk } from '../../redux/appThunk';
import IUser from '../../../interfaces/IUser';
import { setUser } from './user.store';
import { navigateTo } from '../navigation/navigation.store';


const onRegister = (payload: IUser): AppThunk => async (dispatch) => {
    try {
        await AuthManager.register({ ...payload });

    } catch (err: any) {
        Error(err.message);
    }
};

export default onRegister;
