// components/FeedbackForm.jsx
import { useState } from 'react';
import emailjs from 'emailjs-com';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'feedback',
    message: '',
    rating: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await emailjs.send(
        'service_sgu1d9s',
        'template_gaxvn1v',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          rating:
            formData.subject === 'feedback'
              ? formData.rating
              : '* no rating... *', // Send empty if not feedback
          show_rating: formData.subject === 'feedback', // Add this for template logic
          current_date: getCurrentDateTime(),
          to_email: 'kopoucollectives@gmail.com', // Optional: specify recipient
        },
        'dnwApwImSCR1tMQ9D'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'feedback',
          message: '',
          rating: 5,
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if rating should be shown
  const showRating = formData.subject === 'feedback';

  return (
    <div className=' mx-auto p-6 montserrat-text text-sm md:text-[1rem]'>
      {/* <h2 className='text-lg md:text-xl lg:text-2xl font-bold mb-6 text-[#c23c23] poppins-text'>
        Send Us Feedback
      </h2> */}

      {submitStatus === 'success' && (
        <div className='mb-4 p-3 bg-green-100 text-green-700 rounded'>
          Thank you for your message. We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className='mb-4 p-3 bg-red-100 text-red-700 rounded'>
          Sorry, there was an error sending your feedback. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex md:flex-row flex-col gap-2'>
          <div className='w-full'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 text-left'
            >
              Name *
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='mt-1 block w-full px-3 py-2 text-sm md:text-[1rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c23c23] focus:border-[#c23c23]'
            />
          </div>

          <div className='w-full'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 text-left'
            >
              Email *
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='mt-1 block w-full px-3 py-2 text-sm md:text-[1rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c23c23] focus:border-[#c23c23]'
            />
          </div>
        </div>

        <div className='flex md:flex-row flex-col gap-2'>
          <div className='w-full'>
            <label
              htmlFor='subject'
              className='block text-sm font-medium text-gray-700 text-left'
            >
              Subject
            </label>
            <select
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              required
              className='mt-1 block w-full px-3 py-2 text-sm md:text-[1rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c23c23] focus:border-[#c23c23]'
            >
              <option value='feedback'>Feedback</option>
              <option value='general'>General Inquiry</option>
              <option value='sponsorship'>Sponsorship</option>
              <option value='complaint'>Complaint</option>
              <option value='suggestion'>Suggestion</option>
              <option value='promote'>Promote Yourself</option>
            </select>
          </div>

          {showRating && (
            <div className='w-full'>
              <label
                htmlFor='rating'
                className='block text-sm font-medium text-gray-700 text-left'
              >
                Rating
              </label>
              <select
                id='rating'
                name='rating'
                value={formData.rating}
                onChange={handleChange}
                className='mt-1 block w-full px-3 py-2 text-sm md:text-[1rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c23c23] focus:border-[#c23c23]'
              >
                <option value='1'>1 - Poor</option>
                <option value='2'>2 - Fair</option>
                <option value='3'>3 - Good</option>
                <option value='4'>4 - Very Good</option>
                <option value='5'>5 - Excellent</option>
              </select>
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700 text-left'
          >
            Message *
          </label>
          <textarea
            id='message'
            name='message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            required
            className='mt-1 block w-full px-3 py-2 text-sm md:text-[1rem] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c23c23] focus:border-[#c23c23]'
          ></textarea>
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#c23c23] hover:bg-[#c23c23] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c23c23] disabled:opacity-50 cursor-pointer'
        >
          {isSubmitting ? (
            <svg
              className='animate-spin h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
