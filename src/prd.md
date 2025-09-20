# I Luv Suits Poker Simulator - Product Requirements Document

## Core Purpose & Success
- **Mission Statement**: Simulate the casino game "I Luv Suits Poker" to calculate expected returns for different betting strategies across 1000 hands.
- **Success Indicators**: Accurate simulation of game mechanics, clear display of expected returns for base game and bonus bets, ability to configure bonus payout structures.
- **Experience Qualities**: Professional, analytical, trustworthy - like a casino gaming analysis tool.

## Project Classification & Approach
- **Complexity Level**: Light Application (multiple features with moderate state management)
- **Primary User Activity**: Analyzing - users consume statistical data and interact with configuration options

## Thought Process for Feature Selection
- **Core Problem Analysis**: Casino operators and players need to understand the mathematical expectations of "I Luv Suits Poker" betting strategies
- **User Context**: Gaming analysts, casino operators, and informed players analyzing house edge and return rates
- **Critical Path**: Configure payouts → Run simulation → View detailed results with expected returns
- **Key Moments**: 
  1. Understanding the complex game rules clearly
  2. Configuring bonus bet payouts
  3. Interpreting simulation results and expected returns

## Essential Features

### Game Simulation Engine
- **Functionality**: Accurate 7-card poker hand dealing, flush detection, straight flush detection, dealer qualification logic
- **Purpose**: Provide statistically valid analysis of the game
- **Success Criteria**: Simulation matches actual game rules and produces consistent mathematical results

### Configurable Payout Structure
- **Functionality**: Allow users to modify Flush Rush Bonus and Super Flush Rush Bonus payout tables
- **Purpose**: Analyze how different casino payout structures affect expected returns
- **Success Criteria**: Easy-to-use interface for modifying payouts with immediate impact on simulations

### Comprehensive Results Display
- **Functionality**: Show expected returns for base game (Ante/Play strategy) and both bonus bets
- **Purpose**: Provide clear insights into optimal betting strategies and house advantages
- **Success Criteria**: Clear tables showing win rates, expected returns, and statistical confidence

### Hand Analysis Details
- **Functionality**: Optional detailed view of individual hands showing cards dealt and outcomes
- **Purpose**: Allow verification of simulation accuracy and understanding of game flow
- **Success Criteria**: Clear display of 7-card hands with flush/straight flush identification

## Design Direction

### Visual Tone & Identity
- **Emotional Response**: Professional confidence and analytical precision
- **Design Personality**: Serious, trustworthy, data-focused - like financial analysis software
- **Visual Metaphors**: Casino green with clean data presentation, suggesting both gaming and statistical analysis
- **Simplicity Spectrum**: Rich interface with comprehensive data display while maintaining clarity

### Color Strategy
- **Color Scheme Type**: Monochromatic with accent colors
- **Primary Color**: Deep casino green (oklch(0.25 0.08 150)) - professional and gambling-associated
- **Secondary Colors**: Navy blue for secondary actions and data organization
- **Accent Color**: Gold/amber (oklch(0.75 0.12 80)) for highlighting important statistics and positive returns
- **Color Psychology**: Green suggests money/gambling, gold suggests value/success, navy suggests trust/analysis
- **Color Accessibility**: High contrast white text on dark backgrounds, gold accents meet WCAG AA standards
- **Foreground/Background Pairings**: 
  - Background (deep green): White text (oklch(0.98 0 0)) - 13.2:1 contrast ratio
  - Card (light gray): Dark text (oklch(0.15 0 0)) - 17.1:1 contrast ratio
  - Primary (green): White text - 13.2:1 contrast ratio
  - Accent (gold): Dark text - 8.5:1 contrast ratio

### Typography System
- **Font Pairing Strategy**: Single family (Inter) in multiple weights for hierarchy
- **Typographic Hierarchy**: Bold titles, medium subheadings, regular body text, light annotations
- **Font Personality**: Clean, modern, highly legible - conveying precision and reliability
- **Readability Focus**: Generous line spacing, clear size differentiation, adequate contrast
- **Typography Consistency**: Consistent spacing and weight relationships throughout
- **Which fonts**: Inter (400, 500, 600, 700) from Google Fonts
- **Legibility Check**: Inter is highly optimized for screen reading and data display

### Visual Hierarchy & Layout
- **Attention Direction**: Game rules → Configuration options → Simulation controls → Results analysis
- **White Space Philosophy**: Generous spacing between sections, tight spacing within related elements
- **Grid System**: Card-based layout with responsive grid for different data types
- **Responsive Approach**: Single column on mobile, multi-column dashboard on desktop
- **Content Density**: Rich data presentation balanced with visual breathing room

### Animations
- **Purposeful Meaning**: Subtle progress indicators and state transitions to convey simulation progress
- **Hierarchy of Movement**: Progress bars for long operations, gentle hover states for interactivity
- **Contextual Appropriateness**: Minimal animation - focus on data clarity over visual effects

### UI Elements & Component Selection
- **Component Usage**: 
  - Cards for organizing different data sections
  - Tables for detailed statistical results
  - Forms for payout configuration
  - Progress bars for simulation status
  - Alerts for status messages
- **Component Customization**: Dark theme variants with casino-appropriate styling
- **Component States**: Clear disabled states during simulation, hover states for interactive elements
- **Icon Selection**: Play icons for simulation, chart icons for results, settings icons for configuration
- **Component Hierarchy**: Primary buttons for main actions, secondary for configuration, tertiary for details
- **Spacing System**: Consistent 4px base unit with generous gaps between major sections
- **Mobile Adaptation**: Stacked layout for forms, horizontally scrollable tables for detailed data

### Visual Consistency Framework
- **Design System Approach**: Component-based with consistent spacing and color application
- **Style Guide Elements**: Consistent button styles, table formatting, card layouts
- **Visual Rhythm**: Regular spacing patterns and consistent component heights
- **Brand Alignment**: Professional gambling/analysis aesthetic throughout

### Accessibility & Readability
- **Contrast Goal**: WCAG AA compliance minimum (4.5:1 for normal text, 3:1 for large text)

## Edge Cases & Problem Scenarios
- **Potential Obstacles**: Complex poker hand evaluation, ensuring statistical accuracy over large simulations
- **Edge Case Handling**: Proper handling of edge cases in straight flush detection, dealer qualification scenarios
- **Technical Constraints**: Browser performance during 1000-hand simulations

## Implementation Considerations
- **Scalability Needs**: Ability to configure different payout structures, potentially expand to other game variants
- **Testing Focus**: Mathematical accuracy of poker hand evaluation and payout calculations
- **Critical Questions**: Are the poker hand evaluation algorithms correct? Do the statistical results match expected mathematical outcomes?

## Reflection
This approach transforms a simple card game simulation into a comprehensive analytical tool that provides real value for understanding the mathematics behind casino games. The focus on configurability and detailed analysis makes it useful for both educational and professional purposes.