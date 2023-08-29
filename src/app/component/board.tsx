'use client';

import React, { useState } from 'react';
import Card from './card';
import useStore, { Task } from '@/store';
import Image from 'next/image';
import Modal from '../uielement/modal';
import InputField from '../uielement/inputField';

type Props = {
  status: string;
};

const BoardCard = ({ status }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todo, setTodo] = useState('');
  const [isDraged, setIsDraged] = useState(false);

  const tasks = useStore((state) => state.tasks.filter((task: Task) => task.status === status));
  const dragTask = useStore((state) => state.dragTask);
  const addTask = useStore((state) => state.addTask);
  const setDragTask = useStore((state) => state.setDragTask);
  const moveTask = useStore((state) => state.moveTask);

  const handleModalClosed = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = () => {
    addTask(todo, status);
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`bg-gray-400 w-[40%] min-h-[500px] rounded-md ${
          isDraged ? `bg-black bg-opacity-50` : ``
        }`}
        onDragOver={(e) => {
          setIsDraged(true);
          e.preventDefault();
        }}
        onDragLeave={(e) => {
          setIsDraged(false);
          e.preventDefault();
        }}
        onDrop={(e) => {
          setIsDraged(false);
          moveTask(dragTask, status);
          setDragTask(null);
        }}
      >
        <div className="flex justify-between p-3 pb-4">
          <p className="text-xl">{status}</p>
          <Image
            src="/plusIcon.svg"
            alt="plusIcon.svg"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
        </div>
        {tasks &&
          tasks.map((task: Task) => (
            <Card key={task.title} title={task.title} status={task.status} />
          ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClosed}>
        <div className="bg-white w-[350px] sm:w-[580px] md:w-[577px] md:h-[300px] p-[15px] sm:p-[30px] md:p-[32px] border border-gray rounded-lg">
          <InputField
            label="Enter your task"
            placeholder="write your todo..."
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <div className="flex justify-between">
            <div></div>
            <button
              className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm absolute bottom-5 right-8"
              onClick={handleAddTask}
            >
              Add task
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BoardCard;
