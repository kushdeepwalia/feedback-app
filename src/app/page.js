'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
// import GradientSlider from '@/components/gradientSlider';

export default function FeedbackForm() {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState('');

   const onSubmit = async (data) => {
      setLoading(true);
      setMessage('');
      try {
         const deviceInfo = navigator.userAgent;
         const response = await axios.post('/api/feedback', { ...data, deviceInfo });
         setMessage('Feedback submitted successfully!');
         reset();
      } catch (error) {
         setMessage('Something went wrong. Please try again.');
      }
      setLoading(false);
   };

   return (
      <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg">
         <h2 className="text-2xl font-bold mb-4">Event Feedback Form</h2>
         {message && <p className="mb-4 text-green-600">{message}</p>}
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
               <label className="block font-medium">Name</label>
               <input {...register('name', { required: true })} className="w-full border p-2 rounded" />
               {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

            <div>
               <label className="block font-medium">Role</label>
               <input {...register('role', { required: true })} className="w-full border p-2 rounded" />
               {errors.role && <span className="text-red-500">This field is required</span>}
            </div>

            <div>
               <label className="block font-medium">Food Rating (1-5)</label>
               {/* <GradientSlider {...register('overallRating', { required: true, min: 1, max: 5 })} /> */}
               <div className='flex mt-2'>
                  <input name='foodRating' type="radio" {...register('foodRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='foodRating' type="radio" {...register('foodRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='foodRating' type="radio" {...register('foodRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='foodRating' type="radio" {...register('foodRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='foodRating' type="radio" {...register('foodRating', { required: true })} className="w-full border p-2 rounded" />
               </div>
               {errors.foodRating && <span className="text-red-500">Enter a rating between 1 and 5</span>}
            </div>

            <div>
               <label className="block font-medium">Arrangement Rating (1-5)</label>
               {/* <GradientSlider {...register('overallRating', { required: true, min: 1, max: 5 })} /> */}
               <div className='flex mt-2'>
                  <input name='arrangementRating' type="radio" {...register('arrangementRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='arrangementRating' type="radio" {...register('arrangementRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='arrangementRating' type="radio" {...register('arrangementRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='arrangementRating' type="radio" {...register('arrangementRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='arrangementRating' type="radio" {...register('arrangementRating', { required: true })} className="w-full border p-2 rounded" />
               </div>
               {errors.arrangementRating && <span className="text-red-500">Enter a rating between 1 and 5</span>}
            </div>

            <div>
               <label className="block font-medium">Overall Rating (1-5)</label>
               <div className='flex mt-2'>
                  <input name='overallRating' type="radio" {...register('overallRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='overallRating' type="radio" {...register('overallRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='overallRating' type="radio" {...register('overallRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='overallRating' type="radio" {...register('overallRating', { required: true })} className="w-full border p-2 rounded" />
                  <input name='overallRating' type="radio" {...register('overallRating', { required: true })} className="w-full border p-2 rounded" />
               </div>
               {errors.overallRating && <span className="text-red-500">Enter a rating between 1 and 5</span>}
            </div>

            <div>
               <label className="block font-medium">Comments</label>
               <textarea {...register('comments', { required: true })} className="w-full border p-2 rounded"></textarea>
               {errors.comments && <span className="text-red-500">This field is required</span>}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded" disabled={loading}>
               {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
         </form>
      </div>
   );
}
