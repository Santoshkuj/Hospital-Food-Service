import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import patientsReducer from './patient/patientSlice';
import dietChartReducer from './dietChart/dietChartSlice';
import deliveryReducer from './delivery/deliverySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    patients: patientsReducer,
    dietChart: dietChartReducer,
    delivery: deliveryReducer,
  },
});

export default store;
