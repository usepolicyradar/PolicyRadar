
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, Menu, X, ArrowRight, Zap, Search, Shield, DollarSign, Clock, AlertTriangle, Users, Plug, Activity, Info } from "lucide-react";
import PricingCard from "../components/pricing/PricingCard";
import AlertCard from "../components/alerts/AlertCard";
import PersonaCard from "../components/personas/PersonaCard";
import FAQItem from "../components/faq/FAQItem";

export default function PolicyPulseLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .trust-badge {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .trust-badge:nth-child(1) {
          animation-delay: 0s;
        }

        .trust-badge:nth-child(2) {
          animation-delay: 0.1s;
        }

        .trust-badge:nth-child(3) {
          animation-delay: 0.2s;
        }

        .checkmark-icon {
          display: inline-block;
          animation: checkmark-pop 0.4s ease-out forwards;
        }

        .trust-badge:nth-child(1) .checkmark-icon {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .trust-badge:nth-child(2) .checkmark-icon {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .trust-badge:nth-child(3) .checkmark-icon {
          animation-delay: 0.4s;
          opacity: 0;
        }

        @keyframes checkmark-pop {
          0% { 
            transform: scale(0);
            opacity: 0;
          }
          50% { 
            transform: scale(1.2);
            opacity: 1;
          }
          100% { 
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4 group cursor-pointer mr-8">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f17df8c73023ffc77c89e5/1b7e3459b_PolicyRadar3.png" 
                alt="PolicyRadar Logo" 
                className="h-20 w-20 transition-all duration-300 ease-in-out group-hover:scale-105"
                style={{ objectFit: 'contain' }}
              />
              <span className="text-4xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                PolicyRadar
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 relative group"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button className="text-gray-400 hover:text-blue-600 font-medium transition-colors">
                Login
              </button>
              <Button className="bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-sm transition-all duration-300">
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('features')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Features
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  FAQ
                </button>
                <button className="text-left px-4 py-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">Login</button>
                <Button className="mx-4 bg-[#0066FF] hover:bg-[#0052CC] transition-all duration-300">Start Free Trial</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Know When Vendors Change Terms—Before It Costs You
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                PolicyRadar monitors Terms of Service, Privacy Policies, DPAs, and pricing across your SaaS stack—and alerts your <span className="font-semibold text-gray-900">Legal/Finance</span> teams the moment something changes with <span className="font-semibold text-gray-900">actionable, AI-powered summaries and risk scores</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6 border-2 hover:border-blue-600 hover:text-blue-600 transition-all">
                  Book a Demo
                </Button>
              </div>

              {/* OPTION 1: Trust Badges (Checkmarks) */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm mb-12">
                <span className="flex items-center gap-2 trust-badge">
                  <CheckCircle className="w-5 h-5 text-teal-600 checkmark-icon" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2 trust-badge">
                  <CheckCircle className="w-5 h-5 text-teal-600 checkmark-icon" />
                  <span className="font-semibold text-gray-900">Monitor 3 Vendors FREE Forever</span>
                </span>
                <span className="flex items-center gap-2 trust-badge">
                  <CheckCircle className="w-5 h-5 text-teal-600 checkmark-icon" />
                  Setup in 2 minutes
                </span>
              </div>

              {/* OPTION 2: Stats Row */}
              <div className="hidden flex-col sm:flex-row gap-8 sm:gap-12 text-center sm:text-left mb-12">
                <div>
                  <div className="text-4xl font-bold text-[#0f172a] mb-1">500+</div>
                  <div className="text-sm font-medium text-gray-500">Vendors tracked</div>
                </div>
                <div className="hidden sm:block w-px bg-gray-200"></div>
                <div>
                  <div className="text-4xl font-bold text-[#0f172a] mb-1">$127K</div>
                  <div className="text-sm font-medium text-gray-500">Avg. saved per year</div>
                </div>
                <div className="hidden sm:block w-px bg-gray-200"></div>
                <div>
                  <div className="text-4xl font-bold text-[#0f172a] mb-1">24 hrs</div>
                  <div className="text-sm font-medium text-gray-500">Change detection</div>
                </div>
              </div>

              {/* OPTION 3: Feature Pills */}
              <div className="hidden flex-wrap gap-3 mb-12">
                <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  <span>🎯</span> Real-time monitoring
                </span>
                <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  <span>🤖</span> AI-powered summaries
                </span>
                <span className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                  <span>⚡</span> Instant alerts
                </span>
              </div>

              {/* OPTION 4: Social Proof with Metric */}
              <div className="hidden items-center gap-3 mb-12">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white -ml-2"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white -ml-2"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white -ml-2"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Join 1,200+ teams tracking vendor policies
                </span>
              </div>
            </div>

            {/* Right Column - Dashboard Mockup */}
            <div className="relative lg:pl-8">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-300" style={{width: '115%', maxWidth: '115%', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'}}>
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Dashboard</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Active
                  </span>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Acme Corp</span>
                      <span className="text-sm text-gray-500">No changes</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 border-l-4 border-blue-600 rounded-lg animate-pulse">
                      <span className="font-semibold text-gray-900">Cisco</span>
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Changed
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Zoom</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Oracle</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Atlassian</span>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-6 text-center text-sm text-gray-600 bg-blue-50 p-4 rounded-lg flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">AI-powered monitoring detects changes instantly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="w-8 h-8 text-white" />
                <div className="text-4xl font-bold text-white">$127K</div>
              </div>
              <div className="text-white">Average annual loss prevented</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-8 h-8 text-white" />
                <div className="text-4xl font-bold text-white">73%</div>
              </div>
              <div className="text-white">Unknowingly violated ToS</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-8 h-8 text-white" />
                <div className="text-4xl font-bold text-white">24hrs</div>
              </div>
              <div className="text-white">Detection time for changes</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Activity className="w-8 h-8 text-white" />
                <div className="text-4xl font-bold text-white">500+</div>
              </div>
              <div className="text-white">Vendors in our catalog</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">
              The $127K Problem You Don't Know You Have
            </h2>
            <p className="text-xl text-gray-600">
              Most companies lose six figures annually to preventable vendor issues
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Problem 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">💸</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$47K</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Average Surprise Cost</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                SaaS vendors change pricing 2-3x per year. Most companies find out at renewal—when it's too late to negotiate.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">Real example:</span> Slack raised prices 40% in 2024. A 500-person company's bill jumped from $60K to $84K overnight.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">⚠️</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">73%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Have Violated ToS Unknowingly</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vendors add risky clauses (arbitration, AI training on your data, liability caps) and you never notice until an audit or breach.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">Real example:</span> Zoom added data sharing clause. Companies using it for HIPAA-protected calls faced $50K+ fines.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="text-5xl mb-4">⏰</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">42%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Miss Cancellation Windows</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vendors shorten notice periods (90 days → 30 days). You miss the deadline by a week, now you're stuck for another year.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">Real example:</span> $120K contract you're not using because you missed notice by 8 days.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6 font-semibold">
              Across 50+ SaaS tools, the average company loses $127,000 annually to preventable vendor issues.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stop Vendor Surprises in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-lg">
                <Plug className="w-10 h-10 text-white" />
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  ①
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">① </span>Connect Your Vendors
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Add vendors from our 500+ catalog or paste custom URLs. We start monitoring their ToS, Privacy Policy, DPA, and pricing immediately.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
                <div className="text-sm font-medium text-gray-700">Add Vendor</div>
                <div className="mt-2 h-8 bg-white border border-gray-300 rounded"></div>
              </div>
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" /> Time: 30 seconds per vendor
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-lg">
                <Activity className="w-10 h-10 text-white" />
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  ②
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">② </span>We Monitor 24/7
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PolicyRadar checks your vendors daily, detecting even minor changes. Our AI analyzes what changed, scores the risk, and explains it in plain English.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">15 vendors monitored</div>
                <div className="mt-1 text-sm text-gray-600">3 changes this week</div>
              </div>
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                🤖 No work required from you
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-lg">
                <Bell className="w-10 h-10 text-white" />
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  ③
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">③ </span>Get Instant Alerts
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When a vendor changes something important, you get an email/Slack alert with a summary, risk score, and action items—before it affects you.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-4 shadow-sm">
                <div className="text-sm font-semibold text-red-900">🔴 High Risk</div>
                <div className="mt-1 text-sm text-red-800">Slack Terms Changed</div>
              </div>
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                ⚡ Catch changes weeks before renewals
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg">
              Start Monitoring Your First 3 Vendors—Free Forever
            </Button>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See What You've Been Missing
            </h2>
            <p className="text-xl text-gray-600">Real changes detected by PolicyRadar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AlertCard
              vendor="Slack"
              date="Apr 15, 2024"
              riskLevel="high"
              category="Pricing"
              title="Enterprise Grid pricing increased 25%"
              body="From $12.50 to $15.63 per user"
              impact={{
                title: "Financial Impact",
                description: "For 500 users, annual cost increases from $75K → $93.8K (+$18.8K)"
              }}
              action="Request grandfathered pricing before renewal"
              detected="Detected 23 weeks before renewal"
              savings="Potential savings: $18,800"
            />

            <AlertCard
              vendor="Notion"
              date="Jun 3, 2024"
              riskLevel="medium"
              category="Terms of Service"
              title="Added mandatory arbitration clause"
              body="Section 12.4 now removes class action rights"
              impact={{
                title: "Legal Risk",
                description: "Legal recourse limited in disputes"
              }}
              action="Legal review recommended. Request contractual override"
              detected="Detected same day"
              savings="⚖️ Compliance risk avoided"
            />

            <AlertCard
              vendor="HubSpot"
              date="Aug 12, 2024"
              riskLevel="high"
              category="Privacy Policy"
              title="Customer data used for AI training"
              body="Data may be used for AI model training"
              impact={{
                title: "Compliance Risk",
                description: "GDPR/CCPA compliance risk"
              }}
              action="Immediate review. Negotiate opt-out clause"
              detected="Detected within 24 hours"
              savings="$50K+ fine avoided"
            />
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              These are real policy changes detected by PolicyRadar. Most companies never noticed until it was too late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="text-lg px-8 py-6 border-2 hover:border-blue-600 hover:text-blue-600">
                See More Examples
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg">
                Start Monitoring Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-2">Pricing that scales with you</p>
            <p className="text-sm text-gray-500">💡 Save 2 months with annual billing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <PricingCard
              tier="Free"
              price="$0"
              period="Forever"
              description="Perfect for trying us out"
              features={[
                { text: '3 vendors', bold: false },
                { text: 'Daily monitoring', bold: false },
                { text: 'Email alerts', bold: false },
                { text: 'Change history', bold: false },
                { text: 'Risk scoring', bold: false }
              ]}
              buttonText="Start Free"
              buttonVariant="outline"
              footer="No credit card"
            />

            <div className="relative">
              <PricingCard
                tier="Pro"
                price="$149"
                period="For growing teams"
                description="or $1,490/year (save 2 months)"
                features={[
                  { text: '100 vendors', bold: true },
                  { text: 'All monitoring', bold: false },
                  { text: 'Slack alerts', bold: true },
                  { text: '5 team seats', bold: false },
                  { text: 'Renewal calendar', bold: false },
                  { text: 'Priority support', bold: false }
                ]}
                buttonText="Start 14-Day Free Trial"
                buttonVariant="primary"
                highlighted={true}
                badge="⭐ Most Popular"
                footer="No credit card required"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/50 rounded-xl -z-10"></div>
            </div>

            <PricingCard
              tier="Enterprise"
              price="Let's Talk"
              period="Custom"
              description="Perfect for large orgs"
              features={[
                { text: 'Unlimited vendors', bold: true },
                { text: 'SSO/SAML', bold: false },
                { text: 'Dedicated CSM', bold: false },
                { text: 'Custom SLAs', bold: false },
                { text: 'White-label', bold: false },
                { text: 'API access', bold: false }
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>

          {/* FAQ Box */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</p>
                <p className="text-gray-600 text-sm">Yes, upgrade/downgrade anytime. No penalties.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">What happens if I exceed vendor limit?</p>
                <p className="text-gray-600 text-sm">Automatic overage at $1.50/vendor/month.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Do you offer annual discounts?</p>
                <p className="text-gray-600 text-sm">Yes! Save 2 months (17%) on annual plans.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  What payment methods? <Info className="w-4 h-4 text-gray-400" />
                </p>
                <p className="text-gray-600 text-sm">All major credit cards, ACH, wire transfer for Enterprise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for the Teams Managing Vendor Risk
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PersonaCard
              icon="⚖️"
              color="purple"
              title="For Legal & Compliance"
              description="Stop manually reviewing Terms of Service across 100+ vendors. Get alerted when risky clauses appear—before they create liability."
              testimonial={{
                quote: "We review ToS once at purchase. Then vendors change terms and we don't know until an audit. PolicyRadar closes that gap.",
                author: "Sarah K., General Counsel"
              }}
              useCases={[
                'Catch risky liability clauses',
                'Track DPA changes (GDPR/CCPA)',
                'Monitor arbitration additions',
                'Audit trail for compliance'
              ]}
            />

            <PersonaCard
              icon="💰"
              color="green"
              title="For Finance & CFOs"
              description="Prevent surprise renewal costs and catch pricing changes before they blow your budget. Get advance notice to negotiate or find alternatives."
              testimonial={{
                quote: "We got hit with a $47K surprise on a Salesforce renewal. Never again. PolicyRadar pays for itself 10x over.",
                author: "Michael T., CFO"
              }}
              useCases={[
                'Prevent surprise price hikes',
                'Track notice period changes',
                'Renewal deadline reminders',
                'Negotiation leverage'
              ]}
            />

            <PersonaCard
              icon="🛡️"
              color="blue"
              title="For IT & Security"
              description="Track vendor SLA changes, security certification lapses, and subprocessor additions. Manage vendor risk without manual audits."
              testimonial={{
                quote: "Vendors change security posture constantly. We can't manually check 80 vendors. PolicyRadar is our early warning system.",
                author: "James L., CISO"
              }}
              useCases={[
                'SLA degradation alerts',
                'Security cert expirations',
                'Subprocessor tracking',
                'Incident disclosure monitoring'
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="How does PolicyRadar detect changes?"
              answer="We monitor vendor websites daily using automated crawlers. When content changes, our AI compares versions, identifies what's different, and generates a plain-English summary with risk scoring."
            />
            <FAQItem
              question="Do I need to give you access to our SaaS accounts?"
              answer="No. We only monitor public pages (Terms of Service, Privacy Policy, pricing pages). We never access your actual accounts or data."
            />
            <FAQItem
              question="What if a vendor's policy isn't public?"
              answer="You can upload documents directly to PolicyRadar. We'll monitor for updates you provide."
            />
            <FAQItem
              question="How quickly do I get alerted?"
              answer="Changes are typically detected within 24 hours. High-risk changes trigger immediate email/Slack alerts."
            />
            <FAQItem
              question="Can I try before paying?"
              answer="Yes! Monitor 3 vendors free forever, or start a 14-day trial of Pro (no credit card required)."
            />
            <FAQItem
              question="What if PolicyRadar misses a change?"
              answer="We have 99.8% detection accuracy. If we miss something material, we'll credit your account."
            />
            <FAQItem
              question="Is my data secure?"
              answer="Yes. SOC 2 Type II compliant (in progress), encrypted at rest and in transit, never shared with third parties."
            />
            <FAQItem
              question="Can I monitor vendors not in your catalog?"
              answer="Absolutely! Add any vendor by pasting their policy URLs."
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-4">Still have questions?</p>
            <Button variant="outline" className="border-2 hover:border-blue-600 hover:text-blue-600">
              Contact our team <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stop Getting Blindsided by Vendor Changes
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start monitoring your SaaS stack today. Free for 3 vendors forever.<br />
            No credit card required.
          </p>

          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-lg font-semibold shadow-xl">
            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-blue-100">
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" /> 3 vendors free forever
            </span>
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" /> Setup in 2 minutes
            </span>
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" /> No credit card needed
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b132b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12 pb-12 border-b border-gray-700">
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5" />
              <span className="text-sm">SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5" />
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5" />
              <span className="text-sm">ISO 27001</span>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Column 1 */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f17df8c73023ffc77c89e5/1b7e3459b_PolicyRadar3.png" 
                  alt="PolicyRadar Logo" 
                  className="h-12 w-12 object-contain transition-all duration-300 ease-in-out group-hover:scale-105"
                />
                <span className="text-xl font-bold text-white">PolicyRadar</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                AI-powered monitoring of vendor policy and pricing changes.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Know when vendors change terms before it costs you.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                  <span className="text-white font-bold text-lg">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                  <span className="text-white font-bold text-lg">in</span>
                </a>
              </div>
            </div>

            {/* Column 2 - Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Features</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Pricing</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Enterprise</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Roadmap</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Changelog</a></li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Documentation</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">API Reference</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Blog</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Case Studies</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Support</a></li>
              </ul>
            </div>

            {/* Column 4 - Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">About</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Careers</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Contact</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Privacy</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Terms</a></li>
                <li><a href="#" className="text-sm text-white transition-colors hover:text-gray-300">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-gray-800 md:flex-row">
            <p className="text-sm text-gray-300">
              © 2024 PolicyRadar. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 transition-colors hover:text-white">Status</a>
              <a href="#" className="text-gray-300 transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-300 transition-colors hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
