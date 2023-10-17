import { reactive, ref } from 'vue'

const theming = reactive({
    defultTheme: '',
    dark(){
         this.defultTheme.setAttribute("data-bs-theme", "dark");
    },
    light(){
        this.defultTheme.setAttribute("data-bs-theme", "light"); 
    }
})

export {theming}