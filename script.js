// console.log("Hello")

let myLibrary = [];

function Book(title,author,page,isRead) {
 this.title = title;
 this.author = author;
 this.page = page;
 this.isRead = isRead;
}



function addBookToLibrary() {
    
    //let book = document.getElementById("former");
    
    const form = document.querySelector("#add");

    const booking = form.elements['title'];
    const bookWriter = form.elements['author'];
    const bookPage = form.elements['page'];
    const status = form.elements['isRead'];

    let title = booking.value;
    let author = bookWriter.value;
    let page = bookPage.value;
    let isRead = status.value;



   let table = document.getElementById("books");
           var row = table.insertRow(-1);
                var t = row.insertCell(0);
                var a = row.insertCell(1);
                var p = row.insertCell(2);
                var i = row.insertCell(3);
                
                t.innerHTML = title;
                a.innerHTML = author;
                p.innerHTML = page;
                i.innerHTML = isRead;
            

                document.getElementById('books').style.display = "block";
    //alert(isRead);

    let book = new Book(title,author,page,isRead);
    myLibrary.push(book);


    
}

