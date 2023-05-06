import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const jate = jateDb.transaction('jate', 'readwrite');
  const store = jate.objectStore('jate');
  const request = store.put({content: content, id: 1});
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 1);
  const jate = jateDb.transaction('jate', 'readonly');
  const store = jate.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  if (result){
    return result['content'];
  }
  return ''
};

initdb();
