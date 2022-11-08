import { Box } from "@react-native-material/core";
import { StyleSheet, Text  } from 'react-native';
import { PedidoContexto } from "../Contextos/PedidoContexto";
import React from "react";



const Resumo = () => {

//    const [ pedido, alteraPedido ] = React.useContext(PedidoContexto)
    const [ produto, alteraProduto ] = React.useContext(PedidoContexto)

    return(
        <Box>
            <Text style={e.Container} > Código do pedido: {  /*produto[0].pedido_id*/ } </Text>
            <Text style={e.Texto} > Total: 29,90 </Text>
        </Box>
    );
}

const e = StyleSheet.create({
    Container:{
        textAlign: "center",
        padding: 10,
        fontSize: 20,
    },
    Texto:{
        fontSize: 18,
        textAlign: "right",
        padding: 10,
        margin: 3,
        borderBottomWidth: 1
    },
    Texto2:{
        fontWeight:  "bold" ,
    }
})

export default Resumo;