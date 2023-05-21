import React, { useEffect, useState } from 'react';
import UserInfoUi from '../Ui/UserInfoUi';
import GetUserInfoApi from '../Services/UserInfoApi';

const UserInfoContainer=(props)=> {
const [userInfo, setUserInfo]= useState(null)
const [isLoading, setIsLoading]= useState(true)
let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk";
let userId="10"
useEffect(()=>{
GetUserInfoApi(accessToken, userId).then((res)=>{
  if(res){
    setUserInfo(res.member_personal_details)
    setIsLoading(false)
  }
}).catch((err)=>{
  setIsLoading(false)
})
},[])
    return (
     
      <UserInfoUi 
      isLoading={isLoading}
      userInfo={userInfo}
      />
    );
}

export default UserInfoContainer;