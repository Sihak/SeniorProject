import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screen/loginSignup';

const LoginSignUpRouting = createStackNavigator({
   
    Login:{
        screen: LoginScreen
    },

    SignUp:{
        screen:LoginScreen
    }


},{
    headerMode:'none',
    mode : 'card'
})

export default LoginSignUpRouting;