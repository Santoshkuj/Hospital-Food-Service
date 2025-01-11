import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

// Fetch all patients
export const fetchPatients = createAsyncThunk('patients/fetchPatients', async () => {
  const response = await axiosInstance.get('/patients/getall');
  return response.data;
});

// Add a new patient
export const addPatient = createAsyncThunk('patients/addPatient', async (patientData) => {
  const response = await axios.post('/api/patients', patientData);
  return response.data;
});

const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    patients: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.patients = action.payload.patients;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.patients.push(action.payload);
      });
  },
});

export default patientsSlice.reducer;
