import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './redux/store.js'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='top-center'/>
  </Provider>,
)
