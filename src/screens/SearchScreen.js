import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {

      // Use baseURL you set up in yelp.js
      const response = await yelp.get(`/search`, {
        // 'params' as a second argument in the call will auto concatenate necessary params to the url
        params: {
          limit: 50,
          term,
          location: 'kansas city'
        }
      });

      setResults(response.data.businesses);
    } catch (err) {
      console.log('ERROR:', err);
      setErrorMessage('Sorry!  Something went wrong.')
    }
  };

  return <View>
    <SearchBar
      term={term}
      onTermChange={(newTerm) => setTerm(newTerm)}
      onTermSubmit={() => searchApi()}
    />

    {errorMessage ? <Text>{errorMessage}</Text> : null}

    <Text>We have found {results.length} results</Text>
  </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;