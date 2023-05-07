import bag from '../../assets/bag.svg';
import "./cartWidget.css"

const CartWidget = () => {
    return (
        <div className='cart-icon'>
            <img src={bag} width="24px" height="24px" alt="img"></img>
            <span className='item-count'>1</span>
        </div>
    )
}

export default CartWidget;