import { useEffect, useState } from "react"
// import data from "/data.js";
import {AiFillStar} from "react-icons/Ai";
import './Menu.css'

const data = [
  {
      name: "Biryani Hub",
      img: "https://b.zmtcdn.com/data/dish_photos/5bd/f698653028cda342b6d156d2e06855bd.jpg",
      price: "Rs.150",
      rating: "4.3",
      sub_name: "Biryani, North Indian",
      offer: "50% offer for 3",
      veg: false,
  },
  {
      name: "Pizza Hut",
      img: "https://b.zmtcdn.com/data/pictures/chains/6/10506/e8cf1c58f2bb217f3d85ff50b7fe39a3_o2_featured_v2.jpg",
      price: "Rs.200",
      rating: "3.9",
      sub_name: "Pizza, Pasta, Italian",
      offer: "",
      veg: true,
  },
  {
      name: "Burger King",
      img: "https://b.zmtcdn.com/data/pictures/chains/4/10624/0b79e39ffc2e3770f3b66b26c0e6f4fd_o2_featured_v2.jpg",
      price: "Rs.450",
      rating: "4.2",
      sub_name: " Burger, Fast Food",
      offer: "Pepsi Free",
      veg: false,
  },
  {
      name: "Ashapuri Dinning",
      img: "https://b.zmtcdn.com/data/dish_photos/eea/cd5a916d84e6e7adcc044000f1558eea.jpg?output-format=webp",
      price: "Rs.250",
      rating: "4.5",
      sub_name: "Maharastrian",
      offer: "Rs.20 cashback",
      veg: true,
  },
  {
      name: "Alice in Golato Land ",
      img: "https://b.zmtcdn.com/data/dish_photos/5db/f9a8252226ab660fd441480e731675db.jpg",
      price: "Rs.150",
      rating: "4.0",
      sub_name: "Desert, Icecream",
      offer: "",
      veg: true,
  },
  {
      name: "Yashraj Restaurant",
      img: "https://b.zmtcdn.com/data/dish_photos/4ec/d7d85b078d7c6ca9eaaaf17bfd6444ec.jpg",
      price: "Rs.300",
      rating: "3.0",
      sub_name: "Paneer Dish, Naan",
      offer: "10% off",
      veg: true,
  },
  {
      name: "Radha Krishna",
      img: "https://b.zmtcdn.com/data/dish_photos/6aa/bfda93debc7206860fe68e75019a06aa.jpg",
      price: "Rs.350",
      rating: "3.5",
      sub_name: "North Indian, Chinese",
      offer: "",
      veg: true,
  },
  {
      name: "Pune Adda",
      img: "https://b.zmtcdn.com/data/dish_photos/453/44965165d5aa8761283c734121687453.png",
      price: "Rs.450",
      rating: "4.1",
      sub_name: "Fries, Chinese",
      offer: "",
      veg: false,
  },
  {
      name: "Kaveli Family",
      img: "https://b.zmtcdn.com/data/pictures/0/20101790/3b2f1a5e57dcb79fcbabd40e181ff0ba_o2_featured_v2.jpg",
      price: "Rs.350",
      rating: "3.1",
      sub_name: "SeaFood, Maharastrian",
      offer: "10% off",
      veg: false,
  },
  {
      name: "Milan Khanawali",
      img: "https://b.zmtcdn.com/data/pictures/2/20527222/504cfc1d09f7c099dbfdb5fa94ba2506_o2_featured_v2.jpg",
      price: "Rs.400",
      rating: "3.8",
      sub_name: "Malwani, SeaFood",
      offer: "",
      veg: false,
  },
  {
      name: "Chow Chow Chinese",
      img: "https://b.zmtcdn.com/data/dish_photos/cac/39476d4270e0658b87aa5f972217acac.jpg",
      price: "Rs.550",
      rating: "3.5",
      sub_name: "Fast Food, Chinese",
      offer: "20% off",
      veg: false,
  },
  {
      name: "Cafe Co2 Resto",
      img: "https://b.zmtcdn.com/data/pictures/0/18562250/8c9f5f9292c055f9c049633ce9697920_featured_v2.jpg",
      price: "Rs.3000",
      rating: "4.0",
      sub_name: "Mughlai, Platter",
      offer: "",
      veg: false,
  },
]


const Menu = () => {
  const [menu,setMenu] = useState(data);
  const [filterMenu,setFilterMenu]= useState(data);
  const [searchText,setSearchText] = useState('');
  const [isVeg,setisVeg] = useState(false);
  const [offer,setOffer] = useState('');
  const [nonVeg,setNonVeg] = useState(false);

  const Search = (searchText,menu)=>{
      const FilterMenu = menu.filter((data)=>
        ( data.name.toLowerCase().includes(searchText.toLowerCase())) || 
        ( data.sub_name.toLowerCase().includes(searchText.toLowerCase()))
      )
      setFilterMenu(FilterMenu);
      return FilterMenu;
  }

  useEffect(()=>{
      if(offer!=''){
        const offerMenu = menu.filter((data)=>
          data.offer!=""
      )
        setFilterMenu(offerMenu)
        setOffer('')
    }
  },[offer])

  useEffect(()=>{
       if(isVeg==true) {
        const vegMenu = menu.filter((data)=>
          data.veg == true,
        )
          setFilterMenu(vegMenu)
          setisVeg(false)
       }
  },[isVeg])

  useEffect(()=>{
    if(nonVeg==true) {
     const Nonveg_Menu = menu.filter((data)=>
       data.veg == false,
     )
       setFilterMenu(Nonveg_Menu)
       setNonVeg(false)
    }
},[nonVeg])

const allMenu =() => {
     setFilterMenu(menu);
}

 return (
    <>
    <div className='menu-header container' id='menu'>
      <div className='input-search'>
       <input type="text" placeholder="Search for food" onChange={(e)=>{
         setSearchText(e.target.value);
       }}></input>
        <button onClick={()=>{
          Search(searchText,menu);
        }}>Search</button>
      </div>

      <div className="menu-btn">
         <button onClick={()=>allMenu()}>All</button>
         <button onClick={()=>setisVeg(true)}>Veg</button>
         <button onClick={()=>setNonVeg(true)}>Non-veg</button>
         <button onClick={()=>setOffer("offer")}>Offer</button>
      </div>
    </div>

    <div className="data container">
       {filterMenu.map((menu,i)=>{
          return(
            <div className="card" key={i}>
              <img src={menu.img}/>
              {/* <p>{menu.offer}</p> */}
              <div className="card-title">
                <h3>{menu.name}</h3>
                    <div className="star">
                <p>{menu.rating}</p><AiFillStar/></div>
              </div>

              <div className="card-pricing">
                <p>{menu.sub_name}</p>
                <a>{menu.price}</a>
              </div>
              <p>{menu.offer}</p>
            </div>
          )
       })}
    </div>
    </>
  )
}

export default Menu
