import React,{useState} from 'react'
import { Navbar , Footer} from './'

const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  return (
    <div className='min-h-screen gradient-bg-common'>
        <Navbar />

        <div >
            <h1 className="text-center text-white text-3xl font-bold mt-20">Login Page</h1>

            <div className='flex items-center w-[60%] justify-center m-5 p-5 flex-col'>

                <div className='flex flex-col p-2'>
                      <label className="text-sm font-bold text-white tracking-wide m-1">Name</label>
                      <input className="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[90%] m-1" type="text" placeholder="Enter the your Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className='flex flex-col p-2'>
                      <label className="text-sm font-bold text-white tracking-wide m-1">Course Name</label>
                      <input className="text-base text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 w-[90%] m-1" type="text" placeholder="Enter the your Course Name" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='text-white'>
                  <label className='text-sm font-bold text-white tracking-wide m=1'>Select One</label>
                  <label ><input type="radio" name="Admin" id="admin" />Admin</label>
                  <label><input type="radio" name="Student" id="student" /> Student </label>
                </div> 

            </div>
          
        </div>

        <Footer />
    </div>
  )
}

export default Login;

// https://github.com/vmmuthu31
// cryptojoblist
// Eth india Grants 2.0
// rainbow KIT wallet
