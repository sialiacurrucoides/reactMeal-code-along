import { useRef, useState } from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../UI/Input';

const MealItemForm = ({id, onAddToCart}) => {
    const amountInputRef = useRef();
    const [isValid, setIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setIsValid(false);
            return ;
        }

        onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                id: 'amount_' + id,
                type:'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
            {!isValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;