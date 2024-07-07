
interface AppCardProps {
    cardName: string,
    cardValue: string,
}
function AppCard({cardName, cardValue}:AppCardProps) {
    return (
      <div className="w-fit h-[150px] flex justify-center items-center p-2 px-6 bg-white border-t border-l border-slate-500 border-opacity-65 shadow-sm shadow-green-600 rounded-lg">
        <div className="flex flex-col items-center gap-5">
            <p className="text-gra-500 text-center text-sm">{cardName}</p>
            <h1 className="text-green-800 text-3xl justify-center">{cardValue}</h1>
        </div>
        
      </div>
    )
  }
  export default AppCard;