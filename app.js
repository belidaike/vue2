const app = Vue.createApp({
    data() {
        return {
            url: 'www.facebook.com',
            showBooks: true,
            books: [
                {title: 'Name of the Wind', author: 'Ike R. Belida', age: 25, img: 'assests/1.jpg', isFav: true},
                {title: 'The Way of Kings', author: 'Benjie Z. Lenteria', age: 26, img: 'assests/2.jpg', isFav: false},
                {title: 'The Final Empire', author: 'Leni F. Mayor', age: 27, img: 'assests/3.jpg', isFav: true}
            ],
            isFave: this.isFav
            // title: 'The Final Empire',
            // author: 'Ike Belida',
            // age: '21',
            // x: 0,
            // y: 0

        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(details) {
            details.isFav = !details.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((details) => details.isFav)
        }
    }
    // methods: {
    //     changeTitle() {
    //         this.title = 'The World of Scripting'
    //     }
    // }
    // methods: {
    //     changeTitle(title) {
    //         this.title = title
    //     }
    // }
})
// const ike = Vue.createApp({
//     data(){
//         return {
//             something: 'Ike Belida'
//         }
//     }
// }) 
// ike.mount('#ike')
app.mount('#app')