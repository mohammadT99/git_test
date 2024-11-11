
import { useState } from 'react';
import Image from '../../../assets/images/Ivar_logo.png'  ;
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Forms';
import Cookie from 'js-cookie'
import './style.scss'
import Api from '../../../libs/axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [username , setUsername] = useState('')
    const [password , setPassword ] = useState('')
    const navigate = useNavigate()

    const HanndleLogin = async () => {
        try{
            const {data} = await Api.post('/auth/login' , {
                username:username ,
                password:password
            })
            if(data) {
                Cookie.set('user' , JSON.stringify(data) , {expires :365})
                navigate('/dashboard')
            }
        }catch(err) {
            console.log(err);
            
        }
    }
    
    
    
    return (
        <>  
                <div className="form_login">
                    <form action="" className="form_content">
                        <img src={Image} alt="" width={100} />
                        <h1>   وارد شوید</h1>  
                        <span >خوش آمدید ! لطفا وارد حساب کاربری خوش شوید</span>
                        <Input name={'username'} p={'نام کاربری خود را وارد کنید'} onChange={e => setUsername(e.target.value)}/>
                        <Input name={'password'} p={' رمز عبور خود را وارد کنید'} onChange={e => setPassword(e.target.value)}/>
                        <Button type={'button'} name={'وارد شوید'} onClick={HanndleLogin}/>
                       
                    </form>
                </div>
        </>
    )
}
export default Login ;