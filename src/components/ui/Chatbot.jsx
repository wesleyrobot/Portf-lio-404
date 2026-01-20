import { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Olá! Sou o assistente virtual do Wesley. Pergunte-me qualquer coisa sobre ele!', isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const botResponses = {
    'stack': 'Meu stack principal: React, Next.js, Node.js, Python, FastAPI, PostgreSQL, Docker e muito café! ☕',
    'experiência': 'Trabalho com desenvolvimento há 3+ anos, focado em Full-Stack e Cybersecurity. 💻',
    'remoto': '100% remoto ou onde o WiFi funcionar! Flexibilidade é chave! 🌍',
    'contato': 'Me encontra em: wesleymr.robot@gmail.com | WhatsApp: (19) 99209-3114 📱',
    'projetos': 'Já fiz vários! CRM Multi-tenant, Landing Pages, Calculadoras, Sistemas de IA... Dá uma olhada na seção de Projetos! 🚀',
    'cybersecurity': 'Especialista em segurança ofensiva e defensiva, análise de vulnerabilidades e hardening. 🛡️',
    'default': 'Hmm, não entendi muito bem... Tenta perguntar sobre: stack, projetos, contato, experiência, cybersecurity! 🤔'
  };

  const suggestions = [
    { label: 'Stack', question: 'Qual seu stack?' },
    { label: 'Remoto?', question: 'Trabalha remoto?' },
    { label: 'Contato', question: 'Como entro em contato?' },
    { label: 'Experiência', question: 'Qual sua experiência?' },
    { label: 'Projetos', question: 'Quais projetos você fez?' },
    { label: 'Cybersecurity', question: 'O que faz em cybersecurity?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (question) => {
    const q = question.toLowerCase();

    if (q.includes('stack') || q.includes('tecnologia')) return botResponses.stack;
    if (q.includes('experiência') || q.includes('tempo')) return botResponses.experiência;
    if (q.includes('remoto') || q.includes('trabalha')) return botResponses.remoto;
    if (q.includes('contato') || q.includes('email')) return botResponses.contato;
    if (q.includes('projeto')) return botResponses.projetos;
    if (q.includes('cyber') || q.includes('segurança')) return botResponses.cybersecurity;

    return botResponses.default;
  };

  const sendMessage = (text) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    setMessages(prev => [...prev, { text: messageText, isUser: true }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      setIsTyping(false);
      const response = getResponse(messageText);
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir chatbot"
      >
        <svg fill="white" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.35-3.83-.96l-.27-.16-2.84.48.48-2.84-.16-.27C4.35 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4-9h-2v2h-4v-2H8v-2h2V7h4v2h2v2z"/>
        </svg>
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h4>💬 Chat com Wesley</h4>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.isUser ? 'user' : 'bot'}`}
              >
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-typing">
                <span></span><span></span><span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="chatbot-suggestion"
                onClick={() => sendMessage(suggestion.question)}
              >
                {suggestion.label}
              </div>
            ))}
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Digite sua pergunta..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              autoComplete="off"
            />
            <button className="chatbot-send" onClick={() => sendMessage()}>
              <svg fill="white" width="20" height="20" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
