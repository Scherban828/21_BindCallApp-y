//Optional Chaining
const auto = {
    brand: 'Tesla',
    mode: 'X',
    details: {
        color: 'Красный',
        year: 2022,
        atStock: true,
    }
    /*drive:{
        voice: 'rrrr',
        klaxons: 'Beep',
    }*/
}
const cars = [auto];
cars.forEach(car => {
    console.log(`${car.brand} ${car.details.year}: Цвет - ${car.details.color}`);
});
//Но, если в объекте не будет какиех-то свойств, выдаст ощибкеу
//К примеру, ссли убрать Details
//"?."
//В данном случае, есть запрос на Drive, но в оъекте его нет, а с помощью "?." мы осуществляем проверку
cars.forEach(car => {
    console.log(`${car.brand} ${car.details.year}: Рычит - ${car.drive?.voice} Цвет - ${car.details.color}`);
});


//Async Await
//Своя ф-ия с promise
function sleep(time) {
    return new Promise((resolve, reject) => {
        if (time < 1500) {
            reject(`Слишком мало сна`)
        }
        setTimeout(() => resolve(`Поспал ${time / 1000}` + ` сек`), time);
    })
}
sleep(3000).then(res => {
    console.log(res);
    return sleep(2000)
}).then(res => {
    console.log(res);
    return sleep(1000);
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(`Ошибка,`, err);
})


//AsyncAwait Пример 1
//Синхронный вариант
/*const myGit = fetch('https://api.github.com/users/Scherban828');
console.log(myGit);
//Выводит Promise
fetch('https://api.github.com/users/Scherban828').then(res => {
    return res.json();
}).then(res => {
    console.log(res);
})*/
//Асинхронный вариант
async function getGitData() {
    try {
        const response = await fetch('api.github.com/users/Scherban828');
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(`Error >>>`, err);
    }
}
getGitData()
//Тут происходит асинхронное выполнение кода, в данном случае авэйт стоит на ожиданеии прааильного отклика,
//а в строке адреса ошибка. Соотвественно остальной код выполняется, а этот на ожидании, пока не придет правильный отклик

//AsyncAwait Пример 2
//Синхронный вариант
/*const video = document.querySelector('video');
const myVideo = navigator.mediaDevices.getUserMedia({ video: true }).then(MediaStream => {
    video.srcObject = MediaStream;
})
console.log(myVideo);*/
//Асинхронный вариант
const getUserVideo = async () => {
    try {
        const response = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = response;
    } catch (err) {
        console.log(`Ошибка>>>`, err);
    }
}
getUserVideo()
//AsyncAWait Пример 3
//Пример на основе ф-ии "Мало сна", она выше 
const sleepSesion = async () => {
    try {
        const sleep1 = await sleep(1500);
        console.log(sleep1);
        const sleep2 = await sleep(5000);
        console.log(sleep2);
        const sleep3 = await sleep(500);
        console.log(sleep3);
    } catch (err) {
        console.log(`Error>>>`, err);
    }
}
sleepSesion()