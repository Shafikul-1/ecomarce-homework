import { ref, reactive } from 'vue'

const whichList = reactive({
    whichListItems: JSON.parse(localStorage.getItem('whichListItem')) || [],

    adddingItems(item) {
        const index = this.whichListItems.findIndex(i => i.id === item.id)

        if (index === -1) {
            this.whichListItems.push(item)
        } else {
            this.whichListItems.splice(index, 1)
        }

        this.saveLocalStore()
    },
    removeItems(removeId){
        const idSearch = this.whichListItems.findIndex(i => i.id === removeId.id)
        this.whichListItems.splice(idSearch, 1)
        this.saveLocalStore()
    },

    saveLocalStore() {
        localStorage.setItem('whichListItem', JSON.stringify(this.whichListItems))
    }

})

export { whichList }

// whichListItems: [],

//     adddingItems(itemsId){
//         console.log(itemsId)
//         const index = this.whichListItems.findIndex((i)=>{
//             i.id === itemsId.id
//         })
//         // this.whichListItems.findIndex(i => i.id === itemsId.id)
        
//         if (index === -1) {
//             this.whichListItems.push(itemsId)
//         } else {
//             this.whichListItems.splice(index, 1)
//         }
//     },

//     saveLocalStore(){
//         localStorage.setItem('whichListItem', JSON.stringify(this.whichListItems))
//     }