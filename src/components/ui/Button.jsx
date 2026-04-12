function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  const variants = {
    primary:
      'bg-[#332d28] text-[#f7f2ea] hover:bg-[#3e3731] hover:shadow-[0_8px_24px_rgba(39,35,31,0.08)] focus-visible:outline-charcoal',
    secondary:
      'border border-line bg-transparent text-charcoal hover:border-charcoal/22 hover:bg-white/26 focus-visible:outline-charcoal',
  }

  const contentClassName = variant === 'primary' ? 'text-[#f7f2ea]' : 'text-current'
  const componentProps =
    Component === 'button' && props.type === undefined ? { ...props, type: 'button' } : props
  const style =
    variant === 'primary'
      ? {
          backgroundColor: '#332d28',
          color: '#f7f2ea',
          ...(componentProps.style ?? {}),
        }
      : componentProps.style

  return (
    <Component
      className={`inline-flex min-h-10.5 items-center justify-center rounded-full px-5 text-[0.72rem] font-semibold tracking-[0.16em] transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:min-h-11 sm:px-5.5 ${variants[variant]} ${className}`}
      style={style}
      {...componentProps}
    >
      <span className={contentClassName}>{children}</span>
    </Component>
  )
}

export default Button
