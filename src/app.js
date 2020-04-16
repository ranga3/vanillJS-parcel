import Header from './components/Header';
import User from './components/User';
import './scsss/app.scss';

const app = async() => {
    document.getElementById('header').innerHTML = Header();
    document.getElementById('user').innerHTML = await User()
}
console.log("It worekgld")

app();