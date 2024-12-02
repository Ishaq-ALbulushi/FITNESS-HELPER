const chatlog = document.getElementById('chatlog');
const input = document.querySelector('#chat-input input');

// Define responses for the chatbot
const responses = {
	'healthy eating': 'Healthy eating means consuming a variety of nutritious foods from all of the food groups. It means choosing foods that are high in nutrients and low in saturated fat, trans fat, and added sugars.',
	'exercise': 'Regular exercise can help you maintain a healthy weight, lower your risk of chronic diseases, and improve your mental health.',
	'sleep': 'Getting enough sleep is important for overall health and well-being. Adults should aim for 7-9 hours of sleep per night.',
    'hydration': 'Staying hydrated is important for many aspects of health, including regulating body temperature, digestion, and brain function. You should aim to drink at least 8 cups of water per day.',
	'stress': 'Chronic stress can have negative effects on both physical and mental health. Try to find healthy ways to manage stress, such as exercise, meditation, or spending time in nature.',
	'screen time': 'Spending too much time on electronic devices can negatively impact your sleep, vision, and mental health. Try to limit your screen time, especially before bedtime.',
	'vitamins': 'While a healthy diet can provide most of the vitamins and minerals you need, some people may benefit from taking supplements. Talk to your healthcare provider to determine if supplements are right for you.',
	'sugar': 'Eating too much sugar can lead to weight gain, tooth decay, and an increased risk of chronic diseases such as diabetes and heart disease. Try to limit your intake of added sugars, such as those found in soda, candy, and desserts.',
	'protein': 'Protein is an essential nutrient that helps build and repair tissues in the body. Good sources of protein include meat, fish, eggs, and legumes.',
	'fiber': 'Fiber is important for digestive health and can help lower cholesterol and control blood sugar levels. Good sources of fiber include fruits, vegetables, and whole grains.',
	'alcohol': 'Drinking alcohol in moderation can have some health benefits, but drinking too much can lead to liver damage, high blood pressure, and an increased risk of cancer. The recommended limit for alcohol consumption is 1 drink per day for women and 2 drinks per day for men.',
	'meditation': 'Meditation can help reduce stress and anxiety, improve sleep, and increase feelings of well-being. There are many different types of meditation, so find one that works for you and make it a regular practice.',
	'cardio': 'Cardiovascular exercise, such as running or cycling, can help improve heart health, boost mood, and increase endurance. Aim for at least 150 minutes of moderate-intensity cardio per week.',
	'resistance training': 'Resistance training, such as weight lifting or bodyweight exercises, can help build muscle, increase bone density, and improve balance and flexibility. Aim for at least 2 days per week of resistance training.',
    'stretching': 'Stretching can help improve flexibility, reduce muscle soreness, and prevent injury. Aim to stretch major muscle groups for at least 10-15 minutes per day.',
'yoga': 'Yoga can help improve flexibility, strength, and balance, as well as reduce stress and anxiety. There are many different styles of yoga, so try a few to find one that works for you.',
'walking': 'Walking is a low-impact form of exercise that can help improve cardiovascular health, reduce stress, and burn calories. Aim for at least 30 minutes of brisk walking per day.',
'jogging': 'Jogging is a step up from walking, providing a higher intensity workout that can help improve cardiovascular health, build endurance, and burn calories. Start slowly and gradually increase your speed and distance over time.',
'swimming': 'Swimming is a low-impact form of exercise that can help improve cardiovascular health, build muscle, and increase flexibility. Aim for at least 30 minutes of swimming per day.',
'biking': 'Biking is a fun and effective way to improve cardiovascular health, build leg strength, and burn calories. Start with short rides and gradually increase your distance and intensity over time.',
'hiking': 'Hiking is a great way to get outdoors and enjoy nature while improving cardiovascular health, building leg strength, and burning calories. Start with easy trails and gradually increase the difficulty over time.',
'healthy snacks': 'Healthy snacks can help keep you fueled throughout the day and prevent overeating at mealtimes. Good options include fresh fruit, vegetables with hummus, nuts, and yogurt.',
'balanced diet': 'A balanced diet includes a variety of nutrient-rich foods from all of the food groups, including fruits, vegetables, whole grains, lean proteins, and healthy fats.',
'mental health': 'Mental health is just as important as physical health. Take care of your mental health by practicing self-care, seeking support from loved ones, and considering therapy or counseling if needed.',
'self-care': 'Self-care involves taking time for yourself to do things that make you feel good and improve your well-being. This can include activities like reading, taking a bath, or practicing a hobby.',
'healthy fats': 'Healthy fats, such as those found in nuts, seeds, and avocados, are an important part of a balanced diet and can help improve heart health and brain function.',
'healthy breakfast': 'A healthy breakfast can help provide energy for the day and prevent overeating later on. Good options include oatmeal with fruit, whole grain toast with avocado and eggs, or a smoothie with spinach and berries.',
'healthy lunch': 'A healthy lunch should include a mix of protein, whole grains, and vegetables. Good options include a turkey and avocado sandwich on whole grain bread, a quinoa bowl with roasted vegetables, or a salad with grilled chicken.',
'healthy dinner': 'A healthy dinner should be balanced and include a mix of protein, whole grains, and vegetables. Good options include grilled fish with roasted sweet potatoes and green beans, lentil soup with a side salad, or a veggie stir-fry with brown rice.',
'healthy snacks': 'Healthy snacks can help keep you fueled throughout the day and prevent overeating at mealtimes. Good options include fresh fruit, vegetables with hummus, nuts, and yogurt.',
'sugar cravings': 'Sugar cravings can be a sign that your body is not getting enough nutrients or that you are not eating enough food in general. Try to eat a balanced diet with regular meals and snacks to prevent sugar cravings.',
'endurance': 'Endurance is important for overall health and can be improved through exercises such as jogging, swimming, or biking.',
'core strength': 'Core strength is important for overall health and can be improved through exercises such as planks, sit-ups, or Pilates.',
'recovery': 'Recovery is important for overall health and can include practices such as foam rolling, stretching, and taking rest days from exercise.',
'goal setting': 'Setting goals can help motivate you to make healthy changes and stick to them. Set realistic and specific goals, and track your progress along the way.',
'progress tracking': 'Tracking your progress can help motivate you to continue making healthy changes. Keep a journal or use a fitness app to track your exercise, food intake, and other health behaviors.',
'community support': 'Having social support can be helpful for making and maintaining healthy changes. Join a fitness class or find a workout buddy to help keep you accountable and motivated.',
	'default': 'I\'m sorry, I didn\'t understand your message. Please ask me about healthy eating, exercise, or sleep.'
};

// Handle user input
function handleInput() {
	const userMessage = input.value;
	addMessage(userMessage, true);
	const response = getResponse(userMessage);
	addMessage(response, false);
	input.value = '';
}

// Get a response from the chatbot based on the user's message
function getResponse(message) {
	const normalizedMessage = message.toLowerCase();
	const response = responses[normalizedMessage] || responses['default'];
	return response;
}

// Add a message to the chatlog
function addMessage(message, isUser) {
	const messageClass = isUser ? 'user-message' : 'bot-message';
	const messageElement = document.createElement('div');
	messageElement.classList.add(messageClass);
	messageElement.innerText = message;
	chatlog.appendChild(messageElement);
}

// Listen for user input and handle it
document.querySelector('#chat-input button').addEventListener('click', handleInput);
input.addEventListener('keydown', function(event) {
	if (event.code === 'Enter') {
		handleInput();
	}
});
