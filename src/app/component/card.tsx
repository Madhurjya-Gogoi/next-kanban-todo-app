import React from 'react';
import { getStatusClass } from '../helper/getColorHelper';
import Image from 'next/image';
import useStore from '@/store';

type CardProps = {
  title: string;
  status: string;
};

const Card = ({ title, status }: CardProps) => {
  let statusClass = getStatusClass(status);
  const removeTask = useStore((store) => store.removeTask);
  const setDragTask = useStore((store) => store.setDragTask);

  const handleRemoved = () => {
    removeTask(title);
  };

  const hadleDragStart = () => {
    setDragTask(title);
  };

  return (
    <div className="bg-white p-3 rounded-md mx-2 mb-3" draggable onDragStart={hadleDragStart}>
      <div className="flex justify-between">
        <p className="text-black text-sm">{title}</p>
        <Image
          src="/closeIcon.svg"
          alt="closeIcon"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={handleRemoved}
        />
      </div>
      <div className="flex justify-between mt-5">
        <p></p>
        <p className={`text-sm text-white py-1 px-2 rounded ${statusClass}`}>{status}</p>
      </div>
    </div>
  );
};

export default Card;
