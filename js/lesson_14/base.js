// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

// Прикнутись - 0.3с
// Піти в душ - 0.5с
// Поснідати - 1с
// Відвезти дітей до школи - 3с
// Поїхати на роботу - 3с
// Почитати пошту
// Відвідати Нараду
// Пообідати - 1с
// Попрацювати
// Попити каву
// Піти пішки додому
// Повечеряти
// Подивитись новини
// Відвідати лекцію
// Почистити зуби
// Піти спати

function wakeUp(isReady) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Доброго ранку');
            if (isReady) {
                console.log('Прокнутись');
                resolve('Я прокинувся');
            } else {
                reject('Вирішив поспати ще, сьогодні вихідний');
            }
        }, 3000);
    });
}

function takeShower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Піти в душ');
            resolve('Пішов у душ');
        }, 5000);
    });
}

function haveBreakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Сніданок');
            resolve('Снідаю');
        }, 1000);
    });
}

function takeChildrenToSchool() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Відвезти дітей до школи');
            resolve('Відвезти дітей до школи');
        }, 3000);
    });
}

function goWork(isReady) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isReady) {
                console.log('Поїхати на роботу');
                resolve('Поїхати на роботу');
            } else {
                reject('Зламався трамвай');
            }
        }, 1000);
    });
}

function readEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Почитати пошту');
            resolve('Почитати пошту');
        }, 5000);
    });
}

function haveMeeting(isReady) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isReady) {
                console.log('Відвідати Нараду');
                resolve('Відвідати Нараду');
            } else {
                reject('Нараду скасовано')
            }
        }, 2000);
    });
}

function haveDinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Пообідати');
            resolve('Пообідати');
        }, 3000);
    });
}

function doWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Попрацювати');
            resolve('Попрацювати');
        }, 7000);
    })
}

function walkHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Піти пішки додому');
            resolve('Піти пішки додому');
        }, 7000);
    })
}

function haveSupper() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Повечеряти');
            resolve('Повечеряти');
        }, 3000);
    })
}

function doHomework() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Зробити домашні справи');
            resolve('Зробити домашні справи');
        }, 1000);
    })
}

function cleaningTeeth(isReady) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isReady) {
                console.log('Почистити зуби');
                resolve('Почистити зуби');
            } else {
                reject('Закінчилась зубна паста');
            }
        }, 500);
    })
}

function goSleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Піти спати');
            resolve('Піти спати');
        }, 1500);
    })
}

async function startDay() {
    try{
        const r1 = await wakeUp(true);
        const r2 = await takeShower();
        const r3 = await haveBreakfast();
        const r4 = await takeChildrenToSchool();
        const r5 = await goWork();
        const r6 = await readEmail();
        const r7 = await haveMeeting();
        const r8 = await haveDinner();
        const r9 = await doWork();
        const r10 = await walkHome();
        const r11 = await haveSupper();
        const r12 = await doHomework();
        const r13 = await cleaningTeeth();
        const r14 = await goSleep();
    }catch (e) {
        console.log(e);
    }
}