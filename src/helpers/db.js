import localForage from 'localforage';
import Q from 'Q';

let db = {
  dbs: {},
  getDb: function (options) {
    let dbId = options.profile + '/' + options.storeName;

    this.dbs[dbId] = this.dbs[dbId] || localForage.createInstance({
      name: options.profile || 'notes-db',
      storeName: options.storeName,
    });

    return this.dbs[dbId];
  },

  find: function (data) {
    let defer = Q.defer();
    this.getDb(data.options).getItem(data.id, function (err, data) {
      if (err) {
        return defer.reject(err);
      }

      if (!data) {
        defer.reject('not found');
      }

      return defer.promise;
    });
  },
};
