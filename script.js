var app = new Vue({
    el: '#app',
    data: {
        message: 'hola mundo',
        numero: '',
        numeros: [],
        grupo: 5,
        lista: [],
        combinaciones: 1,
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
            if (this.numero) {
                this.numeros.push(this.numero);
                this.numero = '';
            }
            this.updateData();
        },
        updateData() {
            this.lista = [];
            var conteo = 1;
            var localList = [];
            // for (let i = 0; i < this.numeros.length; i++) {
            //     if (this.lista.length >= this.combinaciones) break;

            //     var num = Math.floor(Math.random() * (this.numeros.length - 0)) + 0;

            //     localList.push(this.numeros[num]);

            //     if (conteo % this.grupo == 0) {
            //         this.lista.push(localList);
            //         conteo = 0;
            //         localList = [];
            //     }
            //     conteo++;
            // }
            for (let i = 1; i <= this.combinaciones * this.grupo; i++) {
                //if (this.lista.length >= this.combinaciones) break;

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