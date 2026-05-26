import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  gameMode: 'classic' | 'speed' | 'teams';
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  gameMode,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  const markedCount = board.filter((s) => s.isMarked).length;
  return (
    <div className="flex flex-col min-h-full bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-white border-b border-gray-200">
        <button
          onClick={onReset}
          className="text-gray-500 text-sm px-3 py-1.5 rounded active:bg-gray-100"
        >
          ← Back
        </button>
        <h1 className="font-bold text-gray-900">Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-gray-500 text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      <div className="flex items-center justify-center gap-4 py-2">
        <div className="text-xs text-gray-600">Mode: <span className="font-semibold">{gameMode}</span></div>
        <div className="text-xs text-gray-600">Progress: <span className="font-semibold">{markedCount}</span> marked</div>
      </div>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-amber-100 text-amber-800 text-center py-2 font-semibold text-sm">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
