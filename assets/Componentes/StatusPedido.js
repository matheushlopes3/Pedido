import { Box } from "@react-native-material/core";
import { StyleSheet, Text, View, Image } from 'react-native';
import { PedidoContexto } from "../Contextos/PedidoContexto";
import React from "react";

const StatusPedido = () => {

    const [ pedido, alteraPedido ] = React.useContext(PedidoContexto)



    return(
        <Box style={e.Pedido} >
        <Image 
            style={e.Imagem}
            source={{
                uri: 'https://i.imgur.com/lC6bl2e.jpg',
            }}
            />
        <Text style={e.Texto2} > Pedido recebido </Text>
    </Box>
    );
}

const e = StyleSheet.create({
    Pedido:{
        marginTop:70,
        alignItems: "center",
        padding: 25,
    },
    Imagem:{
        width:50,
        height:50,
        borderRadius: "100%",
        marginRight: 25,
    },
    Texto2:{
        fontSize: 20
    }
})

export default StatusPedido;