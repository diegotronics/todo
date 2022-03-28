import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const storageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!storageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(storageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000)
    })
  
    const saveItem = (newItem) => {
      try{
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    };
}

export { useLocalStorage };