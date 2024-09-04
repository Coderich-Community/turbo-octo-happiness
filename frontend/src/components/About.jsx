

export const About = () => {
  return (
    <section className="bg-white p-8" id="aboutus">
      <div className="text-center">
        <h2 className="text-orange-500 font-bold">GROW NATURALLY</h2>
        <h1 className="text-4xl font-bold text-green-900 mt-4">
          Welcome to AgriLink
        </h1>
        <p className="text-gray-700 mt-4 font-semibold text-lg">
          Agrilink is India&apos;s leading Food & Agribusiness Counseling
          Organization committed to helping Farmers, People, Business
          visionaries, New companies, SMEs, and Corporate Associations,
          strategically to transform (setup) their dream Agri-Food ventures into
          the real world. Our Goal is to help the business visionary in their
          Agri-food (start up) with ability and innovation accessible, which
          will support and push them to build up, extend and redo changing and
          challenging business condition, and be a key counseling accomplice
          all through the business life cycle, offering support at each stage to
          guarantee.
        </p>
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-bold rounded-md">
          LEARN MORE
        </button>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <img
            src="https://krishiunnati.org/wp-content/uploads/2020/06/icons8-natural-food-64-1.png"
            alt="Natural Products"
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-green-900 mt-4">Natural Products</h3>
          <p className="text-gray-700 mt-2">
            A natural product is a chemical compound or substance produced.
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://krishiunnati.org/wp-content/uploads/2020/06/icons8-cow-64.png"
            alt="Cattle"
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-green-900 mt-4">Cattle</h3>
          <p className="text-gray-700 mt-2">
            Cattle are the most common type of large domesticated ungulates.
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://krishiunnati.org/wp-content/uploads/2020/06/icons8-wheat-64.png"
            alt="Wheat Cultivation"
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-green-900 mt-4">Wheat Cultivation</h3>
          <p className="text-gray-700 mt-2">
            A well-pulverized but compact seed for good and uniform germination.
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://krishiunnati.org/wp-content/uploads/2020/06/icons8-semi-truck-64.png"
            alt="Modern Truck"
            className="mx-auto"
          />
          <h3 className="text-xl font-bold text-green-900 mt-4">Modern Truck</h3>
          <p className="text-gray-700 mt-2">
            Truck farming, growing one or more vegetable crops on a large scale.
          </p>
        </div>
      </div>
    </section>
  );
};

