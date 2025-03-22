import { FC } from "react";

export const Card: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="fundo-gradient rounded-2xl shadow-md p-4 my-4 text-center">
    <h2 className="font-bold text-lg mb-4">{title}</h2>
    {children}
  </div>
);

export const ProgressBar: FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full bg-gray-300 rounded-full h-4">
    <div
      className="bg-green-700 h-4 rounded-full text-white text-xs text-center"
      style={{ width: `${progress}%` }}
    >
      {progress}%
    </div>
  </div>
);

export const OptionButton: FC<{ label: string }> = ({ label }) => (
  <button className="border-2 border-green-900 rounded-full px-4 py-2 m-2 w-full">
    {label}
  </button>
);
