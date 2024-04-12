import PropTypes from "prop-types";

const MenuLineIcon = (props) => {
    const { height, width, color, className } = props;

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={height}
            width={width}
            fill={color}>
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"/>
        </svg>
    );
};

MenuLineIcon.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

MenuLineIcon.defaultProps = {
    height: "24px",
    width: "24px",
    color: "#FAFAFA",
};

export default MenuLineIcon;