import React from 'react';
import { View, Text } from 'react-native';
import userInfoStyles from '../../assests/styles/UserInfoStyles';

const FamilyAndRequestListing = (props) => {

    return (
       
  
          <View style={userInfoStyles.familyAndRequestListing}>
                <Text style={userInfoStyles.userListingTextLeft}>{props.familydetail}</Text>
                <Text style={userInfoStyles.userListingTextRight}>{props.familyIfo}</Text>
            </View>
        
    );
}

export default FamilyAndRequestListing;