import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import NavBar from './NavBar';

const Homepage = () => {
  const [search, setSearch] = useState('');
  const updateSearch = (text) => {
    setSearch(text);
  };

  const featuredItems = [
    { id: 1, name: 'Heineken Bottle', ml: '300 ml', price: 'Rs. 500' },
    { id: 2, name: 'Heineken Bottle', ml: '300 ml', price: 'Rs. 500' },
    { id: 3, name: 'Heineken Bottle', ml: '300 ml', price: 'Rs. 500' },
    { id: 4, name: 'Heineken Bottle', ml: '300 ml', price: 'Rs. 500' },
    { id: 5, name: 'Heineken Bottle', ml: '300 ml', price: 'Rs. 500' },
    { id: 6, name: 'Heineken Bottle', ml: '300 ml', price: 'Rs. 500' },
  ];

  const mostPopularItems = [
    { id: 1, name: 'Cider', ml: '330 ml', price: 'Rs. 600' },
    { id: 2, name: 'Vodka', ml: '500 ml', price: 'Rs. 1500' },
    { id: 3, name: 'Whiskey', ml: '750 ml', price: 'Rs. 3000' },
    { id: 4, name: 'Rum', ml: '1000 ml', price: 'Rs. 2500' },
    { id: 5, name: 'Tequila', ml: '500 ml', price: 'Rs. 2000' },
  ];

  const categories = [
    { id: 1, image: require('../assets/food1.png'), label: 'Beer' },
    { id: 2, image: require('../assets/food1.png'), label: 'Wine' },
    { id: 3, image: require('../assets/food1.png'), label: 'Bevarages' },
    { id: 4, image: require('../assets/food1.png'), label: 'Meats' },
    { id: 5, image: require('../assets/food1.png'), label: 'Seafood' },
    { id: 6, image: require('../assets/food2.png'), label: 'Dry Staples' },
    { id: 7, image: require('../assets/food3.png'), label: 'Vegan Food' },
    { id: 8, image: require('../assets/food4.png'), label: 'Snacks' },
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
          placeholderTextColor="#FFF9F9"
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

      {/* First Banner Section */}
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/img7.jpg')}
          style={styles.leftBannerBackground}
        />
        <View style={styles.leftBanner}>
          <Text style={styles.bannerText1}>15-20 % OFF</Text>
          <Text style={styles.bannerText2}>For First Purchase</Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.buttonText}>Shop Now</Text>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/ffffff/arrow.png',
              }}
              style={styles.arrowIcon1}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Choose Your Store Section */}
      <Text style={styles.chooseStoreText}>Choose Your Store</Text>
      <View style={styles.storeContainer}>
        <View style={styles.storeItem}>
          <Image
            source={require('../assets/colombo.png')}
            style={styles.storeImage}
          />
          <Text style={styles.storeLabel2}>Colombo</Text>
        </View>
        <View style={styles.storeItem}>
          <Image
            source={require('../assets/negombo.png')}
            style={styles.storeImage}
          />
          <Text style={styles.storeLabel1}>Negombo</Text>
        </View>
        <View style={styles.storeItem}>
          <Image
            source={require('../assets/galle.png')}
            style={styles.storeImage}
          />
          <Text style={styles.storeLabel1}>Galle</Text>
        </View>
      </View>

      {/* Featured Section */}
      <View style={styles.featuredHeader}>
        <Text style={styles.featuredText}>Featured</Text>
        <Text style={styles.seeAllText}>See All</Text>
      </View>

      {/* Horizontal Scroll View for Featured Items */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredStoreContainer}>
        {featuredItems.map((item) => (
          <View key={item.id} style={styles.featuredItem}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/img9.jpg')}
                style={styles.featuredImage}
              />
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios-filled/50/000000/plus-math.png',
                }}
                style={styles.plusIcon}
              />
            </View>
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
            <Text style={styles.productMl}>{item.ml}</Text>

            <Text style={styles.rating}>★★★★★</Text>
          </View>
        ))}
      </ScrollView>

      {/* Second Banner Section */}
      <View style={styles.additionalBannerContainer}>
        <Image
          source={require('../assets/banner2.jpg')}
          style={styles.additionalBannerBackground}
        />
        <View style={styles.additionalBannerContent}>
          <Text style={styles.additionalBannerText1}>Blackberry Wine</Text>
          <Text style={styles.additionalBannerText2}>
            Host your party with us
          </Text>
          <TouchableOpacity style={styles.additionalBannerButton}>
            <Text style={styles.additionalbuttonText}>Visit Now</Text>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/ffffff/arrow.png',
              }}
              style={styles.arrowIcon2}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* New Horizontal Scroll View for Most Popular Items */}
      <View style={styles.popularHeader}>
        <Text style={styles.popularText}>Most Popular</Text>
        <Text style={styles.seeAllText}>See All</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.popularStoreContainer}>
        {mostPopularItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.popularItem}
            onPress={() => {}}>
            <View style={styles.itemContainer}>
              <Image
                source={require('../assets/bottle2.png')}
                style={styles.featuredImage}
              />
              <View style={styles.infoContainer}>
                <TouchableOpacity style={styles.heartIconContainer}>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/ios-filled/50/ff0000/like.png',
                    }}
                    style={styles.heartIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.productPrice}>1500</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.visitText}>Visit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Categories Section */}
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryText}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesContainer}>
        {[0, 1].map((rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {categories
              .slice(rowIndex * 4, rowIndex * 4 + 4)
              .map((category) => (
                <View style={styles.categoryItem} key={category.id}>
                  <Image source={category.image} style={styles.categoryImage} />
                  <Text style={styles.categoryLabel}>{category.label}</Text>
                </View>
              ))}
          </View>
        ))}
      </View>

      {/* 3rd banner */}
      <View style={styles.fullWidthImageContainer}>
        <Image
          source={require('../assets/banner3.jpg')}
          style={styles.fullWidthImage}
        />
      </View>
      <NavBar />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  fullWidthImageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  plusIcon: {
    position: 'absolute',
    bottom: 50,
    right: 5,
    width: 18,
    height: 18,
    backgroundColor: 'transparent',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#9b3621',
    padding: 3,
    tintColor: 'red',
  },
  fullWidthImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: '10',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e39db5',
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
    tintColor: '#FFF9F9',
  },
  searchBarInput: {
    flex: 1,
    height: 40,
    color: '#FFF9F9',
  },
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
    height: 150,
    position: 'relative',
  },

  leftBanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },

  leftBannerBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },

  bannerText1: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 10,
  },

  bannerText2: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },

  bannerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 10,
  },
  additionalbuttonText: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 10,
  },
  arrowIcon1: {
    width: 24,
    height: 24,
  },
  arrowIcon2: {
    width: 20,
    height: 20,
    tintColor: 'black',
  },
  chooseStoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 20,
  },
  storeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  storeItem: {
    alignItems: 'center',
  },
  storeImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  storeLabel1: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  storeLabel2: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    textDecorationLine: 'underline',
  },

  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  featuredText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  featuredStoreContainer: {
    paddingHorizontal: 0,
  },
  featuredItem: {
    borderWidth: 1,
    borderColor: '#BE202F',
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 0,
    width: 150,
  },
  priceTag: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    backgroundColor: '#BE202F',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  priceText: {
    color: '#fff',
    fontSize: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productMl: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#f1c40f',
  },
  additionalBannerContainer: {
    width: '98%',
    height: 150,
    marginVertical: 20,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
  },
  additionalBannerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    marginHorizontal: 5,
  },
  additionalBannerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  additionalBannerText1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  additionalBannerText2: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
  },
  additionalBannerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#be202f',
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    width: '22%',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  popularText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: 'black',
  },
  popularStoreContainer: {
    paddingHorizontal: 16,
  },
  popularItem: {
    borderRadius: 20,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  featuredImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'left',
  },
  heartIconContainer: {
    width: 24,
    height: 24,
  },
  heartIcon: {
    width: '100%',
    height: '100%',
  },
  visitText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    width: '100%',
    paddingHorizontal: 8,
  },
  itemContainer: {
    width: 150,
    alignItems: 'center',
  },
  cameraIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    tintColor: '#FFF9F9',
  },
});

export default Homepage;
