'use client';

import React, { useState, useMemo } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

export interface Column {
  key: string;
  label: string;
  unit?: string;
}

interface SpecTableProps {
  columns: Column[];
  data: Record<string, any>[];
  stickyFirstColumn?: boolean;
}

type SortOrder = 'asc' | 'desc' | null;

const SpecTable: React.FC<SpecTableProps> = ({
  columns,
  data,
  stickyFirstColumn = true,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    order: SortOrder;
  }>({ key: '', order: null });

  const sortedData = useMemo(() => {
    if (!sortConfig.order || !sortConfig.key) return data;

    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      // Handle numeric values
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortConfig.order === 'asc' ? aVal - bVal : bVal - aVal;
      }

      // Handle string values
      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();
      return sortConfig.order === 'asc'
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });

    return sorted;
  }, [data, sortConfig]);

  const handleSort = (key: string) => {
    let newOrder: SortOrder = 'asc';
    if (sortConfig.key === key) {
      if (sortConfig.order === 'asc') newOrder = 'desc';
      else if (sortConfig.order === 'desc') newOrder = null;
      else newOrder = 'asc';
    }

    setSortConfig({
      key,
      order: newOrder,
    });
  };

  const getSortIcon = (columnKey: string) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowUpDown size={16} className="opacity-30" />;
    }
    if (sortConfig.order === 'asc') {
      return <ArrowUp size={16} />;
    }
    if (sortConfig.order === 'desc') {
      return <ArrowDown size={16} />;
    }
    return <ArrowUpDown size={16} className="opacity-30" />;
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Header */}
        <thead>
          <tr className="bg-primary text-white">
            {columns.map((column, index) => (
              <th
                key={column.key}
                className={`
                  px-4 py-3 text-left font-semibold text-sm
                  ${
                    stickyFirstColumn && index === 0
                      ? 'sticky left-0 bg-primary z-10'
                      : ''
                  }
                  cursor-pointer hover:bg-primary-light transition-colors
                `}
                onClick={() => handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  <span>
                    {column.label}
                    {column.unit && <span className="text-xs opacity-75">({column.unit})</span>}
                  </span>
                  {getSortIcon(column.key)}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`
                border-b border-gray-200
                ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                hover:bg-gray-100 transition-colors
              `}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={`${rowIndex}-${column.key}`}
                  className={`
                    px-4 py-3 text-sm text-gray-700
                    ${
                      stickyFirstColumn && colIndex === 0
                        ? 'sticky left-0 font-semibold text-primary bg-inherit z-10'
                        : ''
                    }
                  `}
                >
                  <span className={colIndex > 0 ? 'font-mono' : ''}>
                    {row[column.key] ?? '-'}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty State */}
      {sortedData.length === 0 && (
        <div className="w-full py-8 text-center text-gray-500">
          <p>No data available</p>
        </div>
      )}
    </div>
  );
};

export default SpecTable;
