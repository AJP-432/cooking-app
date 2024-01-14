import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { PieChart, LineChart } from "react-native-chart-kit";

const dataPie = [
  {
    name: "Protein",
    grams: 20,
    color: "rgb(39, 111, 49)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Sugars",
    grams: 10,
    color: "rgb(51, 150, 65)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Fats",
    grams: 5,
    color: "rgb(62, 190, 81)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Carbs",
    grams: 40,
    color: "rgb(98, 205, 114)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const dataLine = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [2000, 2100, 1900, 2050, 1950, 2300, 2200], // Calorie data
      color: (opacity = 1) => `rgba(19, 174, 42, ${opacity})`,
      strokeWidth: 2,
    },
  ],
  legend: ["Calories"],
};

const chartConfig = {
  backgroundColor: "#1cc910",
  backgroundGradientFrom: "#eff3ff",
  backgroundGradientTo: "#efefef",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

const screenWidth = Dimensions.get("window").width;

const Insight = () => {
  return (
    <View style={styles.container}>
      <PieChart
        data={dataPie}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="grams"
        backgroundColor="transparent"
        paddingLeft="15"
      />
      <LineChart
        data={dataLine}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "1",
            stroke: "#ffffff",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default Insight;
