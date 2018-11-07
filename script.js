var app = new Vue({
    el:'#app',
    data: {
        textContent:''
    },
    
    computed:{
        reverseText: function(){
            return this.textContent.split('').reverse().join('');
        }
    }
})