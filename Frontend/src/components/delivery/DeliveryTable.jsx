
const DeliveryTable = ({ deliveries, onMarkAsDelivered }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Room</th>
          <th>Meal</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {deliveries.map((delivery) => (
          <tr key={delivery.id}>
            <td>{delivery.patientName}</td>
            <td>{delivery.roomNumber}</td>
            <td>{delivery.meal}</td>
            <td>{delivery.status}</td>
            <td>
              {delivery.status !== 'Delivered' && (
                <button onClick={() => onMarkAsDelivered(delivery.id)}>Mark as Delivered</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeliveryTable;
