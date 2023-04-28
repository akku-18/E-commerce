import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./Category.scss";
import Products from "../Products/Products";
import { RxArrowLeft } from "react-icons/rx";


const Category = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          <RxArrowLeft className="left-icon" onClick={() => navigate('/')}/>
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          }
        </div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
};

export default Category;
