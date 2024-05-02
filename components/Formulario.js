import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function Formulario({ onAgregarTarea, onClose }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [fechaSeleccionada, setFechaSeleccionada] = useState('');
  const [horaSeleccionada, setHoraSeleccionada] = useState('');

  const agregarTarea = () => {
    if (!nombre || !descripcion || !telefono || !fechaSeleccionada || !horaSeleccionada) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const nuevaTarea = {
      id: Math.random().toString(),
      nombre: nombre,
      descripcion: descripcion,
      telefono: telefono,
      fecha: fechaSeleccionada,
      hora: horaSeleccionada
    };

    onAgregarTarea(nuevaTarea);
    setNombre('');
    setDescripcion('');
    setTelefono('');
    setFecha('');
    setHora('');
  };


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleDateConfirm = (date) => {
    setFechaSeleccionada(date.toLocaleDateString());
    hideDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };


  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const handleTimeConfirm = (time) => {
    setHoraSeleccionada(time.toLocaleTimeString());
    hideTimePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };


  return (
    <>
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
            <View style={styles.label}>
              <Button title="Selecciona Fecha Limite" onPress={showDatePicker} />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
                locale='es_ES'
              />
            </View>

            <View style={styles.label}>
              <Button title="Selecciona Hora Limite" onPress={showTimePicker} />
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
                locale='es_ES'
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={styles.botonesContainer}>
        <TouchableHighlight onPress={agregarTarea} style={styles.btnGuardar}>
          <Text style={styles.textoEliminar}>Agregar</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnCancelar} title="Cerrar" onPress={onClose}>
          <Text style={styles.textoEliminar}>Cancelar</Text>
        </TouchableHighlight>
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

  btnCancelar: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
    width: "30%",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "grey",
    marginHorizontal: 5,
  },

  btnGuardar: {
    alignItems: 'center',
    backgroundColor: '#05a6ec',
    padding: 10,
    width: "30%",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#2945e3",
    marginHorizontal: 5,
  },

  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 3,
  },

  textoEliminar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});



