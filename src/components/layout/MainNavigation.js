import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation() {
    return (
    <header className={classes.header}>
        <div className={classes.heading}>React Meetups</div>
        
        <nav className={classes.headerink}>
          
                <Link to='/' className={classes.headerLi}>All Meetups</Link>
                <Link to='/new-meetup' className={classes.headerLi} >New Meetups</Link>
                <Link to='/favorites' className={classes.headerLi} >Favorites</Link>
          
        </nav>
        
    </header>
    
    );
}

export default MainNavigation;