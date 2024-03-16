import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h1>BookMarks:{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <BookMark bookmark={bookmark} key={bookmark.id}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array
}
export default BookMarks;