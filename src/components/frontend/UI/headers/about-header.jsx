import Header from './header';

function ResumeHeader() {
  const description = `
    <span>about me</span>
  `;

  const image = "/images/about-me.jpg";

  return (
    <div>
      <Header description={description} image={image}/>
    </div>
  );
}

export default ResumeHeader;
