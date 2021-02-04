import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import {Calendar, CalendarProps} from 'react-native-calendars';
import {styles} from './style';

// Import Component
import DayComponent from './daycomponent';

const CalendarComponent: React.FC<CalendarProps> = () => {
  return (
    <Fragment>
      <View style={{flex: 1}}>
        <View style={{minHeight: 500}}>
          <Calendar
            style={{
              paddingLeft: 0,
              paddingRight: 0,
            }}
            theme={{
              'stylesheet.calendar.main': {
                monthView: {
                  paddingBottom: 20,
                },
              },
            }}
            markingType={'custom'}
            markedDates={{
              '2021-02-05': {amount: '$50000'},
            }}
            dayComponent={DayComponent}
            current={new Date()}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default CalendarComponent;
