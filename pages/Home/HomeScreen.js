import React, { useState } from 'react';
import { View } from 'react-native';
import { CustomHeader, SearchSection, ResultSection } from '../../components';
import { makeGetRequest } from '../../utils/ApiRequest';

const API_URL = 'https://api.postalpincode.in/postoffice/';

const HomeScreen = (props) => {
    const [searchKey, setSearchKey] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [showProgressBar, setShowProgressBar] = useState(false);
    const [onError, setOnError] = useState(false);

    const initApi = () => {
        setShowProgressBar(true);
        setOnError(false);
        makeGetRequest(`${API_URL}${searchKey}`)
            .then((response) => {
                setShowProgressBar(false)
                setSearchResult(response[0])
            })
            .catch((error) => {
                console.log('dddwqwd')

                console.log(error);
                setSearchResult([]);
                setSearchKey('');
                setShowProgressBar(false)
                setOnError(true);
            })
    }

    const clearResult = () => {
        setSearchKey('');
        setSearchResult([]);
        setOnError(false);
    }

    return (
        <View>
            <CustomHeader />
            <SearchSection
                searchKey={searchKey}
                setSearchKey={setSearchKey}
                onPressResult={initApi}
                onPressClear={clearResult}
                onError={onError} />
            <ResultSection
                searchResult={searchResult}
                showProgressBar={showProgressBar} />
        </View>
    )

}

export default HomeScreen;