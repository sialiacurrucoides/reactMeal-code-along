import styles from './Header.module.scss';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({onShowCart}) => {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={onShowCart}/>
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious food." />
            </div>
        </>
    );
};

export default Header;