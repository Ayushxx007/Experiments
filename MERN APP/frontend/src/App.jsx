
import './App.css'



import React, { useEffect,useState } from 'react'

const App = () => {

  const [datax, setDatax] = useState(null);
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    try {
       e.preventDefault();
      const response = await fetch('http://localhost:8000/',
        {method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      }
      );
      const data = await response.text();
      console.log(data);
      setDatax(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
  
    
  }, []);



 return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Simple Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Input field */}
        <input
          type="text"
          placeholder="Enter something..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 mr-2"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* Showing submitted value */}
      {value && <p className="mt-4 text-lg">Current Input: {value}</p>}
      {datax && <p className="mt-4 text-lg">Response from server: {datax}</p>}
    </div>
  );
}

export default App



