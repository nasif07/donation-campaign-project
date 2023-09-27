import { useEffect, useState } from "react";
import DonateItem from "../../components/DonateItem/DonateItem";
import SelectDonate from "../../components/SelectDonate/SelectDonate";

const Donation = () => {

    const [donations, setDonation] = useState([]);

    const [isShow, setIsShow] = useState(false)

    const [noFound, setNoFound] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('items'));
        if (donationItems) {
            setDonation(donationItems)
        }
        else {
            setNoFound('You do not donation any item!!!')
        }

    }, []);
    console.log(isShow);




    return (
        <div>
            {noFound ? <p className="text-center h-[80vh] flex justify-center items-center font-semibold text-4xl">{noFound}</p> : <div>
                <div className=" max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 py-24">
                    {
                        isShow
                            ? donations.map((donation, idx) => <SelectDonate key={idx} donation={donation}></SelectDonate>) : donations.slice(0, 4).map((donation, idx) => <SelectDonate key={idx} donation={donation}></SelectDonate>)
                    }
                </div>
                <div className=" flex items-center justify-center pb-10">
                    {
                        donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className="btn btn-primary">{isShow ? "See Less" : 'See All'}</button>
                    }
                </div>

            </div>}

        </div>
    );
};

export default Donation;