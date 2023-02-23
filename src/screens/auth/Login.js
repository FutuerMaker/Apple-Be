import React, { useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, Dimensions, SafeAreaView, TouchableOpacity,StatusBar, TextInput, ScrollView} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons' 

import Button from "../../components/Button";
import COLORS from "../../components/Colors";
import IconButton from "../../components/IconButton";
import Input from "../../components/TextInput";
import googleImg from '../../assets/images/google.png'
import appleImg from '../../assets/images/apple.png'

const {width, height} = Dimensions.get("window");

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary, marginTop:StatusBar.currentHeight}} >
            <ScrollView>
            {/* <StatusBar backgroundColor={COLORS.primary} /> */}
            {/* Back Btn */}
            <View style={{width: 50, height: 50,}} >
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems:'center'}} onPress={()=>navigation.replace("Onboarding")} >
                    <Icon name="md-arrow-back" size={30} color = {COLORS.white}></Icon>
                </TouchableOpacity>
            </View>
            {/* Header */}
            <View style={{justifyContent:'center', paddingLeft: 20}} >
                <View style={{height: 30, color:COLORS.orange}} />
                <Text style={{fontSize: 70, fontWeight:'bold', color: COLORS.white}} >Login</Text>
            </View>

            {/* User Form */}
            <View style={{marginVertical: 20}} >
                <Input
                    lable="Email"
                    placeholder="Enter your Email"
                    iconName="email-outline"
                    paddingTop={15}
                    userValue = {email}
                    textChangeValue = {setEmail}
                    // error="Input a valid email"
                />
                <Input
                    lable="Password"
                    placeholder="Enter your Password"
                    iconName="lock-outline"
                    password
                    paddingTop={5}
                    userValue = {password}
                    textChangeValue = {setpassword}
                    // error="Input a valid email"
                />

                <Button
                    title="Login"
                    textColor={COLORS.white}
                    backgroundColor={COLORS.orange}
                />
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}} >
            <Text style={{fontSize: 15, color:COLORS.light, paddingTop: 30}} > Or login with... </Text>
            
            </View>
            
            <View style={{justifyContent:'space-evenly',alignContent:'space-around', flexDirection:'row', paddingTop: 30, paddingBottom: 20,}} >

            <IconButton
                icon= {googleImg}
            />
            <IconButton
                icon={appleImg}
            />
            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({})