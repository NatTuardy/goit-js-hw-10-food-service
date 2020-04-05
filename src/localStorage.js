// storage.js

// Принимает ключ `key` по которому будет произведена выборка.
export const load = key => {
  try {
    const serializedState = localStorage.load(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

// Принимает ключ `key` и значение `value`.
export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.save(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

// export default { load, save };
