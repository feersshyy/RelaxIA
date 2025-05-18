  // Base de conocimiento del chatbot
  const chatbotKnowledge = {
    "hola": "¡Hola! 😊 ¿En qué puedo ayudarte hoy?",
    "qué es relaxia": "RelaxIA es una aplicación móvil inteligente diseñada para ayudarte a reducir el estrés y mejorar tu bienestar emocional mediante inteligencia artificial que se adapta a tus necesidades.",
    "cómo funciona": "RelaxIA funciona en 3 pasos: 1) Reconocimiento emocional mediante preguntas, 2) Generación de contenido personalizado (frases motivacionales, ejercicios), 3) Acceso inmediato cuando lo necesites.",
    "técnicas de relajación": "Algunas técnicas efectivas son: respiración diafragmática, relajación muscular progresiva, meditación guiada, visualización positiva y mindfulness. RelaxIA te guía en estas técnicas.",
    "manejo del estrés": "Para manejar el estrés te recomiendo: identificar las causas, practicar técnicas de relajación, mantener rutinas saludables, hacer ejercicio y usar apps como RelaxIA para apoyo emocional inmediato.",
    "consejos para ansiedad": "Para la ansiedad: respiración profunda (4-7-8), cuestionar pensamientos negativos, enfocarte en el presente, reducir cafeína y usar las herramientas de RelaxIA para calmar episodios agudos.",
    "ejercicios de respiración": "El ejercicio 4-7-8 es excelente: inhala 4 segundos, mantén 7 segundos, exhala 8 segundos. Repite 4 veces. RelaxIA incluye guías de respiración personalizadas.",
    "características principales": "Las características clave son: IA emocional, contenido personalizado, seguimiento de estado de ánimo, ejercicios de respiración guiada, frases motivacionales y accesibilidad 24/7.",
    "cómo descargar": "Próximamente disponible en App Store y Play Store. Puedes registrarte en nuestro sitio para recibir notificación cuando esté listo.",
    "precio": "La versión básica es gratuita. La versión premium con funciones avanzadas tendrá un costo accesible. Próximamente más detalles en la sección de actualizaciones.",
    "default": "Lo siento, no entendí tu pregunta. Puedes preguntarme sobre: técnicas de relajación, manejo del estrés, cómo funciona RelaxIA o características de la app."
  };

  // Elementos del DOM
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbotContainer = document.getElementById('chatbotContainer');
  const chatbotClose = document.getElementById('chatbotClose');
  const chatbotMessages = document.getElementById('chatbotMessages');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotSend = document.getElementById('chatbotSend');
  const suggestedQuestions = document.querySelectorAll('.suggested-questions li');

  // Mostrar/ocultar chatbot
  chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
  });

  chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
  });

  // Enviar mensaje al presionar Enter
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // Enviar mensaje al hacer clic en el botón
  chatbotSend.addEventListener('click', sendMessage);

  // Preguntas sugeridas
  suggestedQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const text = question.textContent;
      addMessage(text, 'user');
      setTimeout(() => {
        getBotResponse(text);
      }, 500);
    });
  });

  // Función para enviar mensaje
  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message !== '') {
      addMessage(message, 'user');
      chatbotInput.value = '';
      setTimeout(() => {
        getBotResponse(message);
      }, 500);
    }
  }

  // Función para agregar mensaje al chat
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chatbot-message', sender);
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    
    // Scroll al final
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Función para obtener respuesta del bot
  function getBotResponse(question) {
    const lowerQuestion = question.toLowerCase();
    let response = chatbotKnowledge.default;
    
    // Buscar coincidencias en la base de conocimiento
    for (const key in chatbotKnowledge) {
      if (lowerQuestion.includes(key)) {
        response = chatbotKnowledge[key];
        break;
      }
    }
    
    // Simular "escribiendo..." con un retraso
    setTimeout(() => {
      addMessage(response, 'bot');
    }, 800);
  }

  // Inicializar chatbot (opcional)
  // chatbotContainer.classList.add('active');