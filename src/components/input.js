import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../colors';
import { forwardRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

export const IconNames = {
  EMAIL: 'email',
  PASSWORD: 'lock',
};

const Input = forwardRef(
  ({ title, placeholder, value, iconName, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            isFocused && styles.focusedInput,
            isFocused && styles.hasValueTitle,
          ]}
        >
          {title}
        </Text>

        <View>
          <TextInput
            {...props}
            ref={ref}
            style={[styles.input, value && styles.hasValueInput]}
            placeholder={placeholder ?? title}
            placeholderTextColor={GRAY.DEFAULT}
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={(() => {
                switch (true) {
                  case isFocused:
                    return PRIMARY.DEFAULT;
                  case !!value:
                    return BLACK;
                  default:
                    return GRAY.DEFAULT;
                }
              })()}
            />
          </View>
        </View>
      </View>
    );
  }
);
Input.displayName = 'Input';

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(IconNames)),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
    borderColor: GRAY.DEFAULT,
  },
  icon: {
    position: 'absolute',
    left: 0,
    height: '100%',
    justifyContent: 'center',
  },

  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
});

export default Input;
