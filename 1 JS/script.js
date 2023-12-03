function text1 () {
var input = " !!!! приВЕдд, Я мЕДвед!!!".slice(6,24).toLowerCase();
    var output = input.slice(0,1).toUpperCase() + input.slice(1,6) + input.slice(7,11) + input.slice(11,12).toUpperCase() + input.slice(12,18);
console.log(output);
}