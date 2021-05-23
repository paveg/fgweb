export const Container: React.FC = ({ children }): JSX.Element => {
  return (
    <div className="container mx-auto px-5 py-8 flex items-center sm:flex-row flex-col">
      <main>{children}</main>
    </div>
  )
}
