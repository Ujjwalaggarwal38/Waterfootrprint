import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';

const FarmersDash = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    const updatedTasks = route.params?.updatedTasks;
    if (Array.isArray(updatedTasks) && updatedTasks.length > 0) {
      setTasks(updatedTasks);
    }

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=8dc5456c09d64e04a29203517241112&q=Bengaluru&days=7"
        );
        const data = await response.json();
        if (data && data.forecast) {
          setWeather(data);
          setLoadingWeather(false);

          const willRainTomorrow =
            data.forecast.forecastday[1].day.totalprecip_mm > 0.5;
          if (willRainTomorrow) {
            Alert.alert(t('alert'));
          }
        } else {
          setLoadingWeather(false);
        }
      } catch (error) {
        console.error('Error fetching weather:', error);
        setLoadingWeather(false);
      }
    };

    fetchWeather();
  }, [route.params?.updatedTasks]);

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome, Farmer John! 🌾</Text>
          <Text style={styles.subWelcomeText}>Stay informed and productive today.</Text>
        </View>

        <View style={styles.weatherContainer}>
          <Text style={styles.sectionTitle}>Weather Forecast (Bengaluru, India)</Text>
          {loadingWeather ? (
            <Text style={styles.loadingText}>Loading weather...</Text>
          ) : weather ? (
            <View style={styles.weatherInfoContainer}>
              {weather.forecast.forecastday.map((day, index) => {
                const date = new Date(day.date);
                const formattedDate = date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                });

                return (
                  <View key={index} style={styles.weatherDayCard}>
                    <Text style={styles.weatherDay}>{formattedDate}</Text>
                    <Text style={styles.weatherTemp}>
                      Max Temp: {day.day.maxtemp_c}°C | Min Temp: {day.day.mintemp_c}°C
                    </Text>
                    <Text style={styles.weatherRain}>
                      Rain chance: {day.day.totalprecip_mm} mm
                    </Text>
                  </View>
                );
              })}
            </View>
          ) : (
            <Text style={styles.errorText}>Error loading weather data.</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.taskManagerContainer}
          onPress={() =>
            navigation.navigate('Task', {
              onDeleteTask: handleDeleteTask,
            })
          }
        >
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          {tasks.length === 0 ? (
            <Text style={styles.noTasksText}>No tasks available</Text>
          ) : (
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.taskItem}>
                  <Text style={styles.taskName}>{item.name}</Text>
                </View>
              )}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tipsContainer}
          onPress={() => navigation.navigate('Hello')}
        >
          <Text style={styles.sectionTitle}>Farming Resources</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Farmerscal')}
        >
          <Text style={styles.buttonText}>Access Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Camerae')}
        >
          <Text style={styles.buttonText}>Scan Crop</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.communityContainer}
          onPress={() => navigation.navigate('Commute')}
        >
          <Text style={styles.sectionTitle}>Farmer To Farmer</Text>
          <Text style={styles.communityText}>
            Connect, share, and grow with fellow farmers.
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Fixed Chatbot Button */}
      <View style={styles.fixedChatbot}>
        <TouchableOpacity onPress={() => navigation.navigate('chat')}>
          <Image source={require('../images/chatbot.png')} style={styles.chatbotImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 1,
    paddingBottom: 10,
  },
  welcomeContainer: {
    marginTop: 10,
    backgroundColor: '#E0F7FA',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#006D77',
    marginBottom: 5,
  },
  subWelcomeText: {
    fontSize: 16,
    color: '#555',
  },
  weatherContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  loadingText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  weatherInfoContainer: {
    marginTop: 10,
  },
  fixedChatbot: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    zIndex: 1000,
  },
  chatbotImage: {
    width: 70,
    height: 70,
  },
  rightAlignedContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop:50,
  },
  weatherDayCard: {
    marginBottom: 15,
    backgroundColor: '#E0F7FA',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  weatherDay: {
    fontSize: 18,
    fontWeight: '700',
    color: '#006D77',
  },
  weatherTemp: {
    fontSize: 14,
    color: '#555',
  },
  weatherRain: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
  errorText: {
    color: '#D32F2F',
    textAlign: 'center',
  },
  taskManagerContainer: {
    backgroundColor: '#FFF3E0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  taskItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  noTasksText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  tipsContainer: {
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  tipItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#006D77',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  communityContainer: {
    backgroundColor: '#E0F7FA',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  communityText: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default FarmersDash;
