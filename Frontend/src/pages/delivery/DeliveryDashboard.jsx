import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeliveries, updateDeliveryStatus } from '../../redux/delivery/deliverySlice';
import DeliveryTable from '../../components/delivery/DeliveryTable';

const DeliveryDashboard = () => {
  const dispatch = useDispatch();
  const { deliveries, status } = useSelector((state) => state.deliveries);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDeliveries());
    }
  }, [status, dispatch]);

  const handleMarkAsDelivered = (id) => {
    dispatch(updateDeliveryStatus({ id, status: 'Delivered' }));
  };

  return (
    <div>
      <h1>Delivery Personnel Dashboard</h1>
      {status === 'loading' && <p>Loading deliveries...</p>}
      {status === 'succeeded' && (
        <DeliveryTable deliveries={deliveries} onMarkAsDelivered={handleMarkAsDelivered} />
      )}
      {status === 'failed' && <p>Error loading deliveries</p>}
    </div>
  );
};

export default DeliveryDashboard;
