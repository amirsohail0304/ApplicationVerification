import React from 'react';
import { View, Text, Image } from 'react-native';
import userInfoStyles from '../../assests/styles/UserInfoStyles';
import UserIcon from 'react-native-vector-icons/Entypo';

const UserInfoCardUi = ({ userInfo }) => {
  const base64Image = userInfo.profile_pic
  return (

    <View style={userInfoStyles.userCardMainContainer}>
      <View style={userInfoStyles.userCardIneerContainer}>
        <View>
          <Image
            style={userInfoStyles.userImageStyle}
            source={{ uri: `data:image/jpeg;base64,${base64Image}` }}
            resizeMode='contain'
          />
        </View>
        <View>
          <Text style={userInfoStyles.userNameStyle}>{userInfo && userInfo.first_name ? userInfo.first_name : "Amir"}</Text>
          <View style={userInfoStyles.userInfoInerr}>
            <View style={userInfoStyles.userIconStyle}>
              <UserIcon name="add-user" size={18} color="green" />
            </View>
            <Text style={userInfoStyles.userIdCardStyle}>{userInfo && userInfo.cnic ? userInfo.cnic : "123456789"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default UserInfoCardUi;