let db;

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Offline tracking will not be available.");
};

var request = window.indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
    const db = request.result;
    db.createObjectStore("StoreName", { keyPath: "_id" });

    db.onerror = function(errorEvent) {
      console.log("Error loading database.");
    };
};

function checkDatabase() {
    let transaction = db.transaction(["StoreName"], 'readwrite');
    const store = transaction.objectStore("StoreName");
    const records = store.getAll();

    records.onsuccess = function () {

    }
};

