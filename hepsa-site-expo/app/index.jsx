import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Page() {
    return (
        <ScrollView style={{ flex: 1 }}>
            
            <View style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.title}>Hierros el puente</Text>
                    <Text style={styles.subtitle}>Ruta 12</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
});