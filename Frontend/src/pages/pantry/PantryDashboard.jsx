import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDietCharts } from '../../redux/dietChart/dietChartSlice';
import DietChartTable from '../../components/pantry/DietChartTable';

const PantryDashboard = () => {
  const dispatch = useDispatch();
  const { dietCharts, status } = useSelector((state) => state.dietCharts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDietCharts());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Inner Pantry Dashboard</h1>
      {status === 'loading' && <p>Loading diet charts...</p>}
      {status === 'succeeded' && <DietChartTable dietCharts={dietCharts} />}
      {status === 'failed' && <p>Error loading diet charts</p>}
    </div>
  );
};

export default PantryDashboard;
