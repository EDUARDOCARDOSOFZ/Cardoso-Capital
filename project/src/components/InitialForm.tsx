import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';


interface InitialFormProps {
  onSubmit: (name: string, email: string) => void;
}

function InitialForm({ onSubmit }: InitialFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      setError('Por favor, preencha todos os campos');
      return;
    }
    
    if (!email.includes('@')) {
      setError('Por favor, insira um email válido');
      return;
    }
    
    onSubmit(name, email);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-6">
          <FaWhatsapp className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-6 text-green-700">
          O Que Travou Suas Finanças?
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Seu Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Começar Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default InitialForm;