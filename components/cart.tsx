import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useCart, Product } from './information';
import { styles } from '../styles'; // Importing styles from the styles.ts file

interface CartScreenProps {
  navigation: any;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.cartContainer}>
      {cart.length === 0 ? (
        // Display message when cart is empty
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty 😞</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartProduct}>
                <Image source={item.image} style={styles.cartProductImage} />
                <View style={styles.cartProductDetails}>
                  <Text style={styles.cartProductText}>{item.name}</Text>
                  <Text style={styles.cartProductPrice}>₱{item.price}</Text>
                  <View style={styles.cartControls}>
                    {/* Swapped positions of "+" and "-" */}
                    <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')} style={styles.cartAddButton}>
                      <Text style={styles.cartAddButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.cartQuantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')} style={styles.cartAddButton}>
                      <Text style={styles.cartAddButtonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.cartRemoveButton}>
                      <Text style={styles.cartRemoveButtonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />

          {/* Display Total and Checkout Button only if cart is not empty */}
          <Text style={styles.total}>Total: ₱{calculateTotal()}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CartScreen;