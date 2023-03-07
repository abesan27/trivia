export default function Button({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-full shadow text-lg bg-pink-800/80 hover:bg-pink-800 transition w-36 hover:scale-[105%]"
    >
      {children}
    </button>
  );
}
