
const Signin= () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-600">
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Sign in</h2>
        
        <form>
          <div className="mb-6">
            <div className="relative">
              <input
                className="w-full px-4 py-3 text-white placeholder-gray-200 bg-transparent border border-white rounded-lg focus:outline-none focus:border-green-300"
                type="text"
                placeholder="Username"
              />
           
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <input
                className="w-full px-4 py-3 text-white placeholder-gray-200 bg-transparent border border-white rounded-lg focus:outline-none focus:border-green-300"
                type="password"
                placeholder="Password"
              />
             
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center text-white">
              <input
                type="checkbox"
                className="form-checkbox text-green-500"
              />
              <span className="ml-2">Remember Me</span>
            </label>
            <a href="#" className="text-white text-sm hover:underline">Forgot Password?</a>
          </div>

          <div>
            <button
              className="w-full bg-white text-green-600 font-bold py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;