import React from 'react'
import {ScrollView, Text, Image, Button, StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import Colors from "../../constants/Colors";
import  * as cartActions from '../../store/actions/cartActions'
const ProductDetailScreen = props => {

    const dispatch = useDispatch()

    const productId = props.navigation.getParam('productId')

    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId)
    )
    console.log(useSelector(state => state))

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
                <View style={styles.actions}>
                    <Button
                        color={Colors.primary}
                        title='Add to Card' onPress={() => {
                            dispatch(cartActions.addToCart(selectedProduct))
                    }}/>
                </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'open-sans-bold'
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        marginHorizontal: 20,
        fontFamily: 'open-sans'
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    }
})

export default ProductDetailScreen