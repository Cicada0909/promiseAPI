// const myPromise = new Promise((resolve, reject) => {
//     if (!ture) {
//         resolve("Succes!");
//     } else {
//         reject("Error form reject");
//     }
// });

// myPromise.then(() => {
//     console.log(result);
// });

// myPromise.catch((err) => {
//     console.log(err);
// });

// const getData = new Promise((resolve, reject) => {
//     console.log("Запрос...");

//     setTimeout((res, rej) => {
//         console.log("Сервер обрабатывает");

//         new Promise(() => {
//             setTimeout(() => {
//                 res("DATA")
//             }, 500)
//         })
//             .then((data) => resolve(data));
        
//     }, 1500);
    
// })

// getData.then((res) => {
//     console.log("Полученные данные", res);
// })


// const getGeolocation = () => {
//     //функция возращает промис, потому что мы не знамем когда юзер нажмет на Ок или закроет окно
//     return new Promise((resolve, reject) => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(resolve, reject);
//         }
//         else {
//             reject(new Error("Geolocation is not suppurted in your browser"))
//         }
//     });
// };

// getGeolocation()
//     .then((position) => {
//         console.log("Пользователь разрешил");
//         console.log(position);
        
//     })
//     .catch(() => {
//         console.log("Пользователь отконил");
//     })
//     .finally(() => {
//         console.log("Завершили с геолоакцией");
//     })

// const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

// delay(1000).then(() => {
//     console.log("Что-то после 1 сек");
    
// });

const SERVER_URL = "https://jsonplaceholder.typicode.com/";

const container = document.querySelector(".container");

const getUsers = () => {
    fetch(`${SERVER_URL}/users`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            createCards(data);
        })
        .catch(() => {
            console.log("Ошибка");
        })
}

const getPhotos = () => {
    fetch(`${SERVER_URL}/photos`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            createImages(data);
        })
}

/* <div class="card-image">
            
</div> */

const createImages = (photos) => {
    photos.forEach((photo) => {
        container.insertAdjacentHTML("beforeend", `
            <div class="card-image">
                <img src="${photo.url}" alt="" class="photo">
            </div>
            `
        )
    })
}

const createCards = (users) => {
    users.forEach((user) => {
        container.insertAdjacentHTML("beforeend", `
            <div class="card">
            <div class="card-header">
                <h3 class="card-name">${user.name}</h3>
                <div>
                    <span>City</span>
                    <span>${user.address.city}</span>
                </div>
                <div>
                    <span>Country</span>
                    <span>${user.address.street}</span>
                </div>
            </div>
            <div class="card-main">
                <div class="card-row">
                    <span>Company name:</span>
                    <span>${user.company.name}</span>
                </div>
                <div class="card-row">
                    <span>Phone:</span>
                    <span>${user.phone}</span>
                </div>
                <div class="card-row">
                    <span>Website</span>
                    <span><a href="${user.website}">${user.website}</a></span>
                </div>
            </div>
        </div>
        `)
    })

}

const init = () => {
    getUsers();
    getPhotos();
}

init();