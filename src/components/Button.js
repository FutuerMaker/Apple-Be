import React from "react";
import { TouchableOpacity, Text } from "react-native";
import COLORS from "./Colors";

const Button = ({title, backgroundColor, textColor, onPress = () =>{}}) => {
    return <TouchableOpacity 
    onPress={onPress} 
    style={{
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%", 
        alignSelf:'center'
    }}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color:textColor}} >{title}</Text>
    </TouchableOpacity>
};

export default Button;