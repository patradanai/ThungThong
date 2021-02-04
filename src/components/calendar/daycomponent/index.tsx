import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {DayComponentProps} from 'react-native-calendars';
import {styles} from './style';

interface styleWarp {
  content: {[key: string]: any};
  text: {[key: string]: any};
  [key: string]: any;
}

const DayComponent: React.FC<any> = ({
  current,
  children,
  state,
  marking,
  date,
  onPress,
}) => {
  const getContentStyle: any = () => {
    let style: styleWarp = {
      content: {},
      text: {
        color: '#181c26',
      },
    };

    if (state === 'disabled') {
      style.text.color = '#c1c2c1';
    } else if (state === 'today') {
      style.text.color = '#fff';
      style.content.backgroundColor = '#216bc9';
      style.content.borderRadius = 50;
    } else if (current === date.dateString) {
      style.content.borderRadius = 50;
      style.content.borderWidth = 1;
      style.content.borderColor = '#216bc9';
    }

    return style;
  };

  const contentStyle = getContentStyle();
  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.content, contentStyle.content]}
          onPress={() => onPress(date)}>
          <Text style={[styles.contentText, contentStyle.text]}>
            {String(children)}
          </Text>
        </TouchableOpacity>
        <View>
          <Text>1</Text>
        </View>
      </View>
    </Fragment>
  );
};

DayComponent.propTypes = {
  state: PropTypes.oneOf(['selected', 'disabled', 'today', '']),
  marking: PropTypes.any,
  theme: PropTypes.object,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  date: PropTypes.object,
};

export default DayComponent;
