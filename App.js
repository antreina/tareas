import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Tarea from './components/Tarea';
import FormularioTarea from './components/Formulario';


export default function App() {
  //defiinir el state 
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [tareas, setTareas] = useState([
    { id: "1", nombre: "Deberes", descripcion: "deber de matematicas", telefono: '0002251', fecha: "01", hora: "11" },
  ]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
    setMostrarFormulario(false);
  };

  const abrirFormulario = () => {
    setMostrarFormulario(true);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };



  // Función para eliminar unatelefono
  const eliminarTarea = id => {
    setTareas((tareasActuales) => {
      return tareasActuales.filter(tarea => tarea.id !== id)
    })

  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.titulo}>Administrador de tareas</Text> */}
      <Text style={styles.titulo}>{tareas.length > 0 ? 'Lista de Tareas' : 'No hay tareas, agrega una'}</Text>
      <Button title="Nueva Tarea" onPress={abrirFormulario} style={styles.btnGuardar} />
      {mostrarFormulario && (
        <FormularioTarea onAgregarCita={agregarTarea}
          onClose={cerrarFormulario}
        />

      )}
      <FlatList
        data={tareas}
        renderItem={({ item }) => <Tarea item={item} eliminarTarea={eliminarTarea} />}
        keyExtractor={tarea => tareas.id}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b4101',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titulo: {
    color: '#fff',
    marginTop: 50,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
  },

  btnGuardar: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    width: "30%",
    borderRadius: 10,
    marginTop: 5,
    borderWidth:1,
    borderColor:"#ffff",
  },

});
