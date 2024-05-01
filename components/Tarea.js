import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'
import React from 'react'

export default function Tarea(props) {

    const procesoEliminar = (id) => {

        props.eliminarTarea(id);
 
    }

    const modificarTarea = () => {
        console.log('Modificando Tarea....');

    }


    return (
        <View style={styles.tarea}>
            <View>
                <Text style={styles.label}>Tarea: </Text>
                <Text style={styles.texto}>{props.item.nombre}</Text>
            </View>
            <View>
                <Text style={styles.label}>Descripcion: </Text>
                <Text style={styles.texto}>{props.item.descripcion}</Text>
            </View>
            <View>
                <Text style={styles.label}>Telefono: </Text>
                <Text style={styles.texto}>{props.item.telefono}</Text>
            </View>
            <View>
                <Text style={styles.label}>Fecha: </Text>
                <Text style={styles.texto}>{props.item.fecha}</Text>
            </View>
            <View>
                <Text style={styles.label}>Hora: </Text>
                <Text style={styles.texto}>{props.item.hora}</Text>
            </View>
            <View style={styles.botonesContainer}>
                <TouchableHighlight onPress={() => procesoEliminar(props.item.id)} style={styles.buttonEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={modificarTarea} style={styles.btnModificar}>
                    <Text style={styles.textoModificar}>Modificar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tarea: {
        backgroundColor: '#fff',
        marginBottom: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'blue',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    textoEliminar: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textoModificar: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    buttonEliminar:{
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        width: "30%",
        borderRadius: 10,
        marginTop: 10,
        borderWidth:1,
        borderColor:"#ffff",
      },

      btnModificar: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        width: "30%",
        borderRadius: 10,
        marginTop: 10,
        borderWidth:1,
        borderColor:"#ffff",
    },

      botonesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
})