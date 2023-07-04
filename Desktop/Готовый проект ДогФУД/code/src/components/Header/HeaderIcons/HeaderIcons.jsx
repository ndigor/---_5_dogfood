import React from 'react';
import './headersIcons.css';
 import { ReactComponent as Dog } from './icons/DogIcon.svg';
 import { ReactComponent as Heart } from './icons/Favorites.svg';
 import { ReactComponent as Cart } from './icons/ic-cart.svg';
import { Link } from 'react-router-dom';

export const HeaderIcons = (props) => {
    return (
        <div className="header__icons">
            <div>
                <Link to={'/favorite'}>
                    <Heart />
                </Link>
            </div>
            <div>
                <Link>
                    <Cart />
                </Link>
            </div>
            <div>
                <Link>
                    <Dog />
                </Link>
            </div>
        </div>
    );
};


//     return (
//         <nav className="header__menu">
//             {user ? (
//                 <>
//                     <a href="/">
//                         <BalloonHeart title="Избранное" />
//                     </a>
//                     <a href="/">
//                         <BagHeart title="Корзина" />
//                     </a>
//                     <a href="/">
//                         <PersonCircle title="Личный кабинет" />
//                     </a>
//                 </>
//             ) : (
//                 ''
//             )}
//             <span>
//                 {!user ? <BuildingUp title="Вход" onClick={login} /> : ''}
//                 {user ? <BuildingDown title="Выход" onClick={logout} /> : ''}
//             </span>
//         </nav>
//     );
// };
