function Login() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title text-4xl mx-auto">Login</h2>
          <input
            type="text"
            placeholder="UserId"
            className="input input-bordered text-white input-primary w-full max-w-xs "
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered text-white input-primary w-full max-w-xs"
          />
          <div className="card-actions justify-end">
            <button className="btn btn-warning w-full font-bold ">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
