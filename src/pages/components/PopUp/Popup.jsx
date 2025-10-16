import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  // Remove the handleBackdropClick function since we don't want backdrop clicks to close

  if (!isVisible && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isClosing ? 'bg-black/30' : 'bg-black/30'
      }`}
      // Removed onClick from backdrop
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transition-all duration-300 transform ${
          isClosing
            ? 'opacity-0 scale-95 translate-y-4'
            : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        <div className='relative p-6'>
          <button
            onClick={closePopup}
            className='absolute -top-3 -right-3 text-[#c23c23] border border-[#c23c23] hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-[#c23c23] cursor-pointer bg-white shadow-lg z-10 hover:scale-110 active:scale-95'
          >
            <X size={20} />
          </button>

          <img
            title='Announcement'
            src='https://res.cloudinary.com/dwkajs0ca/image/upload/v1760585458/KopouArtistsCollectionsIcon/Webp/kujy6c17q3xw6slmxpqo.webp'
            alt='Kopou for Artists Popup'
            className='w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105'
          />
        </div>
      </div>
    </div>
  );
}
