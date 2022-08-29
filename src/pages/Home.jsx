import Header from "../components/Head/Header";
import CryptoTable from "../components/Crypto table/CryptoTable";
import Footer from "../components/Footer/Footer";

function HomePage(){
    return (
        <>
            <Header />
            <CryptoTable />
            <div className="marginForFooter"></div>
            <Footer />
        </>
    );
}

export default HomePage;
