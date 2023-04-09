import './Formcomponents.css'
import { useState } from 'react'

const FormComponents =()=>{
    // State all
    const [username,setusername] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [EnterPassword,setEnterPassword] = useState('')

    // State Error
    const [errorusername,seterrorusername]= useState('')
    const [errorEmail,seterrorEmail]= useState('')
    const [errorPassword,seterrorPassword]= useState('')
    const [errorEnterPassword,seterrorEnterPassword]= useState('')

    const[usernameColor,setusernameColor]= useState('')
    const[EmailColor,setEmailColor]= useState('')
    const[PasswordColor,setPasswordColor]= useState('')
    const[EnterPasswordColor,setEnterPasswordColor]= useState('')


    const validateForm = (e)=>{
        e.preventDefault()
        if(username.length>8){
            seterrorusername('')
            setusernameColor('green')
        }else{
            seterrorusername('กรุณาป้อนชื่อผู้ใช้งานจำนวนมากกว่า 8 คัวอักษร')
            setusernameColor('red')
        }
        if(Email.includes("@")){
            seterrorEmail('')
            setEmailColor('green')
        }else{
            seterrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')   
        }if(Password.length>8){
            seterrorPassword('')
            setPasswordColor('green')
        }else{
            seterrorPassword('รหัสผ่านไม่ถูกต้อง ต้องมีจำนวน 8 อักษรขึ้นไป')
            setPasswordColor('red')
        }if(EnterPassword !="" && EnterPassword == Password){
            seterrorEnterPassword('')
            setEnterPasswordColor('green')
        }else{
            seterrorEnterPassword('รหัสผ่านไม่ตรงกัน')
            setEnterPasswordColor('red')
        }
    }

    return(
        <div className="container">
                <form className="form" onSubmit={validateForm}>
                    <h2>Register</h2>
                    <dir className="formcontrol">
                        <label> User</label>
                        <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}  style={{borderColor:usernameColor}}></input>
                        <small style={{color:usernameColor}}>{errorusername}</small>
                    </dir>
                    <dir className="formcontrol">
                        <label> Email</label>
                        <input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)}  style={{borderColor:EmailColor}}></input>
                        <small style={{color:EmailColor}}>{errorEmail}</small>
                    </dir>
                    <dir className="formcontrol">
                        <label> Password</label>
                        <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:PasswordColor}}></input>
                        <small style={{color:PasswordColor}}>{errorPassword}</small>
                    </dir>
                    <dir className="formcontrol">
                        <label> Enter Password</label>
                        <input type="password" value={EnterPassword} onChange={(e)=>setEnterPassword(e.target.value)} style={{borderColor:EnterPasswordColor}}></input>
                        <small style={{color:EnterPasswordColor}}>{errorEnterPassword}</small>
                    </dir>
                    <button type="submit">Submit</button>
                </form>
                <br></br>
        </div>
        
    )
}

export default FormComponents