import { useState, useEffect } from 'react'
import {
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Sparkles,
  Heart,
  MessageCircle,
  UserCheck,
  Globe,
  Zap,
  Award,
  Calendar,
  DollarSign,
  TrendingDown,
  Shield,
  Star,
  Activity,
  PieChart,
  Rocket,
  Download,
  Info
} from 'lucide-react'
import jsPDF from 'jspdf'
import './App.css'

interface Competitor {
  name: string
  category: string
  marketShare: number
  strengths: string[]
  weaknesses: string[]
  pricing: string
  users: string
  positioning: string
  imageUrl: string
}

interface MarketSegment {
  name: string
  size: string
  growth: string
  opportunity: string
  lumenFit: string
}

type Slide = 'overview' | 'product' | 'competitors' | 'market' | 'positioning' | 'strategy' | 'summary' | 'forecast'

interface PopupData {
  type: 'competitor' | 'market' | 'feature' | 'metric' | 'strategy' | null
  data?: any
}

interface PopupData {
  type: 'competitor' | 'market' | 'feature' | 'metric' | 'strategy' | null
  data?: any
}

function App() {
  const [currentSlide, setCurrentSlide] = useState<Slide>('overview')
  const [popupData, setPopupData] = useState<PopupData>({ type: null })

  const slides: Slide[] = ['overview', 'product', 'competitors', 'market', 'positioning', 'strategy', 'summary', 'forecast']

  const competitors: Competitor[] = [
    {
      name: 'Co-Star',
      category: 'Astrology App',
      marketShare: 32,
      strengths: ['Strong brand recognition', 'Beautiful UI', 'Large user base (20M+)', 'Social features'],
      weaknesses: ['App Store restrictions', 'Limited wellness focus', 'No goal tracking', 'Astrology-only positioning'],
      pricing: 'Freemium ($4.99/month premium)',
      users: '20M+',
      positioning: 'Astrology & horoscope readings',
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'The Pattern',
      category: 'Astrology App',
      marketShare: 18,
      strengths: ['Modern design', 'Friend compatibility', 'Pattern-based insights', 'Strong community'],
      weaknesses: ['Limited wellness integration', 'No goal alignment', 'Astrology positioning', 'App Store risks'],
      pricing: 'Freemium ($9.99/month)',
      users: '8M+',
      positioning: 'Pattern-based astrology & compatibility',
      imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'Sanctuary',
      category: 'Wellness App',
      marketShare: 15,
      strengths: ['Wellness focus', 'Meditation features', 'Holistic approach', 'No astrology stigma'],
      weaknesses: ['No personal alignment', 'Limited social features', 'No goal tracking', 'Generic wellness'],
      pricing: 'Subscription ($12.99/month)',
      users: '5M+',
      positioning: 'Holistic wellness & meditation',
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'Headspace',
      category: 'Meditation App',
      marketShare: 12,
      strengths: ['Market leader', 'Strong brand', 'Proven content', 'B2B partnerships'],
      weaknesses: ['No personalization', 'No social features', 'No alignment concept', 'Meditation-only'],
      pricing: 'Subscription ($12.99/month)',
      users: '70M+',
      positioning: 'Meditation & mindfulness',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'Calm',
      category: 'Wellness App',
      marketShare: 10,
      strengths: ['Large user base', 'Diverse content', 'Sleep stories', 'Brand recognition'],
      weaknesses: ['No personal insights', 'No social features', 'Passive consumption', 'No goal tracking'],
      pricing: 'Subscription ($14.99/month)',
      users: '100M+',
      positioning: 'Sleep, meditation & wellness',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&q=80'
    },
    {
      name: 'Habitica',
      category: 'Productivity App',
      marketShare: 8,
      strengths: ['Gamification', 'Goal tracking', 'Social features', 'Engagement mechanics'],
      weaknesses: ['No wellness focus', 'No alignment insights', 'Gaming aesthetic', 'Limited personalization'],
      pricing: 'Freemium ($9.99/month)',
      users: '4M+',
      positioning: 'Gamified habit & goal tracking',
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&q=80'
    }
  ]

  const marketSegments: MarketSegment[] = [
    {
      name: 'Wellness Seekers',
      size: '$4.4B',
      growth: '15% YoY',
      opportunity: 'Growing demand for personalized wellness solutions',
      lumenFit: 'High - Alignment & wellness insights core value'
    },
    {
      name: 'Personal Development',
      size: '$13.2B',
      growth: '22% YoY',
      opportunity: 'Goal tracking and self-improvement market expanding',
      lumenFit: 'High - Personal goals & alignment features'
    },
    {
      name: 'Social Wellness',
      size: '$1.8B',
      growth: '28% YoY',
      opportunity: 'Social features in wellness apps gaining traction',
      lumenFit: 'High - Friend compatibility is unique differentiator'
    },
    {
      name: 'AI-Powered Apps',
      size: '$2.1B',
      growth: '35% YoY',
      opportunity: 'AI personalization driving user engagement',
      lumenFit: 'Very High - AI conversations & insights core feature'
    }
  ]

  const totalMarketSize = '$21.5B'
  const marketGrowth = '22% CAGR'
  const targetUsers = 'Gen Z & Millennials (18-40)'

  const navigateSlide = (direction: 'prev' | 'next') => {
    const currentIndex = slides.indexOf(currentSlide)
    if (direction === 'next' && currentIndex < slides.length - 1) {
      setCurrentSlide(slides[currentIndex + 1])
    } else if (direction === 'prev' && currentIndex > 0) {
      setCurrentSlide(slides[currentIndex - 1])
    }
  }

  const generatePDFReport = () => {
    const doc = new jsPDF()
    let yPosition = 20
    const pageHeight = doc.internal.pageSize.height
    const margin = 20
    const lineHeight = 7
    const sectionSpacing = 10

    // Helper function to add new page if needed
    const checkPageBreak = (requiredSpace: number) => {
      if (yPosition + requiredSpace > pageHeight - margin) {
        doc.addPage()
        yPosition = margin
      }
    }

    // Helper function to add text with word wrap
    const addText = (text: string, fontSize: number, isBold: boolean = false, x: number = margin) => {
      doc.setFontSize(fontSize)
      doc.setFont('helvetica', isBold ? 'bold' : 'normal')
      const splitText = doc.splitTextToSize(text, 170)
      checkPageBreak(splitText.length * lineHeight)
      doc.text(splitText, x, yPosition)
      yPosition += splitText.length * lineHeight
    }

    // Title
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text('Lumen Market Research Report', margin, yPosition)
    yPosition += 15

    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, yPosition)
    yPosition += sectionSpacing * 2

    // Executive Summary
    addText('EXECUTIVE SUMMARY', 16, true)
    yPosition += 5
    addText(`Lumen is an AI-Powered Alignment & Wellness Platform positioned in a $21.5B market with 22% CAGR growth. The platform successfully transitioned from astrology-based positioning (App Store rejected) to wellness-focused positioning, opening access to a larger, compliant market.`, 11)
    yPosition += sectionSpacing

    addText('Key Metrics:', 12, true)
    yPosition += 5
    addText(`• Total Market Size: ${totalMarketSize}`, 11, false, margin + 5)
    addText(`• Market Growth: ${marketGrowth}`, 11, false, margin + 5)
    addText(`• Target Users: ${targetUsers}`, 11, false, margin + 5)
    addText(`• Number of Competitors: ${competitors.length}`, 11, false, margin + 5)
    addText(`• Market Segments: ${marketSegments.length}`, 11, false, margin + 5)
    yPosition += sectionSpacing

    // Product Overview
    addText('PRODUCT OVERVIEW', 16, true)
    yPosition += 5
    addText('Lumen offers a unique combination of features that differentiate it from competitors in the wellness space:', 11)
    yPosition += 5

    addText('Primary Features:', 12, true)
    yPosition += 5
    addText('1. Alignment - Personal alignment check & wellness insights', 11, false, margin + 5)
    addText('2. Friend Compatibility - Check compatibility with friends (social feature)', 11, false, margin + 5)
    addText('3. Personal Goals - Set, track, and align goals with your patterns', 11, false, margin + 5)
    yPosition += 5

    addText('Supporting Features:', 12, true)
    yPosition += 5
    addText('• AI Conversations - Personal AI guide for insights', 11, false, margin + 5)
    addText('• Energetic Profile - Personal patterns (birth chart data, not called astrology) - Upgrade feature', 11, false, margin + 5)
    yPosition += sectionSpacing

    // Competitive Analysis
    addText('COMPETITIVE ANALYSIS', 16, true)
    yPosition += 5
    addText('Lumen faces competition from six major players in the wellness and astrology app space:', 11)
    yPosition += sectionSpacing

    competitors.forEach((competitor, index) => {
      checkPageBreak(40)
      addText(`${index + 1}. ${competitor.name} (${competitor.category})`, 13, true)
      yPosition += 5
      addText(`Market Share: ${competitor.marketShare}% | Users: ${competitor.users} | Pricing: ${competitor.pricing}`, 10)
      yPosition += 5
      addText(`Positioning: ${competitor.positioning}`, 10)
      yPosition += 5

      addText('Strengths:', 11, true, margin + 5)
      competitor.strengths.forEach(strength => {
        addText(`• ${strength}`, 10, false, margin + 10)
      })
      yPosition += 3

      addText('Weaknesses:', 11, true, margin + 5)
      competitor.weaknesses.forEach(weakness => {
        addText(`• ${weakness}`, 10, false, margin + 10)
      })
      yPosition += sectionSpacing
    })

    // Market Analysis
    addText('MARKET ANALYSIS', 16, true)
    yPosition += 5
    addText('The wellness market is segmented into four key areas where Lumen has strong positioning:', 11)
    yPosition += sectionSpacing

    marketSegments.forEach((segment, index) => {
      checkPageBreak(30)
      addText(`${index + 1}. ${segment.name}`, 13, true)
      yPosition += 5
      addText(`Market Size: ${segment.size}`, 11, false, margin + 5)
      addText(`Growth Rate: ${segment.growth}`, 11, false, margin + 5)
      addText(`Opportunity: ${segment.opportunity}`, 11, false, margin + 5)
      addText(`Lumen Fit: ${segment.lumenFit}`, 11, false, margin + 5)
      yPosition += sectionSpacing
    })

    // Market Positioning
    addText('MARKET POSITIONING', 16, true)
    yPosition += 5
    addText('Strategic Repositioning:', 12, true)
    yPosition += 5
    addText('Old Positioning: Astrology, horoscope, fortune telling, eastern readings (Rejected by App Store)', 11, false, margin + 5)
    addText('New Positioning: AI-Powered Alignment & Wellness Platform - Personal insights, goal tracking, and social compatibility (App Store compliant)', 11, false, margin + 5)
    yPosition += sectionSpacing

    addText('Key Advantages:', 12, true)
    yPosition += 5
    addText('• Wellness positioning opens larger, growing market while avoiding App Store restrictions', 11, false, margin + 5)
    addText('• Only platform combining alignment, goals, and friend compatibility', 11, false, margin + 5)
    addText('• Target audience: Gen Z & Millennials seeking personalized wellness insights', 11, false, margin + 5)
    yPosition += sectionSpacing

    // Go-to-Market Strategy
    addText('GO-TO-MARKET STRATEGY', 16, true)
    yPosition += 5
    addText('1. Launch Focus: Wellness positioning, avoid astrology language', 11, false, margin + 5)
    addText('2. Feature Priority: Alignment, Compatibility, Goals (primary features)', 11, false, margin + 5)
    addText('3. Monetization: Freemium with Energetic Profile upgrade', 11, false, margin + 5)
    addText('4. Growth: Social features drive viral growth', 11, false, margin + 5)
    yPosition += sectionSpacing

    addText('Success Metrics:', 12, true)
    yPosition += 5
    addText('• Year 1 Users: 500K', 11, false, margin + 5)
    addText('• Conversion Rate: 5%', 11, false, margin + 5)
    addText('• Year 3 Market Share Target: 15%', 11, false, margin + 5)
    addText('• Year 3 ARR Target: $50M', 11, false, margin + 5)
    addText('• NPS Target: 4.5/5', 11, false, margin + 5)
    addText('• Launch Timeline: Q2 2024', 11, false, margin + 5)
    yPosition += sectionSpacing

    addText('Risks:', 12, true)
    yPosition += 5
    addText('• App Store compliance', 11, false, margin + 5)
    addText('• Competitor response', 11, false, margin + 5)
    addText('• User education', 11, false, margin + 5)
    yPosition += sectionSpacing

    // Market Positioning Summary
    addText('MARKET POSITIONING SUMMARY', 16, true)
    yPosition += 5
    addText('Strategic Repositioning:', 12, true)
    yPosition += 5
    addText('Successfully transitioned from astrology-based app (App Store rejected) to AI-Powered Alignment & Wellness Platform, opening access to a $21.5B market.', 11)
    yPosition += sectionSpacing

    addText('Unique Value Proposition:', 12, true)
    yPosition += 5
    addText('Only platform combining personal alignment insights, goal tracking, and friend compatibility in the wellness space.', 11)
    yPosition += sectionSpacing

    addText('Key Differentiators:', 12, true)
    yPosition += 5
    addText('• Alignment: Personal insights', 11, false, margin + 5)
    addText('• Goals: Pattern tracking', 11, false, margin + 5)
    addText('• Social: Compatibility', 11, false, margin + 5)
    yPosition += sectionSpacing

    addText('Market Position: Market Entrant in Wellness category', 11)
    addText('Competitive Advantage: High (Unique feature set)', 11)
    addText('Target Market: Gen Z & Millennials (18-40 years)', 11)
    addText(`Market Size: ${totalMarketSize} TAM`, 11)
    addText('App Store Status: Compliant (Wellness category)', 11)
    yPosition += sectionSpacing

    // Trend Forecast
    addText('MARKET TREND FORECAST', 16, true)
    yPosition += 5
    addText('2024-2027 Outlook:', 12, true)
    yPosition += 5
    addText('Wellness market expected to grow at 22% CAGR. AI-powered personalization and social wellness features driving adoption. Lumen positioned to capture early market share.', 11)
    yPosition += sectionSpacing

    addText('Key Trends:', 12, true)
    yPosition += 5
    addText('• Shift from passive wellness apps to active alignment platforms', 11, false, margin + 5)
    addText('• Social features becoming essential', 11, false, margin + 5)
    addText('• Goal tracking with personal insights emerging as differentiator', 11, false, margin + 5)
    yPosition += sectionSpacing

    addText('Forecast Timeline:', 12, true)
    yPosition += 5
    addText('• 2024: Market entry, establish positioning', 11, false, margin + 5)
    addText('• 2025: User growth, feature expansion', 11, false, margin + 5)
    addText('• 2026: Market share growth, partnerships', 11, false, margin + 5)
    addText('• 2027: 15% market share target', 11, false, margin + 5)
    yPosition += sectionSpacing

    addText('Market Growth: 22% CAGR (2024-2027)', 11)
    addText('AI Adoption: 35% YoY growth rate', 11)
    addText('Social Wellness: 28% YoY (Fastest growing segment)', 11)
    addText('Market Opportunity: High (Growing demand)', 11)
    addText('Year 3 Target: 15% market share', 11)
    addText('Competitive Risk: Medium (Unique positioning)', 11)
    yPosition += sectionSpacing

    // Conclusion
    addText('CONCLUSION', 16, true)
    yPosition += 5
    addText('Lumen has strong market value potential. The wellness market is growing at 22% CAGR, positioning avoids App Store issues, and the unique feature combination (alignment + goals + social) differentiates from competitors. Focus should be on Gen Z/Millennial wellness seekers who value personalized insights, goal achievement, and meaningful social connections.', 11)
    yPosition += sectionSpacing

    addText('Recommendation: Proceed with launch focusing on wellness positioning, primary features (Alignment, Compatibility, Goals), and freemium monetization model with Energetic Profile upgrade. Target 500K users in Year 1 with 5% conversion rate, aiming for 15% market share and $50M ARR by Year 3.', 11)

    // Save the PDF
    doc.save('Lumen-Market-Research-Report.pdf')
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigateSlide('prev')
      if (e.key === 'ArrowRight') navigateSlide('next')
      if (e.key === 'Escape') setPopupData({ type: null })
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide])

  const renderPopupContent = () => {
    if (!popupData.type) return null

    switch (popupData.type) {
      case 'competitor':
        const competitor = popupData.data as Competitor
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{competitor.name}</h3>
              <div className="text-gray-400 text-lg">{competitor.category}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400 mb-2">Market Share</div>
                <div className="text-xl font-bold text-white">{competitor.marketShare}%</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Users</div>
                <div className="text-xl font-bold text-white">{competitor.users}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Pricing</div>
                <div className="text-lg text-white leading-relaxed">{competitor.pricing}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Positioning</div>
                <div className="text-lg text-white leading-relaxed">{competitor.positioning}</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Strengths
              </h4>
              <ul className="space-y-4">
                {competitor.strengths.map((strength, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-3 leading-7 text-base">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                <TrendingDown className="w-5 h-5" />
                Weaknesses
              </h4>
              <ul className="space-y-4">
                {competitor.weaknesses.map((weakness, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-3 leading-7 text-base">
                    <span className="text-red-400 mt-1">•</span>
                    <span>{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-gray-700">
              <div className="text-base text-gray-400 leading-7">
                <strong className="text-white">Competitive Analysis:</strong> {competitor.name} represents{' '}
                {competitor.marketShare}% of the market with {competitor.users} users. Their{' '}
                {competitor.category.toLowerCase()} positioning focuses on {competitor.positioning.toLowerCase()}. Key differentiators include {competitor.strengths[0].toLowerCase()} and{' '}
                {competitor.strengths[1].toLowerCase()}, while their main challenges are{' '}
                {competitor.weaknesses[0].toLowerCase()} and {competitor.weaknesses[1].toLowerCase()}.
              </div>
            </div>
          </div>
        )

      case 'market':
        const segment = popupData.data as MarketSegment
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{segment.name}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400 mb-2">Market Size</div>
                <div className="text-2xl font-bold text-white">{segment.size}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Growth Rate</div>
                <div className="text-2xl font-bold text-emerald-400">{segment.growth}</div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Opportunity</h4>
              <p className="text-gray-300 leading-7 text-base">{segment.opportunity}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Lumen Fit</h4>
              <p className="text-gray-300 leading-7 text-base">{segment.lumenFit}</p>
            </div>
            <div className="pt-6 border-t border-gray-700">
              <div className="text-base text-gray-400 leading-7">
                <strong className="text-white">Market Analysis:</strong> The {segment.name.toLowerCase()} segment
                represents a {segment.size} market opportunity with {segment.growth} growth. This segment aligns{' '}
                {segment.lumenFit.toLowerCase()} with Lumen's core value proposition, making it a strategic target for
                market entry and expansion.
              </div>
            </div>
          </div>
        )

      case 'metric':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">{popupData.data.title}</h3>
            <div className="text-gray-300 space-y-5">
              {popupData.data.details.map((detail: string, i: number) => (
                <p key={i} className="leading-7 text-base">{detail || '\u00A0'}</p>
              ))}
            </div>
          </div>
        )

      case 'feature':
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">{popupData.data.title}</h3>
            <div className="text-gray-300 space-y-5">
              {popupData.data.details.map((detail: string, i: number) => (
                <p key={i} className={`leading-7 text-base ${detail.startsWith('•') ? 'ml-4' : detail.startsWith('  •') ? 'ml-8' : ''}`}>
                  {detail || '\u00A0'}
                </p>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen transition-colors duration-500 dark bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/60 dark:bg-black/60 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Lumen Market Research
            </h1>
            <button
              onClick={generatePDFReport}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors duration-200 text-sm font-medium"
              aria-label="Download PDF Report"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download Report</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 pb-24">

        {/* Slide Content */}
        <div className="slide-container">
          {/* Overview Slide */}
          {currentSlide === 'overview' && (
            <div className="bento-grid">
              <div className="bento-card col-span-2 row-span-2 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8" />
                  <h2 className="text-4xl font-bold">Lumen</h2>
                </div>
                <p className="text-xl opacity-90 mb-6">AI-Powered Alignment & Wellness Platform</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <DollarSign className="w-4 h-4" />
                    <span>Market Size</span>
                  </div>
                  <div className="text-3xl font-bold">{totalMarketSize}</div>
                </div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: 'Market Growth: 22% CAGR',
                    details: [
                      'The wellness market is experiencing strong growth with a 22% compound annual growth rate (CAGR).',
                      '',
                      'Key Growth Drivers:',
                      '• Increasing consumer focus on mental health and wellness',
                      '• Growing adoption of AI-powered personalization',
                      '• Rising demand for social wellness features',
                      '• Shift from passive to active wellness engagement',
                      '',
                      'Market Timing: This growth trajectory presents an optimal entry point for Lumen, as the market is expanding faster than traditional categories, creating room for new players with innovative approaches.'
                    ]
                  }
                })}
                className="bento-card bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <TrendingUp className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Market Growth</div>
                <div className="text-2xl font-bold">{marketGrowth}</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-3xl p-6">
                <Users className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Target Users</div>
                <div className="text-lg font-semibold">{targetUsers}</div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: 'Key Market Opportunity',
                    details: [
                      'Strategic Repositioning Success:',
                      '',
                      'Lumen successfully transitioned from an astrology-based app (which was rejected by the App Store) to an AI-Powered Alignment & Wellness Platform. This repositioning:',
                      '',
                      '• Avoids App Store restrictions - Wellness category is fully compliant',
                      '• Opens access to a $21.5B market - Much larger than astrology market',
                      '• Targets growing segment - 22% CAGR in wellness vs declining astrology market',
                      '• Maintains core value - Personal insights and patterns without astrology language',
                      '• Differentiates from competitors - Unique combination of alignment, goals, and social features',
                      '',
                      'Market Advantage: By positioning as wellness rather than astrology, Lumen can reach a broader audience while maintaining the personalization and insight features that users value.'
                    ]
                  }
                })}
                className="bento-card col-span-2 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <Rocket className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Key Opportunity</div>
                <div className="text-lg">
                  Repositioning from astrology to wellness avoids App Store restrictions while capturing growing
                  wellness market
                </div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: '6 Major Competitors',
                    details: [
                      'Lumen faces competition from six major players in the wellness and astrology app space:',
                      '',
                      '1. Co-Star (32% market share) - Astrology app with 20M+ users, strong brand recognition, but limited wellness focus and App Store restrictions.',
                      '2. The Pattern (18% market share) - Pattern-based astrology app with 8M+ users, modern design and friend compatibility, but limited wellness integration.',
                      '3. Sanctuary (15% market share) - Wellness app with 5M+ users, holistic approach, but no personal alignment or goal tracking features.',
                      '4. Headspace (12% market share) - Market leader in meditation with 70M+ users, strong brand, but no personalization or social features.',
                      '5. Calm (10% market share) - Large wellness app with 100M+ users, diverse content, but no personal insights or goal tracking.',
                      '6. Habitica (8% market share) - Productivity app with 4M+ users, gamification and goal tracking, but no wellness focus or alignment insights.',
                      '',
                      'Key Opportunity: None of these competitors combine alignment insights, goal tracking, and friend compatibility in a wellness-focused platform, giving Lumen a unique positioning advantage.'
                    ]
                  }
                })}
                className="bento-card bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <BarChart3 className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Competitors</div>
                <div className="text-2xl font-bold">{competitors.length}</div>
                <div className="text-xs opacity-70 mt-1">Major players</div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: '4 Market Segments',
                    details: [
                      'Lumen targets four key market segments:',
                      '',
                      '1. Wellness Seekers ($4.4B, 15% YoY) - Growing demand for personalized wellness solutions. High fit with alignment & wellness insights.',
                      '2. Personal Development ($13.2B, 22% YoY) - Goal tracking and self-improvement market expanding. High fit with personal goals & alignment features.',
                      '3. Social Wellness ($1.8B, 28% YoY) - Social features in wellness apps gaining traction. High fit with friend compatibility as unique differentiator.',
                      '4. AI-Powered Apps ($2.1B, 35% YoY) - AI personalization driving user engagement. Very high fit with AI conversations & insights as core feature.',
                      '',
                      'Total Addressable Market: $21.5B across all segments with average 22% CAGR growth.'
                    ]
                  }
                })}
                className="bento-card bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <PieChart className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Market Segments</div>
                <div className="text-2xl font-bold">{marketSegments.length}</div>
                <div className="text-xs opacity-70 mt-1">Target areas</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-3xl p-6">
                <Star className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Primary Features</div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-xs opacity-70 mt-1">Core features</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-6">
                <Shield className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">App Store Status</div>
                <div className="text-lg font-semibold">Compliant</div>
                <div className="text-xs opacity-70 mt-1">Wellness positioning</div>
              </div>
            </div>
          )}

          {/* Product Slide */}
          {currentSlide === 'product' && (
            <div className="bento-grid">
              <div className="bento-card col-span-2 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-7 h-7" />
                  <h2 className="text-3xl font-bold">Core Features</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Target className="w-6 h-6 mt-1" />
                    <div>
                      <div className="font-semibold text-lg">Alignment</div>
                      <div className="text-sm opacity-90">Personal alignment check & wellness insights</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <UserCheck className="w-6 h-6 mt-1" />
                    <div>
                      <div className="font-semibold text-lg">Friend Compatibility</div>
                      <div className="text-sm opacity-90">Check compatibility with friends (social feature)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Activity className="w-6 h-6 mt-1" />
                    <div>
                      <div className="font-semibold text-lg">Personal Goals</div>
                      <div className="text-sm opacity-90">Set, track, and align goals with your patterns</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-3xl p-6">
                <MessageCircle className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Supporting Features</div>
                <div className="space-y-3">
                  <div className="text-sm">AI Conversations</div>
                  <div className="text-sm">Energetic Profile</div>
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-3xl p-6">
                <Zap className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Upgrade Feature</div>
                <div className="text-sm">
                  Energetic Profile with cultural nuances (birth chart data, not called astrology)
                </div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: 'Value Proposition',
                    details: [
                      'Lumen\'s unique value proposition centers on combining three key elements that no competitor offers together:',
                      '',
                      '1. Personal Insights & Alignment',
                      '   • Move beyond traditional astrology positioning',
                      '   • Wellness-focused platform with personalized insights',
                      '   • Based on patterns and alignment, not fortune telling',
                      '',
                      '2. Goal Tracking & Achievement',
                      '   • Set, track, and align goals with personal patterns',
                      '   • More effective than generic goal tracking',
                      '   • Pattern-based approach increases success rates',
                      '',
                      '3. Social Connection & Compatibility',
                      '   • Friend compatibility features',
                      '   • Social wellness integration',
                      '   • Community-driven engagement',
                      '',
                      'Competitive Advantage: While competitors offer one or two of these features, Lumen is the only platform that combines all three in a wellness-focused, App Store-compliant package.'
                    ]
                  }
                })}
                className="bento-card col-span-2 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <Award className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Value Proposition</div>
                <div className="text-lg">
                  Move beyond traditional astrology positioning to wellness-focused platform that combines personal
                  insights, goal tracking, and social connection
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-6">
                <Star className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Feature Count</div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-xs opacity-70 mt-1">Total features</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-3xl p-6">
                <Target className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Primary Features</div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-xs opacity-70 mt-1">Core focus</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-3xl p-6">
                <DollarSign className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Monetization</div>
                <div className="text-sm font-semibold">Freemium</div>
                <div className="text-xs opacity-70 mt-1">Energetic Profile upgrade</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-6">
                <Heart className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Social Features</div>
                <div className="text-lg font-semibold">Yes</div>
                <div className="text-xs opacity-70 mt-1">Friend compatibility</div>
              </div>
            </div>
          )}

          {/* Competitors Slide */}
          {currentSlide === 'competitors' && (
            <div className="bento-grid">
              {competitors.map((competitor, index) => (
                <div
                  key={index}
                  onClick={() => setPopupData({ type: 'competitor', data: competitor })}
                  className="bento-card bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
                >
                  <div className="absolute top-3 right-3 z-10">
                    <Info className="w-4 h-4 text-gray-600 dark:text-gray-400 bg-white/90 dark:bg-gray-800/90 rounded-full p-1" />
                  </div>
                  <div className="relative h-32 w-full overflow-hidden">
                    <img
                      src={competitor.imageUrl}
                      alt={`${competitor.name} app interface`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-black/80 text-white rounded-lg text-xs font-semibold backdrop-blur-sm">
                        {competitor.marketShare}%
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{competitor.name}</h3>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{competitor.category}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{competitor.users} users</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Strengths</span>
                      </div>
                      <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                        {competitor.strengths.slice(0, 2).map((s, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span>•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs font-semibold text-red-600 dark:text-red-400 mt-2 flex items-center gap-1">
                        <TrendingDown className="w-3 h-3" />
                        <span>Weaknesses</span>
                      </div>
                      <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                        {competitor.weaknesses.slice(0, 2).map((w, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span>•</span>
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Market Slide */}
          {currentSlide === 'market' && (
            <div className="bento-grid">
              {marketSegments.map((segment, index) => {
                const colors = [
                  'from-blue-500 to-cyan-600',
                  'from-purple-500 to-pink-600',
                  'from-emerald-500 to-teal-600',
                  'from-amber-500 to-orange-600'
                ]
                return (
                  <div
                    key={index}
                    onClick={() => setPopupData({ type: 'market', data: segment })}
                    className={`bento-card bg-gradient-to-br ${colors[index]} text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200`}
                  >
                    <Globe className="w-6 h-6 mb-3" />
                    <h3 className="font-bold text-lg mb-4 text-white">
                      {segment.name}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs opacity-80">Market Size</div>
                        <div className="text-xl font-bold text-white">
                          {segment.size}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs opacity-80">Growth</div>
                        <div className="text-lg font-semibold text-white">
                          {segment.growth}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/20">
                        <div className="text-xs font-semibold mb-1 text-white opacity-90">
                          Lumen Fit
                        </div>
                        <div className="text-xs opacity-80">
                          {segment.lumenFit}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: `Total Market: ${totalMarketSize}`,
                    details: [
                      `The combined market size across all four segments is ${totalMarketSize}, representing the total addressable market (TAM) for Lumen.`,
                      '',
                      'Market Breakdown:',
                      '• Wellness Seekers: $4.4B',
                      '• Personal Development: $13.2B (largest segment)',
                      '• Social Wellness: $1.8B',
                      '• AI-Powered Apps: $2.1B',
                      '',
                      'Market Opportunity: This represents a significant opportunity for Lumen to capture market share. Even capturing 1% of this market would represent $215M in revenue potential.'
                    ]
                  }
                })}
                className="bento-card bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <BarChart3 className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Total Market</div>
                <div className="text-2xl font-bold">{totalMarketSize}</div>
                <div className="text-xs opacity-70 mt-1">Combined segments</div>
              </div>
              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: `Average Growth: ${marketGrowth}`,
                    details: [
                      `The average compound annual growth rate (CAGR) across all market segments is ${marketGrowth}.`,
                      '',
                      'Growth by Segment:',
                      '• Wellness Seekers: 15% YoY',
                      '• Personal Development: 22% YoY',
                      '• Social Wellness: 28% YoY (fastest growing)',
                      '• AI-Powered Apps: 35% YoY (fastest growing)',
                      '',
                      'Growth Drivers:',
                      '• Increasing consumer focus on mental health',
                      '• AI personalization adoption',
                      '• Social wellness features gaining traction',
                      '• Shift from passive to active wellness engagement',
                      '',
                      'Market Timing: This strong growth rate indicates an optimal time for market entry, as the market is expanding rapidly and creating opportunities for new players.'
                    ]
                  }
                })}
                className="bento-card bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <TrendingUp className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Avg Growth</div>
                <div className="text-2xl font-bold">{marketGrowth}</div>
                <div className="text-xs opacity-70 mt-1">CAGR</div>
              </div>
            </div>
          )}

          {/* Positioning Slide */}
          {currentSlide === 'positioning' && (
            <div className="bento-grid">
              <div className="bento-card col-span-2 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-7 h-7" />
                  <h2 className="text-3xl font-bold">Market Positioning</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-lg mb-2">Old Positioning</div>
                    <div className="text-sm opacity-90">Astrology, horoscope, fortune telling, eastern readings</div>
                    <div className="text-xs opacity-75 mt-1 flex items-center gap-1">
                      <TrendingDown className="w-3 h-3" />
                      <span>Rejected by App Store</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-2">New Positioning</div>
                    <div className="text-sm opacity-90">
                      AI-Powered Alignment & Wellness Platform - Personal insights, goal tracking, and social
                      compatibility
                    </div>
                    <div className="text-xs opacity-75 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>App Store compliant</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: 'Key Competitive Advantage',
                    details: [
                      'Wellness positioning provides Lumen with significant advantages:',
                      '',
                      'Market Access:',
                      '• Opens access to $21.5B wellness market vs smaller astrology market',
                      '• Avoids App Store restrictions that blocked astrology apps',
                      '• Wellness category is fully compliant and growing',
                      '',
                      'Market Growth:',
                      '• Wellness market growing at 22% CAGR',
                      '• Astrology market declining or stagnant',
                      '• Better long-term growth potential',
                      '',
                      'Competitive Positioning:',
                      '• Less competition in wellness space for this feature combination',
                      '• Wellness positioning more acceptable to mainstream users',
                      '• Broader appeal beyond astrology enthusiasts',
                      '',
                      'Strategic Benefit: This positioning allows Lumen to capture market share in a growing, compliant category while maintaining the core value proposition of personalized insights.'
                    ]
                  }
                })}
                className="bento-card bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <Award className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Key Advantage</div>
                <div className="text-sm">
                  Wellness positioning opens larger, growing market while avoiding App Store restrictions
                </div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: 'Unique Differentiation',
                    details: [
                      'Lumen is the only platform that combines three key features:',
                      '',
                      '1. Alignment Insights',
                      '   • Personal alignment check based on patterns',
                      '   • Wellness insights without astrology language',
                      '   • Competitors either lack this or use astrology positioning',
                      '',
                      '2. Goal Tracking',
                      '   • Set, track, and align goals with personal patterns',
                      '   • Pattern-based approach increases success rates',
                      '   • Most wellness apps lack goal tracking',
                      '',
                      '3. Friend Compatibility',
                      '   • Social wellness feature',
                      '   • Check compatibility with friends',
                      '   • Drives viral growth and engagement',
                      '',
                      'Competitive Gap: No competitor offers all three. Co-Star has social but no goals. Habitica has goals but no alignment. Headspace/Calm have neither. This unique combination creates a defensible moat.'
                    ]
                  }
                })}
                className="bento-card bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <Sparkles className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Differentiation</div>
                <div className="text-sm">
                  Only platform combining alignment, goals, and friend compatibility
                </div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: 'Target Audience: Gen Z & Millennials',
                    details: [
                      'Primary Target: Gen Z & Millennials (18-40 years)',
                      '',
                      'Why This Audience:',
                      '• Highest adoption of wellness and self-improvement apps',
                      '• Most active on social platforms (aligns with friend compatibility feature)',
                      '• Value personalized insights and AI-powered experiences',
                      '• Willing to pay for premium wellness features',
                      '• Growing segment with increasing purchasing power',
                      '',
                      'User Characteristics:',
                      '• Seek personalized wellness insights (not generic advice)',
                      '• Want to achieve goals with data-driven approaches',
                      '• Value meaningful social connections',
                      '• Comfortable with AI-powered personalization',
                      '• Prefer wellness over traditional astrology',
                      '',
                      'Market Size: This demographic represents the largest and fastest-growing segment in the wellness app market, with high engagement rates and willingness to pay for premium features.'
                    ]
                  }
                })}
                className="bento-card col-span-2 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <Users className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Target Audience</div>
                <div className="text-lg">
                  Gen Z & Millennials seeking personalized wellness insights, goal achievement, and meaningful social
                  connections
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-6">
                <Shield className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">App Store Status</div>
                <div className="text-lg font-semibold">Compliant</div>
                <div className="text-xs opacity-70 mt-1">Wellness category</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-3xl p-6">
                <BarChart3 className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Market Size</div>
                <div className="text-lg font-semibold">Larger</div>
                <div className="text-xs opacity-70 mt-1">Wellness vs astrology</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-3xl p-6">
                <Star className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Unique Features</div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-xs opacity-70 mt-1">Combined features</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-3xl p-6">
                <Rocket className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Competitive Edge</div>
                <div className="text-sm font-semibold">High</div>
                <div className="text-xs opacity-70 mt-1">Unique positioning</div>
              </div>
            </div>
          )}

          {/* Strategy Slide */}
          {currentSlide === 'strategy' && (
            <div className="bento-grid">
              <div className="bento-card col-span-2 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-7 h-7" />
                  <h2 className="text-3xl font-bold">Go-to-Market Strategy</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span>1. Launch Focus</span>
                    </div>
                    <div className="text-sm opacity-90">Wellness positioning, avoid astrology language</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>2. Feature Priority</span>
                    </div>
                    <div className="text-sm opacity-90">Alignment, Compatibility, Goals (primary features)</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>3. Monetization</span>
                    </div>
                    <div className="text-sm opacity-90">Freemium with Energetic Profile upgrade</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>4. Growth</span>
                    </div>
                    <div className="text-sm opacity-90">Social features drive viral growth</div>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: 'Success Metrics & Targets',
                    details: [
                      'Lumen\'s success will be measured by the following key metrics:',
                      '',
                      'Year 1 Targets:',
                      '• Users: 500K - Focus on Gen Z & Millennial wellness seekers',
                      '• Conversion Rate: 5% - Freemium to premium conversion',
                      '• NPS: 4.5/5 - Customer satisfaction target',
                      '',
                      'Year 3 Targets:',
                      '• Market Share: 15% - Significant market presence',
                      '• ARR: $50M - Annual recurring revenue target',
                      '• User Base: 2.5M+ - Scaling from Year 1 growth',
                      '',
                      'Growth Strategy: Social features drive viral growth, AI personalization increases engagement, and unique feature combination differentiates from competitors to achieve these targets.'
                    ]
                  }
                })}
                className="bento-card bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <BarChart3 className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Success Metrics</div>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs opacity-70">Year 1 Users</div>
                    <div className="text-lg font-bold">500K</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-70">Conversion Rate</div>
                    <div className="text-lg font-bold">5%</div>
                  </div>
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-3xl p-6">
                <Shield className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Risks</div>
                <div className="text-xs space-y-1">
                  <div>• App Store compliance</div>
                  <div>• Competitor response</div>
                  <div>• User education</div>
                </div>
              </div>

              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: 'Strategic Recommendation',
                    details: [
                      'Lumen has strong market value potential based on comprehensive analysis:',
                      '',
                      'Market Opportunity:',
                      '• Wellness market growing at 22% CAGR ($21.5B TAM)',
                      '• No direct competitor combines alignment + goals + social features',
                      '• App Store compliant positioning opens larger market',
                      '',
                      'Competitive Advantage:',
                      '• Unique feature combination differentiates from all 6 major competitors',
                      '• Wellness positioning avoids restrictions faced by astrology apps',
                      '• AI-powered personalization aligns with market trends (35% YoY growth)',
                      '',
                      'Recommended Focus:',
                      '• Target Gen Z & Millennial wellness seekers (18-40 years)',
                      '• Launch with primary features: Alignment, Compatibility, Goals',
                      '• Freemium model with Energetic Profile upgrade',
                      '• Leverage social features for viral growth',
                      '',
                      'Conclusion: Proceed with launch. Market conditions, competitive landscape, and unique positioning all support strong potential for success.'
                    ]
                  }
                })}
                className="bento-card col-span-2 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-3 right-3">
                  <Info className="w-4 h-4 opacity-70" />
                </div>
                <Award className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Recommendation</div>
                <div className="text-lg">
                  Lumen has strong market value potential. Wellness market is growing, positioning avoids App Store
                  issues, and unique feature combination (alignment + goals + social) differentiates from competitors.
                  Focus on Gen Z/Millennial wellness seekers.
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-3xl p-6">
                <PieChart className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Year 3 Target</div>
                <div className="text-2xl font-bold">15%</div>
                <div className="text-xs opacity-70 mt-1">Market share</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-3xl p-6">
                <DollarSign className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">ARR Target</div>
                <div className="text-2xl font-bold">$50M</div>
                <div className="text-xs opacity-70 mt-1">Year 3</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-3xl p-6">
                <Star className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">NPS Target</div>
                <div className="text-2xl font-bold">4.5/5</div>
                <div className="text-xs opacity-70 mt-1">Customer satisfaction</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-3xl p-6">
                <Calendar className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Launch Timeline</div>
                <div className="text-sm font-semibold">Q2 2024</div>
                <div className="text-xs opacity-70 mt-1">Target launch</div>
              </div>
            </div>
          )}

          {/* Market Positioning Summary Slide */}
          {currentSlide === 'summary' && (
            <div className="bento-grid">
              <div className="bento-card col-span-2 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="w-7 h-7" />
                  <h2 className="text-3xl font-bold">Lumen Market Positioning Summary</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Rocket className="w-5 h-5" />
                      <span>Strategic Repositioning</span>
                    </div>
                    <div className="text-sm opacity-90">
                      Successfully transitioned from astrology-based app (App Store rejected) to AI-Powered Alignment & Wellness Platform, opening access to a $21.5B market
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Unique Value Proposition</span>
                    </div>
                    <div className="text-sm opacity-90">
                      Only platform combining personal alignment insights, goal tracking, and friend compatibility in the wellness space
                    </div>
                  </div>
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-3xl p-6">
                <Globe className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Market Position</div>
                <div className="text-lg font-semibold">Market Entrant</div>
                <div className="text-xs opacity-70 mt-1">Wellness category</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-6">
                <Award className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Competitive Advantage</div>
                <div className="text-sm font-semibold">High</div>
                <div className="text-xs opacity-70 mt-1">Unique feature set</div>
              </div>

              <div className="bento-card col-span-2 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6">
                <Target className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Key Differentiators</div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs opacity-70 mb-1">Alignment</div>
                    <div className="text-sm font-semibold">Personal insights</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 mb-1">Goals</div>
                    <div className="text-sm font-semibold">Pattern tracking</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 mb-1">Social</div>
                    <div className="text-sm font-semibold">Compatibility</div>
                  </div>
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-3xl p-6">
                <Users className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Target Market</div>
                <div className="text-sm font-semibold">Gen Z & Millennials</div>
                <div className="text-xs opacity-70 mt-1">18-40 years</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-3xl p-6">
                <DollarSign className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Market Size</div>
                <div className="text-2xl font-bold">{totalMarketSize}</div>
                <div className="text-xs opacity-70 mt-1">TAM</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-6">
                <Shield className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">App Store Status</div>
                <div className="text-lg font-bold">Compliant</div>
                <div className="text-xs opacity-70 mt-1">Wellness category</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-3xl p-6">
                <PieChart className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Primary Segments</div>
                <div className="text-2xl font-bold">{marketSegments.length}</div>
                <div className="text-xs opacity-70 mt-1">Target areas</div>
              </div>
            </div>
          )}

          {/* Trend Forecast Slide */}
          {currentSlide === 'forecast' && (
            <div className="bento-grid">
              <div
                onClick={() => setPopupData({
                  type: 'metric',
                  data: {
                    title: 'Market Trend Forecast: 2024-2027',
                    details: [
                      '2024-2027 Outlook:',
                      'Wellness market expected to grow at 22% CAGR. AI-powered personalization and social wellness features driving adoption. Lumen positioned to capture early market share.',
                      '',
                      'Key Trends:',
                      '• Shift from passive wellness apps to active alignment platforms',
                      '• Social features becoming essential for user engagement',
                      '• Goal tracking with personal insights emerging as differentiator',
                      '• AI adoption growing at 35% YoY',
                      '',
                      'Forecast Timeline:',
                      '• 2024: Market entry, establish positioning',
                      '• 2025: User growth, feature expansion',
                      '• 2026: Market share growth, partnerships',
                      '• 2027: 15% market share target',
                      '',
                      'Market Growth: 22% CAGR (2024-2027)',
                      'Social Wellness: 28% YoY (Fastest growing segment)',
                      'Market Opportunity: High (Growing demand)',
                      'Year 3 Target: 15% market share',
                      'Competitive Risk: Medium (Unique positioning)',
                      '',
                      'Strategic Implication: The strong growth forecast and favorable trends support Lumen\'s market entry strategy and long-term success potential.'
                    ]
                  }
                })}
                className="bento-card col-span-2 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white rounded-3xl p-8 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
              >
                <div className="absolute top-4 right-4">
                  <Info className="w-5 h-5 opacity-70" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-7 h-7" />
                  <h2 className="text-3xl font-bold">Market Trend Forecast</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>2024-2027 Outlook</span>
                    </div>
                    <div className="text-sm opacity-90">
                      Wellness market expected to grow at 22% CAGR. AI-powered personalization and social wellness features driving adoption. Lumen positioned to capture early market share.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      <span>Key Trends</span>
                    </div>
                    <div className="text-sm opacity-90">
                      Shift from passive wellness apps to active alignment platforms. Social features becoming essential. Goal tracking with personal insights emerging as differentiator.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-6">
                <TrendingUp className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Market Growth</div>
                <div className="text-2xl font-bold">{marketGrowth}</div>
                <div className="text-xs opacity-70 mt-1">2024-2027 CAGR</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-3xl p-6">
                <Zap className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">AI Adoption</div>
                <div className="text-lg font-semibold">35% YoY</div>
                <div className="text-xs opacity-70 mt-1">Growth rate</div>
              </div>

              <div className="bento-card col-span-2 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6">
                <Calendar className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-3">Forecast Highlights</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs opacity-70 mb-1">2024</div>
                    <div className="text-sm font-semibold">Market entry, establish positioning</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 mb-1">2025</div>
                    <div className="text-sm font-semibold">User growth, feature expansion</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 mb-1">2026</div>
                    <div className="text-sm font-semibold">Market share growth, partnerships</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 mb-1">2027</div>
                    <div className="text-sm font-semibold">15% market share target</div>
                  </div>
                </div>
              </div>

              <div className="bento-card bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-3xl p-6">
                <Heart className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Social Wellness</div>
                <div className="text-lg font-semibold">28% YoY</div>
                <div className="text-xs opacity-70 mt-1">Fastest growing</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-3xl p-6">
                <Rocket className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Market Opportunity</div>
                <div className="text-sm font-semibold">High</div>
                <div className="text-xs opacity-70 mt-1">Growing demand</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-3xl p-6">
                <PieChart className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Year 3 Target</div>
                <div className="text-2xl font-bold">15%</div>
                <div className="text-xs opacity-70 mt-1">Market share</div>
              </div>

              <div className="bento-card bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-6">
                <Shield className="w-6 h-6 mb-2" />
                <div className="text-sm opacity-80 mb-2">Competitive Risk</div>
                <div className="text-sm font-semibold">Medium</div>
                <div className="text-xs opacity-70 mt-1">Unique positioning</div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Popup Modal */}
      {popupData.type && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setPopupData({ type: null })}
        >
          <div
            className="bg-gray-900 rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Detailed Information</h2>
              <button
                onClick={() => setPopupData({ type: null })}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            {renderPopupContent()}
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={() => navigateSlide('prev')}
              disabled={currentSlide === slides[0]}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Previous slide"
            >
              ←
            </button>

            {/* Carousel Dots */}
            <div className="flex items-center gap-1.5">
              {slides.map((slide) => (
                <button
                  key={slide}
                  onClick={() => setCurrentSlide(slide)}
                  className={`rounded-full transition-all duration-300 ${
                    currentSlide === slide
                      ? 'bg-black dark:bg-gray-100 w-6 h-1.5'
                      : 'bg-gray-300 dark:bg-gray-700 w-1.5 h-1.5'
                  }`}
                  aria-label={`Go to ${slide} slide`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => navigateSlide('next')}
              disabled={currentSlide === slides[slides.length - 1]}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default App
