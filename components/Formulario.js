// Nuevo componente: FormularioTarea.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function Formulario({ onAgregarTarea, onClose }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');



  const agregarTarea = () => {

    if (!nombre || !descripcion) {
      alert('Por favor completa todos los campos.');
      return;
    }


    const nuevaTarea = {
      id: Math.random().toString(),
      nombre: nombre,
      descripcion: descripcion,
      telefono: telefono,
      fecha: fecha,
      hora: hora
    };

    onAgregarTarea(nuevaTarea);

    setNombre('');
    setDescripcion('');
    setTelefono('');

  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const handleConfirmHora = (time) => {
    console.warn("A date has been picked: ", time);
    hideDatePicker();

  };
  const showDatePickerHora = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePickerHora = () => {
    setDatePickerVisibility(false);
  };



  return (
    <>
      <View style={styles.formulario}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Descripción:</Text>
        <TextInput
          multiline
          style={styles.input}
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <Text style={styles.label}>Telefono:</Text>
        <TextInput
          style={styles.input}
          value={telefono}
          onChangeText={setTelefono}
          keyboardType='numeric'
        />

        <Text style={styles.label}>Fecha:</Text>
        <TextInput
          style={styles.input}
          value={fecha}
          onChangeText={setFecha}
        />

        <Text style={styles.label}>Hora:</Text>
        <TextInput
          style={styles.input}
          value={hora}
          onChangeText={setHora}
        />
        <Button style={styles.btnGuardar} title="Agregar Tarea" onPress={agregarTarea} />
        <Button style={styles.btnCancelar} title="Cerrar" onPress={onClose} />
      </View>

      <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          locale='es_ES'
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}

        />
      </View>

      <View>
        <Button title="Show Time Picker" onPress={showDatePickerHora} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          locale='es_ES'
          onConfirm={handleConfirmHora}
          onCancel={hideDatePickerHora}
        />
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  formulario: {
    margin: 20,
    backgroundColor: '#F3CA56',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },


  btnGuardar: {
    flex: 1,
    padding: 10,
    backgroundColor: 'blue',
    marginVertical: 10,
    marginLeft: 5
},

btnCancelar: {
  flex: 1,
  padding: 10,
  backgroundColor: '#797871',
  marginVertical: 10,
  marginLeft: 5,
},
});



