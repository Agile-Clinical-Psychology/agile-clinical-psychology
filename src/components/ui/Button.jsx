import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center font-body font-semibold rounded-2xl transition-all duration-200 outline-none focus:outline-none focus-visible:outline-none'

const variants = {
  primary:
    'bg-brand-sage text-white hover:bg-brand-sage-dark/85 shadow-warm',
  terra:
    'bg-brand-terra text-white hover:bg-brand-terra-dark/90 shadow-warm',
  outline:
    'border-2 border-brand-sage text-brand-sage-dark hover:bg-brand-sage hover:text-white',
  'outline-white':
    'border-2 border-white text-white hover:bg-white/90 hover:text-brand-sage-dark',
  ghost:
    'text-brand-sage-dark hover:bg-brand-sage/90',
}

const sizes = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-base',
  lg:  'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={cls} {...props}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={cls} {...props}>{children}</a>
  }
  return <button className={cls} {...props}>{children}</button>
}
