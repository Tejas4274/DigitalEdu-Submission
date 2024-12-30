//this class is provide the data for the table and the charts
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})

export class DataService{
    private data=[
        { id: 1, name: 'Wireless Mouse', price: 2599, category: 'Electronics' },
        { id: 2, name: 'Bluetooth Headphones', price: 4999, category: 'Electronics' },
        { id: 3, name: 'Stainless Steel Water Bottle', price: 1599, category: 'Home & Kitchen' },
        { id: 4, name: 'Yoga Mat', price: 2000, category: 'Fitness' },
        { id: 5, name: 'LED Desk Lamp', price: 3500, category: 'Office Supplies' },
        { id: 6, name: 'Cooking Knife Set', price: 8999, category: 'Home & Kitchen' },
        { id: 7, name: 'Running Shoes', price: 5999, category: 'Footwear' },
        { id: 8, name: 'Gaming Keyboard', price: 7599, category: 'Electronics' },
        { id: 9, name: 'Organic Green Tea', price: 1299, category: 'Groceries' },
        { id: 10, name: 'Backpack', price: 4500, category: 'Accessories' },
    ];


//this method return the data for the table
getData(){
    return this.data;
}


//this method adds the data in the table
addData(item:any){
    this.data.push(item);
}


//this method update the particular data by finding its index by using the arrow function 
updateData(updatedItem:any){
    const index=this.data.findIndex((item)=>item.id === updatedItem.id);
    if(index > -1) this.data[index]=updatedItem;
}

//this method delete the particular data by finding its index by using the arrow function

deleteItem(id: number) {
    this.data = this.data.filter((item) => item.id !== id);
  }

}
