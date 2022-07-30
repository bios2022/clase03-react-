import './Item.css'

const Item = ({product}) => {

    return (
        <li className='tarjeta_producto'>
            <h3>{product.nombre}</h3>
            <img className='img_producto' src={product.img} alt={product.nombre} />
            <h2>{product.precio}</h2>
            <h3>{product.cant_cuotas}</h3>
            <h3>{product.cuotas}</h3>
            <button className='btn_carrito'>Agregar al Carro</button>
        </li>
    )
}

export default Item