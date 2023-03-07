export default function Card({ children, onClick, disabled, isCorrect, isChecked, index }: any) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border-2 ${
        isChecked && (isCorrect ? "border-green-500" : "border-red-500")
      } shadow transition rounded-full py-2 px-8 font-semibold text-left text-white truncate`}
    >
      <span className="text-pink-600">{index}: </span> {children}{" "}
      {isCorrect && <span className="text-green-500">+200</span>}
    </button>
  );
}
