
const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold">Hospital Food Delivery</h1>
        <p className="mt-4 text-lg">Fresh, nutritious meals prepared daily and delivered to patients, ensuring their dietary needs are met</p>
        <button className="mt-6 bg-yellow-500 text-blue-800 px-6 py-3 rounded-full hover:bg-yellow-400">
          {"See Today's Menu"}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
