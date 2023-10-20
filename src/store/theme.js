import { reactive, ref } from 'vue'

const theming = reactive({
    defultTheme: true,
    dark(){
         this.defultTheme = ''
    },
   
})

export {theming}