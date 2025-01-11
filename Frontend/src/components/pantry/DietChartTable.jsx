
const DietChartTable = ({ dietCharts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Meal</th>
          <th>Ingredients</th>
          <th>Instructions</th>
        </tr>
      </thead>
      <tbody>
        {dietCharts.map((chart) => (
          <tr key={chart.id}>
            <td>{chart.patientName}</td>
            <td>{chart.meal}</td>
            <td>{chart.ingredients.join(', ')}</td>
            <td>{chart.instructions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DietChartTable;
