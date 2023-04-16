//due campi di input: uno per il nome, uno per il numero
// un bottone per mostrare/nascondere i contatti
// un bottone per la ricerca di un contatto 
// un bottone per rimuovere un contatto

let contactsWrapper = document.querySelector('#contactsWrapper');

//input
let contactName = document.querySelector('#contactName');
let contactNumber = document.querySelector('#contactNumber');
//bottoni
let btnShowContacts = document.querySelector('#btnShowContacts');
let btnAddContacts =  document.querySelector('#btnAddContacts');
let btnSortContacts = document.querySelector('#btnSortContacts');

//VARIABILE DI APPOGGIO
let check = false;

let rubrica = {
    contacts: [
        {name:'Valerio' , number: '1111111'},
        {name:'Elisabetta' , number: '2222222'},
        {name:'Pasquale' , number: '3333333'},
        {name:'Federica' , number: '4444444'},
    ],
    
    showContacts: function(){
        this.contacts.forEach((contact) => {
            //sto creando il tag per ogni contatto
            let div = document.createElement('div');
            //aggiungo classe col-12 x ogni div
            div.classList.add('col-12','my-3');
            //creo una card per ogni contatto
            div.innerHTML = `
            <div class="card-custom">
            <h4>${contact.name}</h4>
            <h4>${contact.number}</h4>
            <button class="btn btn-danger btn-delete">Elimina
            Contatto</button>
            </div>
            `
            //appendo tutto l'html creato alla row ('il padre')
            contactsWrapper.appendChild(div)
        })
        
        
        let btnDelete = document.querySelectorAll('.btn-delete');
            btnDelete.forEach((btn) => {
            let name = btn.id;
            console.log(name)
            btn.addEventListener('click',() =>{
                this.removeContact(name)
                contactsWrapper.innerHtml = '';
                this.showContacts()
            })
        })
        
        sortContacts: function(){
            this.contacts.sort(function(a, b) {
                // Ordina gli elementi in ordine alfabetico per nome
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }) 
            
        },

    removeContact: function (removedName) {
        let names = this.contacts.map
    },
    
    addContact : function (newName , newNumber) {
        this.contacts.push({name: newName , number: newNumber});
        this.sortContacts()
    },
    
    
    
}


btnShowContacts.addEventListener('click',() => {
    if (check == false) {
        rubrica.showContacts()
        check = true;
        btnShowContacts.innerHTML = 'Nascondi contatti'
    } else {
        contactsWrapper.innerHTML = '';
        check = false;
        btnShowContacts.innerHTML = 'Mostra contatti'
    }
    
})


btnAddContacts.addEventListener('click', () => {
    rubrica.addContact(contactName.value, contactNumber.value)
    rubrica.showContacts()
    rubrica.sortContacts()
    alert('Contatto Aggiunto')
    alert('Numero Aggiunto')
    contactName.value = '';
    contactNumber.value = '';
    if (confirm == false) {
        confirm = true;
        btnShowContacts.innerHTML = 'Nascondi contatto';
    } 
})


