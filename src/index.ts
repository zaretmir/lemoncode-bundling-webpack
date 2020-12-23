function sayHelloTo(name: string) {
    return `Hello ${name}!! We are running in ${process.env.MODE} mode.`;
}

console.log(sayHelloTo("Helena"));

export {};
