import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

function BankDetailScreen() {
    const navigate = useNavigation();
    const handleBack = ()=>{
        navigate.navigate("Bank");
    }
    return (
        <View>
            <TouchableOpacity onPress={handleBack}>

            <Text>BankDetailScreen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default BankDetailScreen;
