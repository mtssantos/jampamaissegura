import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SingIn from '../screens/SingIn';
import SingUp from '../screens/SingUp';


const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
            <Stack.Navigator>
                <Stack.Screen name="SingIn" component={SingIn} options={{ headerShown: false }} />
                <Stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false }} />
                <Stack.Screen name="AuthHome" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
    )
}