let counter = 0;

function getData(){
console.log("Fetch Data ... ",counter++)
}

const debounceFunc = function(fn, d){
let timer;
return function(){
    let context = this,
        args = arguments;
    clearTimeout(timer)
    timer = setTimeout(()=>{
    getData.apply(context,args)
    },d)
}
}

const fakeDelay = debounceFunc(getData,300);


// Example 2

function debounce(fn, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const searchInput = document.getElementById('search');
const debouncedSearch = debounce((e) => {
  // e.target.value => call API
  console.log('Search for:', e.target.value);
}, 400);

searchInput.addEventListener('input', debouncedSearch);


// Example 3 
// import { useState, useEffect } from 'react';

function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
// Usage in component:
function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      // call API with debouncedQuery
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}