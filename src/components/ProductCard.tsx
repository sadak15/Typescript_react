interface ProductCardProps {
  name: string
  price: number
  description?: string
}

function ProductCard({ name, price, description }: ProductCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      {description && <p>{description}</p>}
    </div>
  )
}

export default ProductCard
