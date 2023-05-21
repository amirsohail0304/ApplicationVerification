import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import userInfoStyles from '../../assests/styles/UserInfoStyles';
import UserPersonalInfoMainCard from './UserPersonalInfoMainCard';
import FamilyAndRequestAmount from './FamilyAndRequestAmount';

const ApplicationTabUi = (props) => {
    const [selectedTab, setSelectedTab] = useState('appDetails')
    const handleTab = (tabType) => {
        setSelectedTab(tabType)
    }
    return (
        <>
            <View style={userInfoStyles.tabMainContainer}>
                <TouchableOpacity
                    onPress={() => handleTab("appDetails")}
                >
                    <Text style={selectedTab === "appDetails" ? userInfoStyles.tabText1 : userInfoStyles.tabText2}>Appliction Details</Text>
                    {selectedTab === "appDetails" ?
                        <View style={[userInfoStyles.tabUnderLine, { width: 130 }]} /> : null
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleTab("status")}
                >
                    <Text style={selectedTab === "status" ? userInfoStyles.tabText1 : userInfoStyles.tabText2}>Status</Text>
                    {selectedTab === "status" ?
                        <View style={userInfoStyles.tabUnderLine} /> : null
                    }
                </TouchableOpacity>
            </View>
          <UserPersonalInfoMainCard
          personalInfo={props.userInfo}
          />
          <FamilyAndRequestAmount
          familyDetail={props.userInfo}
          />
        </>
    );
}

export default ApplicationTabUi;