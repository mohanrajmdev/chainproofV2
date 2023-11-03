import React from 'react'
import { Navbar , Footer} from './'

const Signup = () => {
  return (
    <div className='min-h-screen gradient-bg-common'>
        <Navbar />

        <div>
            <h1 className="text-center text-3xl font-bold mt-20">Signup Page</h1>
        </div>

        <Footer />
    </div>
  )
}

export default Signup;