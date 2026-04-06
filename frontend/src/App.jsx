import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layers } from 'lucide-react';
import AdInputForm from './components/AdInputForm';
import AdResult from './components/AdResult';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
  localStorage.removeItem('aiAdResult');
}, []);

  const handleGenerate = async (formData) => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('https://ai-video-script-generator-z07c.onrender.com/api/generate-ad', formData);
      setResult(response.data);
      localStorage.setItem('aiAdResult', JSON.stringify(response.data));
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Failed to generate ad. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-4xl text-center mb-8">
        <div className="flex justify-center mb-4 text-blue-600">
          <Layers size={48} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">AI Ad Creator Pro</h1>
        <p className="mt-3 text-lg text-gray-500">Build high-converting, policy-safe video ads in seconds.</p>
      </div>

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden mb-8 border border-gray-100 p-8">
        <AdInputForm onSubmit={handleGenerate} loading={loading} />
        {error && (
          <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}
      </div>

      {result && (
        <div className="w-full max-w-4xl">
          <AdResult result={result} />
        </div>
      )}
    </div>
  );
}

export default App;
