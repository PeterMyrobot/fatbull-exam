type NavIconProps = {
  className?: string;
};

export function NavIcon(props: NavIconProps) {
  const { className = '' } = props;
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.341 0a1.5 1.5 0 000 3h10.417v9.423a1.5 1.5 0 003 0V2.5a2.5 2.5 0 00-2.5-2.5H6.34zM2 4.915h11.122a2 2 0 012 2v11.122a2 2 0 01-2 2H2a2 2 0 01-2-2V6.915a2 2 0 012-2z"
      />
    </svg>
  );
}

export default NavIcon;
