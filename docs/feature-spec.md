# Lumen Feature Specifications

## Feature Overview Matrix

| Feature | Type | Priority | Status | User Action Required |
|---------|------|----------|--------|---------------------|
| Alignment Check-In | Primary | P1 | Core | Daily check-in (30-60s) |
| Goal Tracking | Primary | P1 | Core | Set goals, log activities |
| Friend Compatibility | Primary | P1 | Core | Connect friends, check compatibility |
| AI Conversations | Supporting | P2 | Core | Chat with AI |
| Energetic Profile | Supporting | P2 | Premium | One-time setup, upgrade for advanced |

---

## Feature 1: Alignment Check-In (PRIMARY)

### Overview
Daily check-in system that tracks user alignment with their intentions. Similar to Duolingo's daily lesson - required action for tracking.

### User Stories

#### US-ALIGN-001: Daily Check-In
**As a** user  
**I want to** complete a daily check-in  
**So that** the app can track my alignment with my intentions

**Acceptance Criteria**:
- User can access check-in from main screen
- Check-in takes 30-60 seconds
- User answers 3-5 questions
- App records completion and calculates alignment score
- Streak counter updates
- User sees immediate feedback

#### US-ALIGN-002: Alignment Score Display
**As a** user  
**I want to** see my alignment score  
**So that** I know how well I'm aligning with my intentions

**Acceptance Criteria**:
- Score displayed as percentage (0-100%)
- Score updates after each check-in
- Historical trend visible
- Breakdown by category available

#### US-ALIGN-003: Pattern Recognition
**As a** user  
**I want to** see my alignment patterns  
**So that** I can optimize when I work on my intentions

**Acceptance Criteria**:
- App identifies optimal times for alignment
- Shows weekly rhythm patterns
- Provides pattern-based recommendations
- Updates as more data is collected

### Technical Specifications

#### Data Model
```typescript
interface AlignmentCheckIn {
  userId: string
  date: Date
  alignmentScore: number // 1-5 scale
  goalProgress: {
    [goalId: string]: boolean // Did user work toward goal?
  }
  energyLevel: 'low' | 'medium' | 'high'
  patternNotes?: string
  timestamp: Date
}

interface AlignmentScore {
  userId: string
  currentScore: number // 0-100%
  trend: 'up' | 'down' | 'stable'
  growthRate: number // % change
  optimalTimes: TimeRange[]
  weeklyPattern: DayPattern[]
}
```

#### API Endpoints
- `POST /api/check-in` - Submit daily check-in
- `GET /api/alignment/score` - Get current alignment score
- `GET /api/alignment/patterns` - Get pattern insights
- `GET /api/alignment/history` - Get historical data

#### UI Components
- Check-in card (main screen)
- Check-in form (questions)
- Alignment score display
- Pattern visualization
- Growth chart

### User Flow
1. User opens app → Sees "Daily Check-In" card
2. User taps card → Check-in form opens
3. User answers questions → Submits
4. App calculates score → Updates dashboard
5. User sees feedback → Streak updated

---

## Feature 2: Goal Tracking (PRIMARY)

### Overview
Set, track, and align goals with personal patterns. Pattern-based goal tracking that's more effective than generic tracking.

### User Stories

#### US-GOAL-001: Set Goals
**As a** user  
**I want to** set personal goals/intentions  
**So that** I can track my progress toward them

**Acceptance Criteria**:
- User can create new goals
- Goals have: name, category, timeline, priority
- User can link goals to patterns
- Goals appear in dashboard

#### US-GOAL-002: Log Activities
**As a** user  
**I want to** log activities related to my goals  
**So that** the app can track my progress

**Acceptance Criteria**:
- User can log activity after completing it
- Activity linked to specific goal
- Timestamp recorded
- Optional notes/photos

#### US-GOAL-003: Pattern-Based Recommendations
**As a** user  
**I want to** receive pattern-based timing recommendations  
**So that** I can optimize when I work on goals

**Acceptance Criteria**:
- App analyzes patterns
- Suggests optimal times for activities
- Provides success rate by time
- Updates recommendations based on data

#### US-GOAL-004: Goal Progress Tracking
**As a** user  
**I want to** see my goal progress  
**So that** I know how I'm doing

**Acceptance Criteria**:
- Progress percentage displayed
- Activity frequency tracked
- Success rate calculated
- Milestone achievements shown

### Technical Specifications

