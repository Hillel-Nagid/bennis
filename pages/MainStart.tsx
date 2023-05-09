import { useContext, useState } from 'react';
import i18n from '../i18n';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { UserContext } from '../userContext';

export default function MainStart() {
  const [userSettings,setUserSettings] = useContext(UserContext);
  const [part2, setPart2] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable
          style={styles.button}
          onPress={
            part2
              ? () => {
                  setUserSettings({ ...userSettings, orderType: 'stay' });
                  alert('finished');
                  setPart2(false)
                  console.log("j");
                }
              : () => {
                  setUserSettings({ ...userSettings, language: 'english' });
                  setPart2(true);
                  
                }
          }
        >
          <Text style={styles.buttonText}>
            {part2
              ? i18n(userSettings.language, 'ordertypeStayButton')
              : 'English'}
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={
            part2
              ? () => {
                  setUserSettings({ ...userSettings, orderType: 'to-go' });
                  alert('finished');
                  setPart2(false)
                  console.log("j");
                }
              : () => {
                  setUserSettings({ ...userSettings, language: 'hebrew' });
                  setPart2(true);
                  
                }
          }
        >
          <Text style={styles.buttonText}>
            {part2
              ? i18n(userSettings.language, 'ordertypeTogoButton')
              : 'עברית'}
          </Text>
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
  content: {
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
