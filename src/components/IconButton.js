import React from "react";
import {Text, View,TouchableOpacity, Image } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons' 
import COLORS from "./Colors";


const IconButton = ({
    icon,
    onPress = () =>{}
}) => {
    return (
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor:COLORS.white, width:'30%', height: 40, borderRadius: 10}} >
            <Image
                source={icon}
                style={{width: 30, height:30}}
                
            />
        </TouchableOpacity>
    )
}

export default IconButton;