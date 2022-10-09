import React from "react";
import { Link } from "react-router-dom";

// component imports
import LazyLoadImg from "../../Common/LazyLoadImg";
// local imports
import { styles } from "../../../style";

type CategoryCardProps = {
  id: string;
  category: string;
  img: string;
};

function CategoryCard({ id, category, img }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[120px] h-[120px] translate-y-[50%]">
        <LazyLoadImg
          src={img}
          alt={id}
          classes="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div
        className={`w-[250px] bg-dimWhite text-center py-4 pt-20 ${styles.borderRadius} `}
      >
        <div className="mb-2 text-[0.9rem] font-[700]">{category}</div>
        <div className="">
          <Link to={`/${id}`} className="text-[0.8rem] font-[500]">
            shop{" "}
            <span className="text-primaryOrange text-[1rem] font-[600]">
              {">"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
