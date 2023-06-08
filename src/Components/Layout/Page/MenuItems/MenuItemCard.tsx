import React from 'react';
import { menuItemModel } from '../../../../Interfaces';

interface Props {
  menuItem: menuItemModel;
}

const MenuItemCard = ({ menuItem }: Props) => {
  return <div>{menuItem.name}</div>;
};

export default MenuItemCard;
