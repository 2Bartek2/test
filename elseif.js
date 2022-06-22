const x = 10
let text
if (x >=100 ) {
    text = ('x > 100');
    
} else if (x<100 && x>30) {
   text = ('x jest średniakiem');
    
}else if (x<=30) {
    text = ('x <= 30');
    
} else{
    text = ('popełniłes jakiś bład');
}
console.log(text.toLocaleUpperCase());