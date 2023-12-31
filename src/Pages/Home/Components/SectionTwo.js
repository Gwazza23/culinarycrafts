import "./SectionTwo.css";
import { Link } from 'react-router-dom'

function SectionTwo() {
  return (
    <div className="section-divider-container" id="section-two-container" >
      <div className="section-divider-info">
        <div className="section-divider-text">
          <h2>Explore Our Delicious Recipes</h2>
          <p>
            Discover a world of culinary delights in our recipes section. From
            appetizers to desserts, we've got you covered with a wide range of
            mouthwatering dishes. Whether you're a seasoned chef or a kitchen
            novice, there's something here for everyone.
          </p>
          <Link>Recipes</Link>
        </div>
      </div>
      <div className="section-divider-img">
        <img loading="lazy" src="/media/section-two-img.webp" alt=" " />
      </div>
    </div>
  );
}

export default SectionTwo;
