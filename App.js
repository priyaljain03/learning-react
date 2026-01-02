import ReactDOM from "react-dom/client";

const Header = ()=> {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/9417/9417083.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "lightyellow"
}

const RestaurentCard = (props) => {
    const { resName, cuisine} = props;

    return <div className="res-card" style={styleCard}>
        <img 
            className="res-logo"
            alt="res-img"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/c41fe099-61b1-45cd-af96-9eee8d87e119_1004721.jpg" />
        <div className="res-info">
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>34 minutes</h4>
        </div>
    </div>
}

const Body = ()=>{
    return <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurentCard 
                resName="Meghna Foods" 
                cuisine="Biryani, North indian, Asian"
            />
            <RestaurentCard 
                resName="KFC" 
                cuisine="Burger"
            />
        </div>
    </div>
}

const AppLayout = () => {
    return <div className="app" >
       <Header /> 
       <Body />
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);