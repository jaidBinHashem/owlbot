import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {Image, Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import styles from './styles';

const renderItem = ({item, searchPage, dispatch, selectedType = null}) => {
  if (selectedType === null || item.type === selectedType) {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{uri: item.image_url}}
          PlaceholderContent={
            <Image
              style={styles.image}
              source={require('../../asset/plcaeholder.png')}
            />
          }
        />
        <View style={{flex: 1}}>
          <Text style={styles.items}>Defination: {item.definition}</Text>
          <Text style={styles.items}>Type: {item.type}</Text>
          <Text style={styles.items}>Example: {item.example}</Text>
          {searchPage && (
            <Icon
              name="heart"
              type="ionicon"
              color="#517fa4"
              containerStyle={{justifyContent: 'center'}}
              onPress={() => {
                dispatch.favs.saveFav(item);
                Toast.show('Added to favorite');
              }}
            />
          )}
        </View>
      </View>
    );
  }
};

export default function SearchListComponent({
  results,
  searchPage,
  selectedType,
}) {
  const dispatch = useDispatch();
  return (
    <FlatList
      data={results}
      renderItem={({item}) =>
        renderItem({item, searchPage, dispatch, selectedType})
      }
      keyExtractor={(_, index) => String(index + Date.now())}
    />
  );
}
