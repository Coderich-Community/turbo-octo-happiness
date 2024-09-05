import logo2 from "./../assets/logo-transparent-png.png"


export const Signin = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-800">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&auto=format&fit=crop&w=1470&q=80)' }}>
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">AgriLink</h2>

              <p className="max-w-xl text-lg mt-3 text-white font-bold">
              AgriLink is an online marketplace that connects farmers with buyers, providing secure contracts for agricultural produce. It reduces market risks, stabilizes incomes, and fosters transparency and trust between farmers and buyers.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img className="w-44 h-30" src={logo2} alt="bg" />
              </div>

              <p className="mt-3 text-2xl text-gray-300 ">Sign in to access your account</p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label for="email" className="block mb-2 text-white text-lg">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="Enter your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label for="password" className="text-lg text-white">Password</label>
                    <a href="#" className="text-sm text-white focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                  </div>

                  <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400  focus:outline-none focus:ring focus:ring-opacity-50">
                    Sign in
                  </button>
                </div>

              </form>

              <p className="mt-6 text-lg text-center text-white">Don&#x27;t have an account yet? <a href="/signup" className="text-gray-700 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

