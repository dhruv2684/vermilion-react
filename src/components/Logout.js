import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Logout = () => {

    const history = useHistory()

    const Logout = () => {
        // console.log("Demo");
        localStorage.removeItem('usertoken')
        // history.push('/')
    }

    useEffect(() => {
        Logout()
      }, [])


  return (
    <div className=''>
        <div className="p-5">
            <h1>Hey You ..!</h1>
            <p>You Have Been Inactive. Press Continue To Continue Browsing.</p>
            <p>Thanking You. 🙂 </p>
            <a href="/" className='submit text-decoration-none'>Continue</a>
        </div>
    </div>
  )
}

export default Logout