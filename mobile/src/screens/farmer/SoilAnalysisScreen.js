import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { GlassCard } from '../../components/GlassCard';
import { LanguagePill } from '../../components/LanguagePill';
import { COLORS, SIZES } from '../../constants/theme';

export default function SoilAnalysisScreen({ navigation }) {
  const [nitrogen, setNitrogen] = useState('140');
  const [phosphorus, setPhosphorus] = useState('42');
  const [potassium, setPotassium] = useState('180');
  const [ph, setPh] = useState('6.8');
  const [analyzed, setAnalyzed] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Feather name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Soil Health & N-P-K</Text>
          <LanguagePill />
        </View>

        {/* Form Inputs */}
        <GlassCard style={styles.formCard}>
          <Text style={styles.cardHeading}>Enter Soil Test Parameters</Text>

          <View style={styles.inputRow}>
            <View style={styles.inputCol}>
              <Text style={styles.label}>Nitrogen (N) kg/ha</Text>
              <TextInput
                style={styles.input}
                value={nitrogen}
                onChangeText={setNitrogen}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputCol}>
              <Text style={styles.label}>Phosphorus (P) kg/ha</Text>
              <TextInput
                style={styles.input}
                value={phosphorus}
                onChangeText={setPhosphorus}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.inputRow}>
            <View style={styles.inputCol}>
              <Text style={styles.label}>Potassium (K) kg/ha</Text>
              <TextInput
                style={styles.input}
                value={potassium}
                onChangeText={setPotassium}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputCol}>
              <Text style={styles.label}>Soil pH (0-14)</Text>
              <TextInput
                style={styles.input}
                value={ph}
                onChangeText={setPh}
                keyboardType="numeric"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.analyzeBtn}
            onPress={() => setAnalyzed(true)}
          >
            <Ionicons name="sparkles" size={16} color="#ffffff" />
            <Text style={styles.analyzeBtnText}>Analyze Soil with AI</Text>
          </TouchableOpacity>
        </GlassCard>

        {/* Results */}
        {analyzed && (
          <View style={styles.resultsWrap}>
            <GlassCard heavy style={styles.resultCard}>
              <View style={styles.scoreRow}>
                <View style={styles.scoreCircle}>
                  <Text style={styles.scoreText}>86%</Text>
                  <Text style={styles.scoreSub}>Good Health</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 16 }}>
                  <Text style={styles.resTitle}>Soil Fertility: Optimal</Text>
                  <Text style={styles.resDesc}>
                    Soil nitrogen and organic carbon are balanced. Slightly low phosphorus detected.
                  </Text>
                </View>
              </View>
            </GlassCard>

            <GlassCard style={styles.advisoryCard}>
              <Text style={styles.advTitle}>🌾 Recommended Bio-Fertilizer Schedule</Text>
              <Text style={styles.advItem}>• Apply Single Super Phosphate (SSP) at 35 kg/acre during field preparation.</Text>
              <Text style={styles.advItem}>• Mix well-decomposed Farmyard Manure (FYM) 2 tonnes/acre.</Text>
              <Text style={styles.advItem}>• Azotobacter bio-fertilizer seed treatment recommended before sowing.</Text>
            </GlassCard>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgDark,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: SIZES.radiusFull,
    backgroundColor: COLORS.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderGlass,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#ffffff',
  },
  formCard: {
    marginBottom: 16,
  },
  cardHeading: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 14,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  inputCol: {
    flex: 1,
  },
  label: {
    fontSize: 11,
    color: COLORS.textMuted,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: COLORS.borderGlass,
    borderRadius: 10,
    padding: 10,
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
  },
  analyzeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 8,
  },
  analyzeBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  resultsWrap: {
    gap: 12,
  },
  resultCard: {
    padding: 18,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 4,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#ffffff',
  },
  scoreSub: {
    fontSize: 9,
    fontWeight: '700',
    color: COLORS.primaryLight,
  },
  resTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  resDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 17,
  },
  advisoryCard: {
    padding: 16,
  },
  advTitle: {
    color: COLORS.amber,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 10,
  },
  advItem: {
    color: COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 6,
  },
});
