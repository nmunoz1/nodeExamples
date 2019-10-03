function pyramid(x){
    var i = 1
    while (i <=x){
        var num = "#"
        var repeat = num.repeat(i)
        console.log(repeat);
        i++;
    }
}

pyramid (10)