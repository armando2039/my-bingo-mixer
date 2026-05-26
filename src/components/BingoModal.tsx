interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-xs w-full text-center shadow-xl animate-pop">
        <div className="text-6xl mb-3">🎊</div>
        <h2 className="text-3xl font-bold text-amber-500 mb-1">¡BINGO!</h2>
        <p className="text-gray-600 mb-4">¡Has completado una línea! Gran trabajo — comparte tu victoria.</p>

        <div className="flex gap-2">
          <button
            onClick={onDismiss}
            className="flex-1 bg-accent text-white font-semibold py-3 px-6 rounded-lg active:bg-accent-light transition-colors"
          >
            Keep Playing
          </button>
          <button
            onClick={() => { navigator.clipboard?.writeText('I got BINGO!'); onDismiss(); }}
            className="flex-1 bg-white border border-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
