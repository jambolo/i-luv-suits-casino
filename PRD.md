# I Love Suits Casino Game Simulator

A comprehensive simulation tool for analyzing the casino game "I Love Suits" through statistical analysis of 1000 hands, providing expected return calculations for each betting option.

**Experience Qualities**:
1. **Analytical** - Clear presentation of statistical data and probability outcomes
2. **Professional** - Casino-grade interface that feels trustworthy and precise
3. **Educational** - Helps users understand game mechanics and betting strategies

**Complexity Level**: Light Application (multiple features with basic state)
- Simulates complex card game mechanics with multiple betting options and statistical analysis

## Essential Features

### Game Simulation Engine
- **Functionality**: Simulates 1000 hands of I Love Suits with proper card dealing and rule enforcement
- **Purpose**: Generate statistically significant data for expected return calculations
- **Trigger**: User clicks "Run Simulation" button
- **Progression**: Initialize deck → Deal cards → Evaluate hands → Calculate payouts → Aggregate results → Display statistics
- **Success criteria**: Accurate simulation of game rules with consistent mathematical results

### Betting Analysis Dashboard
- **Functionality**: Displays expected return percentages for each available bet type
- **Purpose**: Educate users about the mathematical edge of different betting strategies
- **Trigger**: Automatically updates after simulation completion
- **Progression**: Receive simulation data → Calculate expected returns → Format percentages → Display in organized table
- **Success criteria**: Clear presentation of house edge and player return rates

### Real-time Progress Tracking
- **Functionality**: Shows simulation progress with hand count and current statistics
- **Purpose**: Provide feedback during the computation-intensive simulation process
- **Trigger**: Starts when simulation begins
- **Progression**: Update hand counter → Show intermediate results → Display completion status
- **Success criteria**: Smooth progress indication without blocking the UI

### Individual Hand Details
- **Functionality**: Option to view detailed results from specific hands during simulation
- **Purpose**: Allow users to understand how individual outcomes contribute to overall statistics
- **Trigger**: User toggles "Show Hand Details" option
- **Progression**: Enable detailed logging → Display hand-by-hand results → Show card combinations and payouts
- **Success criteria**: Accurate hand-by-hand breakdown with clear card and payout information

## Edge Case Handling

- **Deck Shuffling**: Proper randomization to ensure fair statistical distribution
- **Card Counting**: Reset deck state between hands to maintain independence
- **Calculation Precision**: Handle floating-point arithmetic for accurate percentage calculations
- **Performance**: Optimize simulation speed while maintaining accuracy for 1000 hands
- **Data Validation**: Verify simulation results against known mathematical probabilities

## Design Direction

The interface should feel like a professional casino analysis tool - clean, precise, and data-focused with subtle elegance that conveys trustworthiness and mathematical rigor.

## Color Selection

Triadic color scheme using casino-inspired colors that balance professionalism with gaming aesthetics.

- **Primary Color**: Deep Casino Green (oklch(0.25 0.08 150)) - Communicates trust and traditional casino atmosphere
- **Secondary Colors**: Rich Navy (oklch(0.2 0.05 240)) for data tables and backgrounds
- **Accent Color**: Gold Highlight (oklch(0.75 0.12 80)) - Draws attention to key statistics and call-to-action elements
- **Foreground/Background Pairings**: 
  - Background (Deep Green oklch(0.25 0.08 150)): White text (oklch(0.98 0 0)) - Ratio 12.1:1 ✓
  - Card (Light Gray oklch(0.95 0.01 0)): Dark text (oklch(0.15 0 0)) - Ratio 15.8:1 ✓
  - Primary (Casino Green oklch(0.25 0.08 150)): White text (oklch(0.98 0 0)) - Ratio 12.1:1 ✓
  - Accent (Gold oklch(0.75 0.12 80)): Dark text (oklch(0.15 0 0)) - Ratio 8.2:1 ✓

## Font Selection

Professional sans-serif typography that emphasizes clarity and readability for numerical data while maintaining a sophisticated casino aesthetic.

- **Typographic Hierarchy**:
  - H1 (App Title): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter SemiBold/24px/normal spacing  
  - H3 (Bet Types): Inter Medium/18px/normal spacing
  - Body (Statistics): Inter Regular/16px/relaxed line height for readability
  - Data (Numbers): Inter Medium/16px/tabular numbers for alignment

## Animations

Subtle and purposeful animations that enhance the professional feel while providing clear feedback during the simulation process.

- **Purposeful Meaning**: Motion communicates progress, completion, and data updates without feeling playful
- **Hierarchy of Movement**: Simulation progress gets primary animation focus, secondary animations for data updates

## Component Selection

- **Components**: 
  - Card components for game visualization
  - Progress bars for simulation tracking
  - Tables for statistical data display
  - Buttons for simulation controls
  - Alert dialogs for completion notifications
- **Customizations**: Custom card visualization components, specialized data table formatting
- **States**: 
  - Buttons: Disabled during simulation, highlighted when ready
  - Progress: Smooth animation with percentage indicators
  - Tables: Hover states for data rows, highlighting significant values
- **Icon Selection**: Play/pause icons for simulation control, statistics icons for data sections
- **Spacing**: Consistent 16px grid system with generous whitespace around data tables
- **Mobile**: Stack data tables vertically, collapsible sections for detailed hand information