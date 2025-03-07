import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { useCart, Product } from './information';
import { styles } from '../styles'; 

interface CheckoutScreenProps {
  navigation: any;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ navigation }) => {
  const { cart, clearCart } = useCart(); 

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    Alert.alert('Checkout Successful', 'Your order has been placed.', [
      {
        text: 'OK',
        onPress: () => {
          clearCart(); 
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }], 
          });
        },
      },
    ]);
  };

  return (
    <View style={styles.checkoutContainer}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Product }) => (
          <View style={styles.checkoutProduct}>
            <Image source={item.image} style={styles.checkoutProductImage} />
            <View style={styles.checkoutProductDetails}>
              <Text style={styles.checkoutProductText}>{item.name}</Text>
              <Text style={styles.checkoutProductPrice}>₱{item.price.toLocaleString()} x {item.quantity}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      <Text style={styles.checkoutTotal}>Total: ₱{calculateTotal().toLocaleString()}</Text>
      <TouchableOpacity onPress={handleCheckout} style={styles.checkoutCompleteButton}>
        <Text style={styles.checkoutCompleteButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutScreen;
