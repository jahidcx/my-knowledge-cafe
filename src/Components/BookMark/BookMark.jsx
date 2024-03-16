import PropTypes from 'prop-types';

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

BookMark.propTypes= {
    bookmark: PropTypes.object
}
export default BookMark;