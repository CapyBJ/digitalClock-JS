const clock= document.querySelector('.clock');

const tick= () => {
  const now=new Date();
  const hr=now.getHours(); 
  const htmlOne = `
  <span>${hr}</span>:
  <span>${now.getMinutes()}</span>:
  <span>${now.getSeconds()}</span> 
  <span>${'AM'}</span>`;

  const htmlTwo = `
  <span>${hr-12}</span>:
  <span>${now.getMinutes()}</span>:
  <span>${now.getSeconds()}</span> 
  <span>${'PM'}</span>`;

  if(hr > 12){
   clock.innerHTML= htmlTwo;
  }else{
    clock.innerHTML= htmlOne;
  }
}

setInterval(tick, 1000);
