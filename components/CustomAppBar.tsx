import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

export default function CustomAppBar({ navigation, back }: StackHeaderProps) {
  return (
    <Appbar.Header>
        {/* näytetään takaisin painike, jos se on käytettävissä */}
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="MD Nav Demo" />
      {/* näytetään eteenpäin painike, jos ei ole takaisin painiketta */}
      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('Second')}
        />
      ) : null}
    </Appbar.Header>
  );
}