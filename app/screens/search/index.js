import React from 'react';
import {SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getService} from '../../api';
import Toast from 'react-native-simple-toast';
import SearchListComponent from '../../components/SearchListComponent';

export default function SearchScreen() {
  const [searchWord, setSearchWord] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);

  React.useEffect(() => {
    const timeout = setTimeout(async () => {
      if (searchWord) {
        let result = await getService({
          word: searchWord,
        });
        result.success
          ? setSearchResults(result.data)
          : Toast.show("Can't find any result, try different word");
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchWord]);

  return (
    <SafeAreaView>
      <SearchBar
        containerStyle={{height: 70}}
        placeholder="Search Here..."
        onChangeText={text => setSearchWord(text)}
        value={searchWord}
      />

      <SearchListComponent
        results={searchResults ? searchResults.definitions : []}
        searchPage={true}
      />
    </SafeAreaView>
  );
}
