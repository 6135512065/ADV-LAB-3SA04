import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet } from 'react-native';

const availableZipItems = [
    { place: '1. Nakhonsithammarat', code: '80000' },
    { place: '2. Krabi', code: '81000' },
    { place: '3. Pangnga', code: '82000' },
    { place: '4. Phuket', code: '83000' },
    { place: '5. Suratthani', code: '84000' },
    { place: '6. Ranong', code: '85000' },
    { place: '7. Chumporn', code: '86000' },
    { place: '8. Songkhla', code: '90000' },
    { place: '9. Satun', code: '91000' },
    { place: '10. Trang', code: '92000' },
    { place: '11. Phatthalung', code: '93000' },
    { place: '12. Pattani', code: '94000' },
    { place: '13. Yala', code: '95000' },
    { place: '14. Narathiwat', code: '96000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={{ borderColor: 'white', borderWidth: 30 }}>
            <Text style={styles.container, styles.Province}>{place}</Text>
            <Text style={styles.container}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.title}>รายชื่อแต่ละจังหวัดและรหัสไปรษณีย์ ( ภาคใต้ )</Text>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 15,
        paddingVertical: 5,
        fontWeight: "bold",
        textAlign: "center",
        color: "red",
        backgroundColor: "#CCFFCC",
    },
    Province: {
        borderColor: "#CCFFCC",
        borderRadius: 6,
        backgroundColor: "#CCFFCC",
        color: "#20232a",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    title: {
        marginTop: 10,
        paddingVertical: 35,
        backgroundColor: "#66FF33",
        color: "black",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    }
});