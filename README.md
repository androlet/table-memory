# TableMemory

This project purpose is to provide a tool to easily practice mnemonics.
Try the current version [HERE](https://table-memory.firebaseapp.com/) !

## What I am supposed to do ?

Well, it is memory training based on tables. This tool is to manipulate some lists of items to memorize.

For the given list, you are supposed to memorize each items with its position number. 
And of course, you are supposed to do it in a random order because that's more challenging ! 

Therefore you should be able to restitute each items, later, whatever the order...

Seems hard ? Well... Maybe you can start with these tutorials :
- English : https://www.youtube.com/watch?v=soIKt4Tq1EU
- French : https://youtu.be/bu8spGJrCdo?list=PLG_i4wM5NRw8v-Cyp4X8i4TfmwgTpTS0t&t=173

## Commands :

Two specific views exists to manipulate your current list : 
- Random reading view : Enable to quickly explore the current list, one item at a time, randomly.
- List view : Enable to display the whole list with items hidden by defauls. You can display/hide an item by clicking on it.

Detailed commands :

- _Generate_ : Initiate a new list of items with the size specified (A list has a max size of 80, currently...).
- _Display list_ : Quit the random reading view. Display the table of hidden items view.
- _Read randomly_ : Quit the table of hidden items view. Display the random reading view.
- _Next_ : Go to next item while reading randomly.
- _Hide_ : Hide all items in list view.
- _Show_ : Reveal all items in list view.

# Development

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the tests.
