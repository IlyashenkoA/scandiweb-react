interface HeaderProps {
  title: string;
  render: () => React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({title, render}) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        {render()}
      </nav>
    </header>
  );
};
