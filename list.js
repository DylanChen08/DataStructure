//list.js
const createList = (value) => {
    return {
      data: value,
      next: null
    };
  };
  
  const appendList = (list, value) => {
    const node = {
      data: value,
      next: null
    };
    list.next = node;
    return node;
  };
  
  const list = createList(10);
  const node = appendList(list, 20);
  console.log('--list--')
  console.log(list)
  console.log('--node--')
  console.log(node)
  