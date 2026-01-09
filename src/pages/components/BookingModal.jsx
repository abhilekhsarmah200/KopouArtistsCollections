import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Loader2Icon } from 'lucide-react';

const TICKET_PRICE = 799;

export default function BookingModal({ close }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    event: 'Seedhe Maut Live Concert',
    quantity: 1,
    price: TICKET_PRICE,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  // Increase / Decrease quantity
  function increaseQty() {
    if (form.quantity < 10) {
      const qty = form.quantity + 1;
      setForm({ ...form, quantity: qty, price: qty * TICKET_PRICE });
    }
  }

  function decreaseQty() {
    if (form.quantity > 1) {
      const qty = form.quantity - 1;
      setForm({ ...form, quantity: qty, price: qty * TICKET_PRICE });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    // Phone validation
    if (name === 'phone') {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    // Email validation
    if (name === 'email' && value.includes(' ')) return;

    setForm({ ...form, [name]: value });
  }

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

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.name || !form.email || !form.phone) {
      setError('Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        'service_sgu1d9s',
        'template_uwdz7sx',
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          event: form.event,
          quantity: form.quantity,
          subject: 'Ticket Booking',
          price: form.price,
          message: `
New Ticket Booking:

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Event: ${form.event}
Tickets: ${form.quantity}
Total Price: ₹${form.price}
Date: ${getCurrentDateTime()}
          `,
          to_email: 'kopoucollectives@gmail.com',
        },
        'dnwApwImSCR1tMQ9D'
      );

      if (result.status === 200) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to send booking. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className='fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4'
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white rounded-xl w-full max-w-md p-6 relative'
      >
        <button
          onClick={close}
          className='absolute top-4 right-4 text-gray-600 text-xl'
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className='text-2xl font-bold mb-4'>
              Hurry 🔥 Book Your Ticket
            </h2>

            {error && (
              <div className='mb-3 p-2 bg-red-100 text-red-700 rounded'>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4'>
              <input
                name='name'
                required
                placeholder='Full Name'
                className='w-full border p-3 rounded'
                value={form.name}
                onChange={handleChange}
              />

              <input
                name='email'
                type='email'
                required
                placeholder='Email'
                className='w-full border p-3 rounded'
                value={form.email}
                onChange={handleChange}
              />

              <input
                name='phone'
                type='tel'
                required
                placeholder='10-digit Mobile Number'
                className='w-full border p-3 rounded'
                value={form.phone}
                onChange={handleChange}
                maxLength='10'
              />

              {/* Quantity selector */}
              <div className='flex items-center gap-3'>
                <button
                  type='button'
                  onClick={decreaseQty}
                  className='w-10 h-10 bg-gray-200 rounded text-xl font-bold'
                >
                  −
                </button>

                <input
                  readOnly
                  value={form.quantity}
                  className='w-full border p-3 rounded text-center font-bold'
                />

                <button
                  type='button'
                  onClick={increaseQty}
                  className='w-10 h-10 bg-gray-200 rounded text-xl font-bold'
                >
                  +
                </button>
              </div>

              <input
                value={form.event}
                disabled
                className='w-full border p-3 rounded bg-gray-100'
              />

              <input
                value={`₹ ${form.price.toLocaleString('en-IN')} /-`}
                disabled
                className='w-full border p-3 rounded bg-gray-100 font-bold'
              />

              <button
                disabled={loading}
                className='w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold flex justify-center'
              >
                {loading ? (
                  <Loader2Icon className='animate-spin' />
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </form>
          </>
        ) : (
          <div className='text-center py-10'>
            <h2 className='text-2xl font-bold text-green-600'>
              Booking Successful!
            </h2>
            <p>We will contact you shortly.</p>

            <button
              onClick={close}
              className='mt-4 px-6 py-3 bg-black text-white rounded'
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
