import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface ContactProps {
  isDarkMode: boolean;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const { error } = await supabase
        .from('messages')
        .insert([formData]);

      if (error) throw error;

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#4ec9b0] flex items-center gap-2">
        <Phone className="w-6 h-6 md:w-8 md:h-8" />
        Get in Touch
      </h2>

      {status.type && (
        <div className={`
          p-4 rounded-lg flex items-center gap-2
          ${status.type === 'success' 
            ? 'bg-green-500/10 text-green-500' 
            : 'bg-red-500/10 text-red-500'
          }
        `}>
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>{status.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className={`
          p-4 md:p-6 rounded-lg order-2 md:order-1
          ${isDarkMode ? 'bg-[#2d2d2d]' : 'bg-white shadow-lg'}
        `}>
          <h3 className="text-lg md:text-xl font-semibold text-[#9cdcfe] mb-4 md:mb-6">Contact Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#4ec9b0] flex-shrink-0" />
              <a href="mailto:your.email@example.com" className="hover:text-[#4ec9b0] transition-colors break-all">
                biruktesfayeworku@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#4ec9b0] flex-shrink-0" />
              <a href="tel:+1234567890" className="hover:text-[#4ec9b0] transition-colors">
                +251 932 449010
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#4ec9b0] flex-shrink-0" />
              <span>Addis Abeba, ETH</span>
            </div>

            <div className="flex gap-4 mt-6">
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#37373d] hover:bg-[#4ec9b0] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#37373d] hover:bg-[#4ec9b0] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 order-1 md:order-2">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`
                w-full px-3 py-2 rounded-md text-sm md:text-base
                ${isDarkMode 
                  ? 'bg-[#37373d] border-[#4c4c4c]' 
                  : 'bg-gray-100 border-gray-300'
                }
                border focus:outline-none focus:ring-1 focus:ring-[#4ec9b0]
                disabled:opacity-60
              `}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`
                w-full px-3 py-2 rounded-md text-sm md:text-base
                ${isDarkMode 
                  ? 'bg-[#37373d] border-[#4c4c4c]' 
                  : 'bg-gray-100 border-gray-300'
                }
                border focus:outline-none focus:ring-1 focus:ring-[#4ec9b0]
                disabled:opacity-60
              `}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`
                w-full px-3 py-2 rounded-md text-sm md:text-base
                ${isDarkMode 
                  ? 'bg-[#37373d] border-[#4c4c4c]' 
                  : 'bg-gray-100 border-gray-300'
                }
                border focus:outline-none focus:ring-1 focus:ring-[#4ec9b0]
                disabled:opacity-60
              `}
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`
                w-full px-3 py-2 rounded-md text-sm md:text-base
                ${isDarkMode 
                  ? 'bg-[#37373d] border-[#4c4c4c]' 
                  : 'bg-gray-100 border-gray-300'
                }
                border focus:outline-none focus:ring-1 focus:ring-[#4ec9b0]
                disabled:opacity-60
              `}
              required
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full py-2 px-4 rounded-md flex items-center justify-center gap-2
              bg-[#4ec9b0] text-black font-medium 
              ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-[#3da892]'}
              transition-colors duration-200 text-sm md:text-base
            `}
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}