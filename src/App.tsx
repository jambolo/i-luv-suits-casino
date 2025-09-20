import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Play, ChartBar, TrendDown, TrendUp } from '@phosphor-icons/react'

interface SimulationResult {
  betType: string
  totalBet: number
  totalWon: number
  expectedReturn: number
  handsWon: number
  handsLost: number
}

interface HandResult {
  handNumber: number
  playerCards: string[]
  dealerCards: string[]
  results: { [betType: string]: { bet: number; payout: number } }
}

function App() {
  const [isSimulating, setIsSimulating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [results, setResults] = useState<SimulationResult[]>([])
  const [handDetails, setHandDetails] = useState<HandResult[]>([])
  const [showDetails, setShowDetails] = useState(false)

  const gameRules = `I Love Suits is a casino card game where players bet on suit combinations.

Game Rules:
- Each hand deals 2 cards to the player and 2 cards to the dealer
- Players can place bets on various suit combination outcomes
- Payouts vary based on the rarity of the combination

Available Bet Types:
• All Same Suit (15:1) - All 4 cards are the same suit
• Player Same Suit (3:1) - Both player cards are the same suit  
• Dealer Same Suit (3:1) - Both dealer cards are the same suit
• All Different Suits (2:1) - All 4 cards are different suits
• Exactly 2 Suits (1:1) - Cards contain exactly 2 different suits
• Exactly 3 Suits (1:1) - Cards contain exactly 3 different suits`

  const suits = ['♠', '♥', '♦', '♣']
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

  const createDeck = () => {
    const deck = []
    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push(`${rank}${suit}`)
      }
    }
    return deck
  }

  const shuffleDeck = (deck: string[]) => {
    const shuffled = [...deck]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const getSuit = (card: string) => card.slice(-1)

  const evaluateHand = (playerCards: string[], dealerCards: string[]) => {
    const playerSuits = playerCards.map(getSuit)
    const dealerSuits = dealerCards.map(getSuit)
    const allCards = [...playerCards, ...dealerCards]
    const allSuits = allCards.map(getSuit)
    
    const betResults: { [key: string]: { win: boolean; payout: number } } = {
      'All Same Suit': {
        win: allSuits.every(suit => suit === allSuits[0]),
        payout: 15
      },
      'Player Same Suit': {
        win: playerSuits.every(suit => suit === playerSuits[0]),
        payout: 3
      },
      'Dealer Same Suit': {
        win: dealerSuits.every(suit => suit === dealerSuits[0]),
        payout: 3
      },
      'All Different Suits': {
        win: new Set(allSuits).size === allSuits.length,
        payout: 2
      },
      'Exactly 2 Suits': {
        win: new Set(allSuits).size === 2,
        payout: 1
      },
      'Exactly 3 Suits': {
        win: new Set(allSuits).size === 3,
        payout: 1
      }
    }

    return betResults
  }

  const simulateHands = async () => {
    setIsSimulating(true)
    setProgress(0)
    
    const numHands = 1000
    const betAmount = 10
    
    const betTotals: { [key: string]: { totalBet: number; totalWon: number; handsWon: number; handsLost: number } } = {}
    const handResults: HandResult[] = []

    const betTypes = ['All Same Suit', 'Player Same Suit', 'Dealer Same Suit', 'All Different Suits', 'Exactly 2 Suits', 'Exactly 3 Suits']
    betTypes.forEach(bet => {
      betTotals[bet] = { totalBet: 0, totalWon: 0, handsWon: 0, handsLost: 0 }
    })

    for (let hand = 0; hand < numHands; hand++) {
      const deck = shuffleDeck(createDeck())
      
      const playerCards = [deck[0], deck[1]]
      const dealerCards = [deck[2], deck[3]]
      
      const handResult = evaluateHand(playerCards, dealerCards)
      
      const handDetail: HandResult = {
        handNumber: hand + 1,
        playerCards,
        dealerCards,
        results: {}
      }

      for (const betType of betTypes) {
        const result = handResult[betType]
        const payout = result.win ? betAmount * result.payout : 0
        
        betTotals[betType].totalBet += betAmount
        betTotals[betType].totalWon += payout
        
        if (result.win) {
          betTotals[betType].handsWon++
        } else {
          betTotals[betType].handsLost++
        }

        handDetail.results[betType] = {
          bet: betAmount,
          payout: payout
        }
      }

      handResults.push(handDetail)
      
      setProgress(((hand + 1) / numHands) * 100)
      
      if (hand % 50 === 0) {
        await new Promise(resolve => setTimeout(resolve, 10))
      }
    }

    const simulationResults: SimulationResult[] = betTypes.map(betType => {
      const data = betTotals[betType]
      const expectedReturn = ((data.totalWon - data.totalBet) / data.totalBet) * 100
      
      return {
        betType,
        totalBet: data.totalBet,
        totalWon: data.totalWon,
        expectedReturn,
        handsWon: data.handsWon,
        handsLost: data.handsLost
      }
    })

    setResults(simulationResults)
    setHandDetails(handResults)
    setIsSimulating(false)
  }

  const formatPercentage = (value: number) => {
    const color = value >= 0 ? 'text-green-600' : 'text-red-600'
    const icon = value >= 0 ? <TrendUp className="w-4 h-4" /> : <TrendDown className="w-4 h-4" />
    return (
      <div className={`flex items-center gap-1 ${color}`}>
        {icon}
        {value.toFixed(2)}%
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">I Love Suits Simulator</h1>
          <p className="text-muted-foreground">Statistical analysis of 1000 hands with expected return calculations</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChartBar className="w-5 h-5" />
              Game Rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-wrap text-sm">{gameRules}</div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Simulation Control</CardTitle>
              <CardDescription>Run 1000 hands to analyze betting returns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={simulateHands} 
                disabled={isSimulating}
                className="w-full"
                size="lg"
              >
                {isSimulating ? (
                  <>Simulating... {progress.toFixed(0)}%</>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Run Simulation
                  </>
                )}
              </Button>
              
              {isSimulating && (
                <div className="space-y-2">
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-muted-foreground text-center">
                    Hand {Math.floor(progress * 10)} of 1000
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="show-details"
                  checked={showDetails}
                  onChange={(e) => setShowDetails(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="show-details" className="text-sm">
                  Show hand details
                </label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Simulation Status</CardTitle>
            </CardHeader>
            <CardContent>
              {results.length > 0 ? (
                <Alert>
                  <AlertDescription>
                    Simulation complete! Analyzed {handDetails.length} hands across {results.length} bet types.
                    View the expected returns below.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert>
                  <AlertDescription>
                    No simulation data available. Click "Run Simulation" to analyze 1000 hands.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>

        {results.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Expected Return Analysis</CardTitle>
              <CardDescription>Statistical results from 1000 hands ($10 bet per hand)</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bet Type</TableHead>
                    <TableHead className="text-right">Total Bet</TableHead>
                    <TableHead className="text-right">Total Won</TableHead>
                    <TableHead className="text-right">Hands Won</TableHead>
                    <TableHead className="text-right">Win Rate</TableHead>
                    <TableHead className="text-right">Expected Return</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result) => (
                    <TableRow key={result.betType}>
                      <TableCell className="font-medium">{result.betType}</TableCell>
                      <TableCell className="text-right">${result.totalBet}</TableCell>
                      <TableCell className="text-right">${result.totalWon}</TableCell>
                      <TableCell className="text-right">
                        {result.handsWon} / 1000
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="outline">
                          {((result.handsWon / 1000) * 100).toFixed(1)}%
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {formatPercentage(result.expectedReturn)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {showDetails && handDetails.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Hand Details</CardTitle>
              <CardDescription>Individual hand results (showing first 20 hands)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {handDetails.slice(0, 20).map((hand) => (
                  <div key={hand.handNumber} className="border rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Hand #{hand.handNumber}</h4>
                      <div className="text-sm text-muted-foreground">
                        Player: {hand.playerCards.join(', ')} | Dealer: {hand.dealerCards.join(', ')}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                      {Object.entries(hand.results).map(([betType, result]) => (
                        <div key={betType} className="flex justify-between">
                          <span>{betType}:</span>
                          <span className={result.payout > 0 ? 'text-green-600' : 'text-red-600'}>
                            ${result.payout > 0 ? `+${result.payout}` : `-${result.bet}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default App