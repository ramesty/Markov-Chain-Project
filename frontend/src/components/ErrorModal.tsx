import { useData } from "../hooks/useData";
import { useState } from "react";

function ErrorModal() {
  const { error, showError, updateModal } = useData();

  if (!error || !showError) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="relative bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg"
          onClick={() => updateModal(false)}
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-2">An error occurred</h2>
        <p className="text-sm">{error}</p>
      </div>
    </div>
  );
}

export default ErrorModal;
