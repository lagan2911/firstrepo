import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Deleteapi(props) {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState('');
  const location = useLocation();
  

  // Simulated API data
  useEffect(() => {
    // Replace this with an actual API call to fetch the items
    // For this example, we'll use a static list of items
    fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
          .then(json => setItems(json))
          .catch(error => console.error(error))
    
    
  }, []);
  

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // You might need to include authentication headers here if required
        },
      });

      if (response.ok) {
        // If the API request was successful, remove the item from the local state
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        setMessage('Item deleted successfully.');
      } else {
        setMessage('Failed to delete item.');
      }
    } catch (error) {
      setMessage('An error occurred while deleting item.');
    }
  };

  return (
    <div>
    <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  );
}

export default Deleteapi;