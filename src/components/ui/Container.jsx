function Container({ as: Component = 'div', className = '', children }) {
  return (
    <Component className={`mx-auto w-full max-w-[86rem] px-6 sm:px-8 lg:px-12 xl:px-16 ${className}`}>
      {children}
    </Component>
  )
}

export default Container
