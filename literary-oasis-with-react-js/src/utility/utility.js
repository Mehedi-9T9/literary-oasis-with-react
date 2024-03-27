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
export { getBookId, savedBook }