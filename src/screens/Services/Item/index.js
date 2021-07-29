import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Field from "../../../components/Field";
import CustomButton from "../../../components/Field/CustomButton";

export default function Item({name, price, description}) {
    let startingAmount = 1;
    const [amount, setAmount] = useState(startingAmount);
    const [total, setTotal] = useState(startingAmount * price);
    const [expand, setExpand] = useState(false);
    const invertExpand = () => {
        setExpand(!expand);
        startingAmount = 1;
    }
    const calculateTotal = (amount) => {
        setTotal(amount * price);
    };
    const updateAmountTotal = (newAmount) => {
        setAmount(newAmount);
        calculateTotal(newAmount);
    };
    return (<>
        <TouchableOpacity style={styles.information} onPress={invertExpand}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}> {
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(price)
            }
            </Text>
        </TouchableOpacity>
        {expand && 
        <View style={styles.shoppingCart}>
            <View>
                <View style={styles.value}>
                    <Text style={styles.description}>Quantidade: </Text>
                    <Field value={amount} style={styles.amount} changeField={updateAmountTotal}/>
                </View>
                <View style={styles.value}>
                    <Text style={styles.description}>Total: </Text>
                    <Text style={styles.price}>{Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)}
                    </Text>
                    <TextInput/>
                </View>
            </View>
            <CustomButton value={"Adicionar"} action={() => {
            }}/>
        </View>}
        <View style={styles.divisor}/>
    </>);

}