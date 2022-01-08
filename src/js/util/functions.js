// export default class LocalStorageManage {
//   constructor(key, data) {
//     this.key = key;
//     this.data = data;
//   }

//   get() {
//     this.data = JSON.parse(localStorage.getItem(this.key))
//   }
//   set(nextKey, nextData) {
//     this.get();
//     this.key = nextKey;
//     this.data = nextData;
//     localStorage.setItem(this.key, JSON.stringify(this.data));
//   }
// }

export const localStorageManage = {
  get: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  set: (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data));
  }
};
