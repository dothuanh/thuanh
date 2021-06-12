let content = document.querySelector('#MMM')
let temp = ''

var all_products = ["MAC","san pham thu 2","jhsjdhjs","1625367124637"]
for(i=0;i<= all_products.length;i++){
    console.log('lan lap thu ' + i + '  co ket qua temp la');
    console.log(temp);
    temp = temp + `   <div class="col">
    <div class="card" style="width: 18rem;">
        <img src="https://images.unsplash.com/photo-1616328774543-60eef730c6f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=322&q=80" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${all_products[i]}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  </div>`
  console.log(temp);
    
}
content.innerHTML = temp
console.log(all_products.length)




  





