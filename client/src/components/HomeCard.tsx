type Props = {
  img: string;
  title: string;
  desc: string;
};

const HomeCard = ({ img, title, desc }: Props) => {
  return (
    <div className="card">
      <img className="card-img-top p-5" src={img} />
      <div className="card-body">
        <h4>{title}</h4>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default HomeCard;
