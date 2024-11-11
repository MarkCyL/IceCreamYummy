
const buttons = document.querySelectorAll("ul li a");

buttons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    button.style.opacity = 0; 
    
    
    setTimeout(() => {
      window.location.href = button.href; 
    }, 500); 
  });
});

window.addEventListener('load', function() {
    
    const h1 = document.querySelector('.font-sample');
    h1.style.animation = 'slideIn 1s ease-out forwards'; 
  });
  

  window.addEventListener('scroll', function() {
    const panel = document.querySelector('.panel-container');
    const panelPosition = panel.getBoundingClientRect().top;
  
    if (panelPosition < window.innerHeight) {
      panel.style.animation = 'slideUp 1s ease-out forwards'; 
    }
  });
  

  function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-pane');
    const buttons = document.querySelectorAll('.tab-button');

   
    tabs.forEach(tab => tab.classList.remove('active'));

  
    buttons.forEach(button => button.classList.remove('active'));


    document.getElementById(tabId).classList.add('active');

    const activeButton = [...buttons].find(button => button.textContent.toLowerCase().includes(tabId));
    if (activeButton) activeButton.classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    openTab('tab1');
});