#### Data Model
```typescript
interface Goal {
  id: string
  userId: string
  name: string
  category: 'wellness' | 'career' | 'relationships' | 'personal-growth'
  description?: string
  targetDate?: Date
  priority: 'high' | 'medium' | 'low'
  patternAlignment?: number // 0-100%
  createdAt: Date
}

interface GoalActivity {
  id: string
  goalId: string
  userId: string
  timestamp: Date
  notes?: string
  photos?: string[]
  alignmentScore?: number
}

interface GoalProgress {
  goalId: string
  completionRate: number // 0-100%
  activityCount: number
  successRate: number // % of activities completed
  optimalTimes: TimeRange[]
  patternInsights: PatternInsight[]
}
```

#### API Endpoints
- `POST /api/goals` - Create goal
- `GET /api/goals` - Get user goals
- `POST /api/goals/:id/activities` - Log activity
- `GET /api/goals/:id/progress` - Get progress
- `GET /api/goals/:id/patterns` - Get pattern recommendations

#### UI Components
- Goal creation form
- Goal list/dashboard
- Activity logging interface
- Progress visualization
- Pattern recommendations display

### User Flow
1. User sets goal → "Meditate daily"
2. AI analyzes patterns → "Morning energy peaks 7-9 AM"
3. User logs activities → After each meditation
4. App tracks progress → Success rate, pattern alignment
5. User views dashboard → Sees growth aligned with intentions

---

## Feature 3: Friend Compatibility (PRIMARY)

### Overview
Social wellness feature that allows users to check compatibility with friends and share goals.

### User Stories

#### US-SOCIAL-001: Connect Friends
**As a** user  
**I want to** connect with friends  
**So that** I can check compatibility and share goals

**Acceptance Criteria**:
- User can search/add friends
- Friend requests system
- Friend list management
- Privacy controls

#### US-SOCIAL-002: Compatibility Check
**As a** user  
**I want to** check compatibility with friends  
**So that** I can understand our alignment patterns

**Acceptance Criteria**:
- Run compatibility analysis
- See compatibility score
- View pattern similarities/differences
- Get insights about relationship dynamics

#### US-SOCIAL-003: Share Goals
**As a** user  
**I want to** share goals with friends  
**So that** we can support each other

**Acceptance Criteria**:
- Share goals (optional)
- See friend's goal progress
- Send encouragement
- Group challenges

#### US-SOCIAL-004: Group Challenges
**As a** user  
**I want to** participate in group challenges  
**So that** I can stay motivated with friends

**Acceptance Criteria**:
- Create/join group challenges
- Track group progress
- See leaderboard
- Celebrate achievements together

### Technical Specifications

#### Data Model
```typescript
interface Friend {
  id: string
  userId: string
  friendId: string
  status: 'pending' | 'accepted' | 'blocked'
  compatibilityScore?: number
  createdAt: Date
}

interface CompatibilityAnalysis {
  userId1: string
  userId2: string
  overallScore: number // 0-100%
  patternSimilarities: PatternMatch[]
  differences: PatternDifference[]
  recommendations: string[]
}

interface GroupChallenge {
  id: string
  name: string
  creatorId: string
  participants: string[]
  goal: string
  startDate: Date
  endDate: Date
  progress: GroupProgress
}
```

#### API Endpoints
- `POST /api/friends/request` - Send friend request
- `GET /api/friends` - Get friend list
- `POST /api/friends/:id/compatibility` - Check compatibility
- `POST /api/challenges` - Create group challenge
- `GET /api/challenges/:id/progress` - Get challenge progress

#### UI Components
- Friend search/add interface
- Compatibility results display
- Friend list
- Group challenge interface
- Social feed

---

## Feature 4: AI Conversations (SUPPORTING)

### Overview
Personal AI guide that provides wellness insights and pattern interpretation through natural language conversation.

### User Stories

#### US-AI-001: Chat with AI
**As a** user  
**I want to** chat with an AI guide  
**So that** I can get personalized wellness insights

**Acceptance Criteria**:
- Natural language conversation
- Context-aware responses
- Pattern interpretation
- Wellness-focused guidance

#### US-AI-002: Pattern Interpretation
**As a** user  
**I want to** understand my patterns  
**So that** I can make better decisions

**Acceptance Criteria**:
- AI explains patterns in simple terms
- Provides actionable insights
- Avoids astrology/fortune telling language
- Focuses on wellness and alignment

### Technical Specifications

#### Data Model
```typescript
interface Conversation {
  id: string
  userId: string
  messages: Message[]
  context: UserContext
  createdAt: Date
}

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface UserContext {
  alignmentScore: number
  recentGoals: Goal[]
  patterns: Pattern[]
  checkInHistory: AlignmentCheckIn[]
}
```

