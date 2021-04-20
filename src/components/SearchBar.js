import React from 'react';
import { Searchbar } from './common/SearchBar';
import { foodSort } from '../redux/actions/storesAction';
import { connect } from 'react-redux';
import { Text } from 'react-native';

const SearchBar = ({ placeholder, onChangeText, value, foodSort, sortParams, error}) => {

	return(
        <>
            { error &&
                <Text style={{
                    color: 'red', fontSize: 18, textAlign: 'center', fontWeight: 'bold', padding: 10
                }} >
                    You have to select a state first
                </Text>
            }
    		<Searchbar
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                onSubmit={() => foodSort(1, sortParams, value)}
            />
        </>
	)
}

const mapStateToProps = state => {

    console.log(state.stores.sortParams);

    return {
        loading: state.stores.loading,
        rootLoading: state.stores.rootLoading,
        sorting: state.stores.sorting,
        sortParams: state.stores.sortParams,
        hasMoreToLoad: state.stores.hasMoreToLoad,
        error: state.errors.error
    };
}

export default connect(
    mapStateToProps,
    { foodSort }
)(SearchBar);
