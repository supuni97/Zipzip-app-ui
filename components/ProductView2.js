import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import NavBar2 from './NavBar2';

const ProductView2 = () => {
  const [search, setSearch] = useState('');
  const updateSearch = (text) => {
    setSearch(text);
  };

  const product = {
    name: 'Heineken Bottle',
    ml: '330 ml',
    price: 'Rs. 500.00',
    rating: 4.5,
    reviews: 66,
    imageUrl: require('../assets/bottle.png'), 
  };

  const user = {
    name: 'Veronika',
    avatarUrl: require('../assets/avatar.jpeg'), 
    userRating: 5,
  };

  const renderSimilarItem = ({ item }) => (
    <View style={styles.similarItem}>
      <Image source={item.imageUrl} style={styles.similarItemImage} />
      <Text style={styles.similarItemText}>Heineken Bottle</Text>
      <Text style={styles.similarItemText}>330 ml</Text>
      <Text style={styles.similarItemText}>Rs. 500.00</Text>
    </View>
  );

  const similarItemsData = Array(10).fill({
    imageUrl: require('../assets/bottle2.png'), 
  });

  const reviewsData = [
    {
      id: 1,
      name: 'Veronika',
      rating: 4.5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet.',
      avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchBarContainer}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/000000/search--v1.png',
          }}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBarInput}
          placeholder="Search any Product..."
          placeholderTextColor="#BE202F"
          value={search}
          onChangeText={updateSearch}
        />
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/50/000000/camera.png',
          }}
          style={styles.cameraIcon}
        />
      </View>

      <View style={styles.productContainer}>
        <Image source={product.imageUrl} style={styles.productImage} />
        <View style={styles.productDetails}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>★ {product.rating}</Text>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://img.icons8.com/?size=100&id=87&format=png&color=FA5252',
                }}
                style={styles.heartIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.reviewsText}>{product.reviews} Reviews</Text>
          <View style={styles.namePriceContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
          <Text style={styles.productMl}>{product.ml}</Text>
          <Text style={styles.productDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu
            mauris, scelerisque eu mauris id, pretium pulvinar sapien.
          </Text>
        </View>
      </View>

      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity</Text>
        <View style={styles.quantityRightContainer}>
          <Text style={styles.onlyThreeLeftText}>Only 3 left</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* New Rating Section */}
      <View>
        <Text style={styles.ratingHeader}>Rating & Reviews</Text>
        <View>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri:
                  index < product.rating
                    ? 'https://img.icons8.com/ios-filled/24/FFD700/star.png'
                    : 'https://img.icons8.com/ios/24/000000/star--v1.png',
              }}
              style={styles.starIcon}
            />
          ))}
          <Text style={styles.ratingText}>★★★★★ {product.rating} / 5</Text>
        </View>
      </View>

      <View style={styles.container}>
        {reviewsData.map((review) => (
          <View key={review.id} style={styles.reviewContainer}>
            <Image source={{ uri: review.avatarUrl }} style={styles.avatar} />
            <View style={styles.reviewTextContainer}>
              <View>
                <Text>{user.name}</Text>
                <Text style={styles.rating2}>★★★★★</Text>
              </View>
              <Text style={styles.comment}>{review.comment}</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View All Reviews</Text>
        </TouchableOpacity>
      </View>

      {/* Centered Buttons Section */}
      <View style={styles.centeredButtonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/24/000000/visible.png',
            }}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>View Similar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/24/000000/smartphone.png',
            }}
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Add to Compare</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.similarItemsContainer}>
        <View style={styles.sortFilterContainer}>
          <Text style={styles.similarItemsHeader}>282+ Items</Text>
          <View style={styles.sortFilterButtonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sort</Text>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios-filled/24/000000/sorting-options.png',
                }}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Filter</Text>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios-filled/24/000000/filter.png',
                }}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={similarItemsData}
          renderItem={renderSimilarItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

      <NavBar2 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9F9',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#BE202F',
  },
  searchBarInput: {
    flex: 1,
    height: 40,
    color: '#BE202F',
  },
  cameraIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    tintColor: '#BE202F',
  },
  productContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  productImage: {
    width: '90%',
    height: 200,
    borderRadius: 8,
  },
  productDetails: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    color: '#f1c40f',
    marginLeft: 10,
  },
  reviewsText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  ratingHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6,
    marginLeft: 10,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  namePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  productPrice: {
    fontSize: 16,
    marginLeft: 10,
  },
  productMl: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  quantityContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9e8ee',
  },
  quantityLabel: {
    fontSize: 16,
  },
  quantityRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlyThreeLeftText: {
    fontSize: 14,
    color: '#e74c3c',
    marginRight: 10,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 1,
    color: 'red',
  },
  quantityButtonText: {
    fontSize: 20,
    color: 'black',
  },
  quantityText: {
    fontSize: 16,
    width: 30,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'black',
    borderColor: 'red',
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f9e8ee',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },
  centeredButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  similarItemsContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  sortFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  similarItemsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sortFilterButtonsContainer: {
    flexDirection: 'row',
  },
  similarItem: {
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  similarItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  similarItemText: {
    fontSize: 10,
    marginTop: 5,
  },
  flatListContent: {
    paddingHorizontal: 5,
  },
  reviewContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewTextContainer: {
    flex: 1,
  },
  comment: {
    fontSize: 14,
    color: '#666',
  },
  viewAllButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#BE202F',
    marginHorizontal: 30,
    borderRadius: 5,
    padding: 5,
  },
  viewAllButtonText: {
    fontSize: 16,
    color: '#fff9f9',
  },
  rating2: {
    fontSize: 10,
    color: '#f1c40f',
    marginTop: 4,
  },
});

export default ProductView2;
