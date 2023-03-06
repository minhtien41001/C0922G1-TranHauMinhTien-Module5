// happy coding 👻
console.log("hello every body");

let num : number = parseInt(<string>prompt("Nhap. so' phan` tu? cua? day~: "));

let sum: number = 0;

// @ts-ignore
let fibonacci = (num: number) : number => {
    if (num <= 1){
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

document.write("Day~ so' :")
for (let i = 0; i < num ; i++){
    document.write(String(fibonacci(i)) + " ")
    sum += fibonacci(i);
}

document.write("Tong? :" + sum);