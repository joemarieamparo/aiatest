import React from 'react';
import { FlatList, View } from 'react-native'
import { Profile } from '../../screens/app/data/model/Profile'
import FollowersComponent from '../followers';
import TextComponent from '../text'
import styles from './styles'

type Props = {
    users: Profile[]
    onItemClick: (profile: Profile) => void
    header?: string
}
const FollowersListComponent = (props: Props) => {
  const {users, header, onItemClick} = props
  return (
    <View style={styles.container}>
      {header && <TextComponent text={header} style={styles.headerStyle}/>}
      <FlatList
        data={users}
        renderItem={({item}) => <FollowersComponent user={item} onItemClick={onItemClick} />}
      />
    </View>
  );
}

export default FollowersListComponent;