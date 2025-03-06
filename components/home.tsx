import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import { useCart, Product } from './information';
import { styles } from '../styles'; 

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { addToCart } = useCart();

  const products: Product[] = [
    { 
      id: '1', 
      name: ' Kobe 1 Protro "Black Out" 2018', 
      price: 8500, 
      quantity: 0, 
      image: require('../assets/kobe1.png'),
      perspectives: [
        require('../assets/kobe1.png'), 
        require('../assets/kobe1_side.png'), 
        require('../assets/kobe1_back.png'),
        require('../assets/kobe1_back2.png'),
        require('../assets/kobe1_back3.png')
      ]
    },
    { 
      id: '2', 
      name: 'Kobe 4 Protro "Del Sol" 2019', 
      price: 10200, 
      quantity: 0, 
      image: require('../assets/kobe4.png'),
      perspectives: [
        require('../assets/kobe4.png'), 
        require('../assets/kobe4_back.png'), 
        require('../assets/kobe4_back2.png'),
        require('../assets/kobe4_back3.png'),
        require('../assets/kobe4_back4.png')
      ]
    },
    { 
      id: '3', 
      name: 'Kobe 5 Protro "Year of the Mamba - University Red"', 
      price: 10800, 
      quantity: 0, 
      image: require('../assets/kobe5.png'),
      perspectives: [
        require('../assets/kobe5.png'), 
        require('../assets/kobe5_back.png'), 
        require('../assets/kobe5_back2.png'),
        require('../assets/kobe5_back3.png'),
        require('../assets/kobe5_back4.png')
      ]
    },
    { 
      id: '4', 
      name: 'Kobe 6 Protro "Grinch"', 
      price: 11300, 
      quantity: 0, 
      image: require('../assets/kobe6.png'),
      perspectives: [
        require('../assets/kobe6.png'), 
        require('../assets/kobe6_back.png'), 
        require('../assets/kobe6_back2.png'),
        require('../assets/kobe6_back3.png'),
        require('../assets/kobe6_back4.png')
      ]
    },
    { 
      id: '5', 
      name: 'Kobe 7 System "Fireberry"', 
      price: 9000, 
      quantity: 0, 
      image: require('../assets/kobe7.png'),
      perspectives: [
        require('../assets/kobe7.png'), 
        require('../assets/kobe7_back.png'), 
        require('../assets/kobe7_back1.png'),
        require('../assets/kobe7_back2.png'),
        require('../assets/kobe7_back3.png')
      ]
    },
    { 
      id: '6', 
      name: 'Kobe 8 Protro "Venice Beach" 2024', 
      price: 9600, 
      quantity: 0, 
      image: require('../assets/kobe8.png'),
      perspectives: [
        require('../assets/kobe8.png'), 
        require('../assets/kobe8_back.png'), 
        require('../assets/kobe8_back2.png'),
        require('../assets/kobe8_back3.png'),
        require('../assets/kobe8_back4.png')
      ]
    },
    { 
      id: '7', 
      name: 'Kobe 9 Elite Low Protro "Halo"', 
      price: 12400, 
      quantity: 0, 
      image: require('../assets/kobe9.png'),
      perspectives: [
        require('../assets/kobe9.png'), 
        require('../assets/kobe9_back.png'), 
        require('../assets/kobe9_back2.png'),
        require('../assets/kobe9_back3.png'),
        require('../assets/kobe9_back4.png')
      ]
    },
    { 
      id: '8', 
      name: 'Kobe 10 Elite "Mamba Days" ID', 
      price: 11300, 
      quantity: 0, 
      image: require('../assets/kobe10.png'),
      perspectives: [
        require('../assets/kobe10.png'), 
        require('../assets/kobe10_back.png'), 
        require('../assets/kobe10_back2.png'),
        require('../assets/kobe10_back3.png'),
        require('../assets/kobe10_back4.png')

      ]
    },
    { 
      id: '9', 
      name: 'Kobe 11 Elite Low "All Star - Northern Lights"', 
      price: 10200, 
      quantity: 0, 
      image: require('../assets/kobe11.png'),
      perspectives: [
        require('../assets/kobe11.png'), 
        require('../assets/kobe11_back.png'), 
        require('../assets/kobe11_back2.png'),
        require('../assets/kobe11_back3.png'),
        require('../assets/kobe11_back4.png')
      ]
    },
    { 
      id: '10', 
      name: 'Kobe A.D. NXT "University Red"', 
      price: 14200, 
      quantity: 0, 
      image: require('../assets/kobeAD.png'),
      perspectives: [
        require('../assets/kobeAD.png'), 
        require('../assets/kobeAD_back.png'), 
        require('../assets/kobeAD_back2.png'),
        require('../assets/kobeAD_back3.png'),
        require('../assets/kobeAD_back4.png')
      ]
    },
  ];

  const [selectedShoe, setSelectedShoe] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (shoe: Product) => {
    setSelectedShoe(shoe);
    setCurrentIndex(0);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const nextImage = () => {
    if (selectedShoe && currentIndex < selectedShoe.perspectives.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedShoe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  return (
    <View style={styles.homeContainer}>
      <FlatList
  data={products}
  keyExtractor={(item) => item.id}
  showsVerticalScrollIndicator={false} 
  renderItem={({ item }) => (
    <View style={styles.homeProduct}>
      <TouchableOpacity onPress={() => openModal(item)}>
        <Image source={item.image} style={styles.homeProductImage} />
      </TouchableOpacity>

      {/* Name and Price (Both aligned to the left) */}
      <View style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 10 }}>
        <Text style={styles.homeProductText}>{item.name}</Text>
        <Text style={styles.homePriceText}>₱{item.price.toLocaleString()}</Text>
      </View>

      <TouchableOpacity onPress={() => addToCart(item)} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )}
/>


      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.homeCartButton}>
        <Text style={styles.homeCartButtonText}>Go to Cart</Text>
      </TouchableOpacity>

      {/* Modal for Enlarged Image & Carousel */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={modalStyles.modalContainer}>
          <TouchableOpacity style={modalStyles.closeButton} onPress={closeModal}>
            <Text style={modalStyles.closeText}>X</Text>
          </TouchableOpacity>
          {selectedShoe && (
            <View style={modalStyles.imageContainer}>
              <TouchableOpacity onPress={prevImage} style={modalStyles.navButton}>
                <Text style={modalStyles.navText}>{"<"}</Text>
              </TouchableOpacity>
              <Image source={selectedShoe.perspectives[currentIndex]} style={modalStyles.modalImage} />
              <TouchableOpacity onPress={nextImage} style={modalStyles.navButton}>
                <Text style={modalStyles.navText}>{">"}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
    imageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    modalImage: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
    closeButton: {
      position: 'absolute',
      top: 40,
      right: 20,
    },
    closeText: {
      color: 'white',
      fontSize: 24,
    },
    navButton: {
      padding: 20,
    },
    navText: {
      color: 'white',
      fontSize: 24,
    },
  });

export default HomeScreen;
