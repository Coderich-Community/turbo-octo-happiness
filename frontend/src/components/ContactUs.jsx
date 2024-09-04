

export const ContactUs = () => {
  return (
    <section id="contact">
      <div className="flex flex-col md:flex-row items-start">
        {/* Left Section - Contact Details */}
        <div className="bg-green-700 text-white p-8 md:w-1/3 w-full">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8">
                <img
                  src="https://w7.pngwing.com/pngs/595/737/png-transparent-computer-icons-address-book-address-thumbnail.png"
                  alt="Address Icon"
                  className="mr-3"
                />
              </div>
              <h4 className="text-lg font-bold">ADDRESS</h4>
            </div>
            <p>Millenium Business Park, Mahape, Navi Mumbai</p>
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8">
                <img
                  src="https://png.pngtree.com/png-vector/20201028/ourmid/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg"
                  alt="Phone Icon"
                  className="mr-3"
                />
              </div>
              <h4 className="text-lg font-bold">OFFICE PHONE</h4>
            </div>
            <p>+91-738552XXXX</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8">
                <img
                  src="https://e7.pngegg.com/pngimages/298/243/png-clipart-email-address-computer-icons-mail-miscellaneous-angle.png"
                  alt="Email Icon"
                  className="mr-3"
                />
              </div>
              <h4 className="text-lg font-bold">EMAIL</h4>
            </div>
            <p>info@agrilink.org</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-white">
              <div className="w-8 h-8">
                <img src="https://i.pinimg.com/736x/0c/78/d0/0c78d03cbfa19d5f3d7ad1b6e49f957b.jpg" alt="LinkedIn" />
              </div>
            </a>
            <a href="#" className="text-white">
              <div className="w-8 h-8">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwD0GVoucdBDsZvP6GDwB700bReUXpsEKA7A&s" alt="Facebook" />
              </div>
            </a>
            <a href="#" className="text-white">
              <div className="w-8 h-8">
                <img src="https://png.pngtree.com/element_our/sm/20180630/sm_5b37de3263964.jpg" alt="Instagram" />
              </div>
            </a>
            <a href="#" className="text-white">
              <div className="w-8 h-8">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkbq-094WlodH_1w7xW6QoUqoafZcgLPKbA&s" alt="Twitter" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form and Map */}
        <div className="md:flex-1 w-full">
          <form className="bg-white shadow-md rounded p-6 mb-4">
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                placeholder="Phone No."
              />
            </div>
            <div className="mb-6">
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            >
              SEND MESSAGE
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};


