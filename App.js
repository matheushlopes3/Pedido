import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from "@react-native-material/core";
import { Box } from "@react-native-material/core";
import React from 'react';
import axios from 'axios';
import api from './api';

import Resumo from './assets/Componentes/Resumo';
import StatusPedido from './assets/Componentes/StatusPedido'
import Detalhes from './assets/Componentes/Detalhes'
import { PedidoProvedor, PedidoContexto } from './assets/Contextos/PedidoContexto';


export default function App() {

  const [ exibeModal , alteraExibeModal ] = React.useState( false );


  return (
    <Box>
        <PedidoProvedor>

              <Resumo />
              <StatusPedido />

              <Button title='Detalhes' style={e.Botao} onPress={() => alteraExibeModal( !exibeModal )  } />
              <Detalhes exibeModal={exibeModal} alteraExibeModal={alteraExibeModal} />
            
        </PedidoProvedor>
    </Box> 
  );
}

const e = StyleSheet.create({
  Botao:{
    borderRadius: 5,
    padding: 3,
    width: 125,
    marginTop: 8,
    marginLeft: 15,

  },
    
})


