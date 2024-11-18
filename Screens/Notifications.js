import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]); 
  return (
    <View style={styles.container}>
      {notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../images/notificationback.png')}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>You don't have any notifications</Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.notificationItem}>
              <Text style={styles.notificationText}>{item.message}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  emptyText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  notificationItem: {
    backgroundColor: '#1E2A44',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  notificationText: {
    color: 'white',
    fontSize: 16,
  },
});
