import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStart from './pages/MainStart';
import UserContextProvider from './userContext';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<UserContextProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='main-Start'>
					<Stack.Screen
						name='main-start'
						component={MainStart}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</UserContextProvider>
	);
}
