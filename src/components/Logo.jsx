const Logo = ({ className = "w-20 h-20 md:w-40 md:h-40" }) => {
  return (
    <div>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYY4bGYLIh-zmp6NIJp9CVOTknN9kVlGeoxA&usqp=CAU"
        }
        alt="logo"
        className={className}
      />
    </div>
  );
};

export default Logo;
