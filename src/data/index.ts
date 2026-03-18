/**
 * API Flange Data Export Index
 * Central export point for all flange engineering data
 * 
 * This file exports all core data modules for the API Flange website.
 * All data is based on real ASME, AWWA, and international standards.
 */

// Flange type definitions and data
import { flangeTypes } from './flangeTypes';
export { flangeTypes };
export type { FlangeType } from './flangeTypes';

// Industry database
import { industries } from './industries';
export { industries };
export type { Industry } from './industries';

// Material specifications
import { materials } from './materials';
export { materials };
export type { Material } from './materials';

// Technical standards reference
import { standards } from './standards';
export { standards };
export type { Standard } from './standards';

/**
 * JSON Data Files (imported dynamically in practice)
 * 
 * Dimension Data:
 * - /dimensions/b16-5.json - ASME B16.5 weld neck flanges
 * - /dimensions/awwa-c207.json - AWWA C207 water utility flanges
 * 
 * Pressure-Temperature Ratings:
 * - /pt-ratings/materials.json - ASME B16.5 Table 2 ratings
 * 
 * Bolt Specifications:
 * - /bolt-torque/standard-bolts.json - ASTM A193 B7 torque values
 */

// Type-safe access helpers (optional utilities)
export const dataAssets = {
  dimensions: {
    b16_5: '/data/dimensions/b16-5.json',
    awwa_c207: '/data/dimensions/awwa-c207.json',
  },
  pressureTemperature: {
    materials: '/data/pt-ratings/materials.json',
  },
  boltTorque: {
    standardBolts: '/data/bolt-torque/standard-bolts.json',
  },
};

// Utility: Find flange type by ID
export const getFlangeTypeById = (id: string) => 
  flangeTypes.find(type => type.id === id);

// Utility: Find flange type by slug
export const getFlangeTypeBySlug = (slug: string) => 
  flangeTypes.find(type => type.slug === slug);

// Utility: Find industry by ID
export const getIndustryById = (id: string) => 
  industries.find(industry => industry.id === id);

// Utility: Find industry by slug
export const getIndustryBySlug = (slug: string) => 
  industries.find(industry => industry.slug === slug);

// Utility: Find material by ID
export const getMaterialById = (id: string) => 
  materials.find(material => material.id === id);

// Utility: Find standard by code
export const getStandardByCode = (code: string) => 
  standards.find(standard => standard.code === code);

// Utility: Get related flange types by industry
export const getFlangeTypesByIndustry = (industrySlug: string) => {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];
  return flangeTypes.filter(type => 
    industry.commonFlangeTypes.includes(type.slug)
  );
};

// Utility: Get materials used by specific flange type
export const getMaterialsByFlangeType = (flangeTypeSlug: string) => {
  const flangeType = getFlangeTypeBySlug(flangeTypeSlug);
  if (!flangeType) return [];
  return materials.filter(material => 
    flangeType.materials.includes(material.slug)
  );
};

export default {
  flangeTypes,
  industries,
  materials,
  standards,
  dataAssets,
};
