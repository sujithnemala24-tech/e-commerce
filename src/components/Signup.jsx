import React from 'react'
import cookies from 'js-cookie'

function Signup() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [cpw, setCpw] = React.useState("")
  
    const handleChange = (event) => {
      const { name, value } = event.target
      if (name === "email") {
        setEmail(value)
      } else if (name === "password") {
        setPassword(value)
      }else if (name === "cpw") {
        setCpw(value)
      } 
    }
  
    function handleSubmit () {
      if(password !== cpw){
        alert("Password and Confirm Password should be same");
      }else{
        const userData = {
          email: email,
          password: password,
        }
        if(cookies.get("users")){
          const existingUsers = JSON.parse(cookies.get("users"))
          existingUsers.push(userData)
          cookies.set("users", JSON.stringify(existingUsers), { expires: 7 , path: "/" , secure: true, sameSite: "strict" })
        }else{
          cookies.set("users", JSON.stringify([userData]), { expires: 7, path: "/" , secure: true, sameSite: "strict" }) 
        }
        alert(`Signup successful: ${email}`);
      }
    }
  
    return (
      <div className="main-content common " >
        <table className='border border-gray-300 shadow-xl rounded-lg bg-white '>
          <tr>
            <td className="p-[2vw]" colSpan={2}>
              <h1 className="text-3xl font-semibold text-center text-gray-700 tracking-wide mb-4">
                SignUp
              </h1>
            </td>
          </tr>
  
          <tr>
            <td className="p-[2vw]">
              <label htmlFor="email">Email:</label>
            </td>
            <td className="p-[2vw] text-left">
             <input value={email} onChange={handleChange} className='border border-gray-500 rounded-md px-4 py-2 text-center focus:outline-none focus:border-yellow-600 focus:ring-1 shadow-lg' type="text"id="email" name="email" required></input>
            </td>
          </tr>
  
          <tr>
            <td className="p-[2vw]">
              <label htmlFor="password">Password</label>
            </td>
            <td className="p-[2vw] text-left">
              <input value={password} type="password" onChange={handleChange} className='border border-gray-500 rounded-md px-4 py-2 text-center focus:outline-none focus:border-yellow-600 focus:ring-1 shadow-lg' id="password" name="password" required></input>
            </td>
          </tr>

          <tr>
            <td className="p-[2vw]">
              <label htmlFor="confirmPassword">Confirm Password</label>
            </td>
            <td className="p-[2vw] text-left">
              <input value={cpw} type="password" onChange={handleChange} className='border border-gray-500 rounded-md px-4 py-2 text-center focus:outline-none focus:border-yellow-600 focus:ring-1 shadow-lg' id="cpw" name="cpw" required></input>
            </td>
          </tr>
  
          <tr>
            <td className="p-[2vw]" colSpan={2} style={{ textAlign: "center" }}>
              <button 
              onClick={handleSubmit} className='bg-indigo-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-xl transition duration-900' > SignUp </button>
            </td>
          </tr>
        </table>
      </div>
    )
}

export default Signup