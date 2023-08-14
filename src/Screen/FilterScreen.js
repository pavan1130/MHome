import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';

const FilterScreen = () => {
  const navigation = useNavigation();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFromTime, setSelectedFromTime] = useState(null);
  const currentDate = moment();
  const [fromTime, setFromTime] = useState(new Date());
  const [toTime, setToTime] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const handleFromTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setFromTime(selectedTime);
      const formattedTime = moment(selectedTime).format('hh:mm A');
      setSelectedFromTime(formattedTime);
    }
    setShowFromPicker(false);
  };

  const handleToTimeChange = (event, selectedTime) => {
    if (selectedTime !== undefined) {
      setToTime(selectedTime);
    }
    setShowToPicker(false);
  };

  const openFromTimePicker = () => {
    setShowFromPicker(true);
  };

  const openToTimePicker = () => {
    setShowToPicker(true);
  };

  const clearFilters = () => {
    setSelectedRating(null);
    setSelectedExperience(null);
    setSelectedDate(null);
    setSelectedFromTime(null);
    setFromTime(new Date());
    setToTime(new Date());
  };

  const saveFilters = () => {
    // Replace this with your actual save logic
    const saveSuccessful = performSaveOperation(); // Call your save function here

    if (saveSuccessful) {
      setSuccessMessageVisible(true);
      setTimeout(() => {
        setSuccessMessageVisible(false);
        clearFilters();
      }, 3000);
    }
  };

  const performSaveOperation = () => {
    const isSaveSuccessful = Math.random() < 0.8;
    return isSaveSuccessful;
  };
  const formattedFromTime = moment(fromTime).format('hh:mm A');
  const formattedToTime = moment(toTime).format('hh:mm A');

  return (
    <View style={styles.container}>
      <Overlay>
        <View style={styles.filterPage}>
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
              <Image
                source={require('MHome/src/Screen/images/icons8-left-arrow-32.png')}
                style={styles.appLogo}
              />
            </TouchableOpacity>
            <Text style={styles.filterText}>Filter</Text>
            <View style={styles.clearSaveRow}>
              <Button title="Clear" type="clear" onPress={clearFilters} />
              <Button title="Save" type="clear" onPress={saveFilters} />
            </View>
          </View>
          {successMessageVisible && (
            <View style={styles.successMessage}>
              <Text style={styles.successMessageText}>
                Filters saved successfully!
              </Text>
            </View>
          )}
          <View style={styles.dateMonthContainer}>
            <Text style={styles.sectionTitle}>Availability</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Array.from(
                {length: currentDate.daysInMonth() - currentDate.date() + 1},
                (_, index) => (
                  <View key={index} style={styles.dateMonthBox}>
                    <View
                      style={[
                        styles.dateMonthRectangle,
                        selectedDate === currentDate.date() + index &&
                          styles.selectedDateRectangle,
                      ]}
                      onTouchEnd={() =>
                        setSelectedDate(currentDate.date() + index)
                      }>
                      <Text
                        style={[
                          styles.dateText,
                          selectedDate === currentDate.date() + index &&
                            styles.selectedDateText,
                        ]}>
                        {currentDate.date() + index}
                      </Text>
                      <Text
                        style={[
                          styles.monthText,
                          selectedDate === currentDate.date() + index &&
                            styles.selectedDateText,
                        ]}>
                        {currentDate.format('MMM')}
                      </Text>
                    </View>
                  </View>
                ),
              )}
            </ScrollView>
          </View>

          <View style={styles.timeContainer}>
            <TouchableOpacity onPress={openFromTimePicker}>
              <Text style={styles.timeText}>From: {formattedFromTime}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openToTimePicker}>
              <Text style={styles.timeText}>To: {formattedToTime}</Text>
            </TouchableOpacity>
            {showFromPicker && (
              <DateTimePicker
                testID="fromTimePicker"
                value={fromTime}
                mode="time"
                is24Hour={false}
                display="default"
                onChange={handleFromTimeChange}
              />
            )}
            {showToPicker && (
              <DateTimePicker
                testID="toTimePicker"
                value={toTime}
                mode="time"
                is24Hour={false}
                display="default"
                onChange={handleToTimeChange}
              />
            )}
          </View>
          <View style={styles.line1} />
          <Image
            source={require('./images/22.jpg')}
            style={styles.image2}
            resizeMode="contain"
          />

          <View style={styles.filterOptions}>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Rating:</Text>
              <View style={styles.ratingOptions}>
                {['star1', 'star2', 'star3', 'star4', 'star5'].map(rating => (
                  <Text
                    key={rating}
                    style={[
                      styles.ratingOption,
                      selectedRating === rating && styles.selectedRatingOption,
                    ]}
                    onPress={() => setSelectedRating(rating)}>
                    {rating}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.line} />
            <View style={styles.experienceContainer}>
              <Text style={styles.experienceText}>Experience:</Text>
              <View style={styles.experienceOptions}>
                {['Beginner', 'Intermediate', 'Expert'].map(experience => (
                  <Text
                    key={experience}
                    style={[
                      styles.experienceOption,
                      selectedExperience === experience &&
                        styles.selectedExperienceOption,
                    ]}
                    onPress={() => setSelectedExperience(experience)}>
                    {experience}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterPage: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  appLogo: {
    width: 32,
    height: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterText: {
    fontSize: 24,
    fontWeight: 'bold',
    left: 20,
    color: 'black',
  },
  clearSaveRow: {
    flexDirection: 'row',
    left: 200,
  },
  topRow: {
    flexDirection: 'row',
  },
  image2: {
    width: Dimensions.get('window').width - 32,
    height: 200,
    alignSelf: 'center',
    marginTop: 16,
  },
  heading: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  filterOptions: {
    marginTop: 20,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  ratingContainer: {
    marginTop: 30,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  ratingOption: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 15,
  },
  selectedRatingOption: {
    backgroundColor: '#7B7A7C',
    color: 'white',
  },
  experienceContainer: {
    marginTop: 10,
  },
  experienceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  experienceOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  experienceOption: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 15,
  },
  selectedExperienceOption: {
    backgroundColor: '#7B7A7C',
    color: 'white',
  },
  dateMonthContainer: {
    marginBottom: 16,
    marginTop: 30,
  },
  dateMonthBox: {
    marginRight: 8,
  },
  dateMonthRectangle: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
    width: 72,
    height: 90,
    alignItems: 'center',
  },
  selectedDateRectangle: {
    borderColor: 'grey',
    backgroundColor: '#7B7A7C',
  },
  dateText: {
    fontSize: 25,
  },
  monthText: {
    fontSize: 18,
  },
  selectedDateText: {
    color: 'black',
    fontWeight: 'bold',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    justifyContent: 'space-around',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 1,
    width: '100%',
    marginTop: 20,
  },
  line1: {
    height: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 1,
    width: '100%',
    marginTop: 20,
  },
  successMessageText: {
    color: 'green',
    fontSize: 16,
  },
});

export default FilterScreen;
