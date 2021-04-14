import React from 'react';
import { Searchbar } from './common/SearchBar';
import { foodSort } from '../redux/actions/storesAction';
import { connect } from 'react-redux';

const SearchBar = ({ placeholder, onChangeText, value, foodSort}) => {
	return(
		<Searchbar
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            onSubmit={() => foodSort((1, limit, params, value))}
        />
	)
}

const mapStateToProps = state => {
    return {
        loading: state.stores.loading,
        rootLoading: state.stores.rootLoading,
        sorting: state.stores.sorting,
        sortParams: state.stores.sortParams,
        hasMoreToLoad: state.stores.hasMoreToLoad
    };
}

export default connect(
    mapStateToProps,
    { foodSort }
)(SearchBar);
