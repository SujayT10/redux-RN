
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Product from './components/Product';
import Header from './components/Header';

const products = [
  {
    name: 'iPhone',
    color: 'Purpal',
    price: 130000,
    image: 'https://cdn-icons-png.flaticon.com/512/0/191.png'
  },
  {
    name: 'Samsung',
    color: 'White',
    price: 120000,
    image: 'https://cdn-icons-png.flaticon.com/512/0/191.png'
  },
  {
    name: 'Redmi',
    color: 'Black',
    price: 15000,
    image: 'https://cdn-icons-png.flaticon.com/512/0/191.png'
  },
  {
    name: 'Oppo',
    color: 'Red',
    price: 230000,
    image: 'https://cdn-icons-png.flaticon.com/512/0/191.png'
  }
]

const App = () => {

  return (
    <View styles={styles.container}>
      <Header />

      <ScrollView>
        {
          products.map((item) => <Product item={item} />)
        }
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1
  }
})


export default App;
