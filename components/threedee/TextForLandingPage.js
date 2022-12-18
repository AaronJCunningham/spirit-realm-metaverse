export const TextForLandingPage = ({ progress }) => {
  return (
    <div className="welcome_container">
      <div className="welcome_message">
        <h1>Shiloh and the Spirit Realm</h1>
        <h2>{Math.floor(progress)}%</h2>
        <p>Welcome! We are loading the content for you!</p>
        <p>
          In Shiloh and the Spirit Realm, we see how web3 technology can be used
          to create new and innovative forms of storytelling. The story follows
          our protagonist, Shiloh, who discovers a mysterious mask and, upon
          wearing it, is transported to the Spirit Realm, a parallel world
          inhabited by spirits.
        </p>
        <p>
          In this new realm, Shiloh must embark on a journey to find his true
          identity and ultimately return to the land of the living. The outcome
          of Shiloh's journey will be decided by our community; NFT holders can
          vote on what happens next as each new chapter unfolds.
        </p>
      </div>
    </div>
  );
};