#### API Endpoints
- `POST /api/ai/conversations` - Start conversation
- `POST /api/ai/conversations/:id/messages` - Send message
- `GET /api/ai/conversations/:id` - Get conversation

#### UI Components
- Chat interface
- Message bubbles
- Typing indicator
- Context display

---

## Feature 5: Energetic Profile (SUPPORTING)

### Overview
Personal pattern profile based on birth data (not called astrology). Premium features include cultural nuances.

### User Stories

#### US-PROFILE-001: Create Profile
**As a** user  
**I want to** create my energetic profile  
**So that** the app can provide personalized insights

**Acceptance Criteria**:
- User enters: birth date, time, location
- Profile created
- Basic pattern insights available
- App Store compliant language

#### US-PROFILE-002: Premium Features
**As a** premium user  
**I want to** access advanced pattern insights  
**So that** I can get deeper understanding

**Acceptance Criteria**:
- Cultural nuances available
- Advanced pattern analysis
- Detailed blueprint insights
- Premium-only features unlocked

### Technical Specifications

#### Data Model
```typescript
interface EnergeticProfile {
  userId: string
  birthDate: Date
  birthTime?: Date
  birthLocation: {
    latitude: number
    longitude: number
    city: string
    country: string
  }
  patterns: Pattern[]
  isPremium: boolean
  createdAt: Date
}

interface Pattern {
  type: string
  value: number
  interpretation: string
  wellnessFocus: boolean
}
```

#### API Endpoints
- `POST /api/profile` - Create profile
- `GET /api/profile` - Get profile
- `PUT /api/profile` - Update profile
- `GET /api/profile/patterns` - Get pattern insights

#### UI Components
- Profile creation form
- Profile display
- Pattern visualization
- Premium upgrade prompt

---

## Cross-Feature Integration

### Data Flow
1. **Check-In** → Updates alignment score → Feeds into goals
2. **Goal Activity** → Updates goal progress → Feeds into alignment
3. **Patterns** → Inform goal recommendations → Feed into compatibility
4. **Social** → Share goals → Group challenges → Viral growth

### Unified Dashboard
- Alignment score (from check-ins)
- Goal progress (from activities)
- Friend activity (from social)
- Pattern insights (from profile)
- AI recommendations (from conversations)

---

## Success Metrics

### Feature Adoption
- Check-in completion rate: 80%+ (target)
- Goal creation: 3+ goals per user (target)
- Friend connections: 5+ friends per user (target)
- AI conversations: 2+ per week (target)

### Engagement
- Daily active users
- Feature usage frequency
- Time in app
- Return rate

### Business
- Premium conversion: 5% (Year 1)
- Feature-specific conversion rates
- User retention by feature usage

---

## Implementation Priority

### Phase 1: MVP (Core Features)
1. Alignment Check-In
2. Goal Tracking (basic)
3. Friend Compatibility (basic)

### Phase 2: Enhancement
4. AI Conversations
5. Energetic Profile (basic)

### Phase 3: Premium
6. Advanced Pattern Insights
7. Cultural Nuances
8. Enhanced Blueprint

---

## Technical Stack

### Frontend
- React Native (iOS/Android)
- TypeScript
- State management (Redux/Zustand)
- UI components (React Native Paper/NativeBase)

### Backend
- Node.js/Express or Python/FastAPI
- Database (PostgreSQL/MongoDB)
- AI/ML service (OpenAI/Anthropic)
- Real-time (WebSockets)

### Infrastructure
- Cloud hosting (AWS/GCP)
- CDN for assets
- Analytics (Mixpanel/Amplitude)
- Push notifications

---

## Testing Requirements

### Unit Tests
- Data models
- Business logic
- API endpoints
- Utility functions

### Integration Tests
- User flows
- Feature interactions
- API integrations
- Database operations

### E2E Tests
- Complete user journeys
- Check-in flow
- Goal tracking flow
- Social features

### Performance Tests
- Load testing
- Response times
- Database queries
- API performance

---

## Security & Privacy

### Data Protection
- Encrypted data storage
- Secure API communication
- User data privacy
- GDPR compliance

### Authentication
- Secure login
- Session management
- Token refresh
- Social login options

---

## Documentation

### User Documentation
- Getting started guide
- Feature tutorials
- FAQ
- Support resources

### Developer Documentation
- API documentation
- Code architecture
- Deployment guide
- Contributing guidelines
