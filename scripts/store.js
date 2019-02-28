'use strict';
/* global cuid, Item */

const store = (function () {
  const items = [
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  function findById(id){
    return store.items.find(ele => id === ele.id);
  }

  function addItem(name){
    try {
      Item.validateName(name);
      const item = Item.create(name);
      this.items.push(item);
    } catch(error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  }

  function findAndToggleChecked(id) {
    this.findById(id).checked = !this.findById(id).checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch(error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }

  function findAndDelete(id) {
    this.items = this.items.filter(ele => ele.id !== id);
  }

  function toggleCheckedFilter(){
    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm(term) {
    this.searchTerm = term;
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  };
}());