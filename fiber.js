const navbar=()=>{
    const navs=document.getElementById('topmid');
    if(navs.style.display ==='block' || navs.style.display ==="undefined"){
        navs.style.display='none';
    }
    else{
        navs.style.display='block';
        };
};
// for password to be show and hidden
const passw=()=>{
    const pass=document.getElementById('pass');
    if (pass.type==='password'){
        pass.type='text';
    }
    else{
        pass.type='password';
    };
};
const hovershow=()=>{
    const hoverr=document.getElementById('hoverr');
    hoverr.style.opacity='1'; 
};
const hoverhide=()=>{
    const hoverr=document.getElementById('hoverr');
    hoverr.style.opacity='0';
};

//for changing img
let currentimg=1;

const nextimg=()=>{
    
    //4 img so
    if(currentimg<4){
        
        currentimg++;

        const allimg=document.querySelectorAll('#imgg img');
        //all img  to see which value equals to currentimg and
        //opacity to 1 and others 0

        //for round
        let i=0;
        allimg.forEach(img=>{

            //for rounded div 
            i++;
            const round=document.getElementById('round'+i);
            if(img.getAttribute('value')==currentimg){
                img.style.opacity='1';
                round.style.background='rgba(255, 255, 255,0.8)';
            }
            else{
                img.style.opacity='0';
                round.style.background='rgba(128, 128, 128,0.37)';
            };
        });
    };    
    
};

const backimg=()=>{
    
    if(currentimg>1){
        currentimg--;

        const allimg=document.querySelectorAll('#imgg img');

        let i=0;
        allimg.forEach(img=>{

            //to access round div
            i++;
            const round=document.getElementById('round'+i);
              if(img.getAttribute('value')==currentimg){
                 img.style.opacity='1';
                 round.style.background='rgba(255, 255, 255,0.8)';
                 round.classList.add('d');
              }
              else{
                img.style.opacity='0';
                round.style.background='rgba(128, 128, 128,0.37)';
              };
        });
    };
};
