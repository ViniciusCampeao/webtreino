import Navbar from './Navbar';

interface MainContainerProps {
  children: React.ReactNode; // Defina o tipo da prop children
}

export default function MainContainer({ children }: MainContainerProps) {
return (
    <>
    <Navbar />
    <div>{children}</div>
    </>
);
}
