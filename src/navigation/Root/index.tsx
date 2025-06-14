import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import UsersScreen from '../../screens/UsersScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
