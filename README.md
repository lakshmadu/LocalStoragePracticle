# LocalStoragePracticle

JavaScript Local Storage Provider

This is a simple JavaScript class that provides a local storage mechanism for a list of items, with the ability to add and remove items and persist changes across page reloads. It also includes a utility function to print the item count.
Usage

To use this class in your own project, you can simply copy the code and adapt it to your needs. Alternatively, you can download the files in this repository and use them as a starting point.

Here's a brief overview of the files:-

index.html - A simple HTML file that includes the necessary scripts and defines a minimal UI for the local storage provider.
app.js - The main JavaScript file that defines the LocalStorageProvider class and sets up the UI event listeners.
cart.js - A utility JavaScript file that defines a printItemCount function that can be used to print the item count.

# To use the LocalStorageProvider class in your own code, you can create a new instance and call its methods as needed:



    const sp = new LocalStorageProvider();
    sp.addItem('New Item');
    sp.removeItem(0);
    console.log(sp.getItems());

# License

This code is licensed under the MIT license, which means you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the code without restriction. See the LICENSE file for more details.
