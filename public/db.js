let db;

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Offline tracking will not be available.");
};

var request = window.indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
    const db = request.result;
    db.createObjectStore(storeName, { keyPath: "_id" });

    db.onerror = function(errorEvent) {
      console.log("Error loading database.");
    };
};