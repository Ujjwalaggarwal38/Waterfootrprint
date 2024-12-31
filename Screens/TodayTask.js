import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Alert } from 'react-native';
import { useTasks } from './TaskContext';

const TodaysTasks = ({ navigation }) => {
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTasks(); 

  const handleAddTask = () => {
    if (!newTask) {
      Alert.alert('Error', 'Please enter a task name.');
      return;
    }

    const task = { id: String(tasks.length + 1), name: newTask, priority, completed: false };
    addTask(task); // Add task to context

    setNewTask(''); // Clear the input field
    
    // Pass updated tasks directly
    navigation.navigate('Farmers', { updatedTasks: [...tasks, task] }); // Pass the newly added task
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId); // Delete task from context

    // Filter tasks and pass updated list
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    navigation.navigate('Farmers', { updatedTasks }); // Pass the filtered tasks
  };

  return (
    <View style={styles.container}>
      {/* Task Input Section */}
      <View style={styles.newTaskContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Task"
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Tasks List Section */}
      <Text style={styles.title}>Today's Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.taskItem, item.completed && styles.completedTask]}>
            <Text style={styles.taskName}>
              {item.name} ({item.priority})
            </Text>
            <View style={styles.taskActions}>
              <TouchableOpacity
                style={[styles.completeButton, item.completed && styles.completed]}
                onPress={() => toggleTaskCompletion(item.id)}
              >
                <Text style={styles.buttonText}>
                  {item.completed ? 'Undo' : 'Complete'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteTask(item.id)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center',
  },
  newTaskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 10,
    backgroundColor: '#FFF',
  },
  addButton: {
    padding: 12,
    backgroundColor: '#006D77',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  completedTask: {
    backgroundColor: '#E0E0E0',
  },
  taskName: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    marginRight: 10,
  },
  taskActions: {
    flexDirection: 'row',
  },
  completeButton: {
    backgroundColor: '#006D77',
    padding: 12,
    borderRadius: 30,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#D32F2F',
    padding: 12,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TodaysTasks;
