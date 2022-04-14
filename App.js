import React, {useState} from 'react'
import {Text, View} from "react-native";
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

import productsReducer from './store/reducers/products'
import cartReducer from './store/reducers/cart'
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ShopNavigator from "./navigation/shopNavigator";


const rootReducer = combineReducers({
    products: productsReducer,
    cart:cartReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false)

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true)
                }}
                onError={console.warn}
            />
        )
    }

    return (
        <Provider store={store}>
            <ShopNavigator/>
        </Provider>
    )
}