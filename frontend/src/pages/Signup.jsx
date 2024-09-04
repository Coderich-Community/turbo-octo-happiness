
export const SignUp = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-green-600">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-8">Sign Up</h2>
          
          <form>
            <div className="mb-4">
              <label className="block text-green-600 mb-2" htmlFor="name">Name</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-green-600 mb-2" htmlFor="email">E-mail</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-green-600 mb-2" htmlFor="password">Password</label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h.01M19.938 11.1a9 9 0 11-15.874 0M12 9v2m0 4h.01M4.06 11.1a9 9 0 0115.88 0" />
                  </svg>
                </span>
              </div>
            </div>
  
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-500"
                />
                <span className="ml-2 text-green-600">I read and agree to the Terms & Conditions</span>
              </label>
            </div>
  
            <div className="mb-4">
              <button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >
                CREATE ACCOUNT
              </button>
            </div>
  
            <div className="text-center text-sm text-gray-600">
              Already have an account? <a href="#" className="text-green-600 font-medium hover:underline">Sign in</a>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
