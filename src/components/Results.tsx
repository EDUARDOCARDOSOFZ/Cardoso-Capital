
import { Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
function Results() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-6">
          <img 
            src="https://www.canva.com/design/DAGVnT2nFT0/kE2N4QRAkL6zWRU2xsXpqA/edit?utm_content=DAGVnT2nFT0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
            alt="Cardoso Capital"
            className="h-16"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Parabéns por chegar até aqui!
        </h2>

        <div className="space-y-4 mb-8">
          <h3 className="font-semibold">🎯 O Que Você Vai Ganhar Ao Se Cadastrar Agora:</h3>
          
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              Acesso exclusivo ao nosso grupo VIP para insights sobre investimentos.
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              Um bônus especial para turbinar seus conhecimentos financeiros.
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              Atualizações estratégicas direto no seu e-mail.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Como Participar:</h4>
          
          <a 
            href="https://chat.whatsapp.com/CEUXgi1MpR8JWlvvj9V7gg"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            🔗 ENTRAR NO GRUPO AGORA
          </a>

          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfMqkJtClCXDvci8H5gQbchO6HEUTxzXJZxEibUK4g1rgr66w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            🎁 QUERO MEU BÔNUS
          </a>
        </div>

        <div className="mt-8">
          <p className="text-center mb-4">
            Fale diretamente com nossa equipe se tiver dúvidas ou precisar de orientação personalizada:
          </p>
          
          <div className="flex justify-center space-x-4">
            <a
              href="https://wa.me/5562993445646"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
            
            <a
              href="https://www.instagram.com/cardoso_capital/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <p className="text-xs text-center mt-8 text-gray-500">
          © 2025 Cardoso Capital. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Results;