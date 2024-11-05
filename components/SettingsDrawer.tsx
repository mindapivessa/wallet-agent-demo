import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { X } from "lucide-react"

interface SettingsDrawerProps {
  isOpen: boolean
  onClose: () => void
  isAutonomous: boolean
  onAutonomousChange: (value: boolean) => void
  strategy: string
  onStrategyChange: (value: string) => void
  maxSupply: string
  onMaxSupplyChange: (value: string) => void
}

export function SettingsDrawer({
  onClose,
  isAutonomous,
  onAutonomousChange,
  strategy,
  onStrategyChange,
  maxSupply,
  onMaxSupplyChange,
}: SettingsDrawerProps) {
  return (
    <div className="w-[360px] bg-zinc-900 h-full">
      <div className="flex flex-col h-full">
        <Button variant="ghost" size="icon" onClick={onClose} className="w-6 h-6 rounded p-0 text-zinc-50 hover:bg-zinc-900 hover:text-zinc-50 m-1">
            <X className="w-3 h-3" />
        </Button>
        <ScrollArea className="flex-grow">
          <div className="p-4 space-y-6">
            <div className="flex items-center justify-between space-x-2">
              <h2 className="text-sm">Autonomous Mode</h2>
              <Switch
                id="autonomous-mode"
                checked={isAutonomous}
                onCheckedChange={onAutonomousChange}
                className="data-[state=checked]:bg-zinc-700 data-[state=unchecked]:bg-zinc-700 [&>span[data-state=checked]]:bg-indigo-400 [&>span[data-state=unchecked]]:bg-zinc-50"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="strategy">Strategy</Label>
              <Select value={strategy} onValueChange={onStrategyChange}>
                <SelectTrigger id="strategy" className="w-full bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-600 focus:bg-zinc-600">
                  <SelectValue placeholder="Select a strategy" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-700 border-zinc-600 text-white">
                  <SelectItem value="conservative" className="hover:bg-zinc-600">Conservative</SelectItem>
                  <SelectItem value="high-risk" className="hover:bg-zinc-600">High-risk, high-reward</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="max-supply">Max supply allowed per day</Label>
              <div className="flex items-center">
                <Input
                  id="max-supply"
                  type="number"
                  value={maxSupply}
                  onChange={(e) => onMaxSupplyChange(e.target.value)}
                  className="w-full bg-zinc-800 border-zinc-700 text-white rounded-r-none focus:bg-zinc-600"
                />
                <div className="bg-zinc-700 text-white h-9 flex items-center px-3 rounded-r-md border border-l-0 border-zinc-600">
                  ETH
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
} 