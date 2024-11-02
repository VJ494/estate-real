import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
    <form className='flex flex-col gap-4'>
      <input type='text' placeholder='Username' 
        className='border p-3 rounded-lg' id='username'
      />
      <input type='email' placeholder='Email' 
        className='border p-3 rounded-lg' id='username'
      />
      <input type='password' placeholder='Password' 
        className='border p-3 rounded-lg' id='pasword'
      />
      <button className='bg-cyan-900 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-85'>Sign up</button>
    </form>
    <div className='flex gap-2 mt-6'>
      <p>Do you have an account?</p>
      <Link to={'/sign-in'}>
        <span className='text-blue-900'>Sign in</span>
      </Link>
    </div>
    </div>
  )
}
