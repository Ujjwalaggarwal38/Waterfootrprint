import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { useTranslation } from 'react-i18next';

const Leaderboard = () => {
  const { t } = useTranslation();
  const data = [
    { id: "1", name: "Alex", drops: 1069 },
    { id: "2", name: "Ron", drops: 1000 },
    { id: "3", name: "Dave", drops: 980 },
    { id: "4", name: "Eve", drops: 950 },
    { id: "5", name: "Sam", drops: 930 },
    { id: "6", name: "John", drops: 900 },
    { id: "7", name: "Emma", drops: 890 },
    { id: "8", name: "Liam", drops: 880 },
  ];

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.podiumContainer}>
          <View style={[styles.podiumItem, styles.secondPlace]}>
            <Image
              source={require('../images/secondpos.png')}
              style={styles.podiumImage}
            />
            <Text style={styles.podiumName}>Ron</Text>
            <Text style={styles.podiumScore}>1000 pts</Text>
          </View>
          <View style={[styles.podiumItem, styles.firstPlace]}>
            <Image
              source={require('../images/firstpos.png')}
              style={styles.podiumImage}
            />
            <Text style={styles.podiumName}>Alex</Text>
            <Text style={styles.podiumScore}>1069 pts</Text>
          </View>
          <View style={[styles.podiumItem, styles.thirdPlace]}>
            <Image
              source={require('../images/thirdpos.png')}
              style={styles.podiumImage}
            />
            <Text style={styles.podiumName}>Dave</Text>
            <Text style={styles.podiumScore}>980 pts</Text>
          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.listSection}>
        <View style={styles.textrank}>
          <Text style={styles.rankText}>{t('yourrank')} 402/123000</Text>
        </View>

        <View style={styles.rankText1}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listText}>
                  {item.id}. {item.name}
                </Text>
                <Text style={styles.listText}>{item.drops}{t('drops')}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  topSection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5EE4FF",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "relative",
    paddingBottom: 60,
  },
  podiumContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  podiumItem: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 10,
    width: 80,
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 6,
  },
  firstPlace: {
    backgroundColor: "#FFD966",
    height: 170,
  },
  secondPlace: {
    backgroundColor: "#DBE2E9",
    height: 150,
  },
  thirdPlace: {
    backgroundColor: "#FFB870",
    height: 130,
  },
  podiumImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: -30, // Position the image outside the podium
    zIndex: 1, // Ensure the image appears above the podium
  },
  podiumName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
    marginTop: 35, // Spacing to account for the image
  },
  podiumScore: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  listSection: {
    flex: 6,
    padding: 20,
    backgroundColor: "#fff",
  },
  rankText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  rankText1: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  listText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Leaderboard;
