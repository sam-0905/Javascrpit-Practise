let counter = 0;

function getData(){
console.log("Fetch Data ... ",counter++)
}

function doSomeMagic(fn, d){
return function(){
    setTimeout(()=>{
    getData()
    },d)
}
}

const fakeDelay = doSomeMagic(getData,300);