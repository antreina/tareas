import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Tarea from './components/Tarea';
import FormularioTarea from './components/Formulario';


export default function App() {
  //defiinir el state 
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [tareas, setTareas] = useState([
    { id: "1", nombre: "Deberes", descripcion: "Deber de matematicas", telefono: '0002251', fecha: "5/09/2024", hora: "5:51:00 PM" },
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
      <Text style={styles.titulo}>{tareas.length > 0 ? 'Lista de Tareas' : 'No hay tareas, agrega una'}</Text>
      <View style={styles.boton}>
        <TouchableHighlight title="Nueva Tarea" onPress={abrirFormulario} style={styles.btnGuardar} >
          <Text style={styles.textoBtn}>NUEVA TAREA</Text>
        </TouchableHighlight>
        {mostrarFormulario && (
          <FormularioTarea onAgregarTarea={agregarTarea}
            onClose={cerrarFormulario}
          />
        )}

      </View>
      {!mostrarFormulario && (
        <FlatList
          data={tareas}
          renderItem={({ item }) => <Tarea item={item} eliminarTarea={eliminarTarea} />}
          keyExtractor={tarea => tareas.id}
        />
      )}
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
    backgroundColor: '#f5eab7',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ffff",
  },

  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  textoBtn: {
    color: ' #050404',
    fontWeight: 'bold',
    textAlign: 'center'
  },

});
