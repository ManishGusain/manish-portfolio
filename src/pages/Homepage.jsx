import Card from "../components/Card";
import stock_img from '../assets/stock_img.png';
import fanta_img from '../assets/fanta_img.png';

const data = [
    { title: 'Stock Avg Cal', desc: "Tech Used: React-Native", link: "https://play.google.com/store/apps/details?id=com.sac.android&hl=en&gl=US", img: stock_img },
    { title: 'Fanta (Desktop Version)', desc: "Tech Used: React-JS", link: "https://fanta-page.vercel.app/", img: fanta_img },
]

function Homepage() {
    return (
        <div className="container">
            <div className="title-container">
                <p className='title'>My Work</p>
            </div>

            <div className="card-container">
                {
                    data.map((val, ind) => {
                        return <Card cData={val} />
                    })
                }
            </div>
        </div>
    );
}

export default Homepage;