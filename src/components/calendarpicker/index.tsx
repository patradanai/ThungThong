import React, {Fragment} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  show: boolean;
  date: Date;
  onChangeDate(
    event: React.ChangeEvent<HTMLInputElement>,
    selectedDate: Date | undefined,
  ): any;
}

const CalendarPicker: React.FC<Props> = ({show, onChangeDate, date}) => {
  return (
    <Fragment>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </Fragment>
  );
};

export default CalendarPicker;
