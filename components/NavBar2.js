import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.newNavbarContainer}>
      <TouchableOpacity style={styles.navbarItem}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/shop.png' }}
          style={styles.navbarIcon}
        />
        <Text style={styles.navbarText}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbarItem}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/chat.png' }}
          style={styles.navbarIcon}
        />
        <Text style={styles.navbarText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Buy Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton, styles.addToCartButton]}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newNavbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor:'#FFF3F4'
  },
  navbarItem: {
    alignItems: 'center',
  },
  navbarIcon: {
    width: 24,
    height: 24,
    tintColor:"#BE202F"
  },
  navbarText: {
    fontSize: 12,
    marginTop: 5,
  },
  actionButton: {
    backgroundColor: '#FFF3F4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor:'#BE202F',
    borderWidth:2
  },
  addToCartButton: {
    backgroundColor: '#BE202F',
  },
  addToCartButtonText: {
     color: '#FFF3F4',
    fontSize: 14,
  },
  actionButtonText: {
    color: '#BE202F',
    fontSize: 14,
  },
});

export default Navbar;
