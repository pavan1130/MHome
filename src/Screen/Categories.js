import {React, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const Categories = () => {
  const categoryImages = [
    require('./images/1.jpg'),
    require('./images/2.jpg'),
    require('./images/3.jpg'),
    require('./images/4.jpg'),
    require('./images/5.jpg'),
    require('./images/6.jpg'),
    require('./images/7.jpg'),
    require('./images/5.jpg'),
  ];
  const categoryNames = [
    'Finance & Investing',
    'Education & Academics',
    'Health & Wellness',
    'Arts & Design',
    'Technology & Coding',
    'Leadership & Management',
    'Enterpreneurship',
    'Personal Development',
  ];

  return (
    <View>
      <Text style={styles.categoriesText}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}>
        {categoryImages.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(index)}>
            <View style={styles.categoryImageContainer}>
              <Image source={image} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryNameText}>{categoryNames[index]}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesText: {
    fontFamily: 'Inter',
    lineHeight: 18,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 16,
    color: '#7B7A7C',
  },
  categoriesContainer: {
    paddingVertical: 10,
    marginTop: 5,
  },
  categoryCard: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryImageContainer: {
    flex: 1,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryNameText: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    color: 'white',
    fontSize: 9,
    fontWeight: '500',
    paddingVertical: 2,
  },
  horizontalLine: {
    height: 2,
    backgroundColor: '#D9D9D9',
    marginVertical: 20,
    borderRadius: 1,
    width: '95%',
    left: 10,
  },
});

export default Categories;
