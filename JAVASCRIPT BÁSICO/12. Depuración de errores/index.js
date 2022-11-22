
function fibonnacci(num){
    let listaNum = [0,1];

    for(let i = 2; i <= num; i++){
        listaNum.push((listaNum[i-1])+ (listaNum[i-2]))  
        
    }

    return [listaNum, listaNum[num]]
}

console.log(fibonnacci(10)[0])

console.log(fibonnacci(10)[1])