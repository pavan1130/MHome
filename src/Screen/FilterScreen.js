import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {Button, Overlay, Icon} from 'react-native-elements';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const FilterScreen = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFromTime, setSelectedFromTime] = useState(null);
  const [selectedToTime, setSelectedToTime] = useState(null);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [timePickerType, setTimePickerType] = useState(null);
  const currentDate = moment();

  const toggleTimePicker = type => {
    setTimePickerType(type);
    setTimePickerVisible(!isTimePickerVisible);
  };

  const handleTimeConfirm = time => {
    const formattedTime = moment(time).format('hh:mm A');
    if (timePickerType === 'from') {
      setSelectedFromTime(formattedTime);
    } else if (timePickerType === 'to') {
      setSelectedToTime(formattedTime);
    }
    toggleTimePicker(null);
  };

  const clearFilters = () => {
    setSelectedRating(null);
    setSelectedExperience(null);
    setSelectedDate(null);
    setSelectedFromTime(null);
    setSelectedToTime(null);
  };

  const saveFilters = () => {
    // Add your logic to save filters here
  };

  return (
    <View style={styles.container}>
      <Overlay>
        <View style={styles.filterPage}>
          <View style={styles.topRow}>
            <Text style={styles.filterText}>Filter</Text>
            <View style={styles.clearSaveRow}>
              <Button
                title="Clear Filter"
                type="clear"
                onPress={clearFilters}
              />
              <Button title="Save" type="clear" onPress={saveFilters} />
            </View>
          </View>

          <Text>Avalability</Text>

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

            <View style={styles.dateMonthContainer}>
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
              <Text style={styles.timeText}>Time:</Text>
              <View style={styles.timePicker}>
                <Button
                  title={selectedFromTime ? selectedFromTime : 'From Time'}
                  type="clear"
                  onPress={() => toggleTimePicker('from')}
                />
                <Button
                  title={selectedToTime ? selectedToTime : 'To Time'}
                  type="clear"
                  onPress={() => toggleTimePicker('to')}
                />
              </View>
            </View>
          </View>
        </View>
      </Overlay>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={() => toggleTimePicker(null)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterOverlay: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    padding: 20,
  },
  filterPage: {
    flexDirection: 'column',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    left: -70,
  },
  clearSaveRow: {
    flexDirection: 'row',
  },
  filterOptions: {
    marginTop: 20,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  ratingContainer: {
    marginTop: 400,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  ratingOption: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
  },
  selectedRatingOption: {
    backgroundColor: '#333',
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
    justifyContent: 'space-between',
    marginTop: 0,
  },
  experienceOption: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
  },
  selectedExperienceOption: {
    backgroundColor: '#333',
    color: 'white',
  },
  dateMonthContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: 900,
    left: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  dateMonthBox: {
    marginRight: 10,
    alignItems: 'center',
  },
  dateMonthRectangle: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
    width: 50,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  monthText: {
    fontSize: 12,
  },
  selectedDateRectangle: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  selectedDateText: {
    color: 'white',
  },
  timeContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: 900,
    left: 15,
    marginTop: 90,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  timePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },

  image2: {
    position: 'absolute',
    width: 500,
    height: 200,
    marginRight: 50,
    left: -85,
    top: 240,
  },
});

export default FilterScreen;
