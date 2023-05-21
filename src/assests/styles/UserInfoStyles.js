

import { StyleSheet } from 'react-native';

const userInfoStyles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    headerMainContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 10,
        position:"relative",
        paddingVertical:12,
        paddingHorizontal:12,
        
    },
    headerRightContainer:{
        flexDirection:"row",
        marginTop:8
    },
    growTextStle:{
        fontSize:25,
        color:"green",
        fontWeight:"bold"
    },
    appVerificationStyle:{
        fontSize:14,
        color:"black",
        fontWeight:"bold",
        opacity:0.5
    },
    userCardMainContainer:{
        height:"12%",
        marginTop: 15,
        elevation:3,
        backgroundColor:'white',
    },
    userCardIneerContainer:{
        height:100,
        backgroundColor:'white',
        marginHorizontal:12,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        elevation:5,
        marginTop: 25
    },
    userImageStyle:{
        height: 70,
         width: 70,
         borderRadius: 35, 
         backgroundColor: "green",
         marginHorizontal:12
    },
    userNameStyle:{
        fontSize:15,
        color:"black",
        fontWeight:"bold",
    },
    userInfoInerr:{
        flexDirection:"row",
        marginTop:5
    },
    userIconStyle:{
        borderWidth:1,
        borderColor:'green'
    },
    userIdCardStyle:{
        fontSize:12,
        color:"green",
        fontWeight:"bold",
        marginLeft: 5 
    },
    tabMainContainer:{
        marginTop:70,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    tabText1:{
        fontSize:14,
        color:"green",
        fontWeight:"bold",
        marginLeft: 5 
    },
    tabText2:{
        fontSize:14,
        color:"black",
        fontWeight:"bold",
        marginLeft: 5,
        opacity:0.5
    },
    tabUnderLine:{
        width: 50, 
        height:3, 
        backgroundColor:'green', 
        borderRadius:1, 
        marginTop:4
    },
    personalInfoMain1:{
        elevation:5,
        backgroundColor:"white",
        paddingHorizontal:12,
        paddingVertical: 15

    },
    personalInfoMain2:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop: 12

    },
    userAttributeText:{
        fontSize:11,
        color:"black",
        marginTop: 3,
        opacity:0.5,
        fontWeight:"400",
    },
    userInfoText:{
        fontSize:12,
        color:"black",
        fontWeight:"700",
        marginTop: 3, 
    },
    familyandRequestMain:{
        paddingHorizontal: 12,
        // elevation:5
    },
    familyandRequestInner:{
        paddingVertical:12,
        paddingHorizontal:10,
        backgroundColor:"black",
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    familyandRequestTextStyle:{
        fontSize:15,
        color:"white",
        fontWeight:"700",
        marginTop: 3, 
    },
    familyAndRequestListing:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5,
        paddingHorizontal:14

    },
    userListingTextLeft:{
        fontSize:14,
        color:"black",
        fontWeight:"500",
        marginTop: 5, 
    },
    userListingTextRight:{
        fontSize:14,
        color:"black",
        fontWeight:"700",
        marginTop: 5, 
    },
    familyandRequestListingMain:{
        backgroundColor:'white',
        // paddingVertical:10,
        elevation:5,
        paddingBottom:20
    },
    pendingText:{
        textAlign:"center",
        fontSize:15,
        color:"red",
        fontWeight:"700",
        marginTop: 15,
    }
})
export default userInfoStyles