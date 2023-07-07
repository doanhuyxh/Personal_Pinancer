import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

function ItemBankAccount({item, onPress}) {
    const navigation = useNavigation();
    const openModal = () => {
    }
    return (
        <TouchableOpacity onPress={onPress} className="w-full bg-amber-50 p-2 m-2 rounded-2xl">
            <View className="flex-row p-2 m-1 ">
                <Text className="text-green-700 p-1 text-sm w-2/6">{item.name}</Text>
                <Text className="text-red-400 p-1 text-sm w-1/4">{item.accountnumber}</Text>
                <Text className="text-red-800 p-1 text-sm w-2/4">{item.balance}VNĐ</Text>
            </View>
        </TouchableOpacity>
    );
}


export default ItemBankAccount
