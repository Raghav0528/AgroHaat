import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { GlassCard } from '../../components/GlassCard';
import { LanguagePill } from '../../components/LanguagePill';
import { COLORS, SIZES } from '../../constants/theme';

export default function WeatherScreen({ navigation }) {
  const forecast = [
    { day: 'Today', temp: '28°C', condition: 'Sunny', rain: '0%', icon: 'weather-sunny', color: '#f59e0b' },
    { day: 'Mon', temp: '29°C', condition: 'Clear', rain: '5%', icon: 'weather-sunny', color: '#f59e0b' },
    { day: 'Tue', temp: '27°C', condition: 'Pre-Monsoon Shower', rain: '65%', icon: 'weather-rainy', color: '#06b6d4' },
    { day: 'Wed', temp: '26°C', condition: 'Scattered Rain', rain: '40%', icon: 'weather-partly-rainy', color: '#06b6d4' },
    { day: 'Thu', temp: '29°C', condition: 'Sunny', rain: '10%', icon: 'weather-sunny', color: '#f59e0b' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Feather name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Agricultural Weather Radar</Text>
          <LanguagePill />
        </View>

        {/* Current Weather Card */}
        <GlassCard heavy style={styles.currentCard}>
          <View style={styles.currentTop}>
            <View>
              <Text style={styles.locationText}>Karnal, Haryana Hub</Text>
              <Text style={styles.currentTemp}>28°C</Text>
              <Text style={styles.currentCond}>Sunny & Optimal Sowing Condition</Text>
            </View>
            <MaterialCommunityIcons name="weather-sunny" size={68} color="#f59e0b" />
          </View>

          <View style={styles.statsRow}>
            <View style={styles.subStat}>
              <Text style={styles.statVal}>54%</Text>
              <Text style={styles.statLbl}>Humidity</Text>
            </View>
            <View style={styles.subStat}>
              <Text style={styles.statVal}>8 km/h</Text>
              <Text style={styles.statLbl}>NW Wind</Text>
            </View>
            <View style={styles.subStat}>
              <Text style={styles.statVal}>62%</Text>
              <Text style={styles.statLbl}>Soil Moisture</Text>
            </View>
          </View>
        </GlassCard>

        {/* AI Irrigation Radar Warning */}
        <GlassCard style={styles.alertCard}>
          <View style={styles.alertHeader}>
            <Ionicons name="warning" size={18} color={COLORS.amber} />
            <Text style={styles.alertTitle}>Smart Irrigation Advisory</Text>
          </View>
          <Text style={styles.alertBody}>
            🟡 Moderate pre-monsoon showers expected on Tuesday (Day 3). Hold heavy canal or tubewell irrigation for next 48 hours to prevent root rot and conserve groundwater.
          </Text>
        </GlassCard>

        {/* 5-Day Agricultural Forecast */}
        <Text style={styles.forecastHeading}>5-Day Forecast & Rain Probability</Text>
        <View style={styles.forecastList}>
          {forecast.map((item, index) => (
            <GlassCard key={index} style={styles.forecastCard}>
              <Text style={styles.fcDay}>{item.day}</Text>
              <MaterialCommunityIcons name={item.icon} size={24} color={item.color} />
              <Text style={styles.fcCond}>{item.condition}</Text>
              <View style={styles.fcRight}>
                <Text style={styles.fcTemp}>{item.temp}</Text>
                <Text style={styles.fcRain}>{item.rain} rain</Text>
              </View>
            </GlassCard>
          ))}
        </View>
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
  currentCard: {
    padding: 20,
    marginBottom: 14,
  },
  currentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationText: {
    color: COLORS.primaryLight,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  currentTemp: {
    color: '#ffffff',
    fontSize: 42,
    fontWeight: '900',
    marginVertical: 4,
  },
  currentCond: {
    color: COLORS.textSecondary,
    fontSize: 12,
    maxWidth: 180,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  subStat: {
    alignItems: 'center',
  },
  statVal: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
  statLbl: {
    color: COLORS.textMuted,
    fontSize: 10,
    marginTop: 2,
  },
  alertCard: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderColor: 'rgba(245, 158, 11, 0.4)',
    padding: 14,
    marginBottom: 20,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  alertTitle: {
    color: COLORS.amber,
    fontSize: 13,
    fontWeight: '800',
  },
  alertBody: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 12,
    lineHeight: 18,
  },
  forecastHeading: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  forecastList: {
    gap: 8,
  },
  forecastCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 14,
  },
  fcDay: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
    width: 60,
  },
  fcCond: {
    color: COLORS.textSecondary,
    fontSize: 11,
    flex: 1,
    marginLeft: 10,
  },
  fcRight: {
    alignItems: 'flex-end',
  },
  fcTemp: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },
  fcRain: {
    color: '#06b6d4',
    fontSize: 10,
    fontWeight: '600',
  },
});
