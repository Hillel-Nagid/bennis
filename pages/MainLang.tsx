import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function MainLang() {
	return (
		<View style={styles.container}>
			<View style={styles.langButtons}>
				<Pressable style={styles.button} onPress={() => alert('hello')}>
					<Text style={styles.buttonText}>English</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => alert('hello')}>
					<Text style={styles.buttonText}>עברית</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	langButtons: {
		flex: 0.8,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ee5623',
		borderRadius: 20,
	},
	button: {
		margin: 50,
		padding: 15,
		width: 250,
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 15,
		backgroundColor: 'white',
	},
	buttonText: { fontSize: 30, textAlign: 'center' },
});
