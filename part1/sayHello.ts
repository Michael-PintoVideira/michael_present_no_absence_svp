function sayHello(name ?: string){
    if(name  )
        console.log('Hello ${name}');
    else
        console.log('Hello world')
}