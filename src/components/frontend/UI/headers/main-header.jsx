import Header from './header';

function ResumeHeader() {
  const description = `
    <span>software</span>
    <hr />
    <span>engineer</span>
  `;

  const image = "/images/fashion.jpg";

  return (
    <div>
      <Header description={description} image={image}/>
    </div>
  );
}

export default ResumeHeader;
