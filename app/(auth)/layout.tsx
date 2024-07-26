import React from 'react'


interface AuthLayoutprops{
    children:React.ReactNode
}
const AuthLayout = ({children}:AuthLayoutprops) => {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 h-screen items-center justify-center'>
            <div>
                Logo
            </div>
            <div>
            {children}
            </div>

        </div>

      
    </div>
  )
}

export default AuthLayout