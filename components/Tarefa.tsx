import { Button, Text, View, StyleSheet } from "react-native"
import _tarefa from "../types/_tarefa"

type TarefaProp = {
    dados: _tarefa,
    handleDeletePress: any
}

export default function Tarefa(props: TarefaProp) {
    return <View>
        <Text style={styles.tarefas}>{props.dados.texto}</Text>
        <Button color={'red'} title="EXCLUIR" onPress={()=>{props.handleDeletePress(props.dados.id)}}/>
    </View>
}

const styles = StyleSheet.create({
    tarefas: {
      color: 'rgb(255, 252, 249)',
      textAlign: 'center',
    }
  }) 