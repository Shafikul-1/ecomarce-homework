import { ref, reactive } from 'vue'
import { authenticate } from './UserAuth'
import router from '../router'
const SaveProduct = reactive({
    SaveItems: JSON.parse(localStorage.getItem('SaveItem')) || [],

    adddingItems(item) {
        if (authenticate.isAuth) {
            const index = this.SaveItems.findIndex(i => i.id === item.id)

            if (index === -1) {
                this.SaveItems.push(item)
            }
        } else {
            router.push('/login') 
        }
       

        this.saveLocalStore()
    },
    removeItems(removeId){
        const idSearch = this.SaveItems.findIndex(i => i.id === removeId.id)
        this.SaveItems.splice(idSearch, 1)
        this.saveLocalStore()
    },

    saveLocalStore() {
        localStorage.setItem('SaveItem', JSON.stringify(this.SaveItems))
    }

})

export { SaveProduct }
