"use client"

import * as React from "react"
import { ArrowRight, ArrowUpDown, Bot, Clock, Loader2, Plus, QrCode, SendHorizontal, Share2, Wallet, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import { EthereumSvg } from "@/public/ethereumSvg"
import { UsdcSvg } from "@/public/usdcSvg"
import { UniSvg } from "@/public/uniSvg"

type Message = {
  id: number
  content: string
  sender: "user" | "assistant"
}

export default function Page() {
  const [loading, setLoading] = React.useState(true)
  const [messages, setMessages] = React.useState<Message[]>([])
  const [input, setInput] = React.useState("")
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const [isWalletOpen, setIsWalletOpen] = React.useState(false)
  const [strategy, setStrategy] = React.useState("conservative")
  const [maxSupply, setMaxSupply] = React.useState("1000")
  const [isAutonomous, setIsAutonomous] = React.useState(true)
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false)
      setMessages([
        { id: 1, content: "Hello, how can I help you today?", sender: "assistant" }
      ])
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { id: prev.length + 1, content: input, sender: "user" }])
      setInput("")
      // Simulate assistant response
      setTimeout(() => {
        setMessages(prev => [...prev, { id: prev.length + 1, content: "I'm an AI assistant. How may I assist you further?", sender: "assistant" }])
      }, 1000)
    }
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const toggleWallet = () => {
    setIsWalletOpen(!isWalletOpen)
  }

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 font-sans">
      <Card className="w-full max-w-[360px] h-[517px] bg-zinc-900 text-white border-zinc-800 relative overflow-hidden">
        <div className="flex h-full">
          <div className={`flex flex-col transition-all duration-300 ${isDrawerOpen ? 'w-[100%]' : 'w-full'}`}>
            {!isWalletOpen && (
              <CardHeader className="border-b border-zinc-800 p-2">
                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-6 h-6 rounded bg-zinc-800 p-0 hover:bg-zinc-700"
                    onClick={toggleWallet}
                  >
                    <Wallet className="w-3 h-3" />
                  </Button>
                  <span className="text-sm font-semibold">paprika.base.eth</span>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={`w-6 h-6 rounded bg-zinc-800 p-0 hover:bg-zinc-700 ${isAutonomous ? 'animate-pulse' : ''}`}
                      onClick={toggleDrawer}
                    >
                      <Bot className={`w-3 h-3 ${isAutonomous ? 'text-green-500' : 'text-white'}`} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            )}
            <CardContent className="p-0 flex-grow overflow-hidden">
              {isWalletOpen ? (
                <div className="h-full flex flex-col">
                  <div className="p-2 border-b border-zinc-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <Clock className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <QrCode className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="w-6 h-6">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-6 h-6" onClick={toggleWallet}>
                          <Bot className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <ScrollArea className="flex-grow">
                    <div className="p-3">
                      <div className="flex flex-col items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                          <Image 
                            src="/paprika.jpg" 
                            alt="Wallet avatar" 
                            width={32} 
                            height={32}
                            className="rounded-full object-cover" 
                          />
                        </div>
                        <div className="text-base font-semibold">paprika.base.eth</div>
                        <div className="text-3xl font-bold">$1,200.25</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <Button variant="secondary" className="text-zinc-50 flex flex-col items-center gap-2 h-auto py-4 bg-zinc-100/5 hover:bg-zinc-100/10">
                          <Plus className="w-5 h-5" />
                          <span>Buy</span>
                        </Button>
                        <Button variant="secondary" className="text-zinc-50 flex flex-col items-center gap-2 h-auto py-4 bg-zinc-100/5 hover:bg-zinc-100/10">
                          <ArrowRight className="w-5 h-5" />
                          <span>Send</span>
                        </Button>
                        <Button variant="secondary" className="text-zinc-50 flex flex-col items-center gap-2 h-auto py-4 bg-zinc-100/5 hover:bg-zinc-100/10">
                          <ArrowUpDown className="w-5 h-5" />
                          <span>Swap</span>
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors duration-200">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <EthereumSvg />
                            </div>
                            <div>
                              <div className="font-medium">Ethereum</div>
                              <div className="text-sm text-zinc-400">0.45 ETH</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">$1115.16</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors duration-200">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <UsdcSvg />
                            </div>
                            <div>
                              <div className="font-medium">USDC Coin</div>
                              <div className="text-sm text-zinc-400">76 USDC</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">$76.84</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 hover:bg-zinc-800 rounded-lg cursor-pointer transition-colors duration-200">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                              <UniSvg />
                            </div>
                            <div>
                              <div className="font-medium">Kibble</div>
                              <div className="text-sm text-zinc-400">20 KIBBLE</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">$20.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              ) : (
                <ScrollArea className="h-full" ref={scrollAreaRef}>
                  <div className="p-2 space-y-3">
                    {loading ? (
                      <div className="flex items-center justify-center h-full">
                        <Loader2 className="w-8 h-8 animate-spin text-white/80" />
                      </div>
                    ) : (
                      messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`flex items-start gap-1 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                            <Avatar className={`w-6 h-6 ${message.sender === 'user' ? 'bg-blue-600' : 'bg-zinc-800'}`}>
                              <AvatarFallback className="text-xs">{message.sender === 'user' ? 'U' : 'A'}</AvatarFallback>
                              <AvatarImage src={message.sender === 'user' ? '/placeholder-user.jpg' : '/placeholder-assistant.jpg'} />
                            </Avatar>
                            <div className={`rounded-lg p-2 text-sm ${message.sender === 'user' ? 'bg-blue-600' : 'bg-zinc-800'}`}>
                              {message.content}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
            {!isWalletOpen && (
              <div className="p-2 border-t border-zinc-800">
                <div className="flex flex-wrap gap-1 mb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedPrompt("What actions can I take?")}
                    className="bg-zinc-800 text-zinc-50 border-zinc-700 hover:bg-zinc-700 hover:text-white text-xs py-1 h-auto"
                  >
                    What actions can I take?
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedPrompt("Supply 2 ETH on Aave")}
                    className="bg-zinc-800 text-zinc-50 border-zinc-700 hover:bg-zinc-700 hover:text-white text-xs py-1 h-auto"
                  >
                    Supply 2 ETH on Aave
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedPrompt("Swap 100 USDC for ETH")}
                    className="bg-zinc-800 text-zinc-50 border-zinc-700 hover:bg-zinc-700 hover:text-white text-xs py-1 h-auto"
                  >
                    Swap 100 USDC for ETH
                  </Button>
                </div>
                <div className="relative flex items-center w-full">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="w-full bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400 pr-20 focus:bg-zinc-700 text-sm h-8"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button 
                    onClick={handleSend}
                    className="absolute right-1 bg-zinc-700 hover:bg-zinc-600 h-6 w-6"
                    size="sm"
                  >
                    <SendHorizontal className="w-3 h-3" />
                
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className={`bg-zinc-800 transition-all duration-300 overflow-hidden ${isDrawerOpen ? 'w-[%]' : 'w-0'}`}>
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-zinc-700">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" onClick={toggleDrawer} className="hover:bg-zinc-700">
                      <X className="w-5 h-5" />
                    </Button>
                    <h2 className="text-lg font-semibold">Autonomous Mode</h2>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="autonomous-mode"
                      checked={isAutonomous}
                      onCheckedChange={setIsAutonomous}
                      className="data-[state=checked]:bg-zinc-700"
                    />
                  </div>
                </div>
              </div>
              <ScrollArea className="flex-grow">
                <div className="p-4 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="strategy">Strategy</Label>
                    <Select value={strategy} onValueChange={setStrategy}>
                      <SelectTrigger id="strategy" className="w-full bg-zinc-700 border-zinc-600 text-white hover:bg-zinc-600 focus:bg-zinc-600">
                        <SelectValue placeholder="Select a strategy" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-700 border-zinc-600 text-white">
                        <SelectItem value="conservative" className="hover:bg-zinc-600">Conservative</SelectItem>
                        <SelectItem value="high-risk" className="hover:bg-zinc-600">High-risk, high-reward</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-supply">Max supply allowed per day</Label>
                    <div className="flex items-center">
                      <Input
                        id="max-supply"
                        type="number"
                        value={maxSupply}
                        onChange={(e) => setMaxSupply(e.target.value)}
                        className="w-full bg-zinc-700 border-zinc-600 text-white rounded-r-none focus:bg-zinc-600"
                      />
                      <div className="bg-zinc-600 text-white px-3 py-2 rounded-r-md border border-l-0 border-zinc-600">
                        ETH
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}