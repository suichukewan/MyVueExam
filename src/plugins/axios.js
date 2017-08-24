import Axios from 'axios'

export default{
    install(Vue,options){
        Vue.prototype.$http=Axios;
    }
}