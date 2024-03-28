const getBookId = () => {
    const storedBook = localStorage.getItem('bookId')
    if (storedBook) {
        return JSON.parse(storedBook)
    }
    return []
}

const savedBook = (id) => {
    const storedBooks = getBookId()
    const existis = storedBooks.find(bookId => bookId === id)
    if (!existis) {
        storedBooks.push(id);
        localStorage.setItem('bookId', JSON.stringify(storedBooks))
    }
}

const getWishId = () => {
    const storedWishId = localStorage.getItem('wishId')
    if (storedWishId) {
        return JSON.parse(storedWishId)
    }
    return []
}
const saveWishId = (id) => {
    const storedWishIds = getWishId()
    const existis = storedWishIds.find(wishId => wishId == id)
    if (!existis) {
        storedWishIds.push(id);
        localStorage.setItem('wishId', JSON.stringify(storedWishIds))
    }


}

const getFavItem = () => {
    const storedFavItem = localStorage.getItem('favItem')
    if (storedFavItem) {
        return JSON.parse(storedFavItem)
    }
    return []
}
const saveFavItem = (id) => {
    const storedFavItems = getFavItem()
    const existis = storedFavItems.find(favId => favId == id)
    if (!existis) {
        storedFavItems.push(id);
        localStorage.setItem('favItem', JSON.stringify(storedFavItems))
    }


}


export { getBookId, savedBook, saveWishId, getWishId, saveFavItem, getFavItem }