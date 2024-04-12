import PropTypes from "prop-types";

const ArrowDownIcon = (props) => {
    const { height, width, color, className } = props;

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={height}
            width={width}
            fill={color}>
            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"/>
        </svg>
    );
};

ArrowDownIcon.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

ArrowDownIcon.defaultProps = {
    height: "24px",
    width: "24px",
    color: "#FAFAFA",
};

export default ArrowDownIcon;