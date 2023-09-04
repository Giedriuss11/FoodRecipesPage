import "../pageStyles/AllRecepies.css"
import backImg from "../Recepie__images/image3.png"
import LeftSide from "../componets/LeftSideRec"
import RightSide from "../componets/RightSideRec"
import { useSelector} from "react-redux";

const AllRecepies = () => {
  const onOfBarClass = useSelector((store) => store.main.onOfBar);
  console.log(onOfBarClass);
  
  return (
    <div style={{ backgroundImage: `url(${backImg})` }} className={`container-recp d-flex ${onOfBarClass} `}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default AllRecepies;