function calendrier() {
    let aujourdhui = new Date();
    let formattedDate = aujourdhui.toISOString().split('T')[0]; // Format YYYY-MM-DD
    document.getElementById("date").value = formattedDate;
}

calendrier(); // Met la date du jour par défaut


// Menu Burger

document.getElementById('logoBurger').addEventListener('click', function(){
    document.querySelector('.burger').classList.toggle('active')   
    document.querySelector('#logoBurger').classList.toggle('active')   
})