function Signup() {
     return (
          <div className="flex justify-center items-center h-[90vh]">
               <div className="card bg-primary text-primary-content w-96">
                    <div className="card-body">
                         <h2 className="card-title text-4xl mx-auto mb-3">Signup</h2>
                         <input
                              type="text"
                              placeholder="UserId"
                              className="input input-bordered text-white input-primary w-full max-w-xs " />
                         <input
                              type="email"
                              placeholder="Email"
                              className="input input-bordered text-white input-primary w-full max-w-xs " />
                         <input
                              type="password"
                              placeholder="Password"
                              className="input input-bordered text-white input-primary w-full max-w-xs" />
                         <details className="dropdown">
                              <summary className="btn m-1">User Type</summary>
                              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-white">
                                   <li><a>Customer</a></li>
                                   <li><a>Engineer</a></li>
                              </ul>
                         </details>
                         <div className="card-actions justify-end">
                              <button className="btn btn-warning w-full font-bold ">SUBMIT</button>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Signup;