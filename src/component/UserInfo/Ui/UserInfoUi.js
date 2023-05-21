import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderUi from '../../shared/HeaderUi';
import userInfoStyles from '../../../assests/styles/UserInfoStyles';
import UserInfoCardUi from '../../shared/UserInfoCardUi';
import ApplicationTabUi from '../../shared/ApplicationTabUi';
import Loader from '../../shared/Loader';

const UserInfoUi=(props)=> {
    return (
      <View style={userInfoStyles.mainContainer}>
        <HeaderUi />
        {props.isLoading ?
        <Loader />:
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow:1}}
        >
        <UserInfoCardUi
        userInfo={props.userInfo}
        />
        <ApplicationTabUi 
          userInfo={props.userInfo}
        />
        </ScrollView>
        }
      </View>
    );
}

export default UserInfoUi;