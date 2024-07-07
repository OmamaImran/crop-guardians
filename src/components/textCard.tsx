interface TextCardProps {
    text:String,
}
function TextCard({text}:TextCardProps) {
    return (
        <div className="w-fit flex flex-col gap-4 p-2 px-6 bg-white shadow-sm shadow-green-600 rounded-lg">
        <p className="text-green-700 text-sm">{text}</p>
      </div>
    )
  }
  export default TextCard;