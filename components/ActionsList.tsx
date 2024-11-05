import { Button } from "@/components/ui/button"

interface ActionsListProps {
  onActionClick: (prompt: string) => void
}

export function ActionsList({ onActionClick }: ActionsListProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 ">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onActionClick("Send tokens")}
          className="bg-zinc-800 text-zinc-50 hover:text-zinc-50 border-zinc-700 hover:bg-zinc-700 text-sm py-2 pr-12 w-full text-left justify-start"
        >
          Send tokens/NFTs
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onActionClick("Request testnet ETH")}
          className="bg-zinc-800 text-zinc-50 hover:text-zinc-50 border-zinc-700 hover:bg-zinc-700 text-sm py-2 w-full text-left justify-start"
        >
          Get testnet ETH
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onActionClick("Create new wallet")}
          className="bg-zinc-800 text-zinc-50 hover:text-zinc-50 border-zinc-700 hover:bg-zinc-700 text-sm py-2 w-full text-left justify-start"
        >
          Create wallet
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onActionClick("Swap tokens")}
          className="bg-zinc-800 text-zinc-50 hover:text-zinc-50 border-zinc-700 hover:bg-zinc-700 text-sm py-2 w-full text-left justify-start"
        >
          Swap tokens
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onActionClick("Trade tokens")}
          className="bg-zinc-800 text-zinc-50 hover:text-zinc-50 border-zinc-700 hover:bg-zinc-700 text-sm py-2 w-full text-left justify-start"
        >
          Trade tokens
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onActionClick("View wallet balance")}
          className="bg-zinc-800 text-zinc-50 hover:text-zinc-50 border-zinc-700 hover:bg-zinc-700 text-sm py-2 w-full text-left justify-start"
        >
          View balance
        </Button>
      </div>
    </div>
  )
} 