let vm = new Vue({
    el: '#app',
    data: function(){
        return{
            dataBunga : null,
            loading : true,
            error: false,


            nama: null,
            alamat: null
        }
    },
    methods:{
        saveBunga: function(){
            let data = {
                nama: this.nama,
                alamat: this.alamat,

                status: true,
            }

            axios
            .post('https://projek-uas-iota.vercel.app/listBunga/', data)
            .then(res =>{
                this.dataBunga = res
                this.getBunga()
            })
            .catch(err =>{
                console.log(err);
            })
        },

        getBunga: function() {
            axios
                .get('https://projek-uas-iota.vercel.app/listBunga')
                .then((response) =>{
                console.log(response.data);
                this.dataBunga = response.data
                this.getBunga()
                }).catch(err =>{
                console.log(err);
                this.error = true
                })
            .finally(() => (this.loading = false))
        },



        deleteBunga: function(id){
            axios
            .delete('https://projek-uas-iota.vercel.app/listBunga/' + id)
            .then(res =>{
                console.log(res);
            })
            .catch(err =>{
                err
            })
        }
    },

    mounted(){
        this.getBunga()
    }
})
