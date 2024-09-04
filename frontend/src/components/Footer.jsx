

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-4">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img src="your-logo-url" alt="Krishi Unnati Logo" className="h-10 mb-3" />
          <p className="text-gray-800">
            Krishi Unnati is India’s leading Food & Agribusiness Counseling Organization committed to helping Farmers, People, Business visionaries.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h5 className="font-bold text-lg mb-2">FIND US</h5>
          <p>Krishi Unnati Bhare Tal. Mulshi Dist Pune</p>
          <p className="mt-2">📞 +91-9209873533</p>
          <p className="mt-2">✉️ info@krishiunnati.org</p>
        </div>
        <div className="w-full md:w-1/3">
          <h5 className="font-bold text-lg mb-2">NEWSLETTER</h5>
          <p>Subscribe to our newsletter and get the latest scoop right to your inbox!</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="p-2 bg-orange-500 text-white rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-sm">Your email is safe with us, we don’t spam.</p>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <p>© 2020 Krishi Unnati. All Rights Reserved.</p>
          <p>
            Made With <span className="text-red-500">❤️</span> by Yug Technology & Udaipur Web Designer
          </p>
        </div>
      </div>
    </footer>
  );
};

