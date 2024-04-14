import PropTypes from "prop-types";

const LinkButton = (props) => {
    const { href, children, className } = props;
    return (
        <a
            className={`link-button ${className}`}
            href={href}
            target="_blank"
            rel="noreferrer">
            {children}
        </a>
    );
};

LinkButton.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default LinkButton;