// const btn = document.querySelectorAll('.btn')
// //
//
// // console.log(btn)
// const URL = "https://jsonplaceholder.typicode.com/posts"
// btn.forEach((elem) => {
//     elem.addEventListener("click",() => {
//         fetch(URL)
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data)
//
//             })
//     })
// })
//
// data.forEach(() => {
//     console.log(elem)
// })



const cards = document.querySelector('.links')
//
async function getUsers () {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await result.json()
        console.log(data)
        data.forEach(card => {
            cards.innerHTML += `
                    <div class="link">
                        <img src="images/img_2.png" alt="img">
                        <h3>${card.title}</h3>
                        <p>${card.body}</p>
                </div>
            `
        })
    } catch {

    }
}

getUsers()

















//
// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const result = await response.json()
//         result.forEach(card => {
//             cards.innerHTML += `
//                 <div class="links">
//                 <h3>${card.title}</h3>
//                 <p>${card.body}</p>
//                 <img src="images/img_2.png" alt="">
// </div>
//
//             `
//         })
//     } catch {
//
//     }
//
// }
// getUsers()