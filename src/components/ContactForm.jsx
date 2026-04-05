import React, { useState } from 'react';

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

export default ContactForm;
