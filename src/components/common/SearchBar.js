import React from 'react';
import { SearchBar } from 'react-native-elements';
import { Platform } from 'react-native';


const Searchbar = ({ placeholder, onChangeText, value, onSubmit, loading }) => {
  return(
    <SearchBar
        placeholder="Search for food ..."
        onChangeText={onChangeText}
        value={value}
        lightTheme
        round
        searchIcon={{size:25}}
        cancelIcon
        showCancel
        onSubmitEditing={onSubmit}
        showLoading={loading}
        platform={Platform.OS}
        loadingProps={{
            color: 'black'
        }}
    />
  )
}

export { Searchbar }