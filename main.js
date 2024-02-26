setInterval(()=>{
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let hrotate=30*hh+mm/2;
    let mrotate=6*mm;
    let srotate=6*ss;


    hour.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;

},1000)
