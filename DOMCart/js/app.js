let odd=document.querySelectorAll('#primary a:nth-child(odd)');
odd.forEach(function(item){
    item.style.backgroundColor='red'
})
console.log(odd);