const Logo = ({ className = "w-20 h-20 md:w-40 md:h-40" }) => {
  return (
    <div>
      <img
        src="/images/"
        alt="logo"
        className={className}
      />
    </div>
  );
};

export default Logo;
