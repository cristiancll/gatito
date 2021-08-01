import React from "react";
import {Text, View} from "react-native";
import Styles from "./styles"
import Button from "../CustomButton";

export default function ShoppingCartStatus({total}){
    return (
        <View style={Styles.content}>
            <View style={Styles.total}>
                <Text style={Styles.description}>
                    Total do Carrinho:
                </Text>
                <Text style={Styles.value}>
                    {
                        Intl.NumberFormat('pt-BR', {
                           style: 'currency', currency: 'BRL' 
                        }).format(total)
                    }
                </Text>
            </View>
            <View style={Styles.button}>
                <Button value='Concluir Pedido' inverted/>
            </View>
        </View>
    );    
}