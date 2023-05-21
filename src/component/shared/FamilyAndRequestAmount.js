import React from 'react';
import { View, Text } from 'react-native';
import userInfoStyles from '../../assests/styles/UserInfoStyles';
import FamilyandRequestHeadingUi from './FamilyandRequestHeadingUi';
import FamilyAndRequestListing from './FamilyAndRequestListing';

const FamilyAndRequestAmount = ({ familyDetail }) => {

  return (
    <>
      <View style={userInfoStyles.familyandRequestMain}>
        <FamilyandRequestHeadingUi
          type={"Family Detail"}
        />
        <View style={userInfoStyles.familyandRequestListingMain}>

          <FamilyAndRequestListing
          familydetail={"Family Member Name"}
          familyIfo={"Irfan Ali"}
          />
          <FamilyAndRequestListing
            familydetail={"Family Member CNIC"}
            familyIfo={"37405-000024-7"}
          />
          <FamilyAndRequestListing
            familydetail={"Religion"}
            familyIfo={"Islam"}
          />
          <FamilyAndRequestListing
            familydetail={"Is Disable"}
            familyIfo={"No"}
          />
       
          <FamilyAndRequestListing
            familydetail={"Bussness Address"}
            familyIfo={"Civic Center Lahore"}
          />
        </View>
      </View>
      <View style={[userInfoStyles.familyandRequestMain, { paddingTop: 13 }]}>
        <FamilyandRequestHeadingUi 
        type="Request Amount"
        />
        <View style={userInfoStyles.familyandRequestListingMain}>
          <FamilyAndRequestListing 
           familydetail={"Request Amount"}
           familyIfo={"25000/-"}
          />
          <FamilyAndRequestListing 
           familydetail={"Category"}
           familyIfo={"Category"}
          />
          <FamilyAndRequestListing
           familydetail={"Purpose"}
           familyIfo={"Purpose"}
          />
          <Text style={userInfoStyles.pendingText}>Pending</Text>
        </View>
      </View>
    </>

  );
}

export default FamilyAndRequestAmount;