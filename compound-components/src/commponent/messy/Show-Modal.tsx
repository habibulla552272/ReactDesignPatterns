'use client';
import React, { useState } from 'react';
import Model from './model';

const ShowModal = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="p-10">
      <button
        onClick={() => setisOpen(true)}
        className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
      >
        Show Your Modal
      </button>

      <Model
        isOpen={isOpen}
        setisOpen={setisOpen}
        tittle="Hello 👋"
        body="How are you? This is a beautiful modal built with React and Tailwind."
        primaryAction="Confirm"
        secondaryAction="Cancel"
      />
    </div>
  );
};

export default ShowModal;
