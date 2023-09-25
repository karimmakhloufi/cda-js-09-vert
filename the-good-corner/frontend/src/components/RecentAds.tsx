const RecentAds = () => {
  return (
    <>
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        <div className="ad-card-container">
          <a className="ad-card-link" href="/ads/table">
            <img className="ad-card-image" src="/images/table.webp" />
            <div className="ad-card-text">
              <div className="ad-card-title">Table</div>
              <div className="ad-card-price">120 €</div>
            </div>
          </a>
        </div>
        <div className="ad-card-container">
          <a className="ad-card-link" href="/ads/dame-jeanne">
            <img className="ad-card-image" src="/images/dame-jeanne.webp" />
            <div className="ad-card-text">
              <div className="ad-card-title">Dame-jeanne</div>
              <div className="ad-card-price">75 €</div>
            </div>
          </a>
        </div>
        <div className="ad-card-container">
          <a className="ad-card-link" href="/ads/vide-poche">
            <img className="ad-card-image" src="/images/vide-poche.webp" />
            <div className="ad-card-text">
              <div className="ad-card-title">Vide-poche</div>
              <div className="ad-card-price">4 €</div>
            </div>
          </a>
        </div>
        <div className="ad-card-container">
          <a className="ad-card-link" href="/ads/vaisselier">
            <img className="ad-card-image" src="/images/vaisselier.webp" />
            <div className="ad-card-text">
              <div className="ad-card-title">Vaisselier</div>
              <div className="ad-card-price">900 €</div>
            </div>
          </a>
        </div>
        <div className="ad-card-container">
          <a className="ad-card-link" href="/ads/bougie">
            <img className="ad-card-image" src="/images/bougie.webp" />
            <div className="ad-card-text">
              <div className="ad-card-title">Bougie</div>
              <div className="ad-card-price">8 €</div>
            </div>
          </a>
        </div>
        <div className="ad-card-container">
          <a className="ad-card-link" href="/ads/porte-magazine">
            <img className="ad-card-image" src="/images/porte-magazine.webp" />
            <div className="ad-card-text">
              <div className="ad-card-title">Porte-magazine</div>
              <div className="ad-card-price">45 €</div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default RecentAds;
