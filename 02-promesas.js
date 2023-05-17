console.log("Hola Mundo 2");

function sumarPromesa(numero){
    var promesa = new Promise(function(resolve,reject){
        if (numero >= 7) {
            reject('Numero muy grande');
            return;
        }
        setTimeout(function () {
            resolve(numero + 1);
        }, 2000)
    });
    return promesa;
}

// sumarPromesa(5).then(function(nv){
//     console.log(nv);
//     sumarPromesa(nv).then(function(nv){
//         console.log(nv);
//         sumarPromesa(nv).then(function(nv){
//             console.log(nv);
//         })
//     })
// })

// sumarPromesa(5).then((nv)=>{
//     console.log(nv);
//     return sumarPromesa(nv);
// })
// .then((nv)=>{
//     console.log(nv)
//     return sumarPromesa(nv);
// })
// .then((nv)=>{
//     console.log(nv)
// })

