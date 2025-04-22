import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import _tarefa from '../types/_tarefa';
import Tarefa from '../components/Tarefa';

export default function ToDoScreen({navigation}) {
  const [texto, setTexto] = useState<string>('');
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);

  function adicionarTarefa() {
    if(texto == '') {
      alert("Insira um texto");
      return;
    }
    let tarefa: _tarefa = {
      id: tarefas.length + 1,
      texto
    }

    setTarefas([...tarefas, tarefa]);
  }

  function mostrarTarefas() {
    return tarefas.map(t => <Tarefa key={t.id} dados={t} handleDeletePress={excluirTarefas}/>);
  }
  
  function excluirTarefas(id:number) {
    let f = tarefas.filter(t => t.id != id);
    setTarefas(f);
    navigation.navigate('teste');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
      />
      <Button
        color='rgba(255, 252, 249, 0.3)' 
        title='Adicionar Tarefa'
        onPress={adicionarTarefa}
      />
      {mostrarTarefas()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 3, 6)',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'rgb(255, 252, 249)',
    borderRadius: '10px',
    textAlign: 'center',
    margin: 1,
  },
  tarefas: {
    color: 'rgb(255, 252, 249)'
  }
});
