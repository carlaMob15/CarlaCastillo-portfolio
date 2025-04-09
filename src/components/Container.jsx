import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('mx-auto sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

// Grid container with responsive columns
const GridContainer = forwardRef(function GridContainer(
  { className, children, cols = 1, smCols = 2, mdCols = 3, lgCols = 4, gap = 4, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        `grid grid-cols-${cols} sm:grid-cols-${smCols} md:grid-cols-${mdCols} lg:grid-cols-${lgCols}`,
        `gap-${gap} sm:gap-${gap} md:gap-${gap} lg:gap-${gap}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

// Flex container with responsive properties
const FlexContainer = forwardRef(function FlexContainer(
  { className, children, direction = 'row', justify = 'start', align = 'start', wrap = 'wrap', gap = 4, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        `flex flex-${direction} flex-${wrap}`,
        `justify-${justify} items-${align}`,
        `gap-${gap} sm:gap-${gap} md:gap-${gap} lg:gap-${gap}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

export const Container = forwardRef(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
Container.Grid = GridContainer
Container.Flex = FlexContainer
