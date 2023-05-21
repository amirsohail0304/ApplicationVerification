import React from 'react';
import { View, Text } from 'react-native';
import userInfoStyles from '../../assests/styles/UserInfoStyles';

const FamilyandRequestHeadingUi = (props) => {

    return (
            <View style={userInfoStyles.familyandRequestInner}>
                <Text style={userInfoStyles.familyandRequestTextStyle}>{props.type}</Text>
            </View>
    );
}

export default FamilyandRequestHeadingUi;