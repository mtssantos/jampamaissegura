import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import AuthRoutes from './auth.routes';
import { TabRoutes } from './app.tab.routes';
import NewReport from '../screens/NewReport';

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
    const { isAuthenticated } = useAuth();

    return(
        <NavigationContainer>
            <RootStack.Navigator>
                {isAuthenticated ? (
                    <>
                        <RootStack.Screen name="Main" component={TabRoutes} options={{ headerShown: false }} />
                        <RootStack.Screen name="NewReport" component={NewReport} options={{ headerShown: false }} />
                    </>
                ) : (
                        <RootStack.Screen name="Auth" component={AuthRoutes} options={{ headerShown: false }} />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;