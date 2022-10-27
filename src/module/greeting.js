// function greeting(name) {
//     console.log('hello ' + name);
// }
// 원래는 여기서 greeting() 함수를 선언했으면 main.js에서 사용하고자 했을 때
// main.js에서 바로 greeting(~~) 함수를 사용해버렸으면 됐다. 왜?? 이 함수가 전역 범위처럼 됐기 때문!!

// but!!
// ES6 방식은 greeting() 함수를 사용하려면 greeting 모듈에서 이걸 사용할 수 있게 export를 해줘야 한다.
// 이 모듈을 사용하고 싶은 위치에서 greeting 모듈을 import해서 쓸 수 있다.

// 클래스화 버전
export class Greeting {
    sayHello(name) {
        console.log('hello ' + name);
    }
}