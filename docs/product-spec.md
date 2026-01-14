# Lumen Product Specification

## Product Overview

**Name**: Lumen  
**Tagline**: AI-Powered Alignment & Wellness Platform  
**Category**: Wellness & Personal Development  
**Platform**: Mobile (iOS & Android)  
**Business Model**: Freemium

---

## Core Value Proposition

Lumen is the only platform that combines:
1. **Personal Alignment Insights** - Pattern-based wellness insights (not astrology)
2. **Goal Tracking** - Set, track, and align goals with personal patterns
3. **Friend Compatibility** - Social wellness features for meaningful connections

**Differentiator**: Wellness-focused, App Store-compliant platform that provides personalized insights, goal achievement, and social connection in one integrated experience.

---

## Primary Features

### 1. Alignment (PRIMARY) ⭐
**Description**: Personal alignment check and wellness insights

**User Actions**:
- Complete daily check-in (required for tracking)
- Answer 3-5 quick questions about alignment state
- Log activities related to intentions
- Respond to pattern-tracking prompts
- View alignment score and growth trends

**Core Functionality**:
- Daily alignment check-in (like Duolingo's lesson)
- Pattern-based insights based on energetic profile
- Alignment score calculation (0-100%)
- Growth trajectory visualization
- Pattern recognition and optimization

**Key Metrics Tracked**:
- Check-in consistency (streak)
- Daily alignment rating (1-5 scale)
- Goal activity completion
- Energy levels and patterns
- Optimal times for alignment

**Output**: 
- Real-time alignment score
- Growth charts showing improvement
- Pattern-based recommendations
- "If you continue" trajectory projections

---

### 2. Friend Compatibility (PRIMARY) ⭐
**Description**: Check compatibility with friends (social feature)

**User Actions**:
- Connect with friends
- Run compatibility checks
- Share goals and progress (optional)
- Participate in group challenges

**Core Functionality**:
- Friend connection system
- Compatibility analysis based on patterns
- Social goal sharing
- Group challenges and activities
- Community engagement

**Key Features**:
- Pattern-based compatibility scores
- Shared goal tracking
- Social wellness integration
- Viral growth mechanics

---

### 3. Personal Goals (PRIMARY) ⭐
**Description**: Set, track, and align goals with your patterns

**User Actions**:
- Set intentions/goals
- Log activities related to goals
- Complete daily check-ins
- Review progress and patterns

**Core Functionality**:
- Goal/intention setting
- Pattern-based goal alignment
- Activity logging
- Progress tracking
- Pattern-optimized scheduling

**Key Features**:
- Pattern-based timing recommendations
- Alignment score per goal
- Success rate tracking
- Adaptive insights based on patterns
- Milestone achievements

**Example Flow**:
1. User sets goal: "Meditate daily"
2. AI analyzes against patterns: "Your patterns suggest morning energy peaks at 7-9 AM"
3. User logs activities and completes check-ins
4. App tracks: Success rate, pattern alignment, optimal times
5. User sees: Growth aligned with intentions

---

## Supporting Features

### 4. AI Conversations (SUPPORTING)
**Description**: Personal AI guide for insights

**Core Functionality**:
- Conversational AI interface
- Personalized wellness guidance
- Pattern interpretation
- Goal coaching
- Alignment insights

**Key Features**:
- Natural language interaction
- Context-aware responses
- Pattern-based recommendations
- Wellness-focused guidance (not fortune telling)

---

### 5. Energetic Profile (SUPPORTING)
**Description**: Personal patterns (birth chart data, but not called astrology)

**Core Functionality**:
- Profile creation (birth date, time, location)
- Pattern analysis
- Cultural nuances (premium feature)
- Personal pattern insights

**Key Features**:
- Pattern-based insights (not astrology language)
- Wellness-focused interpretation
- Cultural context (upgrade feature)
- App Store compliant positioning

**Upgrade Feature**: Cultural nuances and advanced pattern insights

---

## User Flows

### Daily Check-In Flow (Primary Action)
```
1. User opens app
2. Sees "Daily Check-In" card (like Duolingo's lesson)
3. Taps to complete (required for streak)
4. Answers 3-5 questions:
   - "How aligned do you feel today?" (1-5)
   - "Did you work toward [goal]?" (Yes/No)
   - "How was your energy?" (Low/Medium/High)
   - "What pattern did you notice?" (Quick selection)
5. App records: Check-in complete, alignment score, goal progress
6. User sees: Updated alignment score, streak count
```

### Goal Tracking Flow
```
1. User sets intention: "Exercise 3x per week"
2. AI analyzes: "Your patterns show peak physical energy Mon/Wed/Fri mornings"
3. User logs activities as they happen
4. App tracks: Activity frequency, goal completion rate, pattern consistency
5. User views: Progress dashboard, alignment score, pattern insights
6. App provides: "You're 85% aligned with exercise goal. Your success rate is 30% higher when aligned with morning patterns."
```

### Alignment Check Flow
```
1. User taps "Check Alignment" button
2. App analyzes:
   - Current goals/intentions
   - Recent check-ins/activity
   - Pattern data
   - Historical alignment
3. Displays:
   - Alignment score (e.g., "78% Aligned")
   - Growth chart (showing improvement over time)
   - Specific insights ("You've grown 15% this month")
   - Pattern recommendations
4. User sees clear evidence of growth aligned with intentions
```

### Blueprint/Story Ending Flow
```
1. User has 30+ days of data
2. User taps "View Blueprint" or "My Trajectory"
3. App generates data-driven story:
   - Current trajectory analysis
   - Pattern-based path projection
   - "If you continue" scenario building
   - Intention-specific story endings
4. Output: Comprehensive blueprint showing:
   - Current state
   - Projected journey (30/60/90 days)
   - Pattern insights
   - Long-term vision
5. Language: "If you continue", "Based on your data", "Likely" (not predictions)
```

---

## Data Collection & Tracking

### Required User Actions
1. **Daily Check-In** (Primary, like Duolingo's lesson)
   - Frequency: Daily
   - Duration: 30-60 seconds
   - Required for: Streak tracking, alignment calculation

2. **Activity Logging**
   - Frequency: As activities happen
   - Duration: 10-20 seconds
   - Required for: Goal progress tracking

3. **Pattern Check-Ins**
   - Frequency: Contextual prompts throughout day
   - Duration: 1-2 taps
   - Required for: Pattern recognition

4. **Weekly Reflection**
   - Frequency: Once per week
   - Duration: 2-3 minutes
   - Required for: Long-term trend analysis

### What App Tracks
- Check-in consistency (streak)
- Alignment scores (1-5 scale)
- Goal activity completion
- Energy levels and patterns
- Optimal times for alignment
- Growth trajectory
- Pattern recognition

### How App Knows User is Growing
- **Week 1**: 5/7 check-ins (71%), avg alignment 3.2/5
- **Week 2**: 7/7 check-ins (100%), avg alignment 3.8/5 ⬆️
- **Week 3**: 7/7 check-ins (100%), avg alignment 4.2/5 ⬆️
- **Result**: App calculates +15% growth, shows trajectory

---

## Blueprint/Story Ending Specification

### Core Concept
**Trajectory Projection, Not Prediction**

Instead of: "You will achieve X" (fortune telling)  
Use: "Based on your current patterns, if you continue this trajectory, here's what your path looks like" (data-driven insight)

### Structure

#### 1. Current Trajectory Analysis
- Based on 30+ days of user data
- Shows: Consistency, goal alignment, energy patterns, growth rate
- Language: "Based on your data..."

#### 2. Pattern-Based Path Projection
- Optimal times for activities
- Weekly rhythm patterns
- Success factors
- Language: "Your patterns show..."

#### 3. "If You Continue" Scenario Building
- 30/60/90 day projections
- Based on current growth rate
- Pattern consistency analysis
- Language: "If you maintain this trajectory..."

#### 4. Intention-Specific Story Endings
- Goal-specific trajectory stories
- Pattern-based success factors
- Long-term vision
- Language: "Your pattern data suggests..."

### Key Principles
- ✅ Use "if you continue" language
- ✅ Ground in actual data
- ✅ Use probabilistic language ("likely", "suggests")
- ✅ Emphasize user agency
- ✅ Reference comparable patterns
- ❌ Avoid absolute predictions
- ❌ Avoid mystical language
- ❌ Avoid predetermined outcomes

### Example Output
```
"Your Meditation Journey Blueprint:

Current State (30 days):
✅ 24 meditation sessions logged
✅ 80% consistency rate
✅ Strongest alignment: Morning sessions (92% success)

Your Trajectory Story:

If you continue at this pace, your meditation practice 
is developing into a consistent morning routine. Based 
on your pattern data:

→ By Day 60: You'll likely have 50+ sessions, establishing 
   a solid habit foundation

→ By Day 90: Your morning meditation pattern will likely 
   become automatic (based on 85%+ consistency threshold)

This isn't a prediction—it's your current trajectory. 
You can accelerate it by maintaining morning consistency."
```

---

## Technical Requirements

### Platform
- iOS (App Store)
- Android (Google Play)

### Design System
- Dark theme (black/gray-900)
- Gradient cards for visual interest
- Viewport-responsive design
- Mobile-first approach

### Performance
- 60fps animations
- Fast load times
- Smooth transitions
- GPU-accelerated effects

### Accessibility
- WCAG 2.1 AA compliance
- Minimum 44px touch targets
- Screen reader support
- Keyboard navigation

---

## Monetization

### Freemium Model
- **Free Tier**: 
  - Basic alignment check-ins
  - Goal tracking
  - Friend compatibility
  - AI conversations (limited)

- **Premium Tier** (Energetic Profile Upgrade):
  - Advanced pattern insights
  - Cultural nuances
  - Enhanced AI conversations
  - Detailed blueprint analysis

### Pricing Strategy
- Target: $4.99 - $9.99/month
- Conversion goal: 5% (Year 1)
- ARR target: $50M (Year 3)

---

## Success Metrics

### User Engagement
- Daily active users (DAU)
- Check-in completion rate
- Streak maintenance
- Feature usage

### Growth Metrics
- User acquisition
- Retention rate
- Viral coefficient (social features)
- NPS: 4.5/5 target

### Business Metrics
- Conversion rate: 5% (Year 1)
- ARR: $50M (Year 3)
- Market share: 15% (Year 3)
- User base: 2.5M+ (Year 3)

---

## App Store Compliance

### Positioning
- **Wellness-focused** (not astrology)
- **Pattern-based insights** (not fortune telling)
- **Data-driven** (not predictions)
- **User agency** (not predetermined outcomes)

### Language Guidelines
- ✅ "Based on your patterns"
- ✅ "If you continue"
- ✅ "Likely" / "Suggests"
- ❌ "You will"
- ❌ "Destiny" / "Fate"
- ❌ "The stars"

---

## Launch Strategy

### Phase 1: MVP (Q2 2024)
- Alignment check-ins
- Goal tracking
- Friend compatibility (basic)
- AI conversations (limited)

### Phase 2: Growth
- Enhanced social features
- Advanced pattern insights
- Premium tier launch
- Community features

### Phase 3: Scale
- Partnerships
- B2B opportunities
- Advanced analytics
- Market expansion

---

## Key Differentiators

1. **Only platform** combining Alignment + Goals + Social in wellness space
2. **Pattern-based** insights (not generic advice)
3. **App Store compliant** (wellness positioning)
4. **Data-driven** trajectory stories (not fortune telling)
5. **User-controlled** growth narrative

---

## Risk Mitigation

### App Store Compliance
- Wellness positioning (not astrology)
- Data-driven language (not predictions)
- User agency emphasis (not predetermined)

### Competitive Response
- Unique feature combination
- Strong brand positioning
- First-mover advantage in this space

### User Education
- Clear messaging (wellness vs astrology)
- Onboarding flow
- Feature explanations

---

## Future Enhancements

### Potential Features
- Group challenges
- Community forums
- Expert insights
- Integration with fitness apps
- Wearable device integration
- B2B wellness programs

### Market Expansion
- International markets
- Additional languages
- Cultural adaptations
- Enterprise solutions
