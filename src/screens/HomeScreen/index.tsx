import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return <Button title={'Go to users'} onPress={() => navigation.navigate('Users')} />;
};

export default HomeScreen;
