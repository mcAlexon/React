import { Dish } from "./dish/component";

export const Menu = ({ menu }) => {
    return (
        <ul>
          {menu.map((menu) => (
            <li>
              <Dish menu={menu} />
            </li>
          ))}
        </ul>
      );
    };