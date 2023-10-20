import { ref, reactive } from 'vue'
import router from '../router/index'
import { cart } from './Cart';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const authenticate = reactive({
    isAuth: localStorage.getItem('checkUser') == 1,
    checkUser: localStorage.getItem('userAuthenticate'),
    
    userSignUp(signUpInfo){
        console.log(signUpInfo);
        localStorage.setItem('signUp', JSON.stringify(signUpInfo))
        router.push('/login')
    },

    userLogin(loginInfo){
        const getUserInfo = localStorage.getItem('signUp')
        const userInfo = JSON.parse(getUserInfo)
        console.log( userInfo)
        console.log(loginInfo)

        if ( userInfo === undefined || userInfo === null || userInfo === '' || userInfo === '{}') {
            toast.error('Please Register Your account')
        } else {
            if ( loginInfo === 'undefined' || loginInfo === null || loginInfo === '') {
                alert('Please Provide Your Login Information');
            } else {
                if (userInfo.name !== loginInfo.name) {
                    toast.error('Provided User Name Is Wrong');
                } else if (userInfo.pass !== loginInfo.pass) {
                    toast.error('Your Provided Password Is Wrong');
                } else if (userInfo.email !== loginInfo.email) {
                    toast.error('Your Provided Email Is Wrong');
                } else {
                    this.isAuth = true;
                    localStorage.setItem('checkUser', 1);
                    localStorage.setItem('login', JSON.stringify(loginInfo));
                    router.push('/')
                    toast.success('Welcome Your Home Page')
                }
            }
        }
        
    },

    logoutUser(){
        this.isAuth = 0
        localStorage.setItem('checkUser' , 0)
        localStorage.setItem('login', '{}');
        localStorage.setItem('signUp', '{}');

        //Cart js
        cart.cartProduct = {}
        localStorage.setItem('userProductSave', '{}');
        cart.totalProduct = 0
    }
})

export {authenticate}