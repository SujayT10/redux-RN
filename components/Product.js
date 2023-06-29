
import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/action';

const Product = (props) => {

  const item = props.item
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.reducer)
  const [isAdded, setIsAdded] = useState(false)

  const handle_AddToCart = (props) => {
    // console.warn("Yupp", props)
    dispatch(addToCart(props))
  }

  const handle_RemoveToCart = (props) => {
    console.log("remove", props)
    // dispatch(addToCart(props))
  }

  useEffect(() => {
    if (cartItem && cartItem.length) {
      cartItem.forEach(element => {
        // console.log(element)
        if (element.name === item.name) {
          setIsAdded(true)
        }
      });
    }
  }, [cartItem])

  return (

    <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10 }}>
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Image style={{ height: 200, width: 200 }} source={{ uri: item.image }} />

      {
        isAdded ? <Button title='Remove to cart' onPress={() => handle_RemoveToCart(item)} />:
                  <Button title='Add to cart' onPress={() => handle_AddToCart(item)} />
      }

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default Product;
