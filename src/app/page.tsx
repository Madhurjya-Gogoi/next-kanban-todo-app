import { BoardCard } from './component';

export default function Home() {
  return (
    <div className="flex gap-4 w-[80%] mx-auto mt-8">
      <BoardCard status="Todo" />
      <BoardCard status="Inprogress" />
      <BoardCard status="Done" />
    </div>
  );
}
