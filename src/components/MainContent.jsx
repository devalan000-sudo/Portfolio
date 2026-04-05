import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, tech, icon, github, demo, image }) => (
  <div className="flex flex-col md:flex-row bg-[#1a1a1a] rounded-2xl md:rounded-3xl overflow-hidden border border-[#343a40] hover:border-[#6db33f]/50 transition-all duration-500 group">
    <div className="md:w-64 bg-[#0e1012] flex items-center justify-center flex-shrink-0 min-h-[120px] md:min-h-[180px]">
      <div className="h-full w-full flex items-center justify-center p-1.5 md:p-2">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg md:rounded-xl border-2 border-[#6db33f]" />
        ) : (
          <Icon icon={icon} className="text-6xl md:text-8xl" />
        )}
      </div>
    </div>
    <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 md:gap-3 mb-3">
          {tech.map((t, i) => <Icon key={i} icon={t} className="text-2xl md:text-4xl hover:scale-110 transition-transform" />)}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <Link to={`/proyecto/${id}`} className="flex items-center gap-1 md:gap-2 bg-[#6db33f] text-black px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-white transition whitespace-nowrap">
          <Icon icon="ri:eye-line" className="text-sm md:text-base" /> Ver más
        </Link>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:gap-2 bg-black text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition border border-[#343a40]">
            <Icon icon="ri:github-fill" className="text-sm md:text-base" />
            <span className="hidden sm:inline">Código</span>
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:gap-2 bg-[#FF0000] text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-[#CC0000] transition">
            <Icon icon="ri:external-link-fill" className="text-sm md:text-base" />
            <span className="hidden sm:inline">Ver demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    } else if (formData.message.trim().length < 4) {
      newErrors.message = 'El mensaje debe tener al menos 4 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    const formspreeEndpoint = 'https://formspree.io/f/mreaoydr';
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <input 
            type="text" 
            placeholder="Nombre" 
            value={formData.name}
            onChange={(e) => {
              setFormData({...formData, name: e.target.value});
              if (errors.name) setErrors({...errors, name: null});
            }}
            className={`bg-[#0e1012] border p-3 md:p-5 rounded-xl md:rounded-2xl outline-none focus:border-[#6db33f] text-white w-full text-sm md:text-base ${errors.name ? 'border-red-500' : 'border-[#343a40]'}`}
          />
          {errors.name && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={(e) => {
              setFormData({...formData, email: e.target.value});
              if (errors.email) setErrors({...errors, email: null});
            }}
            className={`bg-[#0e1012] border p-3 md:p-5 rounded-xl md:rounded-2xl outline-none focus:border-[#6db33f] text-white w-full text-sm md:text-base ${errors.email ? 'border-red-500' : 'border-[#343a40]'}`}
          />
          {errors.email && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <textarea 
          placeholder="Mensaje" 
          rows="4" 
          value={formData.message}
          onChange={(e) => {
            setFormData({...formData, message: e.target.value});
            if (errors.message) setErrors({...errors, message: null});
          }}
          className={`w-full bg-[#0e1012] border p-3 md:p-5 rounded-xl md:rounded-2xl outline-none focus:border-[#6db33f] text-white text-sm md:text-base ${errors.message ? 'border-red-500' : 'border-[#343a40]'}`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.message}</p>}
      </div>
      
      {status === 'success' && (
        <p className="text-green-500 text-center">¡Mensaje enviado exitosamente!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-center">Error al enviar el mensaje. Intenta de nuevo.</p>
      )}
      
      <button type="submit" className="w-full bg-[#6db33f] text-black font-bold py-3 md:py-5 rounded-xl md:rounded-2xl hover:brightness-110 transition text-sm md:text-base">
        ENVIAR
      </button>
    </form>
  );
};

const MainContent = () => {
  const proyectos = [
    { id: "ecommerce", title: "Sport Store E-commerce Full Stack", description: "Tienda en línea donde puedes registrarte, ver productos, agregar al carrito, comprar y pagar con tarjeta.", tech: ["logos:java", "logos:spring-icon", "logos:javascript", "logos:react", "logos:mysql-icon", "logos:tailwindcss-icon"], icon: "ri:shopping-bag-3-line", image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773115739/Presentacion_ceavfz.png", github: "https://github.com/tu-usuario/ecommerce", demo: "https://ecommerce-demo.com" },
    { id: "medical-api", title: "Lion Bank ATM Full Stack", description: "Cajero Automático desarrollado con Springboot y React", tech: ["logos:java", "logos:spring-icon", "logos:javascript", "logos:react", "logos:mysql-icon", "logos:tailwindcss-icon"], icon: "ri:bank-line", image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773199266/ImagenInicio_bfgnwv.png", github: "https://github.com/tu-usuario/medical-api", demo: "https://medical-demo.com" },
    { id: "tickets", title: "Ticket System", description: "Gestión de incidencias con dashboard en tiempo real.", tech: ["logos:dotnet", "logos:tailwindcss-icon", "logos:react"], icon: "ri:ticket-line", github: "https://github.com/tu-usuario/tickets", demo: "https://tickets-demo.com" }
  ];

  return (
    <main className="bg-[#0e1012] text-white pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <section id="proyectos" className="py-12">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up">Proyectos</h2>
          <div className="flex flex-col items-center space-y-8">{proyectos.map((p, i) => <div key={p.id} className={`w-full max-w-4xl animate-fade-in-up delay-${(i + 1) * 100}`}><ProjectCard {...p} /></div>)}</div>
        </section>

        <section className="py-24 border-t border-[#343a40]">
          <h2 className="text-center text-gray-500 uppercase tracking-[0.4em] text-xs mb-16 font-bold animate-fade-in">Stack Tecnológico</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all mb-8 animate-fade-in-up delay-200">
            <div className="flex flex-col items-center">
              <Icon icon="logos:java" />
              <span className="text-sm text-gray-500 mt-2">Java</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:spring-icon" />
              <span className="text-sm text-gray-500 mt-2">Springboot</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:c-sharp" />
              <span className="text-sm text-gray-500 mt-2">C#</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:dotnet" />
              <span className="text-sm text-gray-500 mt-2">.NET</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:mysql-icon" />
              <span className="text-sm text-gray-500 mt-2">MySQL</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all animate-fade-in-up delay-300">
            <div className="flex flex-col items-center">
              <Icon icon="logos:javascript" />
              <span className="text-sm text-gray-500 mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:react" />
              <span className="text-sm text-gray-500 mt-2">React</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:tailwindcss-icon" />
              <span className="text-sm text-gray-500 mt-2">Tailwind</span>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-[#343a40]">
          <h2 className="text-center text-gray-500 uppercase tracking-[0.4em] text-xs mb-16 font-bold animate-fade-in">Herramientas Adicionales</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all mb-8 animate-fade-in-up delay-200">
            <div className="flex flex-col items-center">
              <Icon icon="logos:git-icon" />
              <span className="text-sm text-gray-500 mt-2">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:github-icon" />
              <span className="text-sm text-gray-500 mt-2">GitHub</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:docker-icon" />
              <span className="text-sm text-gray-500 mt-2">Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:postman" />
              <span className="text-sm text-gray-500 mt-2">Postman</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="devicon:swagger" />
              <span className="text-sm text-gray-500 mt-2">Swagger</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all animate-fade-in-up delay-300">
            <div className="flex flex-col items-center">
              <Icon icon="logos:axios" />
              <span className="text-sm text-gray-500 mt-2">Axios</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:redis" />
              <span className="text-sm text-gray-500 mt-2">Redis</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="ri:database-2-line" className="text-4xl md:text-6xl" />
              <span className="text-sm text-gray-500 mt-2">SQL Server</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:vercel" />
              <span className="text-sm text-gray-500 mt-2">Vercel</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="devicon:railway" className="text-[#7C3AED] md:grayscale md:opacity-50 md:hover:opacity-100 md:hover:grayscale-0 transition-all" />
              <span className="text-sm text-gray-500 mt-2">Railway</span>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-[#343a40]">
          <h2 className="text-center text-gray-500 uppercase tracking-[0.4em] text-xs mb-16 font-bold animate-fade-in">Editores de Código</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all mb-8 animate-fade-in-up delay-200">
            <div className="flex flex-col items-center">
              <Icon icon="logos:intellij-idea" />
              <span className="text-sm text-gray-500 mt-2">IntelliJ IDEA</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="vscode-icons:file-type-vscode" />
              <span className="text-sm text-gray-500 mt-2">VS Code</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:eclipse" />
              <span className="text-sm text-gray-500 mt-2">Eclipse</span>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="logos:netbeans" />
              <span className="text-sm text-gray-500 mt-2">NetBeans</span>
            </div>
          </div>
        </section>

        <section id="contacto" className="max-w-4xl mx-auto mt-16 md:mt-20 animate-fade-in-up delay-400 px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Contacto</h2>
            <p className="text-gray-400">Mándame un correo para ponernos en contacto</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-[#343a40]">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
