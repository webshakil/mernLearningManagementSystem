import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainMenu from '../components/MainMenu';
import { Provider } from '../context';
import '../styles/globals.css';

  function MyApp({ Component, pageProps }) {
  return (

    <>
        <Provider>
            <ToastContainer theme="colored" position="top-center" />
              <MainMenu/>   
              <Component {...pageProps} />
        </Provider>
  
    </>
  )
}

export default MyApp




































