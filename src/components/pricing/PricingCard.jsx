import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingCard({ 
  tier, 
  price, 
  period,
  description,
  features,
  buttonText,
  buttonVariant = "outline",
  highlighted = false,
  badge = null,
  footer
}) {
  return (
    <div className={`relative bg-white rounded-xl p-8 transition-all duration-300 ${
      highlighted 
        ? 'border-2 border-blue-600 shadow-2xl scale-105' 
        : 'border border-gray-200 shadow-lg hover:shadow-xl'
    }`}>
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            {badge}
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier}</h3>
        {period && <p className="text-gray-500 text-sm mb-4">{period}</p>}
        <div className="mb-2">
          {price === "Let's Talk" ? (
            <span className="text-4xl font-bold text-gray-900">{price}</span>
          ) : (
            <>
              <span className="text-5xl font-bold text-gray-900">{price}</span>
              {price !== "$0" && <span className="text-gray-500 text-lg">/month</span>}
            </>
          )}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
              highlighted ? 'text-blue-600' : 'text-green-600'
            }`} />
            <span className={`text-gray-700 ${feature.bold ? 'font-semibold' : ''}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full ${
          buttonVariant === 'primary' 
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
            : 'bg-white border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600'
        }`}
      >
        {buttonText}
      </Button>

      {footer && (
        <p className="text-center text-sm text-gray-500 mt-4">{footer}</p>
      )}
    </div>
  );
}