function Avatar({ url }) {
    return (
        <img
            className="rounded-full h-10 transition cursor-pointer hover:scale-110"
            loading="lazy"
            src={url}
            alt="profile pic" />
    )
};

export default Avatar