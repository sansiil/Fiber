function navbar(){
    const navs=document.getElementById('topmid');
    if(navs.style.display ==='block' || navs.style.display ==="undefined"){
        navs.style.display='none';
    }
    else{
        navs.style.display='block';
        };
};
function passw(){
    const pass=document.getElementById('pass');
    if (pass.type==='password'){
        pass.type='text';
    }
    else{
        pass.type='password';
    };
};
function hovershow(){
    const hoverr=document.getElementById('hoverr');
    hoverr.style.display='block';
 
};
function hoverhide(){
    const hoverr=document.getElementById('hoverr');
    hoverr.style.display='none';
};

