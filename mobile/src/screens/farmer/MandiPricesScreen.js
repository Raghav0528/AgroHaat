import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { GlassCard } from '../../components/GlassCard';
import { LanguagePill } from '../../components/LanguagePill';
import { COLORS, SIZES } from '../../constants/theme';

export default function MandiPricesScreen({ navigation }) {
  const mandiRates = [
    { crop: 'Wheat (गेहूं - Sharbati)', mandi: 'Karnal Mandi', price: '₹2,425 / Qtl', change: '+₹45', up: true },
    { crop: 'Mustard (सरसों)', mandi: 'Jaipur Mandi', price: '₹5,650 / Qtl', change: '+₹110', up: true },
    { crop: 'Paddy Basmati (धान)', mandi: 'Amritsar Mandi', price: '₹3,890 / Qtl', change: '-₹30', up: false },
    { crop: 'Tomatoes (देसी टमाटर)', mandi: 'Azadpur Mandi', price: '₹1,850 / Qtl', change: '+₹80', up: true },
    { crop: 'Potato (आलू - Chipsona)', mandi: 'Agra Mandi', price: '₹1,240 / Qtl', change: '-₹15', up: false },
    { crop: 'Onion (लाल प्याज)', mandi: 'Nasik Mandi', price: '₹2,100 / Qtl', change: '+₹65', up: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Feather name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Live Mandi Benchmarks</Text>
          <LanguagePill />
        </View>

        {/* Sell Direct Banner */}
        <GlassCard heavy style={styles.bannerCard}>
          <View style={styles.bannerBadge}>
            <Text style={styles.bannerBadgeText}>0% Middleman Commission</Text>
          </View>
          <Text style={styles.bannerHeading}>Sell Harvest Directly to Families</Text>
          <Text style={styles.bannerSub}>
            Get up to 30% higher margins by selling directly to subscribed urban households on Agro-Haat.
          </Text>
          <TouchableOpacity style={styles.listProductBtn}>
            <FontAwesome5 name="plus-circle" size={14} color="#ffffff" />
            <Text style={styles.listProductBtnText}>List Harvest for Sale</Text>
          </TouchableOpacity>
        </GlassCard>

        {/* Mandi Rates List */}
        <Text style={styles.listHeading}>Today's APMC Mandi Rates (₹ / Quintal)</Text>
        <View style={styles.ratesList}>
          {mandiRates.map((item, index) => (
            <GlassCard key={index} style={styles.rateCard}>
              <View style={styles.cropInfo}>
                <Text style={styles.cropName}>{item.crop}</Text>
                <Text style={styles.mandiName}>{item.mandi}</Text>
              </View>

              <View style={styles.priceInfo}>
                <Text style={styles.priceText}>{item.price}</Text>
                <View style={[styles.trendBadge, { backgroundColor: item.up ? 'rgba(34, 197, 94, 0.2)' : 'rgba(244, 63, 94, 0.2)' }]}>
                  <Feather name={item.up ? 'trending-up' : 'trending-down'} size={12} color={item.up ? COLORS.primaryLight : '#f43f5e'} />
                  <Text style={[styles.trendText, { color: item.up ? COLORS.primaryLight : '#f43f5e' }]}>
                    {item.change}
                  </Text>
                </View>
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
  bannerCard: {
    padding: 18,
    marginBottom: 20,
  },
  bannerBadge: {
    backgroundColor: 'rgba(34, 197, 94, 0.25)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  bannerBadgeText: {
    color: COLORS.primaryLight,
    fontSize: 11,
    fontWeight: '800',
  },
  bannerHeading: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 4,
  },
  bannerSub: {
    color: COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 14,
  },
  listProductBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    paddingVertical: 11,
    borderRadius: 10,
  },
  listProductBtnText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },
  listHeading: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  ratesList: {
    gap: 10,
  },
  rateCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 14,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 3,
  },
  mandiName: {
    color: COLORS.textMuted,
    fontSize: 11,
  },
  priceInfo: {
    alignItems: 'flex-end',
  },
  priceText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 3,
  },
  trendBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  trendText: {
    fontSize: 10,
    fontWeight: '700',
  },
});
