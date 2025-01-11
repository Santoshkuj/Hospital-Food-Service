import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';

// Fetch all deliveries
export const fetchDeliveries = createAsyncThunk('deliveries/fetchDeliveries', async () => {
  const response = await axiosInstance.get('/api/deliveries');
  return response.data;
});

// Update delivery status
export const updateDeliveryStatus = createAsyncThunk(
  'deliveries/updateDeliveryStatus',
  async ({ id, status }) => {
    const response = await axios.put(`/api/deliveries/${id}`, { status });
    return response.data;
  }
);

const deliverySlice = createSlice({
  name: 'deliveries',
  initialState: {
    deliveries: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeliveries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDeliveries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.deliveries = action.payload;
      })
      .addCase(fetchDeliveries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateDeliveryStatus.fulfilled, (state, action) => {
        const index = state.deliveries.findIndex((d) => d.id === action.payload.id);
        if (index !== -1) {
          state.deliveries[index] = action.payload;
        }
      });
  },
});

export default deliverySlice.reducer;
