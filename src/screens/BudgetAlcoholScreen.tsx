import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Sample data (in the future will be fetched from database)
const sampleAlcohols = [
  {
    id: 1,
    name: "Żubrówka",
    price: 25.99,
    type: "Vodka",
    volume: 0.5,
    alcohol: 40,
  },
  {
    id: 2,
    name: "Tyskie",
    price: 3.5,
    type: "Beer",
    volume: 0.5,
    alcohol: 5.2,
  },
  {
    id: 3,
    name: "Carlo Rossi",
    price: 18.99,
    type: "Wine",
    volume: 0.75,
    alcohol: 10,
  },
  {
    id: 4,
    name: "Jack Daniels",
    price: 89.99,
    type: "Whisky",
    volume: 0.7,
    alcohol: 40,
  },
  {
    id: 5,
    name: "aaa",
    price: 89.99,
    type: "Whisky",
    volume: 0.7,
    alcohol: 40,
  },
  {
    id: 6,
    name: "aaa",
    price: 89.99,
    type: "Whisky",
    volume: 0.7,
    alcohol: 40,
  },
];

const BudgetAlcoholScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [budget, setBudget] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All"); // Domyślnie wybrana kategoria "All"
  const [results, setResults] = useState<any[]>([]);

  const categories = ["All", "Beer", "Wine", "Vodka", "Whisky"];

  const handleBudgetChange = (value: string) => {
    // Accept only numbers and dot (for decimal values)
    if (/^\d*\.?\d*$/.test(value) || value === "") {
      setBudget(value);
    }
  };

  const findAlcohols = () => {
    Keyboard.dismiss();
    const budgetValue = parseFloat(budget);

    if (isNaN(budgetValue) || budgetValue <= 0) {
      // Handle invalid budget
      return;
    }

    // Filter alcohols by budget and category
    let filteredResults = sampleAlcohols.filter(
      (item) => item.price <= budgetValue
    );

    if (selectedCategory && selectedCategory !== "All") {
      filteredResults = filteredResults.filter(
        (item) => item.type === selectedCategory
      );
    }

    // Sort by alcohol-to-price ratio (best ratio on top)
    filteredResults.sort((a, b) => b.alcohol / b.price - a.alcohol / a.price);

    setResults(filteredResults);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Find alcohol within your budget</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your budget (PLN):</Text>
        <TextInput
          style={styles.input}
          value={budget}
          onChangeText={handleBudgetChange}
          placeholder="Enter amount"
          keyboardType="numeric"
          placeholderTextColor="#999"
        />
      </View>

      <Text style={styles.label}>Select category:</Text>
      <View style={styles.categoriesWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.findButton} onPress={findAlcohols}>
        <Text style={styles.findButtonText}>Find suggestions</Text>
      </TouchableOpacity>

      <View style={styles.resultsSection}>
        {results.length > 0 ? (
          <>
            <Text style={styles.resultsTitle}>Suggestions for you:</Text>
            <ScrollView style={styles.resultsContainer}>
              {results.map((item) => (
                <View key={item.id} style={styles.alcoholItem}>
                  <Image
                    source={require("../../assets/bottle-placeholder.png")}
                    style={styles.alcoholImage}
                  />
                  <View style={styles.alcoholInfo}>
                    <Text style={styles.alcoholName}>{item.name}</Text>
                    <Text style={styles.alcoholType}>{item.type}</Text>
                    <Text style={styles.alcoholDetails}>
                      {item.volume}L • {item.alcohol}% • {item.price.toFixed(2)}{" "}
                      PLN
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </>
        ) : (
          <View style={styles.emptyResults}>
            <Text style={styles.emptyResultsText}>
              Enter budget and select category to see suggestions
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#2C2C54", // Dark purple background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF1493", // Neon pink
    marginBottom: 16,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "#FF1493",
    borderRadius: 8,
    padding: 12,
    color: "#FFFFFF",
    fontSize: 16,
  },
  categoriesWrapper: {
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#00CED1",
  },
  selectedCategory: {
    backgroundColor: "#FF1493",
    borderColor: "#FFFFFF",
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  selectedCategoryText: {
    fontWeight: "bold",
  },
  findButton: {
    backgroundColor: "#FF1493",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#FF1493",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 8,
  },
  findButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultsSection: {
    flex: 1,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00CED1",
    marginBottom: 10,
  },
  resultsContainer: {
    flex: 1,

    //maxHeight: height * 0.4, // Ograniczenie maksymalnej wysokości listy wyników
  },
  alcoholItem: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#00CED1",
  },
  alcoholImage: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  alcoholInfo: {
    flex: 1,
  },
  alcoholName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  alcoholType: {
    fontSize: 14,
    color: "#FF1493",
    marginBottom: 4,
  },
  alcoholDetails: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  emptyResults: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyResultsText: {
    color: "#999",
    textAlign: "center",
    fontSize: 16,
  },
});

export default BudgetAlcoholScreen;
