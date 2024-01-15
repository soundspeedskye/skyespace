import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../component/Categories';
import BoxOffice from '../api/BoxOffice';
import Topic from '../api/Topic';
import Pick from '../api/Pick';


const MainPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <div style={{width:'1500px', height:'5500px', backgroundColor:'beige', padding: '0 50px'}}>
      <Categories />
           {category === 'watching' && <BoxOffice category={category} />}
      {category === 'talking' && <Topic category={category} />}
      {category === 'eating' && <Pick category={category} />}

    </div>
  );
};

export default MainPage;
