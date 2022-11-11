import * as C from "./style";
import Alien from "../../assets/images/logo.png"
import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <C.Container>
            <C.Logo>
                <C.Image src={Alien} />
            </C.Logo>
            <C.Menu>
                <ul>
                    <li>
                        <a href="">get style</a>
                    </li>
                    <li>
                        <a href="">get strong</a>
                    </li>
                    <li>
                        <a href="">get news</a>
                    </li>
                    <li>
                        <a href="">get skilled</a>
                    </li>
                </ul>
            </C.Menu>

            <C.Form>
                <input type="search" className="box" placeholder="search here..."/>
                <input type="submit" value="search"  className="button"/>
            </C.Form>
        </C.Container>
    )
}

export default Header