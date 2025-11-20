import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PersonaCard({ 
  icon, 
  color, 
  title, 
  description, 
  testimonial,
  useCases 
}) {
  const colorClasses = {
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', testimonial: 'bg-purple-50 border-purple-200', button: 'bg-purple-600 hover:bg-purple-700' },
    green: { bg: 'bg-green-100', text: 'text-green-600', testimonial: 'bg-green-50 border-green-200', button: 'bg-green-600 hover:bg-green-700' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', testimonial: 'bg-blue-50 border-blue-200', button: 'bg-blue-600 hover:bg-blue-700' }
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
      <div className={`w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center mb-6`}>
        <span className="text-3xl">{icon}</span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

      <div className={`p-6 rounded-lg border mb-6 ${colors.testimonial}`}>
        <p className="text-gray-800 italic mb-3">"{testimonial.quote}"</p>
        <p className="text-sm font-semibold text-gray-600">- {testimonial.author}</p>
      </div>

      <div className="space-y-3 mb-6">
        {useCases.map((useCase, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.text}`} />
            <span className="text-gray-700">{useCase}</span>
          </div>
        ))}
      </div>

      <Button className={`w-full text-white ${colors.button}`}>
        Start Free Trial
      </Button>
    </div>
  );
}