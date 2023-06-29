
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/action';

const Product = (props) => {

  const item = props.item
  const dispatch = useDispatch()

  const handle_AddToCart = (props) => {
    console.warn("Yupp", props)
    dispatch(addToCart(props))
  }

  return (

    <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10 }}>
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Image style={{ height: 200, width: 200 }} source={{ uri: item.image }} />
      <Button title='Add to cart' onPress={() => handle_AddToCart(item)} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default Product;
