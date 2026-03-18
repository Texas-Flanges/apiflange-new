import React from 'react';

interface MaterialBadgeProps {
  material: string;
}

const MaterialBadge: React.FC<MaterialBadgeProps> = ({ material }) => {
  // Color-coded material mapping
  const getMaterialColor = (materialName: string): string => {
    const normalized = materialName.toLowerCase();

    if (normalized.includes('carbon')) {
      return 'bg-gray-200 text-gray-800';
    }
    if (normalized.includes('stainless')) {
      return 'bg-blue-100 text-blue-800';
    }
    if (normalized.includes('alloy')) {
      return 'bg-amber-100 text-amber-800';
    }
    if (normalized.includes('galvanized')) {
      return 'bg-zinc-200 text-zinc-800';
    }
    if (normalized.includes('duplex')) {
      return 'bg-purple-100 text-purple-800';
    }

    // Default color
    return 'bg-gray-100 text-gray-800';
  };

  const colorStyle = getMaterialColor(material);

  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${colorStyle}`}
    >
      {material}
    </span>
  );
};

export default MaterialBadge;
