import React,{Component} from 'react';
class Login extends Component{
    render(){
        return(
     <form>
     <input type="email" placeholder="email"/>
     <input type="password" placeholder="password"/>
     <input type="text" placeholder="role"/>
     <input type="button" placeholder="submit"/>
     </form>
     
        );
    }
}
export default Login;