import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return(
        <section className={classes.summary}>
            <h2>Delicious Food,Delivered To you</h2>
            <p>
                choose you favorite meal from our broad selection of available meals 
                and enjoy a delicious luncch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients,just in time of course by experienced chefs!
            </p>
            <p>
                Enjoy the meals :D
            </p>
        </section>
    );

}
export default MealsSummary;