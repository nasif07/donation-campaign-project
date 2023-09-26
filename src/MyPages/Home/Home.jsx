import { useLoaderData } from "react-router-dom";
import DonateItem from "../../components/DonateItem/DonateItem";
import Header from "../../components/Header/Header";

const Home = () => {
    const { donations } = useLoaderData();
    console.log(donations);
    return (
        <div>
            <Header></Header>
            <div className=" max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-24">
            {
                donations.map(donation => <DonateItem key={donation.id} donation={donation}></DonateItem>)
            }
            </div>
        </div>
    );
};

export default Home;