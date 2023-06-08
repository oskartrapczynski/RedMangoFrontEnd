import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { menuItemModel } from '../../../../Interfaces';
import MenuItemCard from './MenuItemCard';

function MenuItemList() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  const getData = async () => {
    const { data } = await axios.get(
      'https://redmangoapi20230605165816.azurewebsites.net/api/MenuItem'
    );
    console.log(data);
    if (data) {
      setMenuItems(data.result);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container row">
      {menuItems.length > 0 &&
        menuItems.map((menuItem, index) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;
