type ArrowProps = {
  className?: string;
  height?: number;
  width?: number;
};

function Arrow(props: ArrowProps) {
  const { className = '', height = 22, width = 22 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={className}
    >
      <path
        fill="#fff"
        d="M13.27 2.103 11.333.167.5 11l10.833 10.833 1.937-1.937L4.374 11l8.896-8.897Z"
      />
    </svg>
  );
}

export default Arrow;
