import './style.scss'

const TabelCulemn = ({ name, number, count, date }) => {
  return (
    <>
      <div className="tabel">
        
        <div className="tabel_content">

          <div className="tabel_content_name">{name}</div>
          <div className="tabel_content_number">{number}</div>
          <div className="tabel_content_number">{count}</div>
          <div className="tabel_content_age">{date}</div>
        </div>
      </div>
    </>
  );
};

export default TabelCulemn;``
