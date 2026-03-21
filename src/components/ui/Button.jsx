import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center font-body font-semibold rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

const variants = {
  primary:
    'bg-brand-sage text-white hover:bg-brand-sage-dark focus:ring-brand-sage shadow-warm hover:-translate-y-0.5',
  terra:
    'bg-brand-terra text-white hover:bg-brand-terra/90 focus:ring-brand-terra shadow-warm hover:-translate-y-0.5',
  outline:
    'border-2 border-brand-sage text-brand-sage-dark hover:bg-brand-sage hover:text-white focus:ring-brand-sage',
  ghost:
    'text-brand-sage-dark hover:bg-brand-sage/10 focus:ring-brand-sage',
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
