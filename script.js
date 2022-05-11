var app = new Vue({
    el: '#app',
    data: {
        message: 'hola mundo',
        numero: '',
        numeros: [],
        grupo: 5,
        lista: []
    },
    methods: {
        copiar(item) {
            navigator.clipboard.writeText(item.join(','))
                .then(() => {
                    alert('Datos Copiados!')
                })
                .catch(err => {
                    console.log('Something went wrong', err);
                })
        },
        setNumber() {
            this.numeros.push(this.numero);
            this.numero = '';
            this.updateData();
        },
        updateData() {
            this.lista = [];
            var conteo = 1;
            var localList = [];
            for (let i = 0; i < this.numeros.length; i++) {
                var num = Math.floor(Math.random() * (this.numeros.length - 0)) + 0;

                localList.push(this.numeros[num]);

                if (conteo % this.grupo == 0) {
                    this.lista.push(localList);
                    conteo = 0;
                    localList = [];
                }
                conteo++;
            }
        }
    }
})