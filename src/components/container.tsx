export const Container: React.FC = ({ children }): JSX.Element => {
  return <div className="container mx-auto">
    <main>
      {children}
    </main>
  </div>
}
