
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { useLoginContext } from '../../context/loginContext/loginContext'
import Button from '../button/Button';

function Navbar() {

    const { cartQty } = useShoppingCartContext();
    const { isLoggedIn, handleLogout } = useLoginContext();

    return (
        <div className='h-16 shadow  flex items-center'>
            <Container>
                <div className='flex justify-between flex-row-reverse items-center '>
                    <ul className='flex  flex-row-reverse gap-4'>
                        <li><Link to="/">خانه</Link></li>
                        <li><Link to="/store">فروشگاه</Link></li>
                    </ul>
                    <div>
                        <Link to="/cart"><button className='cursor-pointer'>سبد خرید</button></Link>
                        {
                            cartQty === 0 ? null : (<span className='bg-red-500 text-white rounded-full px-2 py-1 ml-2'>
                                {cartQty}
                            </span>)
                        }
                        {
                            isLoggedIn ? (<Button variant='danger' onClick={handleLogout} className='ml-4'>خروج</Button>) :
                                (<Link to="/login" > <Button variant='primary' className='ml-4'>ورود</Button></Link>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar