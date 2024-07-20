function cachingDecoratorNew(func) {
  let cache = {};

  return function (...args) {
  let hash = args.join();

  if (Object.keys(cache).length > 5) {
    delete cache[Object.keys(cache)[0]]
  } 
  if (hash in cache) {
      return `Из кэша: ${cache[hash]}`;
  } else {
      let result = func(...args);
      cache[hash] = result;
      return `Вычисляем: ${result}`;
    }
  }
}


function debounceDecoratorNew(func, ms)  {
    let debounced = false;
    let timeout;
  
    return function(...args) {
      clearTimeout(timeout);
  
      timeout = setTimeout(() => func.apply(this, args), ms);
  
      if(!debounced) {
        func(...args)
        debounced = true;
      }
    }
}

function debounceDecorator2(func, ms) {
  let debounced = false;
    let timeout;
  
    function wrapper(...args) {
      clearTimeout(timeout);
  
      timeout = setTimeout(() => {
        func.apply(this, args)
        count += 1
      }, ms);
  
      if(!debounced) {
        func(...args)
        debounced = true;
        count += 1
      }
    }
    
    wrapper.count = 0;
}
