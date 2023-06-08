const auto = {
    bra: "Tesla",
    drive() {
        return `Заведем нашу ${bra}`;
    }
}
//Ф-ия Drive создана в объекту auto, и она привязвна к нему только пока она там
const autoDrive = auto.drive.bind(auto);
//Метод Bind привязывает ф-ию к новому объекту
const bike = {
    brand: "Suzuki",
}
const motorBike = auto.drive.bind(bike);
console.log(motorBike);
//Пример создание упрощенной ф-ии
//Тут Метод Bind привязывает ф-ию к Document 
const $ = document.querySelector.bind(document);
const h = $('h1');
console.log(h);
//Еще пример
const bill = {
    tip: 0.1,
    calc(total) {
        console.log(this);
        return total + total * this.tip;
    }
}
const pay = bill.calc(1000);
console.log(pay);
//Создаем новую переменную и добавляем ей ф-ию calc и меняем условия
const payall = bill.calc.bind({ tip: 0.2, });
console.log(payall(2000));
//Метод call
//Работает, как метод bind, только аргумент передается сразу в call
const payCall = bill.calc.call(bill, 5000);
console.log(payCall);
//Метод Apply
//Работает, как метод call, только аргумент передается в массив
const payApply = bill.calc.apply(bill, [7000]);
console.log(payApply);

//Прототипы (Prototype)
function Automobile(brand, price, gas) {
    this.brand = brand;
    this.price = price;
    this.gas = gas;
}
//Если создать ф-ию Drive внутри объекта, то
//У каждой переменной будет ф-ия Drive, но это будут разные ф-ии
Automobile.prototype.drive(){
    if (this.gas > 0) {
        this.gas = this.gas - 20;
        return this.gas;
    } else {
        console.log('Бензин закончился!');
    }
}
const bmw = new Automobile('bmw', '100.00', 100);
const nissan = new Automobile('nissan', '200.00', 90);



