import React from "react";
import {View, Text, TextInput} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons' 

import COLORS from "./Colors";

const Input = ({
    lable,
    iconName,
    error,
    password,
    paddingTop,
    userValue,
    textChangeValue=()=>{},
    onFocuse=()=>{},
    ...props
}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);
    return(
        <View style={{padding: 15, paddingTop: paddingTop, }}>

            <Text style={{fontSize: 14, color: COLORS.white, marginVertical: 5}} >{lable}</Text>
            <View style={{
                height: 55, 
                flexDirection: 'row', 
                paddingHorizontal: 15, 
                backgroundColor: COLORS.light, 
                alignItems: 'center', 
                borderWidth: 0.5, 
                borderRadius: 5,
                borderColor:
                error ? COLORS.red:isFocused
                ? COLORS.black: COLORS.light}} >
                <Icon
                    name={iconName}
                    size={22}
                    style={{marginRight: 10}}
                />
                <TextInput
                    {...props}
                    secureTextEntry={hidePassword}
                    style={{flex: 1}}
                    onFocus={()=>{
                        onFocuse();
                        setIsFocused(true);
                    }}
                    onBlur={()=>{
                        setIsFocused(false);
                    }}
                    autoCorrect={false}
                    value={userValue}
                    onChangeText={text =>textChangeValue(text)}
                />
                {password &&
                <Icon
                    onPress={()=>setHidePassword(!hidePassword)}
                    name={hidePassword ? "eye-outline": "eye-off-outline"}
                    size={20}
                    style={{
                        color: COLORS.darkBlue
                    }}
                />
                }
            </View>
            {error && 
            <Text style={{color:COLORS.red, fontSize: 12, marginTop: 7}} >{error}</Text>
            }
        </View>
    )
}

export default Input