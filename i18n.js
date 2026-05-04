// Simple i18n: data-i18n="key" → text content; data-i18n-html="key" → innerHTML;
// data-i18n-attr="placeholder:key" → set attribute. Persists choice in localStorage.
(function(){
  const DICT = {
    en: {
      // nav
      "nav.work": "Work",
      "nav.about": "About",
      "nav.exhibitions": "Exhibitions",
      "nav.contact": "Contact",
      "nav.enquire": "Enquire",

      // hero
      "hero.tagVid": "",
      "hero.tagLoc": "Porto",
      "hero.tagYears": "2014–2026",
      "hero.eyebrow": "Florencia Jerez",
      "hero.title": "Painting the space<br/>between <em>nature</em><br/>and <em>emotion</em>",
      "hero.sub": "Acrylic on canvas, Porto, Portugal",
      "hero.cta1": "View Works",
      "hero.cta2": "About Flor",
      "hero.scroll": "Scroll",

      // about
      "about.eyebrow": "About the artist",
      "about.title": "Florencia<br/><em>Jerez</em>",
      "about.sub": "Argentine artist, Porto-based.",
      "about.bio1": "Florencia Jerez is an Argentinian artist based in Porto. She studied art in Tucumán, Argentina, and returned to painting in 2014 after a career change.",
      "about.bio2": "Her work has been sold and exhibited in Argentina, the United States, and the United Kingdom, and she has been interviewed for her work in Paris.",
      "about.bio3": "She works mainly with acrylic on canvas, with a preference for large format.",
      "about.statementEyebrow": "Artist statement",
      "about.statement": "My inspiration mainly comes from nature. I observe even the simplest details, such as plants, light, textures, and color, and feel amazed by how these elements carry a quiet complexity. Painting becomes a space where I let go, allowing emotions to move freely through gesture and take form on the canvas. Through this process, I explore contrasts that coexist within us, such as calm and intensity, fragility and strength, simplicity and depth. My work reflects an ongoing curiosity about human nature and connection: how we feel, relate, and find meaning in what surrounds us.",
      "about.portraitCaption": "Self-portrait with brushstrokes · 2026",
      "about.educationEyebrow": "Education",
      "about.educationTitle": "<em>Studies</em> &amp; training",
      "about.practiceEyebrow": "Current practice",
      "about.practiceTitle": "What I'm <em>working on now</em>",
      "about.collabsEyebrow": "Collaborations",
      "about.collabsTitle": "Working <em>alongside others</em>",
      "edu.2005": "Painting workshop · Yerba Buena, Tucumán",
      "edu.2009": "Bachelor of Fine Arts (first year) · National University of Tucumán, Argentina",
      "edu.2019": "English Teacher · JIM Institute",
      "edu.2020a": "Color Drawing Workshop · Agus Rúcula / Ensaladataller, Buenos Aires",
      "edu.2020b": "Color Use Seminar · Agus Rúcula / Ensaladataller, Buenos Aires",
      "edu.2021": "Abstract Art Workshop · Bastien, Buenos Aires",
      "practice.1t": "Painting",
      "practice.1b": "Acrylic on canvas with mixed-media exploration (sand, fabric, wood, plaster) and large-scale murals.",
      "practice.3t": "Inquiry",
      "practice.3b": "Ongoing exploration of human connection and the relationship between nature and emotions as artistic material.",
      "collab.1t": "McClung Music · YouTube",
      "collab.1b": "Collaborative work for the channel: chalkboard drawing videos. <a href=\"https://www.youtube.com/@McClungMusic\" target=\"_blank\" rel=\"noopener\">View channel ↗</a>",
      "collab.2t": "Casa Azul Hostel · Mural",
      "collab.2b": "Collaborative mural for Casa Azul hostel, Buenos Aires, Argentina.",
      "exh.press1": "Justfocus.fr — Paris, 2018",
      "exh.press2": "Vo-ve Noticias — Tucumán, 2018",
      "exh.press3": "Sir Babyface YouTube — Porto, 2025",
      "exh.press4": "Tattoo.artgaleria — Instagram, 2025",
      "ex.essencia.venue": "Solo exhibition, Olga Santos Gallery",
      "ex.elements.venue": "Group exhibition, Roots Restaurant · organisation &amp; participation",
      "ex.held.venue": "Tattooing &amp; body painting, open to all attendees",
      "ex.virtual.venue": "Online group exhibition",
      "ex.color.venue": "Participatory art event · organisation, participation &amp; live body painting",
      "ex.emotions.venue": "Solo exhibition, San Miguel de Tucumán",

      // works
      "works.eyebrow": "Selected works",
      "works.title": "A vocabulary of <em>gesture,</em><br/>color and quiet observation",
      "works.meta": "2018–2025<br/>Acrylic on canvas<br/>Various dimensions",
      "works.foot": "Enquire about availability",
      "works.viewAll": "View all works",
      "work.connection": "Connection",
      "work.connectionMeta": "2024 · Mixed media on canvas, 120 × 40 cm",
      "work.twinkle": "Twinkle Little Star",
      "work.twinkleMeta": "2019 · Acrylic on canvas, 140 × 100 cm",
      "work.lifedeath": "Life &amp; Death",
      "work.lifedeathMeta": "2026 · Acrylic on canvas,100 × 100 cm",
      "work.chameleon": "Alive",
      "work.chameleonMeta": "2021 · Acrylic on canvas,120 × 120 cm",
      "work.untitledI": "Death Star",
      "work.untitledIMeta": "2021 · Acrylic on canvas, 90 × 60 cm",
      "work.untitledII": "Hope",
      "work.untitledIIMeta": "2024 · Acrylic on canvas, 80 × 50 cm",
      "work.untitledIII": "Pouring experiment num 3",
      "work.untitledIIIMeta": "2018 · Mixed media on canvas, 40 × 30 cm",
      "work.untitledIV": "Chaotic beautiful life of Flor 2",
      "work.untitledIVMeta": "2019 · Mixed media on canvas, 160 × 90 cm",
      "work.untitledV": "Chaotic beautiful life of Flor 1",
      "work.untitledVMeta": "2019 · Mixed media on canvas, 160 × 90 cm",
      "work.untitledVI": "Untitled VI",
      "work.untitledVIMeta": "2025 · Acrylic on canvas, 100 × 140 cm",
      "work.untitledVII": "Miscelium an magic",
      "work.untitledVIIMeta": "2025 · Acrylic on canvas, 80 × 100 cm",
      "work.untitledVIII": "Rivers-Earth",
      "work.untitledVIIIMeta": "2024 · Mixed media on canvas, 80 × 50 cm",
      "work.untitledIX": "Paisaje",
      "work.untitledIXMeta": "2024 · Acrylic on canvas, 65 × 80 cm",
      "work.untitledX": "Fire",
      "work.untitledXMeta": "2025 · Acrylic on wood board, 40 × 80 cm",
      "work.untitledXI": "Flow (the sisters)",
      "work.untitledXIMeta": "2024 · Mixed media on canvas, 100 × 30 cm",
      "work.untitledXII": "Terra echoes",
      "work.untitledXIIMeta": "2024 · Mixed media on canvas, 60 × 80 cm",

      // philo
      "philo.pull": "Painting becomes a space where I let go: <em>and emotions take form on the canvas.</em>",
      "philo.workEyebrow": "In the studio",
      "philo.workBody": "Layers of acrylic, built up and pared back: each piece arrives in its own time.",
      "philo.processEyebrow": "Watch",
      "philo.processBody": "A short reel from the studio in Porto.",

      // contact
      "contact.eyebrow": "Acquire a work",
      "contact.title": "Inquiries",
      "contact.sub": "Original works available for purchase and commission.",
      "contact.email": "you@example.com",
      "contact.label.name": "Name",
      "contact.label.email": "Email",
      "contact.label.topic": "I'm interested in",
      "contact.label.message": "Message",
      "contact.placeholder.message": "Tell me about the work or project you have in mind…",
      "contact.topic.purchase": "Purchasing a work",
      "contact.topic.commission": "A commission",
      "contact.topic.exhibition": "An exhibition or collaboration",
      "contact.topic.other": "Something else",
      "contact.privacy": "I'll only use this to reply to you. No mailing list, no sharing.",
      "contact.sending": "Sending…",
      "contact.sent.msg": "Thanks. I'll be in touch soon.",
      "contact.error.invalid": "Please fill in all required fields.",
      "contact.error.network": "Something went wrong. Please email info@florjerezart.com directly.",
      "contact.send": "Send Enquiry",
      "contact.sent": "Sent ✓",
      "contact.footer": "© 2026 Flør Jerez Art — Porto, Portugal. Todos los derechos reservados. | Desarrollado por <a href=\"https://www.vanguardcrux.com/\" target=\"_blank\" rel=\"noopener\">Vanguard Crux</a>",

      // exhibitions page
      "exh.eyebrow": "Exhibitions & press",
      "exh.title": "A decade of <em>showing work</em>",
      "exh.meta": "Six selected exhibitions<br/>Argentina · UK · Portugal",
      "exh.lede": "From small group shows in Tucumán to recent solo exhibitions in Porto, each setting has shaped the work in a different way.",
      "exh.pressEyebrow": "Press &amp; interviews",
      "exh.back": "Back to home",

      // exhibition titles (proper nouns mostly stay)
      "ex.essencia.venue": "Olga Santos Gallery",
      "ex.elements.venue": "Roots Restaurant",
      "ex.held.venue": "Body Painting Event",
      "ex.virtual.venue": "Online Group Exhibition",
      "ex.color.venue": "Group Exhibition",
      "ex.emotions.venue": "Solo Exhibition",
      "ex.place.porto": "Porto · Portugal",
      "ex.place.uk": "United Kingdom",
      "ex.place.ba": "Buenos Aires · Argentina",
      "ex.place.tucuman": "Tucumán · Argentina",
    },

    es: {
      "nav.work": "Obra",
      "nav.about": "Sobre",
      "nav.exhibitions": "Exposiciones",
      "nav.contact": "Contacto",
      "nav.enquire": "Consultar",

      "hero.tagVid": "",
      "hero.tagLoc": "Porto",
      "hero.tagYears": "2014–2026",
      "hero.eyebrow": "Florencia Jerez",
      "hero.title": "Pintando el espacio<br/>entre la <em>naturaleza</em><br/>y la <em>emoción</em>",
      "hero.sub": "Acrílico sobre lienzo, Porto, Portugal",
      "hero.cta1": "Ver obras",
      "hero.cta2": "Sobre Flor",
      "hero.scroll": "Desliza",

      "about.eyebrow": "Sobre la artista",
      "about.title": "Florencia<br/><em>Jerez</em>",
      "about.sub": "Artista argentina, radicada en Porto.",
      "about.bio1": "Florencia Jerez es una artista argentina radicada en Porto. Estudió arte en Tucumán, Argentina, y volvió a la pintura en 2014 tras un cambio de carrera.",
      "about.bio2": "Su obra se ha vendido y exhibido en Argentina, Estados Unidos y el Reino Unido, y ha sido entrevistada por su trabajo en París.",
      "about.bio3": "Trabaja principalmente con acrílico sobre lienzo, con preferencia por el gran formato.",
      "about.statementEyebrow": "Declaración de la artista",
      "about.statement": "Mi inspiración nace, sobre todo, de la naturaleza. Observo incluso los detalles más simples (plantas, luz, texturas y color) y me maravilla cómo estos elementos guardan una complejidad silenciosa. La pintura se convierte en un espacio donde me permito soltar, dejando que las emociones se muevan libres a través del gesto y tomen forma en el lienzo. A través de este proceso, exploro los contrastes que conviven dentro de nosotros: calma e intensidad, fragilidad y fuerza, simplicidad y profundidad. Mi obra refleja una curiosidad permanente por la naturaleza humana y la conexión: cómo sentimos, nos relacionamos y encontramos sentido en lo que nos rodea.",
      "about.portraitCaption": "Autorretrato con pinceladas · 2026",
      "about.educationEyebrow": "Formación",
      "about.educationTitle": "<em>Estudios</em> y formación",
      "about.practiceEyebrow": "Práctica actual",
      "about.practiceTitle": "En lo que <em>estoy trabajando</em>",
      "about.collabsEyebrow": "Colaboraciones",
      "about.collabsTitle": "Trabajando <em>junto a otros</em>",
      "edu.2005": "Taller de pintura · Yerba Buena, Tucumán",
      "edu.2009": "Licenciatura en Bellas Artes (primer año) · Universidad Nacional de Tucumán, Argentina",
      "edu.2019": "Profesora de Inglés · Instituto JIM",
      "edu.2020a": "Taller de Dibujo en Color · Agus Rúcula / Ensaladataller, Buenos Aires",
      "edu.2020b": "Seminario sobre Uso del Color · Agus Rúcula / Ensaladataller, Buenos Aires",
      "edu.2021": "Taller de Arte Abstracto · Bastien, Buenos Aires",
      "practice.1t": "Pintura",
      "practice.1b": "Acrílico sobre lienzo con exploración de técnicas mixtas (arena, tela, madera, yeso) y murales de gran formato.",
      "practice.3t": "Indagación",
      "practice.3b": "Exploración continua de la conexión humana y de la relación entre la naturaleza y las emociones como material artístico.",
      "collab.1t": "McClung Music · YouTube",
      "collab.1b": "Trabajo colaborativo para el canal: videos de dibujo sobre pizarra. <a href=\"https://www.youtube.com/@McClungMusic\" target=\"_blank\" rel=\"noopener\">Ver canal ↗</a>",
      "collab.2t": "Hostel Casa Azul · Mural",
      "collab.2b": "Mural colaborativo para el hostel Casa Azul, Buenos Aires, Argentina.",
      "exh.press1": "Justfocus.fr · París, 2018",
      "exh.press2": "Vo-ve Noticias · Tucumán, 2018",
      "exh.press3": "Sir Babyface YouTube · Porto, 2025",
      "exh.press4": "Tattoo.artgaleria · Instagram, 2025",
      "ex.essencia.venue": "Exposición individual, Galería Olga Santos",
      "ex.elements.venue": "Exposición colectiva, Restaurante Roots · organización y participación",
      "ex.held.venue": "Tatuaje y body painting, abierto a todos los asistentes",
      "ex.virtual.venue": "Exposición colectiva en línea",
      "ex.color.venue": "Evento artístico participativo · organización, participación y body painting en vivo",
      "ex.emotions.venue": "Exposición individual, San Miguel de Tucumán",

      "works.eyebrow": "Obras seleccionadas",
      "works.title": "Un vocabulario de <em>gesto,</em><br/>color y observación silenciosa",
      "works.meta": "2018–2025<br/>Acrílico sobre lienzo<br/>Diversas dimensiones",
      "works.foot": "Consultar disponibilidad",
      "works.viewAll": "Ver todas las obras",
      "work.connection": "Connection",
      "work.connectionMeta": "2024 · Técnica mixta sobre lienzo, 120 × 40 cm",
      "work.twinkle": "Twinkle Little Star",
      "work.twinkleMeta": "2019 · Acrílico sobre lienzo, 140 × 100 cm",
      "work.lifedeath": "Life &amp; Death",
      "work.lifedeathMeta": "2026 · Acrílico sobre lienzo,100 × 100 cm",
      "work.chameleon": "Alive",
      "work.chameleonMeta": "2021 · Acrílico sobre lienzo,120 × 120 cm",
      "work.untitledI": "Death Star",
      "work.untitledIMeta": "2021 · Acrílico sobre lienzo, 90 × 60 cm",
      "work.untitledII": "Hope",
      "work.untitledIIMeta": "2024 · Acrílico sobre lienzo, 80 × 50 cm",
      "work.untitledIII": "Pouring experiment num 3",
      "work.untitledIIIMeta": "2018 · Técnica mixta sobre lienzo, 40 × 30 cm",
      "work.untitledIV": "Chaotic beautiful life of Flor 2",
      "work.untitledIVMeta": "2019 · Técnica mixta sobre lienzo, 160 × 90 cm",
      "work.untitledV": "Chaotic beautiful life of Flor 1",
      "work.untitledVMeta": "2019 · Técnica mixta sobre lienzo, 160 × 90 cm",
      "work.untitledVI": "Sin título VI",
      "work.untitledVIMeta": "2025 · Acrílico sobre lienzo, 100 × 140 cm",
      "work.untitledVII": "Miscelium an magic",
      "work.untitledVIIMeta": "2025 · Acrílico sobre lienzo, 80 × 100 cm",
      "work.untitledVIII": "Rivers-Earth",
      "work.untitledVIIIMeta": "2024 · Técnica mixta sobre lienzo, 80 × 50 cm",
      "work.untitledIX": "Paisaje",
      "work.untitledIXMeta": "2024 · Acrílico sobre lienzo, 65 × 80 cm",
      "work.untitledX": "Fire",
      "work.untitledXMeta": "2025 · Acrílico sobre madera, 40 × 80 cm",
      "work.untitledXI": "Flow (the sisters)",
      "work.untitledXIMeta": "2024 · Técnica mixta sobre lienzo, 100 × 30 cm",
      "work.untitledXII": "Terra echoes",
      "work.untitledXIIMeta": "2024 · Técnica mixta sobre lienzo, 60 × 80 cm",

      "philo.pull": "La pintura se convierte en un espacio donde me permito soltar: <em>y las emociones toman forma en el lienzo.</em>",
      "philo.workEyebrow": "En el taller",
      "philo.workBody": "Capas de acrílico, construidas y reducidas: cada pieza llega a su tiempo.",
      "philo.processEyebrow": "Mirar",
      "philo.processBody": "Un breve registro desde el taller en Porto.",

      "contact.eyebrow": "Adquirir una obra",
      "contact.title": "Consultas",
      "contact.sub": "Obras originales disponibles para venta y encargo.",
      "contact.email": "tu@correo.com",
      "contact.label.name": "Nombre",
      "contact.label.email": "Correo",
      "contact.label.topic": "Me interesa",
      "contact.label.message": "Mensaje",
      "contact.placeholder.message": "Contáme sobre la obra o proyecto que tenés en mente…",
      "contact.topic.purchase": "Comprar una obra",
      "contact.topic.commission": "Un encargo",
      "contact.topic.exhibition": "Una exposición o colaboración",
      "contact.topic.other": "Otra cosa",
      "contact.privacy": "Sólo lo uso para responderte. Sin newsletter, sin compartir.",
      "contact.sending": "Enviando…",
      "contact.sent.msg": "Gracias. Te respondo pronto.",
      "contact.error.invalid": "Por favor completá todos los campos.",
      "contact.error.network": "Algo falló. Escribí directo a info@florjerezart.com.",
      "contact.send": "Enviar consulta",
      "contact.sent": "Enviado ✓",
      "contact.footer": "© 2026 Flør Jerez Art — Porto, Portugal. Todos los derechos reservados. | Desarrollado por <a href=\"https://www.vanguardcrux.com/\" target=\"_blank\" rel=\"noopener\">Vanguard Crux</a>",

      "exh.eyebrow": "Exposiciones y prensa",
      "exh.title": "Una década <em>mostrando obra</em>",
      "exh.meta": "Seis exposiciones seleccionadas<br/>Argentina · Reino Unido · Portugal",
      "exh.lede": "Desde pequeñas muestras colectivas en Tucumán hasta recientes exposiciones individuales en Porto, cada espacio ha dado forma a la obra de un modo distinto.",
      "exh.pressEyebrow": "Prensa y entrevistas",
      "exh.back": "Volver al inicio",

      "ex.essencia.venue": "Galería Olga Santos",
      "ex.elements.venue": "Restaurante Roots",
      "ex.held.venue": "Evento de Body Painting",
      "ex.virtual.venue": "Exposición colectiva en línea",
      "ex.color.venue": "Exposición colectiva",
      "ex.emotions.venue": "Exposición individual",
      "ex.place.porto": "Porto · Portugal",
      "ex.place.uk": "Reino Unido",
      "ex.place.ba": "Buenos Aires · Argentina",
      "ex.place.tucuman": "Tucumán · Argentina",
    }
  };

  function getLang(){
    return localStorage.getItem('fjLang') || 'en';
  }
  function setLang(lang){
    localStorage.setItem('fjLang', lang);
    apply(lang);
    // toggle button states
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang-btn') === lang);
    });
    document.documentElement.setAttribute('lang', lang);
  }
  function t(key, lang){
    return (DICT[lang] && DICT[lang][key]) || (DICT.en[key]) || key;
  }
  function apply(lang){
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key, lang);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key, lang);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      // format: "attr:key,attr2:key2"
      el.getAttribute('data-i18n-attr').split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        el.setAttribute(attr, t(key, lang));
      });
    });
  }

  window.FJ_I18N = { getLang, setLang, t, apply };
  document.addEventListener('DOMContentLoaded', () => {
    setLang(getLang());
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.addEventListener('click', () => setLang(b.getAttribute('data-lang-btn')));
    });
  });
})();
