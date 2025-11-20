import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function AlertCard({
  vendor,
  date,
  riskLevel,
  category,
  title,
  body,
  impact,
  action,
  detected,
  savings
}) {
  const riskColors = {
    high: { border: 'border-red-500', badge: 'bg-red-100 text-red-800', icon: 'text-red-600' },
    medium: { border: 'border-amber-500', badge: 'bg-amber-100 text-amber-800', icon: 'text-amber-600' },
    low: { border: 'border-green-500', badge: 'bg-green-100 text-green-800', icon: 'text-green-600' }
  };

  const colors = riskColors[riskLevel] || riskColors.medium;
  const impactColors = {
    high: 'bg-red-50 border-red-200',
    medium: 'bg-amber-50 border-amber-200',
    low: 'bg-blue-50 border-blue-200'
  };

  return (
    <div className={`bg-white rounded-xl border-l-4 ${colors.border} shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-lg">
              {vendor[0]}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{vendor}</h4>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>
        </div>

        {/* Risk Badge */}
        <div className="flex gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colors.badge}`}>
            {riskLevel === 'high' ? '🔴' : riskLevel === 'medium' ? '🟡' : '🟢'} {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
            {category}
          </span>
        </div>

        {/* Title & Body */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{body}</p>

        {/* Impact Box */}
        <div className={`p-4 rounded-lg border mb-4 ${impactColors[riskLevel]}`}>
          <p className="font-semibold text-gray-900 mb-1">{impact.title}</p>
          <p className="text-gray-700 text-sm">{impact.description}</p>
        </div>

        {/* Action Box */}
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 mb-4">
          <p className="font-semibold text-blue-900 mb-1">Recommended Action</p>
          <p className="text-blue-800 text-sm">{action}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-4">
          <Button variant="outline" className="flex-1">View Details</Button>
          <Button variant="outline" className="flex-1">Acknowledge</Button>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 text-sm text-gray-600 border-t pt-4">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-green-600" />
            {detected}
          </span>
          {savings && (
            <span className="flex items-center gap-1 text-green-600 font-semibold">
              💰 {savings}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}