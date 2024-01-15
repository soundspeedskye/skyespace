import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import BoxOffice from "../api/BoxOffice";
import Topic from "../api/Topic";
import Pick from "../api/Pick";

const categories = [
    {
        name: 'movie',
        text: 'BoxOffice',

    },
    {
        name: 'news',
        text: 'Topic',
    },
    {
        name: 'map',
        text: 'Pick',
        
    },
];


const CategoriesBlock = styled.div`
   display: flex;
   justify-content : space-between;
   align-items : center;

  width: 100%;
  height: 150px;
  margin: 30px auto;
  
  @media screen and (max-width: 768px) {
    
    overflow-x: auto;
background-color : beige;    

    
  }
`;

const Category = styled(NavLink)`

display:flex ;
justify-content : center;
align-items: center;
font-family : NeoDunggeunmo;
  font-size: 3rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: black;
  margin :50px ;
  width : 270px;


  &:hover {
    color: #6a7580;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #ECBD43;
    color: #ECBD43;
    &:hover {
      color: #ECBD43;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;


const Categories = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(location.pathname === '/' ? 'movie' : location.pathname.slice(1));

  useEffect(() => {
    setSelectedCategory(location.pathname === '/' ? 'movie' : location.pathname.slice(1));
  }, [location]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <CategoriesBlock>
        {categories.map((c) => (
          <Category
            key={c.name}
            className={selectedCategory === c.name ? 'active' : undefined}
            to={c.name === 'all' ? '/' : `/${c.name}`}
            onClick={() => handleCategoryClick(c.name)}
          >
            {c.text}
          </Category>
        ))}
      </CategoriesBlock>

      {selectedCategory === 'movie' && <BoxOffice />}
      {selectedCategory === 'news' && <Topic />}
      {selectedCategory === 'map' && <Pick />}
    </div>
  );
};

export default Categories;
