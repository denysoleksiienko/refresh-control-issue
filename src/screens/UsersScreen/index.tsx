import {useQuery} from '@tanstack/react-query';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Text, RefreshControl} from 'react-native';
// import RefreshControl from '../../components/RefreshControl';

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const UsersScreen = () => {
  const {data, refetch, isRefetching} = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  console.log('isRefetching', isRefetching); // TRUE on mount screen

  const renderUsers = ({item}) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <SafeAreaView style={{flex: 1}} edges={['bottom']}>
      <FlatList
        contentContainerStyle={{gap: 12, paddingHorizontal: 16}}
        data={data}
        renderItem={renderUsers}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor={'pink'}
          />
        }
      />
    </SafeAreaView>
  );
};

export default UsersScreen;
