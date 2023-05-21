import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import UserIcon from 'react-native-vector-icons/Feather';
import userInfoStyles from '../../assests/styles/UserInfoStyles';

const UserPersonalInfoCardUi = (props) => {
    const{userAttribute,userInfoText, iconName}=props

    return (
          <View style={{marginRight:userInfoText==="Date of Birth" ?50: userInfoText==="Education"?20: 0}}>
          <UserIcon name={iconName} size={18} color="green" />
            <Text style={userInfoStyles.userInfoText}>{userAttribute}</Text>
            <Text style={userInfoStyles.userAttributeText}>{userInfoText}</Text>
          </View>
    );
}

export default UserPersonalInfoCardUi;