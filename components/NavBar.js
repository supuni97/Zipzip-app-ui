import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons'; 

const NavBar = () => {
  const navItems = [
    { id: 1, label: 'Home', icon: 'home' },
    { id: 2, label: 'Notification', icon: 'notifications' },
    { id: 3, label: 'Search', icon: 'search' },
    { id: 4, label: 'Cart', icon: 'shopping-cart' },
    { id: 5, label: 'My Account', icon: 'person' },
  ];

  return (
    <View style={styles.navBar}>
      {navItems.map((item) => (
        <TouchableOpacity key={item.id} style={styles.navItem}>
          {item.label === 'Notification' ? (
            <Ionicons name={item.icon} size={24} color="#BE202F" />
          ) : item.label === 'Search' ? (
            <FontAwesome name={item.icon} size={24} color="#BE202F" />
          ) : (
            <MaterialIcons name={item.icon} size={24} color="#BE202F" />
          )}
          <Text style={styles.navLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'FFF3F4',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 5,
    color:'#BE202F'
  },
});

export default NavBar;
