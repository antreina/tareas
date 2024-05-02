import { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Tarea(props) {
    const [hecho, setHecho] = useState(false);

    const procesoEliminar = (id) => {

        props.eliminarTarea(id);

    }
    const toggleHecho = () => {
        setHecho(!hecho);
    }

    // const modificarTarea = () => {
    //     console.log('Modificando Tarea....');

    // }

    return (
        <View style={[styles.tarea, hecho ? styles.tareaHecho : null]}>
            <TouchableHighlight onPress={toggleHecho}>
                <View style={styles.checkboxContainer}>
                    {hecho ? (
                        <Icon name="check-circle" size={30} color="green" />
                    ) : (
                        <Icon name="radio-button-unchecked" size={30} color="gray" />
                    )}
                    <Text style={styles.textoHecho}>{hecho ? 'Hecho' : 'Pendiente'}</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.row} >
                <View>
                    <Text style={styles.label}>Tarea: </Text>
                    <Text style={styles.texto}>{props.item.nombre}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Fecha limite: </Text>
                    <Text style={styles.texto}>{props.item.fecha}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Hora maxima: </Text>
                    <Text style={styles.texto}>{props.item.hora}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.label}>Descripcion: </Text>
                <Text style={styles.texto}>{props.item.descripcion}</Text>
            </View>
            <View style={styles.row} >
                <View>
                    <Text style={styles.label}>Telefono: </Text>
                    <Text style={styles.texto}>{props.item.telefono}</Text>
                </View>

            </View>
            <View style={styles.botonesContainer}>
                <TouchableHighlight onPress={() => procesoEliminar(props.item.id)} style={styles.buttonEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar</Text>
                </TouchableHighlight>

                {/* <TouchableHighlight onPress={modificarTarea} style={styles.btnModificar}>
                    <Text style={styles.textoModificar}>Modificar</Text>
                </TouchableHighlight> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tarea: {
        backgroundColor: '#f5eab7',
        margin: 10,
        borderWidth: 1,
        borderColor: '#927a07',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },

    label: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10
    },
    texto: {
        fontSize: 16,
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

    buttonEliminar: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        width: "30%",
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#ffff",
    },

    btnModificar: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        width: "30%",
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#ffff",
    },

    botonesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },


    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    tareaHecho: {
        backgroundColor: 'lightgreen',
    }

})