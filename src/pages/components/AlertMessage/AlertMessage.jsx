'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

const icons = {
  success: <CheckCircle className='text-green-500 w-6 h-6' />,
  error: <XCircle className='text-red-500 w-6 h-6' />,
  warning: <AlertTriangle className='text-yellow-500 w-6 h-6' />,
  info: <Info className='text-blue-500 w-6 h-6' />,
};

const AlertMessage = ({ type, message, show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 rounded-2xl shadow-lg p-4 
            backdrop-blur-md border text-sm sm:text-base
            ${
              type === 'success'
                ? 'bg-green-50 border-green-300 text-green-800'
                : type === 'error'
                ? 'bg-red-50 border-red-300 text-red-800'
                : type === 'warning'
                ? 'bg-yellow-50 border-yellow-300 text-yellow-800'
                : 'bg-blue-50 border-blue-300 text-blue-800'
            }`}
        >
          {icons[type]}
          <p className='font-medium'>{message}</p>
          <button
            onClick={onClose}
            className='ml-2 text-gray-500 hover:text-gray-700'
          >
            <X className='w-4 h-4' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertMessage;
