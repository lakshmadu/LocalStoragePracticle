// import {printItemCount} from './cart.js';

class LocalStorageProvider {
  constructor() {
    //here the local storage as a 
    this.items = JSON.parse(localStorage.getItem('items')) || [];
    this.htmlItem = document.getElementById('item');
    this.btnAdd = document.getElementById('btn-add');
    this.txtAddItem = document.getElementById('txt-add-item');
    this.onInit();
  }

  //this function is called as initial process of class.
  onInit() {
    this.render();
    this.btnAdd.addEventListener('click', () => this.addItem());
  }

  render() {
    this.htmlItem.innerHTML = '';
    this.items.forEach((item, index) => {
      const div = document.createElement('div');
      div.classList.add('row', 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'mt-2', 'bg-secondary');
  
      const p = document.createElement('p');
      p.textContent = item;
      p.classList.add('col');
      div.appendChild(p);
  
      const btnDelete = document.createElement('button');
      btnDelete.textContent = 'Delete';
      btnDelete.classList.add('col', 'btn', 'btn-danger');
      btnDelete.addEventListener('click', () => this.removeItem(index));
      div.appendChild(btnDelete);
  
      this.htmlItem.appendChild(div);
    });
  }

  addItem() {
    const inputValue = this.txtAddItem.value.trim();
    if (inputValue.length > 0) {
      this.items.push(inputValue);
      this.saveItems();
      this.render();
      this.txtAddItem.value = '';
    }
  }

  getLength(){
    return this.items.length;
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.saveItems();
    this.render();
  }

  saveItems() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}

window.onload = function() {
  const sp = new LocalStorageProvider();
  sp.getLength();
}
