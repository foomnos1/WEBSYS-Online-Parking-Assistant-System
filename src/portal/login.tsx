import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const Navigate = useNavigate()

    const [name, setName] = useState('')

    const handleClick = () => {
        Navigate(`/dashboard/${name}`)
    }

    return (
        <>
            <div className='loginBody'>
                <div className="loginContainer">
                    <h1>ParkEasy</h1>
                    <h4>Parking Assistant System</h4>
                    <p>Sign in to manage parking slots</p>

                    <div className='inputGroup'>
                        <label>Username:</label>
                        <input
                            type="text"
                            placeholder='Enter your username'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button onClick={() => {handleClick()}}>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login
