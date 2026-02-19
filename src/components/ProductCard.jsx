import { FaHeart } from "react-icons/fa6";

function ProductCard({ product, onViewDetails, onAddToWishList, onRemove, wishList }) {
    const existing = wishList.some((item) => item.id === product.id)

    const toggleHeart = (e, product) => {
      e.stopPropagation();
      if (!existing) {
        onAddToWishList(product)
      } else {
        onRemove(product)
      }
    }
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      background: 'white',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}

onClick={() => onViewDetails(product.id)}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'contain',
          marginBottom: '10px'
        }}
      />
      
      <h3 style={{
        fontSize: '14px',
        margin: '0 0 10px 0',
        height: '40px',
        overflow: 'hidden'
      }}>
        {product.title}
      </h3>
      
      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: '#ff9900' }}>
          {'★'.repeat(Math.floor(product.rating.rate))}
        </span>
        <span style={{ marginLeft: '5px', fontSize: '12px', color: '#666' }}>
          ({product.rating.count})
        </span>
      </div>
      
      <div  style={{display: 'flex', flexDirection: 'row', gap: '100px'}}>
        <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#0066cc',
        margin: 0
      }}>
        ${product.price}
      </p>

      <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#0066cc',
        margin: 0}}>
          <FaHeart onClick={(e) => toggleHeart(e, product)} style={{color: existing ? 'red' : '#d3d3d3'}}/>
      </p>
      </div>
    </div>
  );
}

export default ProductCard;
