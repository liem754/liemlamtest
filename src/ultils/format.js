import { Icons } from "./icon";

const { AiFillStar, AiOutlineStar } = Icons;
export function format(n) {
  return n?.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}
export const formatStar = (number) => {
  const stars = [];
  number = Math.round(number);
  for (let i = 0; i < +number; i++) stars.push(<AiFillStar color="#1ec6b6" />);
  for (let i = 5; i > +number; i--)
    stars.push(<AiOutlineStar color="#1ec6b6" />);
  return stars;
};
