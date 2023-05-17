console.log("Hola Mundo");

function sumar(numero, callback) {
    if (numero >= 7) {
        callback('Numero muy grande');
        return;
    }
    setTimeout(function () {
        callback(null,numero + 1);
    }, 2000)
}

sumar(5, function (error, nv) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(nv);
    sumar(nv, function (error, nv2) {
        if (error) {
            console.log(error);
            return;
        }
        console.log(nv2);
        sumar(nv2, function (error, nv3) {
            if (error) {
                console.log(error);
                return;
            }
            console.log(nv3);
        })
    })
})

//console.log(sumar(5));


