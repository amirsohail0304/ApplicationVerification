import React from 'react';
import { View} from 'react-native';
import userInfoStyles from '../../assests/styles/UserInfoStyles';
import UserPersonalInfoCardUi from './UserPersonalInfoCardUi';

const UserPersonalInfoMainCard = ({personalInfo}) => {

    return (
        <View style={userInfoStyles.personalInfoMain1}>
          
            <View style={userInfoStyles.personalInfoMain2}>
                <UserPersonalInfoCardUi 
                userAttribute = {personalInfo && personalInfo.gender ?personalInfo.gender:"gender"}
                userInfoText= "Gender"
                iconName='user'
                />
                <UserPersonalInfoCardUi 
                 userAttribute = {personalInfo && personalInfo.marital_status ?personalInfo.marital_status:"marital_status"}
                 userInfoText= "Martial Status"
                 iconName='circle'
                />
                <UserPersonalInfoCardUi 
                 userAttribute = {personalInfo && personalInfo.parantage ?personalInfo.parantage:"parantage"}
                 userInfoText= "Parentage(Father)"
                 iconName='users'
                />
            </View>
            <View style={userInfoStyles.personalInfoMain2}>
                <UserPersonalInfoCardUi 
                userAttribute = {personalInfo && personalInfo.phone ?personalInfo.phone:"123456789"}
                userInfoText= "Mobile"
                iconName='phone-call'
                />
                <UserPersonalInfoCardUi 
                 userAttribute = {personalInfo && personalInfo.dob ?personalInfo.dob:"14-May-1998"}
                 userInfoText= "Date of Birth"
                 iconName='calendar'
                />
                <UserPersonalInfoCardUi
                 userAttribute = {personalInfo && personalInfo.education ?personalInfo.education:"education"}
                 userInfoText= "Education"
                 iconName='user'
                />
            </View>
        </View>
    );
}

export default UserPersonalInfoMainCard;