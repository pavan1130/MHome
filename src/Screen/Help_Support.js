import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const botResponses = [
  {pattern: /(hello|hi|hey)/i, response: 'Hi there!'},
  {
    pattern: /mentorship benefits/i,
    response:
      'Mentorship provides personal growth, skill development, and networking opportunities.',
  },
  {
    pattern: /find a mentor/i,
    response:
      'Research mentorship programs in your field or consider reaching out to professionals on platforms like LinkedIn.',
  },
  {
    pattern: /mentor qualities/i,
    response:
      'A good mentor listens well, provides constructive feedback, shares their knowledge, and supports your goals.',
  },
  {
    pattern: /mentor sessions/i,
    response:
      "It's common to have regular meetings with your mentor, whether weekly or monthly, to discuss progress and set goals.",
  },
  {
    pattern: /mentorship commitment/i,
    response:
      'A successful mentorship requires commitment from both the mentor and the mentee to work together and invest time.',
  },
  {
    pattern: /help|support/i,
    response:
      'Sure, I can assist you with various topics. Please select an option:\n\n1. Account Issues\n2. Technical Issues\n3. Payment Problems\n4. How to Use\n5. Refunds\n6. Contacting Support\n7. Feedback\n8. Things Not Working\n9. Forgot Password',
  },
  {
    pattern: /1/i,
    response:
      'I apologize for the inconvenience. Please share more details about your account issue, and I will guide you further.',
  },
  {
    pattern: /2/i,
    response:
      "I'm sorry to hear that. Can you specify what technical issue you're facing?",
  },
  {
    pattern: /3/i,
    response:
      "Let's sort this out. Please provide me with more details about your payment issue.",
  },
  {
    pattern: /4/i,
    response:
      'Sure, can you specify which feature or section you need help with?',
  },
  {
    pattern: /5/i,
    response:
      'I understand. To help you with a refund, please share the relevant order or transaction details.',
  },
  {
    pattern: /6/i,
    response:
      'You can reach out to our support team via email at support@example.com or call us at [phone number].',
  },
  {
    pattern: /7/i,
    response:
      'Thank you for your feedback! We constantly strive to improve, so every piece of feedback is valuable to us.',
  },
  {
    pattern: /8/i,
    response:
      "I'm sorry for the inconvenience. Please share more specifics, so I can guide you better.",
  },
  {
    pattern: /9/i,
    response:
      'No worries. Please click on "Forgot Password" on the login page and follow the instructions to reset your password.',
  },
  {
    pattern: /.*/,
    response:
      'Im sorry, but I didnt quite understand that. Could you please rephrase or provide more details?',
  },
];

const Help_Support = () => {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      const currentTime = getCurrentTime();
      setMessages([
        ...messages,
        {text: userInput, isUserMessage: true, time: currentTime},
      ]);
      setUserInput('');
    }
  };

  useEffect(() => {
    // Simulate bot responses after the user sends a message
    if (messages.length % 2 === 1) {
      setTimeout(() => {
        const lastUserMessage = messages[messages.length - 1].text;
        const matchingResponse = botResponses.find(response =>
          response.pattern.test(lastUserMessage),
        );

        if (matchingResponse) {
          const currentTime = getCurrentTime();
          setMessages([
            ...messages,
            {
              text: matchingResponse.response,
              isUserMessage: false,
              time: currentTime,
            },
          ]);
        } else {
          const randomResponse =
            botResponses[Math.floor(Math.random() * botResponses.length)];
          const currentTime = getCurrentTime();
          setMessages([
            ...messages,
            {
              text: randomResponse.response,
              isUserMessage: false,
              time: currentTime,
            },
          ]);
        }
      }, 1000); // Simulating a delay before the bot responds
    }
  }, [messages]);

  return (
    <View style={styles.container}>
      <View style={styles.appNameContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Image
            source={require('MHome/src/Screen/images/BackButton.png')}
            style={styles.appLogo}
          />
        </TouchableOpacity>
        <View style={styles.appNameTextContainer}>
          <Text style={styles.appNameText}>Help & Support</Text>
        </View>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
          Welcome! 🤖 Let's chat with our friendly AI bot for quick assistance!
        </Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.messageContainer,
              item.isUserMessage
                ? styles.userMessageContainer
                : styles.botMessageContainer,
            ]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.time}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Type your message..."
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  appNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
    marginLeft: 20,
  },
  appLogo: {
    width: 32,
    height: 32,
    marginRight: 30,
  },
  appNameTextContainer: {
    width: 266,
    height: 28,
    justifyContent: 'center',
  },
  appNameText: {
    color: 'black',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    letterSpacing: -0.165,
  },
  welcomeContainer: {
    marginBottom: 16,
    alignItems: 'center',
    marginTop: 30,
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageContainer: {
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  userMessageContainer: {
    backgroundColor: '#F7FFF7',
    alignSelf: 'flex-end',
  },
  botMessageContainer: {
    backgroundColor: '#D9D9D9',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Help_Support;
