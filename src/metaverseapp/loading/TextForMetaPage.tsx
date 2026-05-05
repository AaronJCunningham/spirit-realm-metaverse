export const TextForMetaPage = ({ progress }) => {
  return (
    <div className="welcome_container">
      <div className="welcome_message">
        <h1>The Spirit Realm Metaverse!</h1>
        <h2>{Math.floor(progress)}%</h2>
        <p>Welcome! We are loading the content for you!</p>
        <p>
          Greetings and welcome to the Shiloh and the Spirit Realm metaverse! We
          are exploring the use of web3 technology as a novel approach to
          storytelling. While it is still in development, we view this as an
          opportunity for growth and invite the community to participate in
          deciding what features and content should be added next. We are
          excited to continue building and shaping this virtual world with your
          input and feedback.
        </p>
      </div>
    </div>
  );
};
