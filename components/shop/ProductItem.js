import React from 'react'
import {Button, Image, Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import Colors from "../../constants/Colors";


const ProductItem = props => {
    let TouchableComp = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableComp onPress={props.onViewDetail} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: props.image}}/>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button color={Colors.primary} title='View Details' onPress={props.onViewDetail}/>
                            <Button color={Colors.primary} title='To Cart' onPress={props.onAddToCart}/>
                        </View>
                    </View>
                </TouchableComp>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        textShadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: 'hidden'
    },
    touchable: {
        borderRadius: 10
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    image: {
        width: '100%',
        height: '100%',
    },
    details: {
        alignItems: "center",
        height: '16%',
        padding: 10
    },
    title: {
        fontFamily:'open-sans-bold',
        fontSize: 18,
        marginVertical: 2
    },
    price: {
        fontFamily:'open-sans',
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    }
})

export default ProductItem