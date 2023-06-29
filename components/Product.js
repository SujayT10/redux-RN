
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

function Product(props) {

  const item = props.item

  return (

    <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10 }}>
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Image style={{ height: 200, width: 200 }} source={{ uri: item.image }} />
      <Button title='Add to cart' />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default Product;
