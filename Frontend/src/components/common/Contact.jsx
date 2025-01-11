
const ContactSection = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">Got questions? We would love to hear from you!</p>
        <form className="mt-8 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-yellow-500"
          />
          <button type="button" className="mt-4 w-full bg-yellow-500 text-blue-800 px-6 py-3 rounded-full hover:bg-yellow-400">
            Get in Touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
