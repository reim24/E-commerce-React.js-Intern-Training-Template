import axios from 'axios';
import JwtManager from '../utils/jwtManager';
import eHttpResponse from '../assets/enums/eHttpResponse';
import eNotificationType from '../assets/enums/eNotificationType';
import { toast } from 'react-toastify';
import { navigateTo } from '../store/stores/navigation/navigation.store';

const handleResponseMessage = (message:string ,  notificationType: eNotificationType) =>{
  switch(notificationType){
    case eNotificationType.Success:
      toast.info(`${message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: 0,
      });
      break;
    case eNotificationType.Error:
      toast.error(message, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: 0,
      });
      break;
    default:
      Error('handleResponseMessage: Notification Type not handled')
  }
}

const axiosInit = async () => {

  axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
  axios.interceptors.request.use((request) => {
    const jwt = JwtManager.accessToken;
    if (jwt) {
      request.headers['Authorization'] = `Bearer ${jwt}`;
    }
    return request;
  });
  axios.interceptors.response.use(
    null,
    async (error) => {
      if (error.response) {
        if (error.response.status === eHttpResponse.Unauthorized) {
          JwtManager.clearToken();
          let urlRedirect = '/login';
          window.location.href = urlRedirect;
        }
        if (error.response.data?.message) {
          handleResponseMessage(error.response.data?.message,eNotificationType.Error)
        }
        if (error.response.status === eHttpResponse.NotFound) {
          Error('axiosInit: action not found')
        }
      }
    },
  );
};

export default axiosInit;

