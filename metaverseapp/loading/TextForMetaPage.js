export const TextForMetaPage = ({ progress }) => {
  return (
    <div className="welcome_container">
      <div className="welcome_message">
        <h1>Welcome to the Spirit Realm Metaverse</h1>
        <p>Welcome! We are loading the content for you!</p>
        <p>
          Shiloh and the Spirit Realm is a new way of story telling. NFT holders
          can participate in the creation of an on going saga about a young
          person who is having an adventure of personal discovery.
        </p>
        <h2>{Math.floor(progress)}%</h2>
      </div>
    </div>
  );
};
