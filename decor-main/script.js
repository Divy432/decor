const hearts1=document.querySelectorAll('.heart1');
const decreases=document.querySelectorAll('.decrease');
const increases=document.querySelectorAll('.increase');
const carbuts = document.querySelectorAll('.carousel-indicators > button');
const nextbut=document.querySelector('.carousel-control-next');

carbuts.forEach(carbut => {
    carbut.addEventListener("click", function() {
        document.querySelector('.carousel-indicators > button.active').classList.remove("active");
        this.classList.add("active");
    });
});

nextbut.addEventListener("click",function(){
    for(let i=0;i<3;i++)
    {
        if(carbuts[i].classList.contains("active"))
        {
            carbuts[i].classList.remove("active");
            carbuts[(i+1)%3].classList.add("active");
            break;
        }
    }
})




hearts1.forEach((heart)=>{
 heart.addEventListener("click",function(){
    const heart2=heart.closest('.item-card').querySelector('.heart2');
    if(heart2.classList.contains('active'))
    {
        heart2.classList.remove('active');
    }
    else
    heart2.classList.add('active');
 });
})
decreases.forEach((decrease)=>{
    decrease.addEventListener("click",function(){
       const p=decrease.closest('.item-card').querySelector('p');
       if(p.innerText>0)
       {
           p.innerText=+p.innerText-1;
       }
    });
   })
   increases.forEach((increase)=>{
    increase.addEventListener("click",function(){
       const p=increase.closest('.item-card').querySelector('p');
     
           p.innerText=+p.innerText+1;
    });
   })