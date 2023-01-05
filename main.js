var a = new Date();
var b = new Date("2023/1/6");

var diff = (b - a) 

var days = diff / (1000 * 3600 * 24)
days = Math.floor(days)
diff -= days * (1000 * 3600 * 24)

var hour = diff / (1000 * 3600)
hour = Math.floor(hour)
diff -= hour * (1000 * 3600)


var min =  diff / (1000 * 60)
min = Math.floor(min)
diff -= min * (1000 * 60)


var sec =  diff / (1000)
sec = Math.floor(sec)
diff -= sec * (1000)


console.log(days,hour,min,sec)