function start() {
    setTimeout(()=>
    {
        console.log("START");
        
    },0)
    
    
}



function Straight() {
    setTimeout(()=>{
        console.log("Go Straight");
}, 3000)
    
}

function Right() {
    setTimeout(() => {
        console.log("Take Right");
    }, 5000);
}

function Left() {
    setTimeout(() => {
        console.log("Take Left");
    }, 2000);
    
}


function stop() {
    
setTimeout(() => {
    console.log("STOP!!!!");
}, 10000);

}

start(function(){
    Left();
});
stop();
Left();
Right();
Straight();