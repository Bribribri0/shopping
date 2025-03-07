import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Home Screen Styles
homeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', 
  },
  homeProduct: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF', 
    padding: 15,
    borderRadius: 12, 
    overflow: 'hidden', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 5, 
    alignItems: 'center', 
  },
  
  homeProductImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 10, 
  },
  homeProductText: {
    fontSize: 18,
    color: '#000000', 
    marginBottom: 10,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: '#000000', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  homeButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeCartButton: {
    padding: 10,
    backgroundColor: '#000000', 
    marginTop: 20,
    borderRadius: 5,
  },
  homeCartButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  homePriceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2, 
  },
  
  


  // Cart Screen Styles
cartContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  cartProduct: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  cartProductImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 15,
  },
  cartProductDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  cartProductText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  cartProductPrice: {
    fontSize: 14,
    color: '#000000',
    marginVertical: 5,
  },
  cartControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  cartAddButton: {
    backgroundColor: '#000000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  cartAddButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartRemoveButton: {
    marginLeft: 10,
  },
  cartRemoveButtonText: {
    color: '#FF0000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 10,
  },
  checkoutButton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  emptyCartText: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    top: -40
  },
  
  

  // Checkout Screen Styles
  checkoutContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  
  checkoutProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  
  checkoutProductImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  
  checkoutProductDetails: {
    flex: 1,
  },
  
  checkoutProductText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  
  checkoutTotal: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'right',
      marginVertical: 10,
  },
  
  checkoutCompleteButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    bottom: 15,
  },
  
  checkoutCompleteButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  
});
