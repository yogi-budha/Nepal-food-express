import { NavLink } from "react-router-dom";
import add_icon from "../assets/add_icon.png";
import order_icon from "../assets/order_icon.png";
function Sidebar() {
  return (
    <div  className=" w-80 min-h-screen pt-11 border-r border-r-2 border-r-zinc-300 flex flex-col  gap-4 items-end text-zinc-700">
    <NavLink to='/add' className={(act)=>act.isActive?'bg-orange-200 flex items-center max-w-fit justify-end gap-2 border-t border-l border-b border-zinc-300  px-10 py-2 cursor-pointer ': 'flex items-center max-w-fit justify-end gap-2 border-t border-l border-b border-zinc-300  px-10 py-2 cursor-pointer'} >
        <img className="text-zinc-700" src={add_icon} alt="" />
        <p>Add items</p>
      </NavLink>

      <NavLink to="/list" className={(act)=>act.isActive?'bg-orange-200 flex items-center max-w-fit justify-end gap-2 border-t border-l border-b border-zinc-300  px-12 py-2 cursor-pointer ': 'flex items-center max-w-fit justify-end gap-2 border-t border-l border-b border-zinc-300  px-12 py-2 cursor-pointer'}>
        <img className="text-zinc-700" src={order_icon} alt="" />
        <p>List items</p>
      </NavLink>
      <NavLink to='/order' className={(act)=>act.isActive?'bg-orange-200 flex items-center max-w-fit justify-end gap-2 border-t border-l border-b border-zinc-300  px-14 py-2 cursor-pointer ': 'flex items-center max-w-fit justify-end gap-2 border-t border-l border-b border-zinc-300  px-14 py-2 cursor-pointer'}>
        <img className="text-zinc-700" src={order_icon} alt="" />
        <p>Orders</p>
      </NavLink>
    </div>
  );
}

export default Sidebar;
