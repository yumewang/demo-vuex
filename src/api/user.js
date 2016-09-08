import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = '';
Vue.http.options.emulateJSON = true;

export const login = ({dispatch}) => {
  Vue.http.post('users').then(response => {
    if (response.ok) {
      window.sessionStorage.setItem('children', JSON.stringify(response.data.children[0]));
      dispatch(RECEIVE_USER, response.data.children[0]);
    }
  });
}


export default {
  getUserInfo: {
    
  }
}