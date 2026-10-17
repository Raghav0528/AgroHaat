import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { GlassCard } from '../../components/GlassCard';
import { LanguagePill } from '../../components/LanguagePill';
import { COLORS, SIZES } from '../../constants/theme';

export default function PestScannerScreen({ navigation }) {
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);

  const startScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Feather name="arrow-left" size={18} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>AI Crop Disease Scanner</Text>
          <LanguagePill />
        </View>

        {/* Camera Scanner Viewport */}
        <GlassCard heavy style={styles.scannerCard}>
          <View style={styles.viewfinder}>
            <View style={[styles.corner, styles.tl]} />
            <View style={[styles.corner, styles.tr]} />
            <View style={[styles.corner, styles.bl]} />
            <View style={[styles.corner, styles.br]} />

            <MaterialCommunityIcons
              name={scanned ? 'leaf-circle' : 'camera-metering-center'}
              size={64}
              color={scanned ? COLORS.primary : 'rgba(255,255,255,0.4)'}
            />

            <Text style={styles.viewfinderText}>
              {scanning
                ? '🔬 Analyzing leaf pixels...'
                : scanned
                ? '✅ Diagnosis Complete'
                : 'Position affected leaf within frame'}
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.scanBtn, scanning && { opacity: 0.7 }]}
            onPress={startScan}
            disabled={scanning}
          >
            <FontAwesome5 name="camera" size={16} color="#ffffff" />
            <Text style={styles.scanBtnText}>
              {scanning ? 'Diagnosing...' : 'Scan Affected Leaf'}
            </Text>
          </TouchableOpacity>
        </GlassCard>

        {/* Diagnosis Results */}
        {scanned && (
          <View style={styles.resultsWrap}>
            <GlassCard style={styles.diagnosisCard}>
              <View style={styles.diagHeader}>
                <View style={styles.diagBadge}>
                  <Text style={styles.diagBadgeText}>Confidence: 94.2%</Text>
                </View>
                <Text style={styles.severityTag}>Stage: Moderate</Text>
              </View>

              <Text style={styles.diagName}>Early Blight (Alternaria solani)</Text>
              <Text style={styles.cropTarget}>Detected on: Tomato Leaves (टमाटर)</Text>

              <View style={styles.divider} />

              <Text style={styles.protocolHeading}>🧪 Certified Agronomic Treatment:</Text>
              <Text style={styles.stepText}>1. Spray Copper Oxychloride (50% WP) @ 2.5g per litre of water immediately.</Text>
              <Text style={styles.stepText}>2. Prune and safely destroy lower leaves exhibiting concentric dark ring spots.</Text>
              <Text style={styles.stepText}>3. Avoid overhead sprinkler irrigation to keep leaf canopy dry during evening hours.</Text>

              <TouchableOpacity style={styles.expertBtn}>
                <Ionicons name="chatbubbles" size={16} color="#ffffff" />
                <Text style={styles.expertBtnText}>Consult Agro-Haat Specialist</Text>
              </TouchableOpacity>
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
  scannerCard: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  viewfinder: {
    width: '100%',
    height: 220,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  corner: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderColor: COLORS.primary,
  },
  tl: { top: 12, left: 12, borderTopWidth: 3, borderLeftWidth: 3 },
  tr: { top: 12, right: 12, borderTopWidth: 3, borderRightWidth: 3 },
  bl: { bottom: 12, left: 12, borderBottomWidth: 3, borderLeftWidth: 3 },
  br: { bottom: 12, right: 12, borderBottomWidth: 3, borderRightWidth: 3 },
  viewfinderText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 12,
  },
  scanBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
  },
  scanBtnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
  },
  resultsWrap: {
    gap: 12,
  },
  diagnosisCard: {
    padding: 18,
  },
  diagHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  diagBadge: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  diagBadgeText: {
    color: COLORS.primaryLight,
    fontSize: 11,
    fontWeight: '700',
  },
  severityTag: {
    color: COLORS.amber,
    fontSize: 11,
    fontWeight: '700',
  },
  diagName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 4,
  },
  cropTarget: {
    color: COLORS.textMuted,
    fontSize: 12,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    marginVertical: 12,
  },
  protocolHeading: {
    color: COLORS.primaryLight,
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 8,
  },
  stepText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 6,
  },
  expertBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderColor: COLORS.borderGlass,
    paddingVertical: 11,
    borderRadius: 10,
    marginTop: 14,
  },
  expertBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 12,
  },
});
