// const cart = ['shirt', 'pant', 'kurta']

// const promise = createOrder(cart);
// console.log(promise, "promise")

// promise.then(
//     function (orderId) {
//         // processed to payment
//         console.log(orderId)
//         return orderId
//     }
// )
//     .then((orderId) => {
//         return proceedToPayment(orderId)
//     })
//     .then(function (paymentInfo) {
//         console.log(paymentInfo)
//     })
//     .catch(err => {
//         // console.log(err,"<<<err")
//         console.log(err.message)
//     })

// function createOrder(cart) {
//     console.log(cart, "inside createOrder>>>>>>")
//     let pr = new Promise((resolve, reject) => {
//         if (!validate(cart)) {
//             let err = new Error('cart is not valid');
//             reject(err);
//         }

//         // logic for create order;
//         const orderId = '12345';
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 5000)
//         }

//     })

//     return pr;
// }

// function validate(cart) {
//     return false;
// }

// function proceedToPayment() {
//     return new Promise(function (resolve, reject) {
//         resolve('Payment made successfully!')
//     })
// }


// try validateonce again without seeing

const cart = ['shirt', 'pant', 'kurtha']

const promise = createOrder(cart);
promise.then((orderId) => {
    console.log('ordered successfully completed!')

}).catch((err) => {
    console.log(err.message)
})

function createOrder(cart) {
    let pr = new Promise((resolve, reject) => {
        if (!validate(cart)) {
            let err = new Error('cart is not validate')
            reject(err)
        }

        // create order id
        let orderId = '12345';
        if (orderId) {
            resolve(orderId)
        }
    })
    return pr;
}

function validate(cart) {
    return true
}