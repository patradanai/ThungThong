import React, {Fragment} from 'react';
import {Text} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {styles} from './style';
const CalendarComponent = () => {
  return (
    <Fragment>
      <Text style={styles.text}>Calendar with multi-dot marking</Text>
      <Calendar
        style={styles.calendar}
        current={'2012-05-16'}
        markingType={'multi-dot'}
        markedDates={{
          '2012-05-08': {
            selected: true,
            dots: [
              {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
              {key: 'massage', color: 'red', selectedDotColor: 'white'},
            ],
          },
          '2012-05-09': {
            disabled: true,
            dots: [
              {key: 'vacation', color: 'green', selectedDotColor: 'red'},
              {key: 'massage', color: 'red', selectedDotColor: 'green'},
            ],
          },
        }}
      />
    </Fragment>
  );
};

export default CalendarComponent;
