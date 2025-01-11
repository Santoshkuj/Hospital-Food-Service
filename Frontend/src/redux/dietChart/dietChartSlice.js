import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

// Fetch diet charts
export const fetchDietCharts = createAsyncThunk('dietCharts/fetchDietCharts', async () => {
  const response = await axiosInstance.get('/diet-charts');
  return response.data;
});

// Add a new diet chart
export const addDietChart = createAsyncThunk('dietCharts/addDietChart', async (dietChart) => {
  const response = await axios.post('/api/diet-charts', dietChart);
  return response.data;
});

const dietChartSlice = createSlice({
  name: 'dietCharts',
  initialState: {
    dietCharts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDietCharts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDietCharts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dietCharts = action.payload;
      })
      .addCase(fetchDietCharts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addDietChart.fulfilled, (state, action) => {
        state.dietCharts.push(action.payload);
      });
  },
});

export default dietChartSlice.reducer;
