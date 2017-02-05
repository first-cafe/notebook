import localForage from 'localforage';
import Q from 'Q';
import _ from 'lodash';

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

      return defer.resolve(data);
    });

    return defer.promise;
  },

  findAll: function (data) {
    let defer = Q.defer();
    let self = this;

    this.getDb(data.options).keys(function (err, keys) {
      if (!keys || !keys.length) {
        return defer.resolve([]);
      }

      return self.findByKeys(keys, data)
      .then(function (res) {
        defer.resolve(res);
      })
      .fail(function (e) {
        defer.reject(e);
      });
    });

    return defer.promise;
  },

  findByKeys: function (keys, data) {
    let promises = [];
    let self = this;
    let models = [];
    _.each(keys, function (key) {
      promises.push(
        self.find({ id: key, options: data.options })
        .then(function (item) {
          if (item &&
              (!data.options.conditions || _.isMatch(item, data.options.conditions))) {
            models.push(item);
            return item;
          }

          return;
        })
      );
    });

    return Q.all(promises)
    .then(function () {
      return models;
    });
  },

  save: function (data) {
    let defer = Q.defer();
    let sData = data.data;

    if (sData.encryptedData) {
      sData = _.omit(sData, data.options.encryptKeys);
    }

    this.getDb(data.options).setItem(data.id, sData, function (err, val) {
      if (err) {
        return defer.reject(err);
      }

      return defer.resolve(val);
    });

    return defer.promise;
  },

  del: function (options, id) {
    this.getDb(options).removeItem(id).then(function () {
      console.log(id + ' is cleared!');
    }).catch(function (err) {
      console.log(err);
    });
  },
};

export default db;
