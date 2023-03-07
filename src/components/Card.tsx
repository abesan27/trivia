export default function Card({ children }: any) {
  return (
    <div className="h-[25%] md:h-[46%] flex items-center">
      <h2 className="m-0 line-clamp-5">{children}</h2>
    </div>
  );
}
