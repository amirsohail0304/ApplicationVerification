import React from 'react';
import { View, Text } from 'react-native';
import userInfoStyles from '../../assests/styles/UserInfoStyles';
import MenuIcon from 'react-native-vector-icons/Feather';
import BellIcon from 'react-native-vector-icons/EvilIcons';

const HeaderUi=(props)=> {
    return (
      <View style={userInfoStyles.headerMainContainer}>
        <View>
        <Text style={userInfoStyles.growTextStle}>GROWTECH</Text>
        <Text style={userInfoStyles.appVerificationStyle}>Appliction Verification</Text>
        </View>
        <View style={userInfoStyles.headerRightContainer}>
        <BellIcon name="bell" size={25} color="black"  />
        <MenuIcon name="menu" size={20} color="black" />
        </View>
      </View>
    );
}

export default HeaderUi;