import PropTypes from "prop-types";

const CloseLineIcon = (props) => {
    const { height, width, color, className } = props;

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={height}
            width={width}
            fill={color}>
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"/>
        </svg>
    );
};

CloseLineIcon.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

CloseLineIcon.defaultProps = {
    height: "24px",
    width: "24px",
    color: "#FAFAFA",
};

export default CloseLineIcon;