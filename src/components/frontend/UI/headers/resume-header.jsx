import Header from './header';

function ResumeHeader() {
  const description = `
    <span>resume</span>
  `;

  const image = "/images/resume.jpg";

  return (
    <div>
      <Header description={description} image={image}/>
    </div>
  );
}

export default ResumeHeader;
