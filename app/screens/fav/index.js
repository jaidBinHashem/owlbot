import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import SearchListComponent from '../../components/SearchListComponent';

export default function FavScreen() {
  const favs = useSelector(state => state.favs.favs);

  const [types, setTypes] = React.useState([]);
  const [selectedType, setSelectedType] = React.useState(null);

  React.useEffect(() => {
    let types = [];

    favs.forEach(fav => {
      !types.includes(fav.type) && types.push(fav.type);
    });
    setTypes(types);
  }, [favs]);

  return (
    <SafeAreaView>
      <View style={{padding: 10, backgroundColor: '#517fa4'}}>
        <RNPickerSelect
          onValueChange={value => setSelectedType(value)}
          items={types.map(type => ({
            label: type,
            value: type,
          }))}
        />
      </View>
      <SearchListComponent
        results={favs}
        searchPage={false}
        selectedType={selectedType}
      />
    </SafeAreaView>
  );
}
