function BookCard(props) {
    return (
        <div className="bg-light border p-4 m-2">
            <h4>{props.book.title}</h4>
            <p>{props.book.author}</p>
            <p>{props.book.genre}</p>
        </div>
    )
}

export default BookCard