import React, {Component, useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {getAllBankAccount} from "../../api/BankAccountApi";
import ItemBankAccount from "../../components/BankAccount/bankItem";
import {COLORS} from "../../constants/index";

function BankAccountScreen() {
    const [listBank, setListBank] = useState([])
    useEffect(() => {
        getAllBankAccount()
            .then(res => {
                console.log("res", res);
                console.log("res.data", res.data);
                setListBank(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <View className="flex-1 items-center mt-5 bg-blue-200 relative">
            {listBank.map((item, index) => {
                return <ItemBankAccount key={index} item={item}/>
            })}
            <View className="absolute bottom-0 p-2 w-full">
                <Button color={COLORS.bgGreen} title="Thêm ngân hàng mới" className="w-full bg-green-800"/>
            </View>
        </View>
    );
}

export default BankAccountScreen;
