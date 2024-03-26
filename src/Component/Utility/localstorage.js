const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('Read-books');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBook = id =>{
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('Read-books', JSON.stringify(storedReadBooks))
    }
}
const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem('Wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}
const saveWishList = id =>{
    const storedWishLists = getStoredWishList();
    const exists = storedWishLists.find(bookId => bookId === id);
    if(!exists){
        storedWishLists.push(id);
        localStorage.setItem('Wish-list', JSON.stringify(storedWishLists))
    }
}
export {getStoredReadBook, saveReadBook, getStoredWishList, saveWishList}