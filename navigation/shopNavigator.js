import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform, Text} from "react-native";
import Colors from "../constants/Colors";
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from "@expo/vector-icons";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createDrawerNavigator} from 'react-navigation-drawer'
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";


const ProductsNavigator = createStackNavigator({
        ProductsOverview: ProductsOverviewScreen,
        ProductDetail: ProductDetailScreen
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTitleStyle:{
                fontFamily:'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily:'open-sans'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }
    }
)

export default createAppContainer(ProductsNavigator)

//
// const defaultStackNavOptions = {
//     headerStyle: {
//         backgroundColor: Platform.OS === 'android' ?
//             Colors.primaryColor : ''
//     },
//     headerTitleStyle: {
//         fontFamily: 'open-sans-bold'
//     },
//     headerBackTitleStyle: {
//         fontFamily: 'open-sans',
//     },
//     headerTintColor: Platform.OS === 'android' ?
//         'white' : Colors.primaryColor
// }
//
// const ShopNavigator = createStackNavigator({
//         Categories: {
//             'screen': CategoriesScreen,
//         },
//         CategoryMeals: {
//             'screen': CategoryMealsScreen,
//         },
//         MealDetail: MealDetailScreen,
//     }, {
//         // initialRouteName: 'Categories',
//         defaultNavigationOptions: defaultStackNavOptions
//     }
// )
//
//
// const FavNavigator = createStackNavigator({
//     Favorites: FavoritesScreen,
//     MealDetail: MealDetailScreen
//
// }, {
//     // initialRouteName: 'Categories',
//     defaultNavigationOptions: defaultStackNavOptions
// })
//
// const tabScreenConfig = {
//     Meals: {
//         screen: ShopNavigator,
//         navigationOptions: {
//             'tabBarIcon': (tabInfo) => {
//                 return (
//                     <Ionicons
//                         name='ios-restaurant'
//                         size={25}
//                         color={tabInfo.tintColor}
//                     />
//                 )
//             },
//             tabBarColor: Colors.primaryColor,
//             tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans'}}>Meals</Text> : 'Meals'
//
//         }
//     },
//     Favorites: {
//         screen: FavNavigator,
//         navigationOptions: {
//             // tabBarLabel:'Favorites!!!!!!!!!!',
//             tabBarIcon: tabInfo => {
//
//                 return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
//             },
//             tabBarColor: Colors.acceptColor,
//             tabBarLabel: Platform.OS === 'android' ?
//                 <Text style={{fontFamily: 'open-sans'}}>Favorites</Text> : 'Favorites'
//         }
//     }
// }
//
// const MealsFavTabNavigator = Platform.OS === 'android'
//     ? createMaterialBottomTabNavigator(tabScreenConfig, {
//         activeTintColor: 'white',
//         shifting: true,
//         barStyle: {
//             backgroundColor: Colors.primaryColor
//         }
//     })
//     : createBottomTabNavigator(tabScreenConfig, {
//         tabBarOptions: {
//             labelStyle: {
//                 fontFamily: 'open-sans'
//             },
//             activeTintColor: Colors.acceptColor
//         }
//     });
//
// const FiltersNavigator = createStackNavigator({
//     Filters: FiltersScreen
// }, {
//     // navigationOptions:{
//     //   drawerLabel:'Filters!!!!!!!'
//     // },
//     defaultNavigationOptions: defaultStackNavOptions
// })
//
//
// const MainNavigator = createDrawerNavigator({
//     MealsFavs: {
//         screen: MealsFavTabNavigator,
//         navigationOptions: {
//             drawerLabel: 'Meals'
//         }
//     },
//     Filters: FiltersNavigator
// }, {
//     contentOptions: {
//         activeTintColor: Colors.acceptColor,
//         labelStyle: {
//             fontFamily: 'open-sans-bold'
//         },
//         itemsContainerStyle : {
//             marginVertical:25
//         }
//     }
// });
//
//
// export default createAppContainer(MainNavigator);