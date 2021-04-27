import React from 'react';
import { Searchbar } from './common/SearchBar';
import { foodSort } from '../redux/actions/storesAction';
import { connect } from 'react-redux';
import { Text } from 'react-native';

const SearchBar = ({ placeholder, onChangeText, value, foodSort, sortParams, error, errMessage, searchingForFood}) => {

	return(
        <>
            { error &&
                <Text style={{
                    color: 'red', fontSize: 18, textAlign: 'center', fontWeight: 'bold', padding: 10
                }} >
                    {errMessage}
                </Text>
            }
    		<Searchbar
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                onSubmit={() => foodSort(false, 1, sortParams, value)}
                loading={searchingForFood}
            />
        </>
	)
}

const mapStateToProps = state => {

    const { error, errMessage } = state.errors;

    return {
        loading: state.stores.loading,
        rootLoading: state.stores.rootLoading,
        sorting: state.stores.sorting,
        sortParams: state.stores.sortParams,
        hasMoreToLoad: state.stores.hasMoreToLoad,
        error, errMessage,
        searchingForFood: state.stores.searchingForFood
    };
}

export default connect(
    mapStateToProps,
    { foodSort }
)(SearchBar);
