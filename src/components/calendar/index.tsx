import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import {
  Calendar,
  CalendarProps,
  DayComponentProps,
} from 'react-native-calendars';
import {styles} from './style';

// Import Component
import DayComponent from './daycomponent';

const CalendarComponent: React.FC<CalendarProps> = () => {
  return (
    <Fragment>
      <Calendar
        style={styles.calendar}
        dayComponent={DayComponent}
        current={new Date()}
      />
    </Fragment>
  );
};

export default CalendarComponent;
