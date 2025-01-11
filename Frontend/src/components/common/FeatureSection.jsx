
const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="mt-4 text-lg">Reliable and healthy meals, delivered to your patients with care.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Healthy Meals</h3>
            <p className="mt-2 text-gray-600">Carefully prepared meals that are rich in nutrients.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Timely Delivery</h3>
            <p className="mt-2 text-gray-600">Meals delivered right to your patient’s room on time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Custom Meal Plans</h3>
            <p className="mt-2 text-gray-600">Meal plans designed according to the patient’s dietary needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
