import { openDB } from 'idb';

// initiate a new indexedDB database called jate
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true }); // objectstore will have an autoincrementing ID
      console.log('jate database created');
    },
  });

// Controller to handle updates to the editor
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const jate = jateDb.transaction('jate', 'readwrite'); // need to be able to both view and modify the data
  const store = jate.objectStore('jate');
  // there is only one entry in the object store which will be continuously updated
  // therefore the ID is hardcoded to 1, referring to the first entry
  const request = store.put({content: content, id: 1}); 
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// controller to get data from the jate database
export const getDb = async () => {
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 1);
  const jate = jateDb.transaction('jate', 'readonly');
  const store = jate.objectStore('jate');
  const request = store.get(1);// there is only one entry so we are always getting id = 1
  const result = await request;
  // the set value entry is coded to check the following in this order:
  // 1. indexedDB
  // 2. localstorage
  // 3. header object
  // if the first two are empty then it will default to just showing what is on the header
  // setvalue method is also looking for a string and therefore we need to structure our return to fit these expectations
  if (result){
    return result['content']; // return the content of the objectStore
  }
  return '' // if no content is found then just return blank so it wont get passed through to the setValue method
};

initdb();
